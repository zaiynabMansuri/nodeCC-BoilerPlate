/**
 * pincodeRoutes.js
 * @description :: CRUD API routes for pincode
 */

const express = require('express');
const router = express.Router();
const pincodeController = require('../../controller/admin/pincodeController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/pincode/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.addPincode);
router.route('/admin/pincode/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.findAllPincode);
router.route('/admin/pincode/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.getPincodeCount);
router.route('/admin/pincode/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.getPincodeByAggregate);
router.route('/admin/pincode/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.softDeleteManyPincode);
router.route('/admin/pincode/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.bulkInsertPincode);
router.route('/admin/pincode/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.bulkUpdatePincode);
router.route('/admin/pincode/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.deleteManyPincode);
router.route('/admin/pincode/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.softDeletePincode);
router.route('/admin/pincode/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.partialUpdatePincode);
router.route('/admin/pincode/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.updatePincode);    
router.route('/admin/pincode/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.getPincode);
router.route('/admin/pincode/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.getPincode);
router.route('/admin/pincode/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,pincodeController.deletePincode);

module.exports = router;
