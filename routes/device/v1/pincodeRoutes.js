/**
 * pincodeRoutes.js
 * @description :: CRUD API routes for pincode
 */

const express = require('express');
const router = express.Router();
const pincodeController = require('../../../controller/device/v1/pincodeController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/pincode/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,pincodeController.addPincode);
router.route('/device/api/v1/pincode/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,pincodeController.findAllPincode);
router.route('/device/api/v1/pincode/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,pincodeController.getPincodeCount);
router.route('/device/api/v1/pincode/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,pincodeController.getPincodeByAggregate);
router.route('/device/api/v1/pincode/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,pincodeController.softDeleteManyPincode);
router.route('/device/api/v1/pincode/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,pincodeController.bulkInsertPincode);
router.route('/device/api/v1/pincode/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,pincodeController.bulkUpdatePincode);
router.route('/device/api/v1/pincode/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,pincodeController.deleteManyPincode);
router.route('/device/api/v1/pincode/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,pincodeController.softDeletePincode);
router.route('/device/api/v1/pincode/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,pincodeController.partialUpdatePincode);
router.route('/device/api/v1/pincode/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,pincodeController.updatePincode);    
router.route('/device/api/v1/pincode/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,pincodeController.getPincode);
router.route('/device/api/v1/pincode/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,pincodeController.getPincode);
router.route('/device/api/v1/pincode/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,pincodeController.deletePincode);

module.exports = router;
