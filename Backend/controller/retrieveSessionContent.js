const sessions = require('../Models/Seance');
const lessonSession = require('../Models/CoursSeance');

function retrieveSessionsContent(req,res,next){
    const idSeance = req.params.idSeance;
    const idProf = req.params.idProf || req.user.idProf;
    const idCours = req.params.idCours;

    lessonSession.findOne({
        where:{
            idCours:idCours,
            idProf:idProf,
            idSeance:idSeance
        }
    }).then(content=>{
        if(content!==null) sessions.findByPk(idSeance).then(contents=>res.send(contents));
        else res.send('cette seance ne vous correspond pas')
    })
}

module.exports = retrieveSessionsContent;