/**
 * walletTransactionRoutes.js
 * @description :: CRUD API routes for walletTransaction
 */

const express = require('express');
const router = express.Router();
const walletTransactionController = require('../../../controller/device/v1/walletTransactionController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/wallettransaction/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.addWalletTransaction);
router.route('/device/api/v1/wallettransaction/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.findAllWalletTransaction);
router.route('/device/api/v1/wallettransaction/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.getWalletTransactionCount);
router.route('/device/api/v1/wallettransaction/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.getWalletTransactionByAggregate);
router.route('/device/api/v1/wallettransaction/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.softDeleteManyWalletTransaction);
router.route('/device/api/v1/wallettransaction/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.bulkInsertWalletTransaction);
router.route('/device/api/v1/wallettransaction/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.bulkUpdateWalletTransaction);
router.route('/device/api/v1/wallettransaction/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.deleteManyWalletTransaction);
router.route('/device/api/v1/wallettransaction/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.softDeleteWalletTransaction);
router.route('/device/api/v1/wallettransaction/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.partialUpdateWalletTransaction);
router.route('/device/api/v1/wallettransaction/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.updateWalletTransaction);    
router.route('/device/api/v1/wallettransaction/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.getWalletTransaction);
router.route('/device/api/v1/wallettransaction/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.getWalletTransaction);
router.route('/device/api/v1/wallettransaction/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,walletTransactionController.deleteWalletTransaction);

module.exports = router;
