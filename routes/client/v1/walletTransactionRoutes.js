/**
 * walletTransactionRoutes.js
 * @description :: CRUD API routes for walletTransaction
 */

const express = require('express');
const router = express.Router();
const walletTransactionController = require('../../../controller/client/v1/walletTransactionController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/wallettransaction/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.addWalletTransaction);
router.route('/client/api/v1/wallettransaction/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.findAllWalletTransaction);
router.route('/client/api/v1/wallettransaction/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransactionCount);
router.route('/client/api/v1/wallettransaction/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransactionByAggregate);
router.route('/client/api/v1/wallettransaction/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.softDeleteManyWalletTransaction);
router.route('/client/api/v1/wallettransaction/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.bulkInsertWalletTransaction);
router.route('/client/api/v1/wallettransaction/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.bulkUpdateWalletTransaction);
router.route('/client/api/v1/wallettransaction/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.deleteManyWalletTransaction);
router.route('/client/api/v1/wallettransaction/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.softDeleteWalletTransaction);
router.route('/client/api/v1/wallettransaction/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.partialUpdateWalletTransaction);
router.route('/client/api/v1/wallettransaction/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.updateWalletTransaction);    
router.route('/client/api/v1/wallettransaction/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransaction);
router.route('/client/api/v1/wallettransaction/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.getWalletTransaction);
router.route('/client/api/v1/wallettransaction/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,walletTransactionController.deleteWalletTransaction);

module.exports = router;
