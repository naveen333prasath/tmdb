const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var UserSchema = mongoose.Schema({
    name:{type:String,
    //required:'Name cannot be empty'
},
    password:{type:String,
        required:'Password cannot be empty',
      //  minlength:[6,'Password must be atleast 6 characters long']
    },
    email:{type:String},
        //required:'Email cannot be empty'},
    role:{type:String,
        //required:'Role cannot be empty'
    },
    saltSecret:{type:String}
});

UserSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        });
    });
});



UserSchema.methods.verifyPassword = function(password){
 return bcrypt.compareSync(password,this.password);
};

UserSchema.methods.generateJwt = function(){
    return jwt.sign({_id:this._id},
        "SECRET#123",{
            expiresIn:"2m"
        });
}



const User = module.exports= mongoose.model('User',UserSchema);
//mongoose.model('User',UserSchema);