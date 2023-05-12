import { DataTypes } from 'sequelize';
import sequelize from './connection.js';

//Here I define the table of Prof

sequelize.define('Module',{
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