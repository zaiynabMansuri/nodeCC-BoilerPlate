/**
 * cityRoutes.js
 * @description :: CRUD API routes for city
 */

const express = require('express');
const router = express.Router();
const cityController = require('../../controller/admin/cityController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/city/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,cityController.addCity);
router.route('/admin/city/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,cityController.findAllCity);
router.route('/admin/city/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,cityController.getCityCount);
router.route('/admin/city/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,cityController.getCityByAggregate);
router.route('/admin/city/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,cityController.softDeleteManyCity);
router.route('/admin/city/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,cityController.bulkInsertCity);
router.route('/admin/city/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,cityController.bulkUpdateCity);
router.route('/admin/city/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,cityController.deleteManyCity);
router.route('/admin/city/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,cityController.softDeleteCity);
router.route('/admin/city/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,cityController.partialUpdateCity);
router.route('/admin/city/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,cityController.updateCity);    
router.route('/admin/city/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,cityController.getCity);
router.route('/admin/city/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,cityController.getCity);
router.route('/admin/city/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,cityController.deleteCity);

module.exports = router;
