const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');

//Here I define the table of Prof

const Cours = sequelize.define('Cours',{
    idCourProf:{
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
    }
    },
    {
        freezeTableName:true
    }
)

module.exports = Cours;