/**
 * stateRoutes.js
 * @description :: CRUD API routes for state
 */

const express = require('express');
const router = express.Router();
const stateController = require('../../../controller/client/v1/stateController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/state/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,stateController.addState);
router.route('/client/api/v1/state/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,stateController.findAllState);
router.route('/client/api/v1/state/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,stateController.getStateCount);
router.route('/client/api/v1/state/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,stateController.getStateByAggregate);
router.route('/client/api/v1/state/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,stateController.softDeleteManyState);
router.route('/client/api/v1/state/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,stateController.bulkInsertState);
router.route('/client/api/v1/state/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,stateController.bulkUpdateState);
router.route('/client/api/v1/state/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,stateController.deleteManyState);
router.route('/client/api/v1/state/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,stateController.softDeleteState);
router.route('/client/api/v1/state/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,stateController.partialUpdateState);
router.route('/client/api/v1/state/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,stateController.updateState);    
router.route('/client/api/v1/state/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,stateController.getState);
router.route('/client/api/v1/state/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,stateController.getState);
router.route('/client/api/v1/state/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,stateController.deleteState);

module.exports = router;
