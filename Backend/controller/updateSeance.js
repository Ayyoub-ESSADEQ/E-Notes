
const sessions = require('../Models/Seance')
const lessonsSessions = require('../Models/CoursSeance');


function updateThisSeance(req,res,next){
    const idProf = req.user.idProf;
    const idSeance = req.params.idSeance;

    const belongs = lessonsSessions.findOne({
        attributes : ["idSeance"],
        where:{
            idProf : idProf,
            idSeance : idSeance
        },
        raw : true
    });
    
    belongs.then(updateSeance)
    belongs.catch(()=>{res.send('Un probléme est produit')});
    
    function updateSeance(verdict){
        if (verdict) {
            sessions.update(req.body,{
                where:{
                    idSeance:idSeance
                    }
                }
            ).then(()=>res.send('La seance est à jour'))
            .catch(()=>{res.send('Un erreur est produit')});
        }
        else{
            res.status(401);
            res.send('la seance ne vous corresponds pas');
        }
    }
    next();
}

module.exports = updateThisSeance;
