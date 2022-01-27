/**
 * categoryRoutes.js
 * @description :: CRUD API routes for category
 */

const express = require('express');
const router = express.Router();
const categoryController = require('../../controller/admin/categoryController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/category/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,categoryController.addCategory);
router.route('/admin/category/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,categoryController.findAllCategory);
router.route('/admin/category/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,categoryController.getCategoryCount);
router.route('/admin/category/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,categoryController.getCategoryByAggregate);
router.route('/admin/category/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,categoryController.softDeleteManyCategory);
router.route('/admin/category/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,categoryController.bulkInsertCategory);
router.route('/admin/category/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,categoryController.bulkUpdateCategory);
router.route('/admin/category/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,categoryController.deleteManyCategory);
router.route('/admin/category/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,categoryController.softDeleteCategory);
router.route('/admin/category/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,categoryController.partialUpdateCategory);
router.route('/admin/category/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,categoryController.updateCategory);    
router.route('/admin/category/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,categoryController.getCategory);
router.route('/admin/category/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,categoryController.getCategory);
router.route('/admin/category/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,categoryController.deleteCategory);

module.exports = router;
