/**
 * countryRoutes.js
 * @description :: CRUD API routes for country
 */

const express = require('express');
const router = express.Router();
const countryController = require('../../controller/admin/countryController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/country/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,countryController.addCountry);
router.route('/admin/country/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,countryController.findAllCountry);
router.route('/admin/country/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,countryController.getCountryCount);
router.route('/admin/country/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,countryController.getCountryByAggregate);
router.route('/admin/country/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,countryController.softDeleteManyCountry);
router.route('/admin/country/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,countryController.bulkInsertCountry);
router.route('/admin/country/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,countryController.bulkUpdateCountry);
router.route('/admin/country/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,countryController.deleteManyCountry);
router.route('/admin/country/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,countryController.softDeleteCountry);
router.route('/admin/country/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,countryController.partialUpdateCountry);
router.route('/admin/country/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,countryController.updateCountry);    
router.route('/admin/country/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,countryController.getCountry);
router.route('/admin/country/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,countryController.getCountry);
router.route('/admin/country/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,countryController.deleteCountry);

module.exports = router;
