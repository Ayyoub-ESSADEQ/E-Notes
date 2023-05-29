const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../Utilities/connection');

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
        onDelete: 'CASCADE',
        references:{
            model:"Seance",
            key:"idSeance"
        }
    },
    idCours:{
        type:DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references:{
            model:"Cours",
            key:"idCours"
        }
    },
    idProf:{
        type:DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references:{
            model:"Prof",
            key:"idProf"
        }
    }
    },
    {
        freezeTableName:true
    }
)

module.exports = CoursSeance;