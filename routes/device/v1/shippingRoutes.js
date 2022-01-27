/**
 * shippingRoutes.js
 * @description :: CRUD API routes for shipping
 */

const express = require('express');
const router = express.Router();
const shippingController = require('../../../controller/device/v1/shippingController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/shipping/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,shippingController.addShipping);
router.route('/device/api/v1/shipping/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,shippingController.findAllShipping);
router.route('/device/api/v1/shipping/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,shippingController.getShippingCount);
router.route('/device/api/v1/shipping/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,shippingController.getShippingByAggregate);
router.route('/device/api/v1/shipping/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,shippingController.softDeleteManyShipping);
router.route('/device/api/v1/shipping/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,shippingController.bulkInsertShipping);
router.route('/device/api/v1/shipping/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,shippingController.bulkUpdateShipping);
router.route('/device/api/v1/shipping/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,shippingController.deleteManyShipping);
router.route('/device/api/v1/shipping/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,shippingController.softDeleteShipping);
router.route('/device/api/v1/shipping/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,shippingController.partialUpdateShipping);
router.route('/device/api/v1/shipping/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,shippingController.updateShipping);    
router.route('/device/api/v1/shipping/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,shippingController.getShipping);
router.route('/device/api/v1/shipping/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,shippingController.getShipping);
router.route('/device/api/v1/shipping/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,shippingController.deleteShipping);

module.exports = router;
