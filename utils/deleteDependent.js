/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let User = require('../model/user');
let Product = require('../model/product');
let Category = require('../model/category');
let Order = require('../model/order');
let Banner = require('../model/banner');
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
      const userFilter8577 = { 'addedBy': { '$in': user } };
      const user6466 = await deleteUser(userFilter8577);
      const userFilter6028 = { 'updatedBy': { '$in': user } };
      const user8928 = await deleteUser(userFilter6028);
      const productFilter8876 = { 'sellerId': { '$in': user } };
      const product8454 = await deleteProduct(productFilter8876);
      const productFilter6961 = { 'addedBy': { '$in': user } };
      const product8123 = await deleteProduct(productFilter6961);
      const productFilter3456 = { 'updatedBy': { '$in': user } };
      const product0225 = await deleteProduct(productFilter3456);
      const categoryFilter5723 = { 'addedBy': { '$in': user } };
      const category5776 = await deleteCategory(categoryFilter5723);
      const categoryFilter9529 = { 'updatedBy': { '$in': user } };
      const category1879 = await deleteCategory(categoryFilter9529);
      const orderFilter3575 = { 'addedBy': { '$in': user } };
      const order8966 = await deleteOrder(orderFilter3575);
      const orderFilter3029 = { 'updatedBy': { '$in': user } };
      const order1429 = await deleteOrder(orderFilter3029);
      const bannerFilter6517 = { 'addedBy': { '$in': user } };
      const banner1537 = await deleteBanner(bannerFilter6517);
      const bannerFilter3729 = { 'updatedBy': { '$in': user } };
      const banner7534 = await deleteBanner(bannerFilter3729);
      const bannerFilter5552 = { 'sellerId': { '$in': user } };
      const banner6730 = await deleteBanner(bannerFilter5552);
      const cartFilter5156 = { 'addedBy': { '$in': user } };
      const cart7811 = await deleteCart(cartFilter5156);
      const cartFilter1553 = { 'updatedBy': { '$in': user } };
      const cart4388 = await deleteCart(cartFilter1553);
      const countryFilter7510 = { 'addedBy': { '$in': user } };
      const country6241 = await deleteCountry(countryFilter7510);
      const countryFilter0764 = { 'updatedBy': { '$in': user } };
      const country0479 = await deleteCountry(countryFilter0764);
      const cityFilter9281 = { 'addedBy': { '$in': user } };
      const city1049 = await deleteCity(cityFilter9281);
      const cityFilter3843 = { 'updatedBy': { '$in': user } };
      const city3224 = await deleteCity(cityFilter3843);
      const pincodeFilter3253 = { 'addedBy': { '$in': user } };
      const pincode5093 = await deletePincode(pincodeFilter3253);
      const pincodeFilter1872 = { 'updatedBy': { '$in': user } };
      const pincode9857 = await deletePincode(pincodeFilter1872);
      const stateFilter8814 = { 'addedBy': { '$in': user } };
      const state4121 = await deleteState(stateFilter8814);
      const stateFilter5563 = { 'updatedBy': { '$in': user } };
      const state1457 = await deleteState(stateFilter5563);
      const walletFilter0581 = { 'userId': { '$in': user } };
      const wallet8646 = await deleteWallet(walletFilter0581);
      const walletFilter3075 = { 'addedBy': { '$in': user } };
      const wallet2985 = await deleteWallet(walletFilter3075);
      const walletFilter6244 = { 'updatedBy': { '$in': user } };
      const wallet2470 = await deleteWallet(walletFilter6244);
      const walletTransactionFilter4640 = { 'userId': { '$in': user } };
      const walletTransaction8673 = await deleteWalletTransaction(walletTransactionFilter4640);
      const walletTransactionFilter5459 = { 'addedBy': { '$in': user } };
      const walletTransaction1983 = await deleteWalletTransaction(walletTransactionFilter5459);
      const walletTransactionFilter4477 = { 'updatedBy': { '$in': user } };
      const walletTransaction8565 = await deleteWalletTransaction(walletTransactionFilter4477);
      const shippingFilter7651 = { 'addedBy': { '$in': user } };
      const shipping8607 = await deleteShipping(shippingFilter7651);
      const shippingFilter8739 = { 'updatedBy': { '$in': user } };
      const shipping4431 = await deleteShipping(shippingFilter8739);
      const userTokensFilter6027 = { 'userId': { '$in': user } };
      const userTokens8644 = await deleteUserTokens(userTokensFilter6027);
      const userRoleFilter3065 = { 'userId': { '$in': user } };
      const userRole8788 = await deleteUserRole(userRoleFilter3065);
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
      const productFilter0197 = { 'category': { '$in': category } };
      const product7613 = await deleteProduct(productFilter0197);
      const productFilter8895 = { 'subCategory': { '$in': category } };
      const product1285 = await deleteProduct(productFilter8895);
      const categoryFilter6967 = { 'parentCategoryId': { '$in': category } };
      const category6999 = await deleteCategory(categoryFilter6967);
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

