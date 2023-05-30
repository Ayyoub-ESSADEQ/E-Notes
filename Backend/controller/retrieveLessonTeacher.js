
const teachers = require('../Models/Prof');
const lessons = require('../Models/Cours');
const junction = require('../Models/ProfCours');
const {Op} = require('sequelize');
const Prof = require('../Models/Prof');

function retrieveLT(req,res,next){
    const idProf = req.user.idProf;

    function retrieveLessonsTeacher(){
        const Data = new Promise(retrieveData);
    
        let listOfProfs;
        let listProfLessons;
    
        function retrieveData(resolve,reject){
            const isCoordinator = teachers.findByPk(idProf,{
                    attributes : ["coordinateurFiliere"],
                    raw:true
                }
            );
    
            isCoordinator.then(validateCoord);
            isCoordinator.catch(()=>{reject("Un probléme est produit")});
            
            function validateCoord(verdict){
                if (verdict.coordinateurFiliere==="aucun") return "tu n'es pas un coordinateur";
                else{
                    const field = verdict.coordinateurFiliere;
                    Prof.findAll({
                        attributes:['idProf','name','lastName'],
                        where:{
                            filiere: field,
                            idProf:{
                                [Op.ne] : idProf
                            }
                        },
                        raw:true
                    })
                    .then(bringProfsLessons)
                    .catch(()=>{reject( "Un probléme est produit ")})
                }
            }
            
            function bringProfsLessons(profList){
                listOfProfs = profList; 
                let listIdProf = [];
                profList.forEach((v)=>listIdProf.push(v.idProf));
                junction.findAll({
                    attributes : ["idProf","idCours"],
                    where:{
                        idProf:{
                            [Op.in]:listIdProf
                        }
                    },
                    raw:true
                })
                .then(bringLessons)
                .catch(()=>{reject( "Un probléme est produit ")});
            }
            
            function bringLessons(listProfCours){
                listProfLessons = listProfCours;
                let listIdLessons = [];
                listProfCours.forEach((v)=>listIdLessons.push(v.idCours));
                lessons.findAll({
                    attributes : ["idCours","name"],
                    where:{
                        idCours:{
                            [Op.in]:listIdLessons
                        }
                    },
                    raw:true
                })
                .then((r)=>{
                    resolve({
                        listOfLessons:r,
                        listOfProfs:listOfProfs,
                        listProfLessons:listProfLessons
                    })
                })
                .catch((e)=>{reject( "Un probléme est produit ")});
            }
        }
    
        return Data;
    }
    
    retrieveLessonsTeacher().then(concatenateData);
    
    function concatenateData(dataHolder){
        const listOfLessons = dataHolder.listOfLessons;
        const listOfProfs = dataHolder.listOfProfs;
        const listProfLessons = dataHolder.listProfLessons;
        let finalData = [];
        listProfLessons.forEach(joint=>{
            const idCours = joint.idCours;
            const idProf = joint.idProf;
            let item = {};
            listOfProfs.forEach(prof=>{
                if(prof.idProf===idProf) item.prof = prof;
            })
            listOfLessons.forEach(lesson=>{
                if(lesson.idCours===idCours) item.lesson = lesson;
            })
            finalData.push(item);
        })
        res.send(finalData);  
        next();

    }
}

module.exports = retrieveLT;