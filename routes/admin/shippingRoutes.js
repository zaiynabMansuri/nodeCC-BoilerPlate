/**
 * shippingRoutes.js
 * @description :: CRUD API routes for shipping
 */

const express = require('express');
const router = express.Router();
const shippingController = require('../../controller/admin/shippingController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/shipping/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,shippingController.addShipping);
router.route('/admin/shipping/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,shippingController.findAllShipping);
router.route('/admin/shipping/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,shippingController.getShippingCount);
router.route('/admin/shipping/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,shippingController.getShippingByAggregate);
router.route('/admin/shipping/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,shippingController.softDeleteManyShipping);
router.route('/admin/shipping/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,shippingController.bulkInsertShipping);
router.route('/admin/shipping/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,shippingController.bulkUpdateShipping);
router.route('/admin/shipping/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,shippingController.deleteManyShipping);
router.route('/admin/shipping/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,shippingController.softDeleteShipping);
router.route('/admin/shipping/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,shippingController.partialUpdateShipping);
router.route('/admin/shipping/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,shippingController.updateShipping);    
router.route('/admin/shipping/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,shippingController.getShipping);
router.route('/admin/shipping/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,shippingController.getShipping);
router.route('/admin/shipping/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,shippingController.deleteShipping);

module.exports = router;
