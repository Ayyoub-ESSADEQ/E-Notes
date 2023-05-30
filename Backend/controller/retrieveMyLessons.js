const lessons = require('../Models/Cours');
const Prof = require('../Models/Prof');
const junction = require('../Models/ProfCours');
const {Op} = require('sequelize');
/**
 * This controller returns a list of object that has this structure :
 * {name: "The lesson's nam",idCours:"the id of Lesson"}
 * 
 * @param {Request} req - the request of the client
 * @param {Response} res - the response we will send
 * @param {Function} next - a middleware that allow to go to the next middleware
 */

function retrieveMyLessons(req,res,next){
    const idProf = req.params.idProf || req.user.idProf;
    const data = junction.findAll({
        attributes:["idCours"],
        where:{
            idProf : req.params.idProf || req.user.idProf
        },
        raw:true
    })
    data.then(listIdCours=>{
        let listId = [];
        listIdCours.forEach(prof=>{listId.push(prof.idCours)})
        lessons.findAll({            
            where:{
                idCours:{
                    [Op.in]:listId
                }
            },
            raw : true
        }
        ).then(results=>{
            if(req.params.idProf){
                Prof.findByPk(idProf,{
                    attributes : ['coordinateurFiliere'],
                    raw : true
                }).then(isCoordinator =>{
                    if(isCoordinator) res.send(results);
                    else res.send('Vous êtes pas un coordinateur');
                    next()
                })
                
            }
            else res.send(results);next()})
    });
    data.catch(error=>{res.send(error);next()});
}

module.exports = retrieveMyLessons;