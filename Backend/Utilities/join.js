"use strict";
const { Op } = require('sequelize');

/**
 * This function aims to retrieve the information from a junction between two tables
 * where the source & the target tables are the tables from where we want to retrieve the info
 * the on attribute represents the junction table
 * the id attribute is on which the junction will be preformed
 * In brief : the function answers this question : 
 * >>>What are the elements of target according to the junction table
 * @param {Object} options - The options object represent the holder of the informations needed to retrieve the data from the junction between the source & target
 * @param {Onject} target - the Model from where we want to retrieve the iformation
 * @param {Object} on - the junction table between source and the target
 * @param {Object} where - contains the condition for our query
 * @param {Integer} id - is the id of the source asking for the data
 * @param {List} attributes - a list of the attributes we want to retrieve from the target
 * @author Ayyoub Essadeq
 */

function join(options){
    const target = options.target;
    const on = options.on;
    const where = options.where;
    const targetedAttributes = options.attributes;
    const idTarget = target.primaryKeyAttribute;

    const information = new Promise(getInformations);
    function getInformations(resolve,reject){
        const junctionData = on.findAll({
            attributes :[idTarget],
            where:where,
            raw:true
        });
    
        junctionData.then(retrieveData)
        junctionData.catch(()=>{return "Un erreur est produit"});
    
        function retrieveData(data){
            data.forEach((v,i)=>{data[i]=v[idTarget]});
            const whereOptions = {};
            const optionsWhere = {};
            whereOptions[idTarget] = {[Op.in]:data};
            optionsWhere[where] = whereOptions;
            optionsWhere.raw = true;

            if(targetedAttributes) optionsWhere["attributes"] = targetedAttributes;
    
            const dataTarget = target.findAll(optionsWhere);
    
            dataTarget.then((results)=>{resolve(results)});
            dataTarget.catch(()=>{reject('Un erreur est produit')})
        }
    }

    return information;
}

module.exports=join;