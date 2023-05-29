

const sessions = require('../Models/Seance');
const junction = require('../Models/CoursSeance');
const join = require('../Utilities/join');

//Path : /Cours/:idCours

function retrieveLessonSessions(req,res,next){
    const idCours = req.params.idCours;
    const mySessions = join({
        target: sessions,
        on:junction,
        where:{
            idCours : idCours,
            idProf : req.user.idProf
        }
    })
    mySessions.then((results=>{res.send(results)}))
    mySessions.catch(error=>{res.send(error)});
    next()
}