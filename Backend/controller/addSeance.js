
const sessions = require('../Models/Seance')
const lessonsSessions = require('../Models/CoursSeance');

//path : /Cours/:idCours/add

function addSeance(req,res,next){
    const idProf = req.user.idProf;
    const idCours = req.params.idCours;
    
    const newSession = sessions.create(req.body);
    newSession.then((seance=>{
        const idSeance = seance.idSeance;
        lessonsSessions.create({
            idSeance : idSeance,
            idProf :idProf,
            idCours : idCours
        })
        .then(()=>res.send("l'opération est réussit"))
        .catch(()=>res.send("Un probléme est produit"));
    }))
    .catch(()=>res.send("Un probléme est produit"))
    next();
}

module.exports = addSeance;