/**
 * productRoutes.js
 * @description :: CRUD API routes for product
 */

const express = require('express');
const router = express.Router();
const productController = require('../../../controller/client/v1/productController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/product/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,productController.addProduct);
router.route('/client/api/v1/product/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,productController.findAllProduct);
router.route('/client/api/v1/product/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,productController.getProductCount);
router.route('/client/api/v1/product/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,productController.getProductByAggregate);
router.route('/client/api/v1/product/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,productController.softDeleteManyProduct);
router.route('/client/api/v1/product/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,productController.bulkInsertProduct);
router.route('/client/api/v1/product/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,productController.bulkUpdateProduct);
router.route('/client/api/v1/product/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,productController.deleteManyProduct);
router.route('/client/api/v1/product/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,productController.softDeleteProduct);
router.route('/client/api/v1/product/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,productController.partialUpdateProduct);
router.route('/client/api/v1/product/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,productController.updateProduct);    
router.route('/client/api/v1/product/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,productController.getProduct);
router.route('/client/api/v1/product/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,productController.getProduct);
router.route('/client/api/v1/product/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,productController.deleteProduct);

module.exports = router;
