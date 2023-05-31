const Prof = require('../Models/Prof')

function isCoordinator(req,res,next){
    const idProf = req.user.idProf;
    Prof.findByPk(idProf,{
        attributes : ['coordinateurFiliere'],
        raw : true
    })
    .then((result)=>{
        if(result.coordinateurFiliere !== "aucun") res.send('true');
        else res.send('false');
        next();
    })
    .catch(error=>{res.send("Un erreur est produit");next()})
}

module.exports = isCoordinator;