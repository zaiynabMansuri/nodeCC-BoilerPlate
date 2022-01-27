/**
 * orderValidation.js
 * @description :: validate each post and put request as per order model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of order */
exports.schemaKeys = joi.object({
  customerId: joi.string().allow(null).allow(''),
  sellerId: joi.string().allow(null).allow(''),
  orderItems: joi.array().items(),
  totalAmount: joi.number().integer().allow(0),
  status: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

/** validation keys and properties of order for updation */
exports.updateSchemaKeys = joi.object({
  customerId: joi.string().allow(null).allow(''),
  sellerId: joi.string().allow(null).allow(''),
  orderItems: joi.array().items(),
  totalAmount: joi.number().integer().allow(0),
  status: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of order for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      customerId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      sellerId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      orderItems: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      totalAmount: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      status: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      createdAt: joi.any(),
      updatedAt: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
