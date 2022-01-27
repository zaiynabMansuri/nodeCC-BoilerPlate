/**
 * bannerRoutes.js
 * @description :: CRUD API routes for banner
 */

const express = require('express');
const router = express.Router();
const bannerController = require('../../../controller/client/v1/bannerController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/banner/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,bannerController.addBanner);
router.route('/client/api/v1/banner/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,bannerController.findAllBanner);
router.route('/client/api/v1/banner/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,bannerController.getBannerCount);
router.route('/client/api/v1/banner/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,bannerController.getBannerByAggregate);
router.route('/client/api/v1/banner/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,bannerController.softDeleteManyBanner);
router.route('/client/api/v1/banner/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,bannerController.bulkInsertBanner);
router.route('/client/api/v1/banner/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,bannerController.bulkUpdateBanner);
router.route('/client/api/v1/banner/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,bannerController.deleteManyBanner);
router.route('/client/api/v1/banner/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,bannerController.softDeleteBanner);
router.route('/client/api/v1/banner/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,bannerController.partialUpdateBanner);
router.route('/client/api/v1/banner/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,bannerController.updateBanner);    
router.route('/client/api/v1/banner/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,bannerController.getBanner);
router.route('/client/api/v1/banner/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,bannerController.getBanner);
router.route('/client/api/v1/banner/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,bannerController.deleteBanner);

module.exports = router;
