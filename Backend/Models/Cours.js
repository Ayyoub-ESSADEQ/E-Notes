const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');

//Here I define the table of Prof

const Cours = sequelize.define('Cours',{
    idCours:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    },
    idProf:{                        //This is to show the prof that is responsible for a lesson
        type:DataTypes.INTEGER,
        references:{
            model:"Prof",
            key:"idProf"
        }
    },
    idModule:{
        type:DataTypes.INTEGER,
        references:{
            model:"Module",
            key:"idModule"
        }
    }
    },
    {
        freezeTableName:true
    }
)

module.exports = Cours;