import { DataTypes } from 'sequelize';
import sequelize from './connection.js'

//Here I define the table of Notes

sequelize.define('Notes',{
    idNote:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Seance:{
        type:DataTypes.INTEGER
    },
    Note:{
        type:DataTypes.STRING //La note de professeur
    }, 
    anneUniversitaire:{
        type:DataTypes.INTEGER //La note de professeur
    },   
    idProf:{                        //le prof qui a réaliser la note
        type:DataTypes.INTEGER,
        references:{
            model:"Prof",
            key:"idProf"
        }
    },
    idCours:{                        //le cours où la note s'inscrit
        type:DataTypes.INTEGER,
        references:{
            model:"Cours",
            key:"idCours"
        }
    },
    },
    {
        freezeTableName:true
    }
)