const teacher = require('./Models/ProfCours');
const profData =[
  {
    idCours: 5,
    idProf: 5
  },
  {
    idCours: 4,
    idProf: 6
  },
  {
    idCours: 7,
    idProf: 7
  }
]

  
for (prof of profData){
    teacher.create(prof);
}