const teacher = require('./Models/Seance');
const profData =[
    {
      idSeance: 1,
      idProf: 1,
      Date: "2023-05-28",
      startAt: "09:00",
      endAt: "11:00",
      objectif: "Introduction to the topic",
      AP: "Please bring your textbooks",
      remarques: "No latecomers allowed"
    },
    {
      idSeance: 2,
      idProf: 1,
      Date: "2023-05-29",
      startAt: "14:00",
      endAt: "16:00",
      objectif: "Problem-solving techniques",
      AP: "Prepare your calculators",
      remarques: "Quiz next week"
    },
    {
      idSeance: 3,
      idProf: 1,
      Date: "2023-05-30",
      startAt: "10:30",
      endAt: "12:30",
      objectif: "Exploring concepts through experiments",
      AP: "Lab coats and safety goggles required",
      remarques: "Bring lab notebooks"
    },
    {
      idSeance: 4,
      idProf: 4,
      Date: "2023-05-31",
      startAt: "13:00",
      endAt: "15:00",
      objectif: "Discussion on research papers",
      AP: "Read the assigned papers beforehand",
      remarques: "Presentations on Friday"
    },
    {
      idSeance: 5,
      idProf: 5,
      Date: "2023-06-01",
      startAt: "09:30",
      endAt: "11:30",
      objectif: "Group project presentation",
      AP: "Prepare slides and materials",
      remarques: "Be ready for Q&A"
    },
    {
      idSeance: 6,
      idProf: 2,
      Date: "2023-06-02",
      startAt: "15:30",
      endAt: "17:30",
      objectif: "Discussion on historical events",
      AP: "Read assigned chapters",
      remarques: "Bring reference books"
    },
    {
      idSeance: 7,
      idProf: 2,
      Date: "2023-06-03",
      startAt: "11:00",
      endAt: "13:00",
      objectif: "Literary analysis of a novel",
      AP: "Review the assigned chapters",
      remarques: "Group work after the session"
    },
    {
      idSeance: 8,
      idProf: 1,
      Date: "2023-06-04",
      startAt: "14:30",
      endAt: "16:30",
      objectif: "Geographical mapping exercise",
      AP: "Bring world maps and markers",
      remarques: "Check email for additional materials"
    },
    {
      idSeance: 9,
      idProf: 1,
      Date: "2023-06-05",
      startAt: "12:00",
      endAt: "14:00",
      objectif: "Macroeconomic indicators analysis",
      AP: "Review the GDP and inflation data",
      remarques: "Prepare for a group discussion"
    },
    {
      idSeance: 10,
      idProf: 10,
      Date: "2023-06-06",
      startAt: "09:00",
      endAt: "11:00",
      objectif: "Understanding human behavior",
      AP: "Bring case studies",
      remarques: "Discussion on real-life examples"
      }
      ];
  
  
  
for (prof of profData){
    teacher.create(prof);
}