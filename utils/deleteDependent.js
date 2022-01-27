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
      const userFilter3294 = { 'addedBy': { '$in': user } };
      const user9683 = await deleteUser(userFilter3294);
      const userFilter5593 = { 'updatedBy': { '$in': user } };
      const user1105 = await deleteUser(userFilter5593);
      const productFilter3758 = { 'sellerId': { '$in': user } };
      const product7707 = await deleteProduct(productFilter3758);
      const productFilter6133 = { 'addedBy': { '$in': user } };
      const product9835 = await deleteProduct(productFilter6133);
      const productFilter7625 = { 'updatedBy': { '$in': user } };
      const product0757 = await deleteProduct(productFilter7625);
      const categoryFilter3434 = { 'addedBy': { '$in': user } };
      const category3540 = await deleteCategory(categoryFilter3434);
      const categoryFilter7143 = { 'updatedBy': { '$in': user } };
      const category1377 = await deleteCategory(categoryFilter7143);
      const orderFilter8647 = { 'addedBy': { '$in': user } };
      const order4103 = await deleteOrder(orderFilter8647);
      const orderFilter6146 = { 'updatedBy': { '$in': user } };
      const order4992 = await deleteOrder(orderFilter6146);
      const bannerFilter9183 = { 'addedBy': { '$in': user } };
      const banner8078 = await deleteBanner(bannerFilter9183);
      const bannerFilter9527 = { 'updatedBy': { '$in': user } };
      const banner8491 = await deleteBanner(bannerFilter9527);
      const bannerFilter7441 = { 'sellerId': { '$in': user } };
      const banner8580 = await deleteBanner(bannerFilter7441);
      const cartFilter6751 = { 'addedBy': { '$in': user } };
      const cart5381 = await deleteCart(cartFilter6751);
      const cartFilter2564 = { 'updatedBy': { '$in': user } };
      const cart2135 = await deleteCart(cartFilter2564);
      const countryFilter4006 = { 'addedBy': { '$in': user } };
      const country6843 = await deleteCountry(countryFilter4006);
      const countryFilter2543 = { 'updatedBy': { '$in': user } };
      const country9766 = await deleteCountry(countryFilter2543);
      const cityFilter7642 = { 'addedBy': { '$in': user } };
      const city3767 = await deleteCity(cityFilter7642);
      const cityFilter2527 = { 'updatedBy': { '$in': user } };
      const city7262 = await deleteCity(cityFilter2527);
      const pincodeFilter7555 = { 'addedBy': { '$in': user } };
      const pincode8044 = await deletePincode(pincodeFilter7555);
      const pincodeFilter2166 = { 'updatedBy': { '$in': user } };
      const pincode7773 = await deletePincode(pincodeFilter2166);
      const stateFilter7012 = { 'addedBy': { '$in': user } };
      const state4535 = await deleteState(stateFilter7012);
      const stateFilter9736 = { 'updatedBy': { '$in': user } };
      const state8239 = await deleteState(stateFilter9736);
      const walletFilter8296 = { 'userId': { '$in': user } };
      const wallet2285 = await deleteWallet(walletFilter8296);
      const walletFilter0515 = { 'addedBy': { '$in': user } };
      const wallet5470 = await deleteWallet(walletFilter0515);
      const walletFilter3356 = { 'updatedBy': { '$in': user } };
      const wallet4687 = await deleteWallet(walletFilter3356);
      const walletTransactionFilter4476 = { 'userId': { '$in': user } };
      const walletTransaction0042 = await deleteWalletTransaction(walletTransactionFilter4476);
      const walletTransactionFilter8165 = { 'addedBy': { '$in': user } };
      const walletTransaction5628 = await deleteWalletTransaction(walletTransactionFilter8165);
      const walletTransactionFilter2290 = { 'updatedBy': { '$in': user } };
      const walletTransaction6866 = await deleteWalletTransaction(walletTransactionFilter2290);
      const shippingFilter5602 = { 'addedBy': { '$in': user } };
      const shipping9538 = await deleteShipping(shippingFilter5602);
      const shippingFilter4314 = { 'updatedBy': { '$in': user } };
      const shipping9655 = await deleteShipping(shippingFilter4314);
      const userTokensFilter8327 = { 'userId': { '$in': user } };
      const userTokens3834 = await deleteUserTokens(userTokensFilter8327);
      const userRoleFilter8258 = { 'userId': { '$in': user } };
      const userRole7566 = await deleteUserRole(userRoleFilter8258);
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
      const productFilter7687 = { 'category': { '$in': category } };
      const product3498 = await deleteProduct(productFilter7687);
      const productFilter7386 = { 'subCategory': { '$in': category } };
      const product0285 = await deleteProduct(productFilter7386);
      const categoryFilter5736 = { 'parentCategoryId': { '$in': category } };
      const category3905 = await deleteCategory(categoryFilter5736);
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
      const pincodeFilter7625 = { 'countryId': { '$in': country } };
      const pincode2622 = await deletePincode(pincodeFilter7625);
      const stateFilter6090 = { 'countryId': { '$in': country } };
      const state5788 = await deleteState(stateFilter6090);
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
      const pincodeFilter2173 = { 'cityId': { '$in': city } };
      const pincode2609 = await deletePincode(pincodeFilter2173);
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
      const cityFilter5470 = { 'stateId': { '$in': state } };
      const city7698 = await deleteCity(cityFilter5470);
      const pincodeFilter7397 = { 'stateId': { '$in': state } };
      const pincode2713 = await deletePincode(pincodeFilter7397);
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
      const walletTransactionFilter5811 = { 'walletId': { '$in': wallet } };
      const walletTransaction2588 = await deleteWalletTransaction(walletTransactionFilter5811);
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
      const routeRoleFilter8236 = { 'roleId': { '$in': role } };
      const routeRole3245 = await deleteRouteRole(routeRoleFilter8236);
      const userRoleFilter2343 = { 'roleId': { '$in': role } };
      const userRole2216 = await deleteUserRole(userRoleFilter2343);
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
      const routeRoleFilter9333 = { 'routeId': { '$in': projectroute } };
      const routeRole4765 = await deleteRouteRole(routeRoleFilter9333);
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
      const userFilter0538 = { 'addedBy': { '$in': user } };
      const user5834 = await softDeleteUser(userFilter0538, updateBody);
      const userFilter0140 = { 'updatedBy': { '$in': user } };
      const user8071 = await softDeleteUser(userFilter0140, updateBody);
      const productFilter7741 = { 'sellerId': { '$in': user } };
      const product9747 = await softDeleteProduct(productFilter7741, updateBody);
      const productFilter3399 = { 'addedBy': { '$in': user } };
      const product5142 = await softDeleteProduct(productFilter3399, updateBody);
      const productFilter4716 = { 'updatedBy': { '$in': user } };
      const product9662 = await softDeleteProduct(productFilter4716, updateBody);
      const categoryFilter8790 = { 'addedBy': { '$in': user } };
      const category7093 = await softDeleteCategory(categoryFilter8790, updateBody);
      const categoryFilter1582 = { 'updatedBy': { '$in': user } };
      const category4587 = await softDeleteCategory(categoryFilter1582, updateBody);
      const orderFilter6884 = { 'addedBy': { '$in': user } };
      const order0418 = await softDeleteOrder(orderFilter6884, updateBody);
      const orderFilter5305 = { 'updatedBy': { '$in': user } };
      const order7436 = await softDeleteOrder(orderFilter5305, updateBody);
      const bannerFilter9489 = { 'addedBy': { '$in': user } };
      const banner0427 = await softDeleteBanner(bannerFilter9489, updateBody);
      const bannerFilter0449 = { 'updatedBy': { '$in': user } };
      const banner5378 = await softDeleteBanner(bannerFilter0449, updateBody);
      const bannerFilter7328 = { 'sellerId': { '$in': user } };
      const banner0744 = await softDeleteBanner(bannerFilter7328, updateBody);
      const cartFilter5665 = { 'addedBy': { '$in': user } };
      const cart1869 = await softDeleteCart(cartFilter5665, updateBody);
      const cartFilter5099 = { 'updatedBy': { '$in': user } };
      const cart6685 = await softDeleteCart(cartFilter5099, updateBody);
      const countryFilter2637 = { 'addedBy': { '$in': user } };
      const country2105 = await softDeleteCountry(countryFilter2637, updateBody);
      const countryFilter5723 = { 'updatedBy': { '$in': user } };
      const country7416 = await softDeleteCountry(countryFilter5723, updateBody);
      const cityFilter2446 = { 'addedBy': { '$in': user } };
      const city7435 = await softDeleteCity(cityFilter2446, updateBody);
      const cityFilter4271 = { 'updatedBy': { '$in': user } };
      const city2595 = await softDeleteCity(cityFilter4271, updateBody);
      const pincodeFilter1423 = { 'addedBy': { '$in': user } };
      const pincode1793 = await softDeletePincode(pincodeFilter1423, updateBody);
      const pincodeFilter3467 = { 'updatedBy': { '$in': user } };
      const pincode0439 = await softDeletePincode(pincodeFilter3467, updateBody);
      const stateFilter2680 = { 'addedBy': { '$in': user } };
      const state0038 = await softDeleteState(stateFilter2680, updateBody);
      const stateFilter3850 = { 'updatedBy': { '$in': user } };
      const state8784 = await softDeleteState(stateFilter3850, updateBody);
      const walletFilter6539 = { 'userId': { '$in': user } };
      const wallet8755 = await softDeleteWallet(walletFilter6539, updateBody);
      const walletFilter5741 = { 'addedBy': { '$in': user } };
      const wallet9115 = await softDeleteWallet(walletFilter5741, updateBody);
      const walletFilter6565 = { 'updatedBy': { '$in': user } };
      const wallet4871 = await softDeleteWallet(walletFilter6565, updateBody);
      const walletTransactionFilter3712 = { 'userId': { '$in': user } };
      const walletTransaction7671 = await softDeleteWalletTransaction(walletTransactionFilter3712, updateBody);
      const walletTransactionFilter5383 = { 'addedBy': { '$in': user } };
      const walletTransaction1431 = await softDeleteWalletTransaction(walletTransactionFilter5383, updateBody);
      const walletTransactionFilter8748 = { 'updatedBy': { '$in': user } };
      const walletTransaction2812 = await softDeleteWalletTransaction(walletTransactionFilter8748, updateBody);
      const shippingFilter3141 = { 'addedBy': { '$in': user } };
      const shipping8404 = await softDeleteShipping(shippingFilter3141, updateBody);
      const shippingFilter8733 = { 'updatedBy': { '$in': user } };
      const shipping2342 = await softDeleteShipping(shippingFilter8733, updateBody);
      const userTokensFilter4901 = { 'userId': { '$in': user } };
      const userTokens8202 = await softDeleteUserTokens(userTokensFilter4901, updateBody);
      const userRoleFilter9584 = { 'userId': { '$in': user } };
      const userRole5509 = await softDeleteUserRole(userRoleFilter9584, updateBody);
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
      const productFilter4856 = { 'category': { '$in': category } };
      const product9244 = await softDeleteProduct(productFilter4856, updateBody);
      const productFilter0326 = { 'subCategory': { '$in': category } };
      const product0748 = await softDeleteProduct(productFilter0326, updateBody);
      const categoryFilter5928 = { 'parentCategoryId': { '$in': category } };
      const category5921 = await softDeleteCategory(categoryFilter5928, updateBody);
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
      const pincodeFilter4258 = { 'countryId': { '$in': country } };
      const pincode7898 = await softDeletePincode(pincodeFilter4258, updateBody);
      const stateFilter5266 = { 'countryId': { '$in': country } };
      const state6852 = await softDeleteState(stateFilter5266, updateBody);
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
      const pincodeFilter0154 = { 'cityId': { '$in': city } };
      const pincode4093 = await softDeletePincode(pincodeFilter0154, updateBody);
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
      const cityFilter1043 = { 'stateId': { '$in': state } };
      const city2882 = await softDeleteCity(cityFilter1043, updateBody);
      const pincodeFilter6051 = { 'stateId': { '$in': state } };
      const pincode3136 = await softDeletePincode(pincodeFilter6051, updateBody);
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
      const walletTransactionFilter7290 = { 'walletId': { '$in': wallet } };
      const walletTransaction6678 = await softDeleteWalletTransaction(walletTransactionFilter7290, updateBody);
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
      const routeRoleFilter8154 = { 'roleId': { '$in': role } };
      const routeRole8438 = await softDeleteRouteRole(routeRoleFilter8154, updateBody);
      const userRoleFilter0242 = { 'roleId': { '$in': role } };
      const userRole5685 = await softDeleteUserRole(userRoleFilter0242, updateBody);
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
      const routeRoleFilter9222 = { 'routeId': { '$in': projectroute } };
      const routeRole2223 = await softDeleteRouteRole(routeRoleFilter9222, updateBody);
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
