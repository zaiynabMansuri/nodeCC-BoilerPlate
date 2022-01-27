/**
 * walletRoutes.js
 * @description :: CRUD API routes for wallet
 */

const express = require('express');
const router = express.Router();
const walletController = require('../../../controller/client/v1/walletController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/wallet/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,walletController.addWallet);
router.route('/client/api/v1/wallet/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,walletController.findAllWallet);
router.route('/client/api/v1/wallet/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,walletController.getWalletCount);
router.route('/client/api/v1/wallet/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,walletController.getWalletByAggregate);
router.route('/client/api/v1/wallet/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,walletController.softDeleteManyWallet);
router.route('/client/api/v1/wallet/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,walletController.bulkInsertWallet);
router.route('/client/api/v1/wallet/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,walletController.bulkUpdateWallet);
router.route('/client/api/v1/wallet/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,walletController.deleteManyWallet);
router.route('/client/api/v1/wallet/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,walletController.softDeleteWallet);
router.route('/client/api/v1/wallet/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,walletController.partialUpdateWallet);
router.route('/client/api/v1/wallet/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,walletController.updateWallet);    
router.route('/client/api/v1/wallet/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,walletController.getWallet);
router.route('/client/api/v1/wallet/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,walletController.getWallet);
router.route('/client/api/v1/wallet/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,walletController.deleteWallet);

module.exports = router;
