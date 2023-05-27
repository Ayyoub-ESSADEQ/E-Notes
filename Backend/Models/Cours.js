const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');

//Here I define the table of Lessons

const Cours = sequelize.define('Cours',{
    idCours:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    },
    Filliére:{
        type:DataTypes.STRING,
    }
    },
    {
        freezeTableName:true
    }
)

module.exports = Cours;