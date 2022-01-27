/**
 * walletRoutes.js
 * @description :: CRUD API routes for wallet
 */

const express = require('express');
const router = express.Router();
const walletController = require('../../controller/admin/walletController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/wallet/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,walletController.addWallet);
router.route('/admin/wallet/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,walletController.findAllWallet);
router.route('/admin/wallet/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,walletController.getWalletCount);
router.route('/admin/wallet/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,walletController.getWalletByAggregate);
router.route('/admin/wallet/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,walletController.softDeleteManyWallet);
router.route('/admin/wallet/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,walletController.bulkInsertWallet);
router.route('/admin/wallet/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,walletController.bulkUpdateWallet);
router.route('/admin/wallet/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,walletController.deleteManyWallet);
router.route('/admin/wallet/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,walletController.softDeleteWallet);
router.route('/admin/wallet/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,walletController.partialUpdateWallet);
router.route('/admin/wallet/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,walletController.updateWallet);    
router.route('/admin/wallet/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,walletController.getWallet);
router.route('/admin/wallet/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,walletController.getWallet);
router.route('/admin/wallet/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,walletController.deleteWallet);

module.exports = router;
