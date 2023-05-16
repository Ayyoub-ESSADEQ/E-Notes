const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./connection.js');


//Here I define the table of FiliereCours

const FiliereModule = sequelize.define('FiliereModule',{
    idFiliereModule:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },    
    idFiliere:{                        //Cordinnateur de Module
        type:DataTypes.INTEGER,
        references:{
            model:"Filiere",
            key:"idFiliere"
        }
    },    
    idModule:{                        //Cordinnateur de Module
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

module.exports = FiliereModule;