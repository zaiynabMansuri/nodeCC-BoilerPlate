/**
 * countryRoutes.js
 * @description :: CRUD API routes for country
 */

const express = require('express');
const router = express.Router();
const countryController = require('../../../controller/device/v1/countryController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/country/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,countryController.addCountry);
router.route('/device/api/v1/country/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,countryController.findAllCountry);
router.route('/device/api/v1/country/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,countryController.getCountryCount);
router.route('/device/api/v1/country/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,countryController.getCountryByAggregate);
router.route('/device/api/v1/country/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,countryController.softDeleteManyCountry);
router.route('/device/api/v1/country/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,countryController.bulkInsertCountry);
router.route('/device/api/v1/country/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,countryController.bulkUpdateCountry);
router.route('/device/api/v1/country/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,countryController.deleteManyCountry);
router.route('/device/api/v1/country/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,countryController.softDeleteCountry);
router.route('/device/api/v1/country/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,countryController.partialUpdateCountry);
router.route('/device/api/v1/country/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,countryController.updateCountry);    
router.route('/device/api/v1/country/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,countryController.getCountry);
router.route('/device/api/v1/country/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,countryController.getCountry);
router.route('/device/api/v1/country/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,countryController.deleteCountry);

module.exports = router;
