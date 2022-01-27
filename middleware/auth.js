/**
 * auth.js
 * @description :: middleware that checks authentication and authorization of user
 */

const passport = require('passport');
const {
  ROLE_RIGHTS, USER_ROLE 
} = require('../constants/authConstant');
const userTokens = require('../model/userTokens');
const dbService = require('../utils/dbService');

/**
 * @description : returns callback that verifies required rights and access
 * @param {obj} req : request of route.
 * @param {callback} resolve : resolve callback for succeeding method.
 * @param {callback} reject : reject callback for error.
 * @param {Array} requiredRights : array of rights for logged-in user.
 */
const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user, info) => {
  if (err || info || !user) {
    return reject('Unauthorized User');
  }
  req.user = user;
  if (!user.isActive) {
    return reject('User is deactivated');
  }
  let userToken = await dbService.getDocumentByQuery(userTokens,{
    token:(req.headers.authorization).replace('Bearer ',''),
    userId:user.id
  });
  if (!userToken){
    return reject('Token not found');
  }
  if (userToken.isTokenExpired){
    return reject('Token is Expired');
  }
  if (requiredRights.length) {
    for (role in USER_ROLE){
      if (USER_ROLE[role] === user.role){
        const userRights = ROLE_RIGHTS[user.role];
        const hasRequiredRights = requiredRights.some((requiredRight) => userRights.includes(requiredRight));
        if (!hasRequiredRights || !user.id) {
          return reject('Unauthorized user');
        }
      }
    }
  }
  resolve();
};

/**
 * @description : authentication middleware for request.
 * @param {obj} req : request of route.
 * @param {obj} res : response of route.
 * @param {callback} next : executes the next middleware succeeding the current middleware.
 * @param {Array} requiredRights : array of rights for particular user.
 */
const auth = (...requiredRights) => async (req, res, next) => {

  let url = req.originalUrl;
  if (url.includes('admin')){
    return new Promise((resolve, reject) => {
      passport.authenticate('admin-rule', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(
        req,
        res,
        next
      );
    })
      .then(() => next())
      .catch((err) => {
        return res.unAuthorizedRequest();
      });
  }
  else if (url.includes('device')){
    return new Promise((resolve, reject) => {
      passport.authenticate('device-rule', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(
        req,
        res,
        next
      );
    })
      .then(() => next())
      .catch((err) => {
        return res.unAuthorizedRequest();
      });
  }
  else if (url.includes('client')){
    return new Promise((resolve, reject) => {
      passport.authenticate('client-rule', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(
        req,
        res,
        next
      );
    })
      .then(() => next())
      .catch((err) => {
        return res.unAuthorizedRequest();
      });
  }
};

module.exports = auth;
