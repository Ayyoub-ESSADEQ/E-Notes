const passport = require('passport');
const express = require('express');
const session = require('express-session')
const path = require('path');
const router = express.Router();

//Controllers
const retrieveMyLessons = require('../controller/retrieveMyLessons');
const retrieveLessonSessions = require('../controller/retrieveLessonSessions');
const retrieveSessionContent = require('../controller/retrieveSessionContent');
const addSession = require('../controller/addSession');
const removeSession = require('../controller/removeSession');
const updateSession = require('../controller/updateSeance');
const retrieveLessonsTeacher = require('../controller/retrieveLessonTeacher');
const isCoordinator = require('../controller/isCoordinator');

router.use(session({
	secret : "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX" /*any random sentenct to encrypt the user cookies*/,
	resave : true,
	saveUninitialized : false
}))

router.get('/login', function(req,res){
    
    res.sendFile(path.resolve(__dirname+'/../Views/login.html'));
})

router.post('/logging',passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true
    }))

router.use(passport.initialize());
router.use(passport.session());


//Retrieving Informations for a normal teacher
router.get('/isCoordinator',ensureAuthenticated,isCoordinator) // to verify if the prof is a coordinator
router.get('/Cours',retrieveMyLessons);
router.get('/Cours/:idCours',ensureAuthenticated,retrieveLessonSessions);
router.get('/Cours/:idCours/Seance/:idSeance',ensureAuthenticated,retrieveSessionContent);
router.post('/Cours/:idCours/Seance/:idSeance/update',ensureAuthenticated,updateSession);
router.post('/Cours/:idCours/add',ensureAuthenticated,addSession);
router.delete('/Cours/:idCours/delete/:idSeance',ensureAuthenticated,removeSession);

//Retrieving Informations for a branch supervisor
router.get('/lessonsOfTeachers',ensureAuthenticated,retrieveLessonsTeacher);
router.get('/lessonsOfTeachers/Prof/:idProf',retrieveMyLessons);
router.get('/lessonsOfTeachers/Prof/:idProf/Cours/:idCours',ensureAuthenticated,retrieveLessonSessions);
router.get('/lessonsOfTeachers/Prof/:idProf/Cours/:idCours/Seance/:idSeance',ensureAuthenticated,retrieveSessionContent);


router.get('/profile',ensureAuthenticated,function(req,res){
    console.log(req.user);
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