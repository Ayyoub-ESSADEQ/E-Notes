

const sessions = require('../Models/Seance');
const junction = require('../Models/CoursSeance');
const {Op} = require('sequelize');
//Path : /Cours/:idCours

function retrieveLessonSessions(req,res,next){
    const idCours = req.params.idCours;
    const mySessions = junction.findAll({
        attributes : ["idSeance"],
        where:{
            idCours:idCours,
            idProf : req.params.idProf || req.user.idProf
        },
        raw:true
    })

    mySessions.then(listIdSessions=>{
        let sessionIds = [];
        listIdSessions.forEach(v=>{sessionIds.push(v.idSeance)})
        sessions.findAll({
            where:{
                idSeance:{
                    [Op.in] : sessionIds
                }
            }
        })
        .then(result=>{res.send(result);next()})
    })
    mySessions.catch(error=>{res.send(error);next()});
    
}

module.exports = retrieveLessonSessions;