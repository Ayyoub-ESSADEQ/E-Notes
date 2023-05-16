const passport = require('passport');
const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/login', function(req,res){
    console.log('Hello world')
    res.sendFile(path.resolve(__dirname+'/../Views/login.html'));
})

router.post('/logging', passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
    failureFlash: true
    }))

router.get('/profile',ensureAuthenticated,function(req,res){
    res.end('You did a great Job');
})

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next(); 
    } else {
        req.flash("info", "You must be logged in to see this page.");
        res.redirect("/login");
    }
}

module.exports = router;