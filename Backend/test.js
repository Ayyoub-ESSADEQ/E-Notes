const lessons = require('./Models/Cours');
const teachers = require('./Models/Prof');
const junction = require('./Models/ProfCours');

const join = require('./Utilities/join');

const data = join({
    source : teachers,
    target : lessons,
    on : junction,
    where:{
        id : 1,
        attributes : ["name","idCours"]
    } 
})

data.then((r)=>{console.log(r)})