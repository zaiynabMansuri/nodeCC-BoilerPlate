/**
 * @description : exports authentication strategy for device using passport.js
 * @params {obj} passport : passport object for authentication
 * @return {callback} : returns callback to be used in middleware
 */
 
const {
  Strategy, ExtractJwt 
} = require('passport-jwt');
const { JWT } = require('../constants/authConstant');
const user = require('../model/user');

module.exports = {
  devicePassportStrategy: passport => {
    const options = {};
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    options.secretOrKey = JWT.DEVICE_SECRET;
    passport.use('device-rule',
      new Strategy(options, async (payload, done) => {
                
        try {
          const result = await user.findOne({ _id: payload.id });
          if (result) {
            return done(null, { ...result.toJSON() });
          }
          return done('No User Found', {});
        } catch (error) {
          return done(error,{});
        }
      })
    );
  }
};
