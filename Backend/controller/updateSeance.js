const seance = require('../Models/Seance');

module.exports = async function(req,res,next){
    const idSeance = req.query.seance;
    let updateSeance = await seance.findOne({
        where:{
            idSeance: idSeance
        }
    })

    if(updateSeance){
        await updateSeance.set(req.query);
        await updateSeance.save();
        res.send("les données sont à jour");
    }
}