/**
 * walletTransactionRoutes.js
 * @description :: CRUD API routes for walletTransaction
 */

const express = require('express');
const router = express.Router();
const walletTransactionController = require('../../controller/admin/walletTransactionController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/wallettransaction/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.addWalletTransaction);
router.route('/admin/wallettransaction/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.findAllWalletTransaction);
router.route('/admin/wallettransaction/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransactionCount);
router.route('/admin/wallettransaction/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransactionByAggregate);
router.route('/admin/wallettransaction/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.softDeleteManyWalletTransaction);
router.route('/admin/wallettransaction/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.bulkInsertWalletTransaction);
router.route('/admin/wallettransaction/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.bulkUpdateWalletTransaction);
router.route('/admin/wallettransaction/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.deleteManyWalletTransaction);
router.route('/admin/wallettransaction/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.softDeleteWalletTransaction);
router.route('/admin/wallettransaction/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.partialUpdateWalletTransaction);
router.route('/admin/wallettransaction/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.updateWalletTransaction);    
router.route('/admin/wallettransaction/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransaction);
router.route('/admin/wallettransaction/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransaction);
router.route('/admin/wallettransaction/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,walletTransactionController.deleteWalletTransaction);

module.exports = router;