const deleteBanner = async (filter) =>{
  try {
    return await Banner.deleteMany(filter);
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
      const pincodeFilter1181 = { 'countryId': { '$in': country } };
      const pincode0176 = await deletePincode(pincodeFilter1181);
      const stateFilter3033 = { 'countryId': { '$in': country } };
      const state2554 = await deleteState(stateFilter3033);
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
      const pincodeFilter5587 = { 'cityId': { '$in': city } };
      const pincode9039 = await deletePincode(pincodeFilter5587);
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
      const cityFilter7280 = { 'stateId': { '$in': state } };
      const city9279 = await deleteCity(cityFilter7280);
      const pincodeFilter4779 = { 'stateId': { '$in': state } };
      const pincode2053 = await deletePincode(pincodeFilter4779);
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
      const walletTransactionFilter8323 = { 'walletId': { '$in': wallet } };
      const walletTransaction6742 = await deleteWalletTransaction(walletTransactionFilter8323);
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
      const routeRoleFilter8959 = { 'roleId': { '$in': role } };
      const routeRole8651 = await deleteRouteRole(routeRoleFilter8959);
      const userRoleFilter8105 = { 'roleId': { '$in': role } };
      const userRole1964 = await deleteUserRole(userRoleFilter8105);
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
      const routeRoleFilter8752 = { 'routeId': { '$in': projectroute } };
      const routeRole9202 = await deleteRouteRole(routeRoleFilter8752);
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

      const bannerFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } },{                    sellerId : { '$in' : user } }] };
      const bannerCnt =  await dbService.countDocument(Banner,bannerFilter);

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
        banner : bannerCnt,
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

