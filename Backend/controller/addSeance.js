const Seance = require('../Models/Seance');
const CoursSeance = require('../Models/CoursSeance');

//tu doit envoyer le idCours et idSeance avec la form;
//Essayer de respecter la structure du module Seance

module.exports = async function(req,res,next){
    const newSeance = req.query;
    const newCoursSeance = {idSeance:req.query.idSeance,idCours:req.query.idCours,idProf:req.user.idProf};
    try{
        await Seance.create(newSeance);
        await CoursSeance.create(newCoursSeance);
        req.send("l'opération est bien éffectué");
    }
    catch {
        req.send('Un erreur est produit');
    }
    next();
}