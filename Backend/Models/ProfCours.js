const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../Utilities/connection.js');

//Here I define the table of ProfCours
//idProf le prof résponsable de cours idCours

const ProfCours = sequelize.define('ProfCours',{
    idProfCours:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }, 
    idProf:{                        
        type:DataTypes.INTEGER,
        references:{
            model:"Prof",
            key:"idProf"
        }
    },
    idCours:{
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

module.exports = ProfCours;