const lessons = require('../Models/Cours');
const junction = require('../Models/ProfCours');
const join = require('../Utilities/join');

/**
 * This controller returns a list of object that has this structure :
 * {name: "The lesson's nam",idCours:"the id of Lesson"}
 * 
 * @param {Request} req - the request of the client
 * @param {Response} res - the response we will send
 * @param {Function} next - a middleware that allow to go to the next middleware
 */

function retrieveMyLessons(req,res,next){
    const data = join({
        target : lessons,
        on : junction,
        attributes : ["name","idCours"],
        where:{
            idProf : req.user.idProf
        } 
    })
    data.then(results=>res.send(results));
    data.catch(error=>res.send(error));
    next();
}

module.exports = retrieveMyLessons;