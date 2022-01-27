/**
 * cityRoutes.js
 * @description :: CRUD API routes for city
 */

const express = require('express');
const router = express.Router();
const cityController = require('../../../controller/device/v1/cityController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/city/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,cityController.addCity);
router.route('/device/api/v1/city/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,cityController.findAllCity);
router.route('/device/api/v1/city/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,cityController.getCityCount);
router.route('/device/api/v1/city/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,cityController.getCityByAggregate);
router.route('/device/api/v1/city/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,cityController.softDeleteManyCity);
router.route('/device/api/v1/city/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,cityController.bulkInsertCity);
router.route('/device/api/v1/city/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,cityController.bulkUpdateCity);
router.route('/device/api/v1/city/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,cityController.deleteManyCity);
router.route('/device/api/v1/city/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,cityController.softDeleteCity);
router.route('/device/api/v1/city/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,cityController.partialUpdateCity);
router.route('/device/api/v1/city/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,cityController.updateCity);    
router.route('/device/api/v1/city/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,cityController.getCity);
router.route('/device/api/v1/city/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,cityController.getCity);
router.route('/device/api/v1/city/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,cityController.deleteCity);

module.exports = router;
