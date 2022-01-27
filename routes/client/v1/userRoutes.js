/**
 * userRoutes.js
 * @description :: CRUD API routes for user
 */

const express = require('express');
const router = express.Router();
const userController = require('../../../controller/client/v1/userController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/user/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,userController.addUser);
router.route('/client/api/v1/user/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,userController.findAllUser);
router.route('/client/api/v1/user/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,userController.getUserCount);
router.route('/client/api/v1/user/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,userController.getUserByAggregate);
router.route('/client/api/v1/user/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,userController.bulkInsertUser);
router.route('/client/api/v1/user/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,userController.bulkUpdateUser);
router.route('/client/api/v1/user/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,userController.partialUpdateUser);
router.route('/client/api/v1/user/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,userController.updateUser);    
router.route('/client/api/v1/user/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,userController.getUser);
router.route('/client/api/v1/user/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,userController.getUser);
router.route('/client/api/v1/user/change-password').put(auth(...[ 'changePasswordByUserInClientPlatform' ]),userController.changePassword);
router.route('/client/api/v1/user/update-profile').put(auth(...[ 'updateProfileByUserInClientPlatform' ]),userController.updateProfile);

module.exports = router;
