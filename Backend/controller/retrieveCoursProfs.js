const prof = require('../Models/Prof');
const ProfCours = require('../Models/ProfCours');
const Cours = require('../Models/Cours');

prof.belongsToMany(Cours,{through:ProfCours});
Cours.belongsToMany(prof,{through:ProfCours});

module.exports = async function(req,res,next){
    try{
        const user = await prof.findOne({
            where:{ 
                idProf : req.user.idProf
            }
        });
    
        const isCordinator = !(user.coordinateurFiliere==='aucun');
        if(!isCordinator) res.send('Vous êtes pas un coordinateur de filiére');
        else{
            const filiere = user.coordinateurFiliere;
            try{
                const profs = await prof.findAll({
                    where:{
                        filiere:filiere
                    }
                })
                res.send(profs);
            }
            catch{
                res.send('Un probléme est produit');
            }
    
        }
    }
    catch {
        res.send('Un probléme est produit');
    }
    next();
}