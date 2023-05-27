const passport = require('passport');
const express = require('express');
const session = require('express-session')
const path = require('path');
const router = express.Router();

router.use(session({
	secret : "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX" /*any random sentenct to encrypt the user cookies*/,
	resave : true,
	saveUninitialized : false
}))

router.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname+'/../Views/login.html'));
})

router.post('/logging', passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true
    }))

router.use(passport.initialize());
router.use(passport.session());

router.get('/profile',ensureAuthenticated,function(req,res){
    res.sendFile(path.resolve(__dirname+'/../Views/profile.html'));
})

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next(); 
    } else {
        res.redirect("/login");
    }
}

module.exports = router;