const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');

//Here I define the table of Prof

const Module = sequelize.define('Module',{
    name:{
        type:DataTypes.STRING
    },
    idModule:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },    
    idProf:{                        //Cordinnateur de Module
        type:DataTypes.INTEGER,
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

module.exports = Module;