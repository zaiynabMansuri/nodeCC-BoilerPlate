/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let User = require('../model/user');
let Product = require('../model/product');
let Category = require('../model/category');
let Order = require('../model/order');
let Cart = require('../model/cart');
let Country = require('../model/country');
let City = require('../model/city');
let Pincode = require('../model/pincode');
let State = require('../model/state');
let Wallet = require('../model/wallet');
let WalletTransaction = require('../model/walletTransaction');
let Shipping = require('../model/shipping');
let UserTokens = require('../model/userTokens');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter2389 = { 'addedBy': { '$in': user } };
      const user8836 = await deleteUser(userFilter2389);
      const userFilter8526 = { 'updatedBy': { '$in': user } };
      const user9844 = await deleteUser(userFilter8526);
      const productFilter4843 = { 'sellerId': { '$in': user } };
      const product2212 = await deleteProduct(productFilter4843);
      const productFilter5716 = { 'addedBy': { '$in': user } };
      const product2583 = await deleteProduct(productFilter5716);
      const productFilter8677 = { 'updatedBy': { '$in': user } };
      const product2643 = await deleteProduct(productFilter8677);
      const categoryFilter6996 = { 'addedBy': { '$in': user } };
      const category1862 = await deleteCategory(categoryFilter6996);
      const categoryFilter8734 = { 'updatedBy': { '$in': user } };
      const category6977 = await deleteCategory(categoryFilter8734);
      const orderFilter9434 = { 'addedBy': { '$in': user } };
      const order1080 = await deleteOrder(orderFilter9434);
      const orderFilter4091 = { 'updatedBy': { '$in': user } };
      const order2026 = await deleteOrder(orderFilter4091);
      const cartFilter0081 = { 'addedBy': { '$in': user } };
      const cart3268 = await deleteCart(cartFilter0081);
      const cartFilter0841 = { 'updatedBy': { '$in': user } };
      const cart1350 = await deleteCart(cartFilter0841);
      const countryFilter8821 = { 'addedBy': { '$in': user } };
      const country9622 = await deleteCountry(countryFilter8821);
      const countryFilter8584 = { 'updatedBy': { '$in': user } };
      const country5362 = await deleteCountry(countryFilter8584);
      const cityFilter4390 = { 'addedBy': { '$in': user } };
      const city5663 = await deleteCity(cityFilter4390);
      const cityFilter8680 = { 'updatedBy': { '$in': user } };
      const city6090 = await deleteCity(cityFilter8680);
      const pincodeFilter6220 = { 'addedBy': { '$in': user } };
      const pincode4909 = await deletePincode(pincodeFilter6220);
      const pincodeFilter2740 = { 'updatedBy': { '$in': user } };
      const pincode6385 = await deletePincode(pincodeFilter2740);
      const stateFilter6775 = { 'addedBy': { '$in': user } };
      const state8762 = await deleteState(stateFilter6775);
      const stateFilter1603 = { 'updatedBy': { '$in': user } };
      const state4830 = await deleteState(stateFilter1603);
      const walletFilter9525 = { 'userId': { '$in': user } };
      const wallet4905 = await deleteWallet(walletFilter9525);
      const walletFilter8425 = { 'addedBy': { '$in': user } };
      const wallet8859 = await deleteWallet(walletFilter8425);
      const walletFilter8833 = { 'updatedBy': { '$in': user } };
      const wallet4542 = await deleteWallet(walletFilter8833);
      const walletTransactionFilter4644 = { 'userId': { '$in': user } };
      const walletTransaction1502 = await deleteWalletTransaction(walletTransactionFilter4644);
      const walletTransactionFilter0374 = { 'addedBy': { '$in': user } };
      const walletTransaction3719 = await deleteWalletTransaction(walletTransactionFilter0374);
      const walletTransactionFilter4143 = { 'updatedBy': { '$in': user } };
      const walletTransaction0440 = await deleteWalletTransaction(walletTransactionFilter4143);
      const shippingFilter3866 = { 'addedBy': { '$in': user } };
      const shipping6976 = await deleteShipping(shippingFilter3866);
      const shippingFilter7775 = { 'updatedBy': { '$in': user } };
      const shipping6356 = await deleteShipping(shippingFilter7775);
      const userTokensFilter1378 = { 'userId': { '$in': user } };
      const userTokens5834 = await deleteUserTokens(userTokensFilter1378);
      const userRoleFilter9331 = { 'userId': { '$in': user } };
      const userRole8148 = await deleteUserRole(userRoleFilter9331);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProduct = async (filter) =>{
  try {
    return await Product.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCategory = async (filter) =>{
  try {
    let category = await Category.find(filter, { _id:1 });
    if (category.length){
      category = category.map((obj) => obj._id);
      const productFilter6386 = { 'category': { '$in': category } };
      const product1069 = await deleteProduct(productFilter6386);
      const productFilter9265 = { 'subCategory': { '$in': category } };
      const product7339 = await deleteProduct(productFilter9265);
      const categoryFilter8797 = { 'parentCategoryId': { '$in': category } };
      const category4081 = await deleteCategory(categoryFilter8797);
      return await Category.deleteMany(filter);
    } else {
      return 'No category found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOrder = async (filter) =>{
  try {
    return await Order.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCart = async (filter) =>{
  try {
    return await Cart.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCountry = async (filter) =>{
  try {
    let country = await Country.find(filter, { _id:1 });
    if (country.length){
      country = country.map((obj) => obj._id);
      const pincodeFilter4792 = { 'countryId': { '$in': country } };
      const pincode5361 = await deletePincode(pincodeFilter4792);
      const stateFilter4356 = { 'countryId': { '$in': country } };
      const state2157 = await deleteState(stateFilter4356);
      return await Country.deleteMany(filter);
    } else {
      return 'No country found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCity = async (filter) =>{
  try {
    let city = await City.find(filter, { _id:1 });
    if (city.length){
      city = city.map((obj) => obj._id);
      const pincodeFilter0328 = { 'cityId': { '$in': city } };
      const pincode7800 = await deletePincode(pincodeFilter0328);
      return await City.deleteMany(filter);
    } else {
      return 'No city found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deletePincode = async (filter) =>{
  try {
    return await Pincode.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteState = async (filter) =>{
  try {
    let state = await State.find(filter, { _id:1 });
    if (state.length){
      state = state.map((obj) => obj._id);
      const cityFilter8628 = { 'stateId': { '$in': state } };
      const city0854 = await deleteCity(cityFilter8628);
      const pincodeFilter2609 = { 'stateId': { '$in': state } };
      const pincode3134 = await deletePincode(pincodeFilter2609);
      return await State.deleteMany(filter);
    } else {
      return 'No state found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteWallet = async (filter) =>{
  try {
    let wallet = await Wallet.find(filter, { _id:1 });
    if (wallet.length){
      wallet = wallet.map((obj) => obj._id);
      const walletTransactionFilter3451 = { 'walletId': { '$in': wallet } };
      const walletTransaction3517 = await deleteWalletTransaction(walletTransactionFilter3451);
      return await Wallet.deleteMany(filter);
    } else {
      return 'No wallet found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteWalletTransaction = async (filter) =>{
  try {
    return await WalletTransaction.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteShipping = async (filter) =>{
  try {
    return await Shipping.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    return await UserTokens.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter2375 = { 'roleId': { '$in': role } };
      const routeRole6284 = await deleteRouteRole(routeRoleFilter2375);
      const userRoleFilter6231 = { 'roleId': { '$in': role } };
      const userRole3875 = await deleteUserRole(userRoleFilter6231);
      return await Role.deleteMany(filter);
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter3854 = { 'routeId': { '$in': projectroute } };
      const routeRole9450 = await deleteRouteRole(routeRoleFilter3854);
      return await ProjectRoute.deleteMany(filter);
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    return await UserRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
        
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);

      const userFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const userCnt =  await dbService.countDocument(User,userFilter);

      const productFilter = { '$or': [{                    sellerId : { '$in' : user } },{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const productCnt =  await dbService.countDocument(Product,productFilter);

      const categoryFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const categoryCnt =  await dbService.countDocument(Category,categoryFilter);

      const orderFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const orderCnt =  await dbService.countDocument(Order,orderFilter);

      const cartFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const cartCnt =  await dbService.countDocument(Cart,cartFilter);

      const countryFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const countryCnt =  await dbService.countDocument(Country,countryFilter);

      const cityFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const cityCnt =  await dbService.countDocument(City,cityFilter);

      const pincodeFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const pincodeCnt =  await dbService.countDocument(Pincode,pincodeFilter);

      const stateFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const stateCnt =  await dbService.countDocument(State,stateFilter);

      const walletFilter = { '$or': [{                    userId : { '$in' : user } },{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const walletCnt =  await dbService.countDocument(Wallet,walletFilter);

      const walletTransactionFilter = { '$or': [{                    userId : { '$in' : user } },{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const walletTransactionCnt =  await dbService.countDocument(WalletTransaction,walletTransactionFilter);

      const shippingFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const shippingCnt =  await dbService.countDocument(Shipping,shippingFilter);

      const userTokensFilter = { '$or': [{                    userId : { '$in' : user } }] };
      const userTokensCnt =  await dbService.countDocument(UserTokens,userTokensFilter);

      const userRoleFilter = { '$or': [{                    userId : { '$in' : user } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        user : userCnt,
        product : productCnt,
        category : categoryCnt,
        order : orderCnt,
        cart : cartCnt,
        country : countryCnt,
        city : cityCnt,
        pincode : pincodeCnt,
        state : stateCnt,
        wallet : walletCnt,
        walletTransaction : walletTransactionCnt,
        shipping : shippingCnt,
        userTokens : userTokensCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProduct = async (filter) =>{
  try {
        
    const productCnt =  await Product.countDocuments(filter);
    return { product : productCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countCategory = async (filter) =>{
  try {
        
    let category = await Category.find(filter, { _id:1 });
    if (category.length){
      category = category.map((obj) => obj._id);

      const productFilter = { '$or': [{                    category : { '$in' : category } },{                    subCategory : { '$in' : category } }] };
      const productCnt =  await dbService.countDocument(Product,productFilter);

      const categoryFilter = { '$or': [{                    parentCategoryId : { '$in' : category } }] };
      const categoryCnt =  await dbService.countDocument(Category,categoryFilter);

      let response = {
        product : productCnt,
        category : categoryCnt,
      };
      return response;
    } else {
      return {  category : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countOrder = async (filter) =>{
  try {
        
    const orderCnt =  await Order.countDocuments(filter);
    return { order : orderCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countCart = async (filter) =>{
  try {
        
    const cartCnt =  await Cart.countDocuments(filter);
    return { cart : cartCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countCountry = async (filter) =>{
  try {
        
    let country = await Country.find(filter, { _id:1 });
    if (country.length){
      country = country.map((obj) => obj._id);

      const pincodeFilter = { '$or': [{                    countryId : { '$in' : country } }] };
      const pincodeCnt =  await dbService.countDocument(Pincode,pincodeFilter);

      const stateFilter = { '$or': [{                    countryId : { '$in' : country } }] };
      const stateCnt =  await dbService.countDocument(State,stateFilter);

      let response = {
        pincode : pincodeCnt,
        state : stateCnt,
      };
      return response;
    } else {
      return {  country : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countCity = async (filter) =>{
  try {
        
    let city = await City.find(filter, { _id:1 });
    if (city.length){
      city = city.map((obj) => obj._id);

      const pincodeFilter = { '$or': [{                    cityId : { '$in' : city } }] };
      const pincodeCnt =  await dbService.countDocument(Pincode,pincodeFilter);

      let response = { pincode : pincodeCnt, };
      return response;
    } else {
      return {  city : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countPincode = async (filter) =>{
  try {
        
    const pincodeCnt =  await Pincode.countDocuments(filter);
    return { pincode : pincodeCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countState = async (filter) =>{
  try {
        
    let state = await State.find(filter, { _id:1 });
    if (state.length){
      state = state.map((obj) => obj._id);

      const cityFilter = { '$or': [{                    stateId : { '$in' : state } }] };
      const cityCnt =  await dbService.countDocument(City,cityFilter);

      const pincodeFilter = { '$or': [{                    stateId : { '$in' : state } }] };
      const pincodeCnt =  await dbService.countDocument(Pincode,pincodeFilter);

      let response = {
        city : cityCnt,
        pincode : pincodeCnt,
      };
      return response;
    } else {
      return {  state : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countWallet = async (filter) =>{
  try {
        
    let wallet = await Wallet.find(filter, { _id:1 });
    if (wallet.length){
      wallet = wallet.map((obj) => obj._id);

      const walletTransactionFilter = { '$or': [{                    walletId : { '$in' : wallet } }] };
      const walletTransactionCnt =  await dbService.countDocument(WalletTransaction,walletTransactionFilter);

      let response = { walletTransaction : walletTransactionCnt, };
      return response;
    } else {
      return {  wallet : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countWalletTransaction = async (filter) =>{
  try {
        
    const walletTransactionCnt =  await WalletTransaction.countDocuments(filter);
    return { walletTransaction : walletTransactionCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countShipping = async (filter) =>{
  try {
        
    const shippingCnt =  await Shipping.countDocuments(filter);
    return { shipping : shippingCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
        
    const userTokensCnt =  await UserTokens.countDocuments(filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
        
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{                    roleId : { '$in' : role } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{                    roleId : { '$in' : role } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
        
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{                    routeId : { '$in' : projectroute } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      let response = { routeRole : routeRoleCnt, };
      return response;
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
        
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
        
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter1976 = { 'addedBy': { '$in': user } };
      const user6953 = await softDeleteUser(userFilter1976, updateBody);
      const userFilter9463 = { 'updatedBy': { '$in': user } };
      const user8662 = await softDeleteUser(userFilter9463, updateBody);
      const productFilter5828 = { 'sellerId': { '$in': user } };
      const product0157 = await softDeleteProduct(productFilter5828, updateBody);
      const productFilter6043 = { 'addedBy': { '$in': user } };
      const product0742 = await softDeleteProduct(productFilter6043, updateBody);
      const productFilter5387 = { 'updatedBy': { '$in': user } };
      const product2970 = await softDeleteProduct(productFilter5387, updateBody);
      const categoryFilter8601 = { 'addedBy': { '$in': user } };
      const category8003 = await softDeleteCategory(categoryFilter8601, updateBody);
      const categoryFilter4518 = { 'updatedBy': { '$in': user } };
      const category2579 = await softDeleteCategory(categoryFilter4518, updateBody);
      const orderFilter4031 = { 'addedBy': { '$in': user } };
      const order9062 = await softDeleteOrder(orderFilter4031, updateBody);
      const orderFilter2600 = { 'updatedBy': { '$in': user } };
      const order0537 = await softDeleteOrder(orderFilter2600, updateBody);
      const cartFilter3455 = { 'addedBy': { '$in': user } };
      const cart5845 = await softDeleteCart(cartFilter3455, updateBody);
      const cartFilter8767 = { 'updatedBy': { '$in': user } };
      const cart0342 = await softDeleteCart(cartFilter8767, updateBody);
      const countryFilter2914 = { 'addedBy': { '$in': user } };
      const country5775 = await softDeleteCountry(countryFilter2914, updateBody);
      const countryFilter2626 = { 'updatedBy': { '$in': user } };
      const country1496 = await softDeleteCountry(countryFilter2626, updateBody);
      const cityFilter5061 = { 'addedBy': { '$in': user } };
      const city6560 = await softDeleteCity(cityFilter5061, updateBody);
      const cityFilter4188 = { 'updatedBy': { '$in': user } };
      const city8279 = await softDeleteCity(cityFilter4188, updateBody);
      const pincodeFilter8109 = { 'addedBy': { '$in': user } };
      const pincode2546 = await softDeletePincode(pincodeFilter8109, updateBody);
      const pincodeFilter0508 = { 'updatedBy': { '$in': user } };
      const pincode4203 = await softDeletePincode(pincodeFilter0508, updateBody);
      const stateFilter0644 = { 'addedBy': { '$in': user } };
      const state7868 = await softDeleteState(stateFilter0644, updateBody);
      const stateFilter6915 = { 'updatedBy': { '$in': user } };
      const state1507 = await softDeleteState(stateFilter6915, updateBody);
      const walletFilter3899 = { 'userId': { '$in': user } };
      const wallet3240 = await softDeleteWallet(walletFilter3899, updateBody);
      const walletFilter0597 = { 'addedBy': { '$in': user } };
      const wallet3633 = await softDeleteWallet(walletFilter0597, updateBody);
      const walletFilter3924 = { 'updatedBy': { '$in': user } };
      const wallet9207 = await softDeleteWallet(walletFilter3924, updateBody);
      const walletTransactionFilter7644 = { 'userId': { '$in': user } };
      const walletTransaction2698 = await softDeleteWalletTransaction(walletTransactionFilter7644, updateBody);
      const walletTransactionFilter4949 = { 'addedBy': { '$in': user } };
      const walletTransaction4754 = await softDeleteWalletTransaction(walletTransactionFilter4949, updateBody);
      const walletTransactionFilter2581 = { 'updatedBy': { '$in': user } };
      const walletTransaction6729 = await softDeleteWalletTransaction(walletTransactionFilter2581, updateBody);
      const shippingFilter5196 = { 'addedBy': { '$in': user } };
      const shipping1892 = await softDeleteShipping(shippingFilter5196, updateBody);
      const shippingFilter0619 = { 'updatedBy': { '$in': user } };
      const shipping1853 = await softDeleteShipping(shippingFilter0619, updateBody);
      const userTokensFilter8433 = { 'userId': { '$in': user } };
      const userTokens7071 = await softDeleteUserTokens(userTokensFilter8433, updateBody);
      const userRoleFilter9030 = { 'userId': { '$in': user } };
      const userRole2350 = await softDeleteUserRole(userRoleFilter9030, updateBody);
      return await User.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProduct = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Product.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCategory = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let category = await Category.find(filter, { _id:1 });
    if (category.length){
      category = category.map((obj) => obj._id);
      const productFilter8751 = { 'category': { '$in': category } };
      const product4980 = await softDeleteProduct(productFilter8751, updateBody);
      const productFilter8157 = { 'subCategory': { '$in': category } };
      const product5124 = await softDeleteProduct(productFilter8157, updateBody);
      const categoryFilter1759 = { 'parentCategoryId': { '$in': category } };
      const category3459 = await softDeleteCategory(categoryFilter1759, updateBody);
      return await Category.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No category found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOrder = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Order.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCart = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Cart.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCountry = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let country = await Country.find(filter, { _id:1 });
    if (country.length){
      country = country.map((obj) => obj._id);
      const pincodeFilter8899 = { 'countryId': { '$in': country } };
      const pincode6970 = await softDeletePincode(pincodeFilter8899, updateBody);
      const stateFilter7703 = { 'countryId': { '$in': country } };
      const state3873 = await softDeleteState(stateFilter7703, updateBody);
      return await Country.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No country found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCity = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let city = await City.find(filter, { _id:1 });
    if (city.length){
      city = city.map((obj) => obj._id);
      const pincodeFilter9714 = { 'cityId': { '$in': city } };
      const pincode3918 = await softDeletePincode(pincodeFilter9714, updateBody);
      return await City.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No city found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeletePincode = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Pincode.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteState = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let state = await State.find(filter, { _id:1 });
    if (state.length){
      state = state.map((obj) => obj._id);
      const cityFilter0699 = { 'stateId': { '$in': state } };
      const city3070 = await softDeleteCity(cityFilter0699, updateBody);
      const pincodeFilter2021 = { 'stateId': { '$in': state } };
      const pincode1574 = await softDeletePincode(pincodeFilter2021, updateBody);
      return await State.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No state found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteWallet = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let wallet = await Wallet.find(filter, { _id:1 });
    if (wallet.length){
      wallet = wallet.map((obj) => obj._id);
      const walletTransactionFilter8822 = { 'walletId': { '$in': wallet } };
      const walletTransaction2337 = await softDeleteWalletTransaction(walletTransactionFilter8822, updateBody);
      return await Wallet.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No wallet found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteWalletTransaction = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await WalletTransaction.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteShipping = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Shipping.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserTokens.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter3653 = { 'roleId': { '$in': role } };
      const routeRole3988 = await softDeleteRouteRole(routeRoleFilter3653, updateBody);
      const userRoleFilter6277 = { 'roleId': { '$in': role } };
      const userRole9610 = await softDeleteUserRole(userRoleFilter6277, updateBody);
      return await Role.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter4395 = { 'routeId': { '$in': projectroute } };
      const routeRole0733 = await softDeleteRouteRole(routeRoleFilter4395, updateBody);
      return await ProjectRoute.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await RouteRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteUser,
  deleteProduct,
  deleteCategory,
  deleteOrder,
  deleteCart,
  deleteCountry,
  deleteCity,
  deletePincode,
  deleteState,
  deleteWallet,
  deleteWalletTransaction,
  deleteShipping,
  deleteUserTokens,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countUser,
  countProduct,
  countCategory,
  countOrder,
  countCart,
  countCountry,
  countCity,
  countPincode,
  countState,
  countWallet,
  countWalletTransaction,
  countShipping,
  countUserTokens,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteUser,
  softDeleteProduct,
  softDeleteCategory,
  softDeleteOrder,
  softDeleteCart,
  softDeleteCountry,
  softDeleteCity,
  softDeletePincode,
  softDeleteState,
  softDeleteWallet,
  softDeleteWalletTransaction,
  softDeleteShipping,
  softDeleteUserTokens,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
