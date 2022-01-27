/**
 * walletRoutes.js
 * @description :: CRUD API routes for wallet
 */

const express = require('express');
const router = express.Router();
const walletController = require('../../../controller/device/v1/walletController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/wallet/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,walletController.addWallet);
router.route('/device/api/v1/wallet/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,walletController.findAllWallet);
router.route('/device/api/v1/wallet/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,walletController.getWalletCount);
router.route('/device/api/v1/wallet/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,walletController.getWalletByAggregate);
router.route('/device/api/v1/wallet/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,walletController.softDeleteManyWallet);
router.route('/device/api/v1/wallet/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,walletController.bulkInsertWallet);
router.route('/device/api/v1/wallet/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,walletController.bulkUpdateWallet);
router.route('/device/api/v1/wallet/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,walletController.deleteManyWallet);
router.route('/device/api/v1/wallet/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,walletController.softDeleteWallet);
router.route('/device/api/v1/wallet/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,walletController.partialUpdateWallet);
router.route('/device/api/v1/wallet/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,walletController.updateWallet);    
router.route('/device/api/v1/wallet/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,walletController.getWallet);
router.route('/device/api/v1/wallet/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,walletController.getWallet);
router.route('/device/api/v1/wallet/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,walletController.deleteWallet);

module.exports = router;
