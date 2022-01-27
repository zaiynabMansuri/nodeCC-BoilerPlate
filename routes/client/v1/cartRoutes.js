/**
 * cartRoutes.js
 * @description :: CRUD API routes for cart
 */

const express = require('express');
const router = express.Router();
const cartController = require('../../../controller/client/v1/cartController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/cart/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,cartController.addCart);
router.route('/client/api/v1/cart/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,cartController.findAllCart);
router.route('/client/api/v1/cart/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,cartController.getCartCount);
router.route('/client/api/v1/cart/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,cartController.getCartByAggregate);
router.route('/client/api/v1/cart/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,cartController.softDeleteManyCart);
router.route('/client/api/v1/cart/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,cartController.bulkInsertCart);
router.route('/client/api/v1/cart/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,cartController.bulkUpdateCart);
router.route('/client/api/v1/cart/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,cartController.deleteManyCart);
router.route('/client/api/v1/cart/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,cartController.softDeleteCart);
router.route('/client/api/v1/cart/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,cartController.partialUpdateCart);
router.route('/client/api/v1/cart/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,cartController.updateCart);    
router.route('/client/api/v1/cart/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,cartController.getCart);
router.route('/client/api/v1/cart/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,cartController.getCart);
router.route('/client/api/v1/cart/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,cartController.deleteCart);

module.exports = router;
