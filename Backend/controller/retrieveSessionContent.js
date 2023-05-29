const session = require('../Models/Seance')

function retrieveSessionsContent(req,res,next){
    const idSeance = req.query.idSeance;
    session.findOne({
        attributes:{exclude:['idSeance']},
        where:{
            idSeance:idSeance
        },
        raw:true
    })
        .then((contents)=>{
            if (contents.idProf === req.user.idProf) res.json(contents);
            else res.send("cette session ne vous correspond pas");
            })
        .catch(()=>{res.send("un erreur est produit")});
    next();
    
}

module.exports = retrieveSessionsContent;