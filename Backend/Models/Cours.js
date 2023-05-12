import { DataTypes } from 'sequelize';
import sequelize from './connection.js'

//Here I define the table of Prof

sequelize.define('Cours',{
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