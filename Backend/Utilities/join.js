"use strict";
const { Op } = require('sequelize');

/**
 * This function aims to retrieve the information from a junction between two tables
 * where the source & the target tables are the tables from where we want to retrieve the info
 * the on attribute represents the junction table
 * the id attribute is on which the junction will be preformed
 * In brief : the function answers this question : 
 * >>>What are the elements of target associated with the element of Source of id="id"
 * @param {Object} options - The options object represent the holder of the informations needed to retrieve the data from the junction between the source & target
 * @param {Object} source - the Model that contain the element asking for the target
 * @param {Onject} target - the Model from where we want to retrieve the iformation
 * @param {Object} on - the junction table between source and the target
 * @param {Object} where - contains the condition for our query
 * @param {Integer} id - is the id of the source asking for the data
 * @param {List} attributes - a list of the attributes we want to retrieve from the target
 * @author Ayyoub Essadeq
 */

function join(options){
    const source = options.source;
    const target = options.target;
    const on = options.on;
    const where = options.where;
    const id = where.id;
    const targetedAttributes = where.attributes;
    const whereOptions = {};
    const idSource = source.primaryKeyAttribute;
    const idTarget = target.primaryKeyAttribute;
    whereOptions[idSource] = id;

    const information = new Promise(getInformations);
    function getInformations(resolve,reject){
        const junctionData = on.findAll({
            attributes :[idTarget],
            where:whereOptions,
            raw:true
        });
    
        junctionData.then(retrieveData)
        junctionData.catch(()=>{return "Un erreur est produit"});
    
        function retrieveData(data){
            data.forEach((v,i)=>{data[i]=v[idTarget]});
            const whereOptions = {};
            whereOptions[idTarget] = {[Op.in]:data}
    
            const dataTarget = target.findAll({
                attributes : targetedAttributes,
                where:whereOptions,
                raw:true
            })
    
            dataTarget.then((results)=>{resolve(results)});
            dataTarget.catch(()=>{reject('Un erreur est produit')})
        }
    }

    return information;
}

module.exports=join;