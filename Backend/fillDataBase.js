const teacher = require('./Models//CoursSeance');
const profData =[
  {
    idCoursSeance: 1,
    idSeance: 3,
    idCours: 5,
    idProf: 1
  },
  {
    idCoursSeance: 2,
    idSeance: 1,
    idCours: 4,
    idProf: 1
  },
  {
    idCoursSeance: 3,
    idSeance: 2,
    idCours: 7,
    idProf: 1
  },
  {
    idCoursSeance: 4,
    idSeance: 6,
    idCours: 3,
    idProf: 9
  },
  {
    idCoursSeance: 5,
    idSeance: 8,
    idCours: 2,
    idProf: 1
  },
  {
    idCoursSeance: 6,
    idSeance: 4,
    idCours: 9,
    idProf: 2
  },
  {
    idCoursSeance: 7,
    idSeance: 7,
    idCours: 6,
    idProf: 2
  },
  {
    idCoursSeance: 8,
    idSeance: 5,
    idCours: 1,
    idProf: 3
  },
  {
    idCoursSeance: 9,
    idSeance: 10,
    idCours: 8,
    idProf: 4
  },
  {
    idCoursSeance: 10,
    idSeance: 9,
    idCours: 2,
    idProf: 6
  }
]

  
for (prof of profData){
    teacher.create(prof);
}