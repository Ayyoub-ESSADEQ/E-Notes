const localStrategy = require('passport-local').Strategy;
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const passport = require("passport"); 
const User = require("../Models/Compte"); 
const express= require('express');
const verify = require('./login')
const app = express();
const bodyParser = require("body-parser");

//..
app.use(flash());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
	secret : "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX" /*any random sentenct to encrypt the user cookies*/,
	resave : true,
	saveUninitialized : false
}));


app.use(passport.initialize());
app.use(passport.session());

passport.use("local",new localStrategy(verify))

module.exports = function() { 
	passport.serializeUser(function(user, done) { 
		done(null, user.username); 
		}); 
	passport.deserializeUser(async function(id, done) { 
		await User.findByPk(id).then(function(user,error){
			done(error, user); 
		})
	}); 
};