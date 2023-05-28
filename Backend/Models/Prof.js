const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../Utilities/connection.js');

//Here I define the table of Prof

const Prof = sequelize.define('Prof',{
    idProf:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    filiere:{
        type:DataTypes.STRING
    },
    coordinateurFiliere:{
        type:DataTypes.STRING,
        defaultValue:'aucun'
    },
    name:{
        type:DataTypes.STRING
    },
    lastName:{
        type:DataTypes.STRING
    }
    },
    {
        freezeTableName:true
    }
)

module.exports = Prof;