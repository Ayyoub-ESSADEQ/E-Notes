const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../Utilities/connection.js');

//Ici je définis la table de seances

const Seance = sequelize.define('Seance',{
    idSeance:{
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
    Date:{
        type:DataTypes.STRING
    },
    startAt:{
        type:DataTypes.STRING //The hour where the session start
    }, 
    endAt:{
        type:DataTypes.STRING ////The hour where the session end
    }, 
    objectif:{
        type:DataTypes.STRING  
    }, 
    AP:{
        type:DataTypes.STRING  //anouncer par le prof
    }, 
    remarques:{
        type:DataTypes.STRING  
    }
    },
    {
        freezeTableName:true
    }
)

module.exports = Seance;