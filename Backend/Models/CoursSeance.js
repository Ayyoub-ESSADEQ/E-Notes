const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');

//Here I define the table of CoursSeance
//idCours est le cours assuré durant la seance idSeance

const CoursSeance = sequelize.define('CoursSeance',{
    idCoursSeance:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }, 
    idSeance:{                        
        type:DataTypes.INTEGER,
        references:{
            model:"Seance",
            key:"idSeance"
        }
    },
    idCours:{
        type:DataTypes.INTEGER,
        references:{
            model:"Cours",
            key:"idCours"
        }
    },
    idProf:{
        type:DataTypes.INTEGER,
        references:{
            model:"Prof",
            key:"idProf"
        }
    },
    },
    {
        freezeTableName:true
    }
)

module.exports = CoursSeance;