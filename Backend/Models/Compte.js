const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../Utilities/connection');

//Here I define the table of Comptes

const Compte = sequelize.define('Compte',{
    username:{
        type:DataTypes.STRING,
        unique:true,
        primaryKey:true,
        get(){return this.getDataValue("username")}
    },
    password:{
        type:DataTypes.STRING
    },    
    idProf:{                        //le professeur possédant le compte
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

module.exports =  Compte;