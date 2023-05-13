import { DataTypes } from 'sequelize';
import sequelize from './connection.js'

//Here I define the table of Comptes

const Compte = sequelize.define('Compte',{
    username:{
        type:DataTypes.STRING,
        unique:true,
        primaryKey:true
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


export default Compte;