const countBanner = async (filter) =>{
  try {
        
    const bannerCnt =  await Banner.countDocuments(filter);
    return { banner : bannerCnt };
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
      const userFilter9598 = { 'addedBy': { '$in': user } };
      const user2635 = await softDeleteUser(userFilter9598, updateBody);
      const userFilter0128 = { 'updatedBy': { '$in': user } };
      const user8987 = await softDeleteUser(userFilter0128, updateBody);
      const productFilter2030 = { 'sellerId': { '$in': user } };
      const product6840 = await softDeleteProduct(productFilter2030, updateBody);
      const productFilter1985 = { 'addedBy': { '$in': user } };
      const product1664 = await softDeleteProduct(productFilter1985, updateBody);
      const productFilter4336 = { 'updatedBy': { '$in': user } };
      const product1123 = await softDeleteProduct(productFilter4336, updateBody);
      const categoryFilter3591 = { 'addedBy': { '$in': user } };
      const category0348 = await softDeleteCategory(categoryFilter3591, updateBody);
      const categoryFilter9451 = { 'updatedBy': { '$in': user } };
      const category9915 = await softDeleteCategory(categoryFilter9451, updateBody);
      const orderFilter5827 = { 'addedBy': { '$in': user } };
      const order2157 = await softDeleteOrder(orderFilter5827, updateBody);
      const orderFilter4704 = { 'updatedBy': { '$in': user } };
      const order1358 = await softDeleteOrder(orderFilter4704, updateBody);
      const bannerFilter9187 = { 'addedBy': { '$in': user } };
      const banner9630 = await softDeleteBanner(bannerFilter9187, updateBody);
      const bannerFilter7691 = { 'updatedBy': { '$in': user } };
      const banner6478 = await softDeleteBanner(bannerFilter7691, updateBody);
      const bannerFilter0169 = { 'sellerId': { '$in': user } };
      const banner6270 = await softDeleteBanner(bannerFilter0169, updateBody);
      const cartFilter7632 = { 'addedBy': { '$in': user } };
      const cart0485 = await softDeleteCart(cartFilter7632, updateBody);
      const cartFilter6666 = { 'updatedBy': { '$in': user } };
      const cart6650 = await softDeleteCart(cartFilter6666, updateBody);
      const countryFilter6454 = { 'addedBy': { '$in': user } };
      const country5692 = await softDeleteCountry(countryFilter6454, updateBody);
      const countryFilter9346 = { 'updatedBy': { '$in': user } };
      const country4227 = await softDeleteCountry(countryFilter9346, updateBody);
      const cityFilter9497 = { 'addedBy': { '$in': user } };
      const city9527 = await softDeleteCity(cityFilter9497, updateBody);
      const cityFilter9468 = { 'updatedBy': { '$in': user } };
      const city9823 = await softDeleteCity(cityFilter9468, updateBody);
      const pincodeFilter7953 = { 'addedBy': { '$in': user } };
      const pincode2793 = await softDeletePincode(pincodeFilter7953, updateBody);
      const pincodeFilter6696 = { 'updatedBy': { '$in': user } };
      const pincode9458 = await softDeletePincode(pincodeFilter6696, updateBody);
      const stateFilter2837 = { 'addedBy': { '$in': user } };
      const state3230 = await softDeleteState(stateFilter2837, updateBody);
      const stateFilter0054 = { 'updatedBy': { '$in': user } };
      const state4555 = await softDeleteState(stateFilter0054, updateBody);
      const walletFilter8261 = { 'userId': { '$in': user } };
      const wallet7902 = await softDeleteWallet(walletFilter8261, updateBody);
      const walletFilter7727 = { 'addedBy': { '$in': user } };
      const wallet3786 = await softDeleteWallet(walletFilter7727, updateBody);
      const walletFilter7632 = { 'updatedBy': { '$in': user } };
      const wallet7015 = await softDeleteWallet(walletFilter7632, updateBody);
      const walletTransactionFilter3190 = { 'userId': { '$in': user } };
      const walletTransaction7188 = await softDeleteWalletTransaction(walletTransactionFilter3190, updateBody);
      const walletTransactionFilter3041 = { 'addedBy': { '$in': user } };
      const walletTransaction6416 = await softDeleteWalletTransaction(walletTransactionFilter3041, updateBody);
      const walletTransactionFilter7504 = { 'updatedBy': { '$in': user } };
      const walletTransaction9459 = await softDeleteWalletTransaction(walletTransactionFilter7504, updateBody);
      const shippingFilter1255 = { 'addedBy': { '$in': user } };
      const shipping4438 = await softDeleteShipping(shippingFilter1255, updateBody);
      const shippingFilter4487 = { 'updatedBy': { '$in': user } };
      const shipping5827 = await softDeleteShipping(shippingFilter4487, updateBody);
      const userTokensFilter0028 = { 'userId': { '$in': user } };
      const userTokens3898 = await softDeleteUserTokens(userTokensFilter0028, updateBody);
      const userRoleFilter3265 = { 'userId': { '$in': user } };
      const userRole3386 = await softDeleteUserRole(userRoleFilter3265, updateBody);
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
      const productFilter3337 = { 'category': { '$in': category } };
      const product4326 = await softDeleteProduct(productFilter3337, updateBody);
      const productFilter3566 = { 'subCategory': { '$in': category } };
      const product3781 = await softDeleteProduct(productFilter3566, updateBody);
      const categoryFilter0872 = { 'parentCategoryId': { '$in': category } };
      const category0018 = await softDeleteCategory(categoryFilter0872, updateBody);
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

const softDeleteBanner = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Banner.updateMany(filter, {
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
      const pincodeFilter5277 = { 'countryId': { '$in': country } };
      const pincode6279 = await softDeletePincode(pincodeFilter5277, updateBody);
      const stateFilter8769 = { 'countryId': { '$in': country } };
      const state8844 = await softDeleteState(stateFilter8769, updateBody);
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
      const pincodeFilter3985 = { 'cityId': { '$in': city } };
      const pincode4239 = await softDeletePincode(pincodeFilter3985, updateBody);
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
      const cityFilter9682 = { 'stateId': { '$in': state } };
      const city0965 = await softDeleteCity(cityFilter9682, updateBody);
      const pincodeFilter2808 = { 'stateId': { '$in': state } };
      const pincode3250 = await softDeletePincode(pincodeFilter2808, updateBody);
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
      const walletTransactionFilter3459 = { 'walletId': { '$in': wallet } };
      const walletTransaction4385 = await softDeleteWalletTransaction(walletTransactionFilter3459, updateBody);
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
      const routeRoleFilter2063 = { 'roleId': { '$in': role } };
      const routeRole1824 = await softDeleteRouteRole(routeRoleFilter2063, updateBody);
      const userRoleFilter9825 = { 'roleId': { '$in': role } };
      const userRole6811 = await softDeleteUserRole(userRoleFilter9825, updateBody);
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
      const routeRoleFilter2656 = { 'routeId': { '$in': projectroute } };
      const routeRole3467 = await softDeleteRouteRole(routeRoleFilter2656, updateBody);
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
  deleteBanner,
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
  countBanner,
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
  softDeleteBanner,
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
