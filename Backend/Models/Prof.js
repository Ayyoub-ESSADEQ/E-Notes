const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../Utilities/connection.js');

/**
 * Définition du modèle Prof.
 *
 * @typedef {Object} Prof
 * @property {Integer} idProf - Identifiant unique du professeur (auto-incrémenté).
 * @property {String} filiere - Filière du professeur.
 * @property {String} coordinateurFiliere - Coordinateur de la filière du professeur (par défaut: "aucun").
 * @property {String} name - Nom du professeur.
 * @property {String} lastName - Prénom du professeur.
 */

const Prof = sequelize.define('Prof', {
    idProf: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    filiere: {
        type: DataTypes.STRING
    },
    coordinateurFiliere: {
        type: DataTypes.STRING,
        defaultValue: 'aucun'
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

module.exports = Prof;
