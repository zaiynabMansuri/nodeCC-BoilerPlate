/**
 * orderRoutes.js
 * @description :: CRUD API routes for order
 */

const express = require('express');
const router = express.Router();
const orderController = require('../../../controller/client/v1/orderController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/order/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,orderController.addOrder);
router.route('/client/api/v1/order/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,orderController.findAllOrder);
router.route('/client/api/v1/order/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,orderController.getOrderCount);
router.route('/client/api/v1/order/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,orderController.getOrderByAggregate);
router.route('/client/api/v1/order/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,orderController.softDeleteManyOrder);
router.route('/client/api/v1/order/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,orderController.bulkInsertOrder);
router.route('/client/api/v1/order/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,orderController.bulkUpdateOrder);
router.route('/client/api/v1/order/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,orderController.deleteManyOrder);
router.route('/client/api/v1/order/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,orderController.softDeleteOrder);
router.route('/client/api/v1/order/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,orderController.partialUpdateOrder);
router.route('/client/api/v1/order/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,orderController.updateOrder);    
router.route('/client/api/v1/order/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,orderController.getOrder);
router.route('/client/api/v1/order/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,orderController.getOrder);
router.route('/client/api/v1/order/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,orderController.deleteOrder);

module.exports = router;
