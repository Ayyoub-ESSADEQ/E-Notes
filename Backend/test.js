
import Compte from './Models/Module.js';

const comptes = [
    {name: "Gestion & management", idProf: 3},
    {name: "Mathématiques", idProf: 5},
    {name: "Informatique", idProf: 7},
    {name: "Langues étrangères", idProf: 4},
    {name: "Sciences humaines", idProf: 10},
    {name: "Physique", idProf: 2},
    {name: "Chimie", idProf: 6},
    {name: "Histoire", idProf: 9},
    {name: "Biologie", idProf: 11},
    {name: "Arts", idProf: 8}
  ]  


for (let compte of comptes){
    await Compte.create(compte);
}


