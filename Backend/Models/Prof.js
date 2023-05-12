import { DataTypes } from 'sequelize';
import sequelize from './connection.js'

//Here I define the table of Prof

sequelize.define('Prof',{
    idProf:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    profession:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.STRING //one of : professeur-cordFiliere-cordMod-adjoint
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