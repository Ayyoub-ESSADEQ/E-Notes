const Seance = require('../Models/Seance');
const CoursSeance = require('../Models/CoursSeance');

//tu doit envoyer le idCours et idSeance avec la form;

module.exports = async function(req,res,next){
    try{
        await Seance.destroy({
            where: {
              idSeance: req.query.seance
            }
        });
        await CoursSeance.destroy({
            where: {
              idSeance: req.query.seance,
              idCours: req.query.idCours,
              idProf: req.user.idProf
            }
        });
        res.send("l'opération est éffectuée");

    }
    catch{
        res.send('Un erreur est produit');
    }
    next()
}