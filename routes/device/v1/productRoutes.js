/**
 * productRoutes.js
 * @description :: CRUD API routes for product
 */

const express = require('express');
const router = express.Router();
const productController = require('../../../controller/device/v1/productController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/product/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,productController.addProduct);
router.route('/device/api/v1/product/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,productController.findAllProduct);
router.route('/device/api/v1/product/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,productController.getProductCount);
router.route('/device/api/v1/product/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,productController.getProductByAggregate);
router.route('/device/api/v1/product/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,productController.softDeleteManyProduct);
router.route('/device/api/v1/product/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,productController.bulkInsertProduct);
router.route('/device/api/v1/product/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,productController.bulkUpdateProduct);
router.route('/device/api/v1/product/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,productController.deleteManyProduct);
router.route('/device/api/v1/product/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,productController.softDeleteProduct);
router.route('/device/api/v1/product/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,productController.partialUpdateProduct);
router.route('/device/api/v1/product/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,productController.updateProduct);    
router.route('/device/api/v1/product/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,productController.getProduct);
router.route('/device/api/v1/product/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,productController.getProduct);
router.route('/device/api/v1/product/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,productController.deleteProduct);

module.exports = router;
