const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');

//Ici je définis la table de seances

const Seance = sequelize.define('Seance',{
    idSeance:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Date:{
        type:DataTypes.STRING
    },
    startAt:{
        type:DataTypes.STRING //La date de début de cours
    }, 
    endAt:{
        type:DataTypes.STRING //La date de fin de cours
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