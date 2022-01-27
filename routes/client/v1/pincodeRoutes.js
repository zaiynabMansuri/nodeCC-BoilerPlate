/**
 * pincodeRoutes.js
 * @description :: CRUD API routes for pincode
 */

const express = require('express');
const router = express.Router();
const pincodeController = require('../../../controller/client/v1/pincodeController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/pincode/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,pincodeController.addPincode);
router.route('/client/api/v1/pincode/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,pincodeController.findAllPincode);
router.route('/client/api/v1/pincode/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,pincodeController.getPincodeCount);
router.route('/client/api/v1/pincode/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,pincodeController.getPincodeByAggregate);
router.route('/client/api/v1/pincode/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,pincodeController.softDeleteManyPincode);
router.route('/client/api/v1/pincode/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,pincodeController.bulkInsertPincode);
router.route('/client/api/v1/pincode/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,pincodeController.bulkUpdatePincode);
router.route('/client/api/v1/pincode/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,pincodeController.deleteManyPincode);
router.route('/client/api/v1/pincode/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,pincodeController.softDeletePincode);
router.route('/client/api/v1/pincode/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,pincodeController.partialUpdatePincode);
router.route('/client/api/v1/pincode/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,pincodeController.updatePincode);    
router.route('/client/api/v1/pincode/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,pincodeController.getPincode);
router.route('/client/api/v1/pincode/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,pincodeController.getPincode);
router.route('/client/api/v1/pincode/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,pincodeController.deletePincode);

module.exports = router;
