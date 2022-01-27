/**
 * cityRoutes.js
 * @description :: CRUD API routes for city
 */

const express = require('express');
const router = express.Router();
const cityController = require('../../../controller/client/v1/cityController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/city/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,cityController.addCity);
router.route('/client/api/v1/city/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,cityController.findAllCity);
router.route('/client/api/v1/city/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,cityController.getCityCount);
router.route('/client/api/v1/city/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,cityController.getCityByAggregate);
router.route('/client/api/v1/city/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,cityController.softDeleteManyCity);
router.route('/client/api/v1/city/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,cityController.bulkInsertCity);
router.route('/client/api/v1/city/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,cityController.bulkUpdateCity);
router.route('/client/api/v1/city/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,cityController.deleteManyCity);
router.route('/client/api/v1/city/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,cityController.softDeleteCity);
router.route('/client/api/v1/city/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,cityController.partialUpdateCity);
router.route('/client/api/v1/city/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,cityController.updateCity);    
router.route('/client/api/v1/city/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,cityController.getCity);
router.route('/client/api/v1/city/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,cityController.getCity);
router.route('/client/api/v1/city/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,cityController.deleteCity);

module.exports = router;
