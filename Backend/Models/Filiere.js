const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');

//Here I define the table of Prof

const Filiere = sequelize.define('Filiere',{
    idFiliere:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    },    
    idProf:{                        //Cordinnateur de Filère
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

module.exports = Filiere;