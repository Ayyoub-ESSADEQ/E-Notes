
const sessions = require('./Models/Seance')
const lessonsSessions = require('./Models/CoursSeance');
//path : /Cours/:idCours/Seances/:idSeance

const belongs = lessonsSessions.findOne({
    attributes : ["idCoursSeance"],
    where:{
        idProf : 1,
        idSeance : 1,
        idCours : 4
    },
    raw : true
})

belongs.then(removeSeance)
belongs.catch()

function removeSeance(verdict){
    if (verdict) {
        lessonsSessions.destroy({
            where:{
                idCoursSeance : belongs.idCoursSeance
            }
        }).then(()=>{
            sessions.destroy({
                where:{
                    idSeance:1
                    }
                }
            )
        })

    }
    else{
        console.log('You are not allowed to delete this Sessions')
    }
}


