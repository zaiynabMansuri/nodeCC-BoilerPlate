/**
 * countryController.js
 * @description : exports action methods for country.
 */

const Country = require('../../../model/country');
const countrySchemaKey = require('../../../utils/validation/countryValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const ObjectID = require('mongodb').ObjectID;
const deleteDependentService = require('../../../utils/deleteDependent');
const utils = require('../../../utils/common.js');
   
/**
 * @description : create document of Country in mongodb collection.
 * @param {obj} req : request including body for creating document.
 * @param {obj} res : response of created document
 * @return {obj} : created Country. {status, message, data}
 */ 
const addCountry = async (req, res) => {
  try {
    let validateRequest = validation.validateParamsWithJoi(
      req.body,
      countrySchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.inValidParam({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    let data = new Country({
      ...req.body
      ,addedBy:req.user.id
    });
    let result = await dbService.createDocument(Country,data);
    return  res.ok({ data : result });
  } catch (error) {
    if (error.name === 'ValidationError'){
      return res.validationError({ message : `Invalid Data, Validation Failed at ${ error.message}` });
    }
    if (error.code && error.code == 11000){
      return res.isDuplicate();
    }
    return res.failureResponse({ data:error.message }); 
  }
};
    
/**
 * @description : find all documents of Country from collection based on query and options.
 * @param {obj} req : request including option and query. {query, options : {page, limit, pagination, populate}, isCountOnly}
 * @param {obj} res : response contains data found from collection.
 * @return {obj} : found Country(s). {status, message, data}
 */
const findAllCountry = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      countrySchemaKey.findFilterKeys,
      Country.schema.obj
    );

    if (!validateRequest.isValid) {
      return res.inValidParam({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.query === 'object' && req.body.query !== null) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      let totalRecords = await dbService.countDocument(Country, query);
      return res.ok({ data: { totalRecords } });
    }
        
    if (req.body && typeof req.body.options === 'object' && req.body.options !== null) {
      options = { ...req.body.options };
    }
    let result = await dbService.getAllDocuments( Country,query,options);
    if (result && result.data && result.data.length){
      return res.ok({ data :result });   
    }
    return res.recordNotFound();
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
    
/**
 * @description : returns total number of documents of Country.
 * @param {obj} req : request including where object to apply filters in req body 
 * @param {obj} res : response that returns total number of documents.
 * @return {obj} : number of documents. {status, message, data}
 */
const getCountryCount = async (req,res) => {
  try {
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      countrySchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.inValidParam({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.where === 'object' && req.body.where !== null) {
      where = { ...req.body.where };
    }
    let result = await dbService.countDocument(Country,where);
    result = { totalRecords: result };
    return res.ok({ data : result });
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
   
/**
 * @description : fetch data from database along with aggregation pipelines
 * @param {obj} req : request of aggregation API. ex. pipelines as query.
 * @param {obj} res : response of aggregation API.
 * @return {obj} : response of aggregation. {status, message, data}
 */
const getCountryByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(Country,req.body);
    if (result){
      return res.ok({ data :result });
    }
    return res.recordNotFound();
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
    
/**
 * @description : deactivate multiple documents of Country from table by ids;
 * @param {obj} req : request including array of ids in request body.
 * @param {obj} res : response contains updated documents of Country.
 * @return {obj} : number of deactivated documents of Country. {status, message, data}
 */
const softDeleteManyCountry = async (req,res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    const query = { _id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    let result = await deleteDependentService.softDeleteCountry(query, updateBody);
    if (!result) {
      return res.recordNotFound();
    }
    return  res.ok({ data:result });
  } catch (error){
    return res.failureResponse({ data:error.message }); 
  }
};
    
/**
 * @description : create multiple documents of Country in mongodb collection.
 * @param {obj} req : request including body for creating documents.
 * @param {obj} res : response of created documents.
 * @return {obj} : created Countrys. {status, message, data}
 */
const bulkInsertCountry = async (req,res)=>{
  try {
    if (req.body && (!Array.isArray(req.body.data) || req.body.data.length < 1)) {
      return res.badRequest();
    }
    let data = req.body.data; 
        
    if (req.user.id){
      for (let i = 0;i < data.length;i++){
        data[i].addedBy = req.user.id;
      }
    }
    let result = await dbService.bulkInsert(Country,data);
    return  res.ok({ data :result });
  } catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError({ message : `Invalid Data, Validation Failed at ${ error.message}` });
    }
    else if (error.code && error.code == 11000){
      return res.isDuplicate();
    }
    return res.failureResponse({ data:error.message });
  }
};
   
/**
 * @description : update multiple records of Country with data by filter.
 * @param {obj} req : request including filter and data in request body.
 * @param {obj} res : response of updated Countrys.
 * @return {obj} : updated Countrys. {status, message, data}
 */
const bulkUpdateCountry = async (req,res)=>{
  try {
    let filter = {};
    let data;
    if (req.body && typeof req.body.filter === 'object' && req.body.filter !== null) {
      filter = { ...req.body.filter };
    }
    if ( typeof req.body.data === 'object' && req.body.data !== null) {
      data = { ...req.body.data, };
      delete data['addedBy'];
      delete data['updatedBy'];
      data.updatedBy = req.user.id;
      let result = await dbService.bulkUpdate(Country,filter,data);
      if (!result){
        return res.recordNotFound();
      }
      return  res.ok({ data :result });
    } else {
      return res.badRequest();
    }
  } catch (error){
    return res.failureResponse({ data:error.message }); 
  }
};
    
/**
 * @description : delete documents of Country in table by using ids.
 * @param {obj} req : request including array of ids in request body.
 * @param {obj} res : response contains no of documents deleted.
 * @return {obj} : no of documents deleted. {status, message, data}
 */
const deleteManyCountry = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    let query = { _id:{ '$in':ids } };
    if (req.body.isWarning) {
      let result = await deleteDependentService.countCountry(query);
      return res.ok({ data :result }); 
    }
    else {
      let result = await deleteDependentService.deleteCountry(query);
      return res.ok({ data :result });
    }
  } catch (error){
    return res.failureResponse({ data:error.message }); 
  }
};
    
/**
 * @description : deactivate document of Country from table by id;
 * @param {obj} req : request including id in request params.
 * @param {obj} res : response contains updated document of Country.
 * @return {obj} : deactivated Country. {status, message, data}
 */
const softDeleteCountry = async (req,res) => {
  try {
    let query = { _id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await deleteDependentService.softDeleteCountry(query, updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.ok({ data:result });
  } catch (error){
    return res.failureResponse({ data:error.message }); 
  }
};
    
/**
 * @description : partially update document of Country with data by id;
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated Country.
 * @return {obj} : updated Country. {status, message, data}
 */
const partialUpdateCountry = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = { ...req.body };
    let validateRequest = validation.validateParamsWithJoi(
      data,
      countrySchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.inValidParam({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(Country, query, data,{ new:true });
    if (!result) {
      return res.recordNotFound();
    }
    return res.ok({ data:result });
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
    
/**
 * @description : update document of Country with data by id.
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated Country.
 * @return {obj} : updated Country. {status, message, data}
 */
const updateCountry = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      updatedBy:req.user.id,
      ...req.body,
    };
    let validateRequest = validation.validateParamsWithJoi(
      data,
      countrySchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.inValidParam({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(Country,query,data,{ new:true });
    if (!result){
      return res.recordNotFound();
    }
    return  res.ok({ data:result });
  } catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError({ message : `Invalid Data, Validation Failed at ${ error.message}` });
    }
    else if (error.code && error.code == 11000){
      return res.isDuplicate();
    }
    return res.failureResponse({ data:error.message });
  }
};
        
/**
 * @description : find document of Country from table by id;
 * @param {obj} req : request including id in request params.
 * @param {obj} res : response contains document retrieved from table.
 * @return {obj} : found Country. {status, message, data}
 */
const getCountry = async (req,res) => {
  try {
    let query = {};
    if (!ObjectID.isValid(req.params.id)) {
      return res.invalidObjectId();
    }
    query._id = req.params.id;
    let options = {};
    if (req.body && req.body.populate && req.body.populate.length) options.populate = req.body.populate;
    if (req.body && req.body.select) {
      let validateRequest = validation.validateFilterWithJoi(
        req.body,
        countrySchemaKey.findFilterKeys,
        Country.schema.obj
      );
      if (!validateRequest.isValid) {
        return res.inValidParam({ message: `${validateRequest.message}` });
      }
      options.select = utils.getSelectObject(req.body.select);
    }
    let result = await dbService.getSingleDocument(Country,query, options);
    if (result){
            
      return  res.ok({ data :result });
    }
    return res.recordNotFound();
  }
  catch (error){
    return res.failureResponse({ data:error.message });
  }
};
    
/**
 * @description : delete document of Country from table.
 * @param {obj} req : request including id as req param.
 * @param {obj} res : response contains deleted document.
 * @return {obj} : deleted Country. {status, message, data}
 */
const deleteCountry = async (req,res) => {
  try {
    if (req.params.id){
      let query = { _id:req.params.id };
      if (req.body.isWarning) {
        let result = await deleteDependentService.countCountry(query);
        return res.ok({ data :result });
         
      } else {
        let result = await deleteDependentService.deleteCountry(query);
        if (!result){
          return res.recordNotFound();
        }
        return  res.ok({ data :result });    
      }
    } else {
      return res.badRequest();
    }
  }
  catch (error){
    return res.failureResponse({ data:error.message }); 
  }
};

module.exports = {
  addCountry,
  findAllCountry,
  getCountryCount,
  getCountryByAggregate,
  softDeleteManyCountry,
  bulkInsertCountry,
  bulkUpdateCountry,
  deleteManyCountry,
  softDeleteCountry,
  partialUpdateCountry,
  updateCountry,
  getCountry,
  deleteCountry,
};