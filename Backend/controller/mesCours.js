const ProfCours = require("../Models/ProfCours");

module.exports = async function(req,res,next){
    const idProf = req.user.idProf;
    const mesCours = await ProfCours.findAll({
        where:{
            idProf:idProf
        }
    })
    res.send(mesCours);
}