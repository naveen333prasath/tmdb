const mongoose = require('mongoose');
const User = require('../models/user');
//var User = mongoose.model('User');
const passport = require('passport');

const localStrategy = require('passport-local').Strategy;



passport.use(
    new localStrategy({usernameField:'name'},
        (username,password,done)=>{
            User.findOne({name:username},
                (err,user)=>{
                    if(err)
                       return done(err);
                    else if(!user) //wrong username
                       return done(null,false,{message:'Username not found'});
                    else if(!user.verifyPassword(password)) //wrong password
                       return done(null,false,{message:'Wrong password'});
                    else //authentication succeeded
                       return done(null,user);   
                });
        })
);