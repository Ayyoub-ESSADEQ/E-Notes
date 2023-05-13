import { DataTypes } from 'sequelize';
import sequelize from './connection.js'

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

export default Filiere;