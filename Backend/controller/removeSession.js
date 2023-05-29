
const sessions = require('../Models/Seance')
const lessonsSessions = require('../Models/CoursSeance');
//path : /Cours/:idCours/Seances/:idSeance

function removeSession(req,res,next){
    const idProf = req.user.idProf;
    const idCours = req.params.idCours;
    const idSeance = req.params.idSeance;

    const belongs = lessonsSessions.findOne({
        attributes : ["idCoursSeance"],
        where:{
            idProf : idProf,
            idSeance : idSeance,
            idCours : idCours
        },
        raw : true
    })
    
    belongs.then(removeSeance)
    belongs.catch(()=>{res.send("Un erreur est produit")});
    
    function removeSeance(verdict){
        if (verdict) {
            sessions.destroy({
                where:{
                    idSeance:idSeance
                    }
                }
            )
            .then(()=>{res.send("l'opération est réussit")})
            .catch(()=>{res.send('Un erreur est produit')});
        }
        else{
            res.send('Cette seance ne vous corresponds pas');
        }
    }
}

module.exports = removeSession;