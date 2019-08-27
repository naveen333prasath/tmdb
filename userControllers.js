const User = require('../models/user');
const passport = require('passport');
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwtHelper = require('../config/jwtHelper');
const _ = require('lodash');



router.post('/register',(req,res)=>{

    let user = new User({
    name :req.body.name,
    password : req.body.password,
    email : req.body.email,
    role : req.body.role
    });
    user.save((err,doc)=>{
        if(!err)
        res.send(doc);
        else
        console.log(err);
    });
});

//module.exports=router;

router.post('/authenticate',(req,res)=>{

    //call for passport authetication
    passport.authenticate('local',(err,user,info)=>{
        //error from passport middleware
        if(err) return res.status(400).json(err);
        //registered user
        else if(user) return res.status(200).json({"token":user.generateJwt()});
        //unknown user
        else return res.status(404).json(info);
    })(req,res);
});

router.get('/userProfile',jwtHelper.verifyJwtToken,(req,res,next)=>{
User.findOne({_id:req._id},(err,user)=>{
    if(!user)
       return res.status(404).json({status:false,message:'User record not found'});
    else
       return res.status(200).json({status:true,user: _.pick(user,['name','email']) });
});

});


module.exports=router;