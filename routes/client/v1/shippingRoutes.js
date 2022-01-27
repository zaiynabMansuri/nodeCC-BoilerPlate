/**
 * shippingRoutes.js
 * @description :: CRUD API routes for shipping
 */

const express = require('express');
const router = express.Router();
const shippingController = require('../../../controller/client/v1/shippingController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/shipping/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,shippingController.addShipping);
router.route('/client/api/v1/shipping/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,shippingController.findAllShipping);
router.route('/client/api/v1/shipping/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,shippingController.getShippingCount);
router.route('/client/api/v1/shipping/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,shippingController.getShippingByAggregate);
router.route('/client/api/v1/shipping/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,shippingController.softDeleteManyShipping);
router.route('/client/api/v1/shipping/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,shippingController.bulkInsertShipping);
router.route('/client/api/v1/shipping/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,shippingController.bulkUpdateShipping);
router.route('/client/api/v1/shipping/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,shippingController.deleteManyShipping);
router.route('/client/api/v1/shipping/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,shippingController.softDeleteShipping);
router.route('/client/api/v1/shipping/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,shippingController.partialUpdateShipping);
router.route('/client/api/v1/shipping/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,shippingController.updateShipping);    
router.route('/client/api/v1/shipping/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,shippingController.getShipping);
router.route('/client/api/v1/shipping/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,shippingController.getShipping);
router.route('/client/api/v1/shipping/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,shippingController.deleteShipping);

module.exports = router;
