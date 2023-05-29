const seance = require('../Models/Seance');

//retrieve sessions corresponding to which lesson
function retrieveSessions(req,res,next){
    const idProf = req.user.idProf;
    seance.findAll({
        attributes:["idSeance"],
        where : {
            idProf : idProf
        },
        raw:true
    })
        .then((sessions)=>{res.send(sessions)})
        .catch(()=>{res.send(["something went wrong!!"])})
    next();
}

module.exports = retrieveSessions;