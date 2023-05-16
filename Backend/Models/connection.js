//Establishing connection to the database
//databaseName-Username-Password are the arguments
const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize('eNotes','root','ayoube essadeq',{
    host:'localhost',
    dialect : 'mysql',
    port:3306
})

//This is used to synchronize Model with the database
//Each change to the model will affect the database (especially the table to which the model is connected)
/*
sequelize.sync({force:true})
*/
module.exports = sequelize;