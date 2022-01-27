/**
 * stateRoutes.js
 * @description :: CRUD API routes for state
 */

const express = require('express');
const router = express.Router();
const stateController = require('../../controller/admin/stateController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/state/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,stateController.addState);
router.route('/admin/state/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,stateController.findAllState);
router.route('/admin/state/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,stateController.getStateCount);
router.route('/admin/state/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,stateController.getStateByAggregate);
router.route('/admin/state/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,stateController.softDeleteManyState);
router.route('/admin/state/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,stateController.bulkInsertState);
router.route('/admin/state/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,stateController.bulkUpdateState);
router.route('/admin/state/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,stateController.deleteManyState);
router.route('/admin/state/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,stateController.softDeleteState);
router.route('/admin/state/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,stateController.partialUpdateState);
router.route('/admin/state/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,stateController.updateState);    
router.route('/admin/state/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,stateController.getState);
router.route('/admin/state/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,stateController.getState);
router.route('/admin/state/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,stateController.deleteState);

module.exports = router;
