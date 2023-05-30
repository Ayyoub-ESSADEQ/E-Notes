const teacher = require('./Models/CoursSeance');
const profData = [
  {
    idCoursSeance: 1,
    idSeance: 2,
    idCours: 1,
    idProf: 1
  },
  {
    idCoursSeance: 2,
    idSeance: 3,
    idCours: 2,
    idProf: 3
  },
  {
    idCoursSeance: 3,
    idSeance: 4,
    idCours: 3,
    idProf: 1
  },
  {
    idCoursSeance: 4,
    idSeance: 5,
    idCours: 4,
    idProf: 5
  },
  {
    idCoursSeance: 5,
    idSeance: 6,
    idCours: 5,
    idProf: 1
  },
  {
    idCoursSeance: 6,
    idSeance: 7,
    idCours: 6,
    idProf: 7
  },
  {
    idCoursSeance: 7,
    idSeance: 8,
    idCours: 7,
    idProf: 1
  },
  {
    idCoursSeance: 8,
    idSeance: 8,
    idCours: 8,
    idProf: 8
  },
  {
    idCoursSeance: 9,
    idSeance: 9,
    idCours: 9,
    idProf: 9
  },
  {
    idCoursSeance: 10,
    idSeance: 10,
    idCours: 10,
    idProf: 1
  }
];



  
for (prof of profData){
    teacher.create(prof);
}