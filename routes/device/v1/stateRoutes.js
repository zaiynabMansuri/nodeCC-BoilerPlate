/**
 * stateRoutes.js
 * @description :: CRUD API routes for state
 */

const express = require('express');
const router = express.Router();
const stateController = require('../../../controller/device/v1/stateController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/state/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,stateController.addState);
router.route('/device/api/v1/state/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,stateController.findAllState);
router.route('/device/api/v1/state/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,stateController.getStateCount);
router.route('/device/api/v1/state/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,stateController.getStateByAggregate);
router.route('/device/api/v1/state/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,stateController.softDeleteManyState);
router.route('/device/api/v1/state/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,stateController.bulkInsertState);
router.route('/device/api/v1/state/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,stateController.bulkUpdateState);
router.route('/device/api/v1/state/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,stateController.deleteManyState);
router.route('/device/api/v1/state/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,stateController.softDeleteState);
router.route('/device/api/v1/state/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,stateController.partialUpdateState);
router.route('/device/api/v1/state/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,stateController.updateState);    
router.route('/device/api/v1/state/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,stateController.getState);
router.route('/device/api/v1/state/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,stateController.getState);
router.route('/device/api/v1/state/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,stateController.deleteState);

module.exports = router;
