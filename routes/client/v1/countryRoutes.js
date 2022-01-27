/**
 * countryRoutes.js
 * @description :: CRUD API routes for country
 */

const express = require('express');
const router = express.Router();
const countryController = require('../../../controller/client/v1/countryController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/country/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,countryController.addCountry);
router.route('/client/api/v1/country/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,countryController.findAllCountry);
router.route('/client/api/v1/country/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,countryController.getCountryCount);
router.route('/client/api/v1/country/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,countryController.getCountryByAggregate);
router.route('/client/api/v1/country/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,countryController.softDeleteManyCountry);
router.route('/client/api/v1/country/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,countryController.bulkInsertCountry);
router.route('/client/api/v1/country/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,countryController.bulkUpdateCountry);
router.route('/client/api/v1/country/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,countryController.deleteManyCountry);
router.route('/client/api/v1/country/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,countryController.softDeleteCountry);
router.route('/client/api/v1/country/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,countryController.partialUpdateCountry);
router.route('/client/api/v1/country/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,countryController.updateCountry);    
router.route('/client/api/v1/country/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,countryController.getCountry);
router.route('/client/api/v1/country/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,countryController.getCountry);
router.route('/client/api/v1/country/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,countryController.deleteCountry);

module.exports = router;
