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
      const userFilter5757 = { 'addedBy': { '$in': user } };
      const user1626 = await deleteUser(userFilter5757);
      const userFilter4929 = { 'updatedBy': { '$in': user } };
      const user6568 = await deleteUser(userFilter4929);
      const productFilter3293 = { 'sellerId': { '$in': user } };
      const product4892 = await deleteProduct(productFilter3293);
      const productFilter4226 = { 'addedBy': { '$in': user } };
      const product7324 = await deleteProduct(productFilter4226);
      const productFilter7254 = { 'updatedBy': { '$in': user } };
      const product4856 = await deleteProduct(productFilter7254);
      const categoryFilter3432 = { 'addedBy': { '$in': user } };
      const category8588 = await deleteCategory(categoryFilter3432);
      const categoryFilter1375 = { 'updatedBy': { '$in': user } };
      const category9672 = await deleteCategory(categoryFilter1375);
      const orderFilter8649 = { 'addedBy': { '$in': user } };
      const order3554 = await deleteOrder(orderFilter8649);
      const orderFilter7162 = { 'updatedBy': { '$in': user } };
      const order4339 = await deleteOrder(orderFilter7162);
      const bannerFilter7258 = { 'addedBy': { '$in': user } };
      const banner9620 = await deleteBanner(bannerFilter7258);
      const bannerFilter2615 = { 'updatedBy': { '$in': user } };
      const banner5150 = await deleteBanner(bannerFilter2615);
      const bannerFilter3250 = { 'sellerId': { '$in': user } };
      const banner8570 = await deleteBanner(bannerFilter3250);
      const cartFilter7423 = { 'addedBy': { '$in': user } };
      const cart2262 = await deleteCart(cartFilter7423);
      const cartFilter8937 = { 'updatedBy': { '$in': user } };
      const cart0338 = await deleteCart(cartFilter8937);
      const countryFilter0217 = { 'addedBy': { '$in': user } };
      const country2289 = await deleteCountry(countryFilter0217);
      const countryFilter2496 = { 'updatedBy': { '$in': user } };
      const country4672 = await deleteCountry(countryFilter2496);
      const cityFilter6407 = { 'addedBy': { '$in': user } };
      const city3398 = await deleteCity(cityFilter6407);
      const cityFilter1770 = { 'updatedBy': { '$in': user } };
      const city0346 = await deleteCity(cityFilter1770);
      const pincodeFilter4233 = { 'addedBy': { '$in': user } };
      const pincode2004 = await deletePincode(pincodeFilter4233);
      const pincodeFilter8645 = { 'updatedBy': { '$in': user } };
      const pincode9327 = await deletePincode(pincodeFilter8645);
      const stateFilter5177 = { 'addedBy': { '$in': user } };
      const state6438 = await deleteState(stateFilter5177);
      const stateFilter2247 = { 'updatedBy': { '$in': user } };
      const state9523 = await deleteState(stateFilter2247);
      const walletFilter2732 = { 'userId': { '$in': user } };
      const wallet9121 = await deleteWallet(walletFilter2732);
      const walletFilter6339 = { 'addedBy': { '$in': user } };
      const wallet4585 = await deleteWallet(walletFilter6339);
      const walletFilter8742 = { 'updatedBy': { '$in': user } };
      const wallet5978 = await deleteWallet(walletFilter8742);
      const walletTransactionFilter9674 = { 'userId': { '$in': user } };
      const walletTransaction3134 = await deleteWalletTransaction(walletTransactionFilter9674);
      const walletTransactionFilter0530 = { 'addedBy': { '$in': user } };
      const walletTransaction9616 = await deleteWalletTransaction(walletTransactionFilter0530);
      const walletTransactionFilter4582 = { 'updatedBy': { '$in': user } };
      const walletTransaction6194 = await deleteWalletTransaction(walletTransactionFilter4582);
      const shippingFilter6347 = { 'addedBy': { '$in': user } };
      const shipping8726 = await deleteShipping(shippingFilter6347);
      const shippingFilter5848 = { 'updatedBy': { '$in': user } };
      const shipping7914 = await deleteShipping(shippingFilter5848);
      const userTokensFilter9973 = { 'userId': { '$in': user } };
      const userTokens2383 = await deleteUserTokens(userTokensFilter9973);
      const userRoleFilter7320 = { 'userId': { '$in': user } };
      const userRole9467 = await deleteUserRole(userRoleFilter7320);
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
      const productFilter3466 = { 'category': { '$in': category } };
      const product6758 = await deleteProduct(productFilter3466);
      const productFilter3834 = { 'subCategory': { '$in': category } };
      const product5223 = await deleteProduct(productFilter3834);
      const categoryFilter1162 = { 'parentCategoryId': { '$in': category } };
      const category9452 = await deleteCategory(categoryFilter1162);
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
      const pincodeFilter7650 = { 'countryId': { '$in': country } };
      const pincode4703 = await deletePincode(pincodeFilter7650);
      const stateFilter4409 = { 'countryId': { '$in': country } };
      const state9966 = await deleteState(stateFilter4409);
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
      const pincodeFilter3227 = { 'cityId': { '$in': city } };
      const pincode5813 = await deletePincode(pincodeFilter3227);
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
      const cityFilter7979 = { 'stateId': { '$in': state } };
      const city7150 = await deleteCity(cityFilter7979);
      const pincodeFilter0611 = { 'stateId': { '$in': state } };
      const pincode8348 = await deletePincode(pincodeFilter0611);
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
      const walletTransactionFilter8280 = { 'walletId': { '$in': wallet } };
      const walletTransaction9283 = await deleteWalletTransaction(walletTransactionFilter8280);
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
      const routeRoleFilter7872 = { 'roleId': { '$in': role } };
      const routeRole4599 = await deleteRouteRole(routeRoleFilter7872);
      const userRoleFilter4307 = { 'roleId': { '$in': role } };
      const userRole8645 = await deleteUserRole(userRoleFilter4307);
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
      const routeRoleFilter1495 = { 'routeId': { '$in': projectroute } };
      const routeRole6868 = await deleteRouteRole(routeRoleFilter1495);
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
      const userFilter8461 = { 'addedBy': { '$in': user } };
      const user9529 = await softDeleteUser(userFilter8461, updateBody);
      const userFilter4467 = { 'updatedBy': { '$in': user } };
      const user3874 = await softDeleteUser(userFilter4467, updateBody);
      const productFilter1284 = { 'sellerId': { '$in': user } };
      const product8684 = await softDeleteProduct(productFilter1284, updateBody);
      const productFilter4902 = { 'addedBy': { '$in': user } };
      const product6688 = await softDeleteProduct(productFilter4902, updateBody);
      const productFilter5785 = { 'updatedBy': { '$in': user } };
      const product8974 = await softDeleteProduct(productFilter5785, updateBody);
      const categoryFilter0452 = { 'addedBy': { '$in': user } };
      const category1461 = await softDeleteCategory(categoryFilter0452, updateBody);
      const categoryFilter6589 = { 'updatedBy': { '$in': user } };
      const category2494 = await softDeleteCategory(categoryFilter6589, updateBody);
      const orderFilter5128 = { 'addedBy': { '$in': user } };
      const order8494 = await softDeleteOrder(orderFilter5128, updateBody);
      const orderFilter9066 = { 'updatedBy': { '$in': user } };
      const order7878 = await softDeleteOrder(orderFilter9066, updateBody);
      const bannerFilter2543 = { 'addedBy': { '$in': user } };
      const banner1092 = await softDeleteBanner(bannerFilter2543, updateBody);
      const bannerFilter9865 = { 'updatedBy': { '$in': user } };
      const banner4990 = await softDeleteBanner(bannerFilter9865, updateBody);
      const bannerFilter4797 = { 'sellerId': { '$in': user } };
      const banner8480 = await softDeleteBanner(bannerFilter4797, updateBody);
      const cartFilter4411 = { 'addedBy': { '$in': user } };
      const cart8750 = await softDeleteCart(cartFilter4411, updateBody);
      const cartFilter9557 = { 'updatedBy': { '$in': user } };
      const cart9628 = await softDeleteCart(cartFilter9557, updateBody);
      const countryFilter1426 = { 'addedBy': { '$in': user } };
      const country7729 = await softDeleteCountry(countryFilter1426, updateBody);
      const countryFilter6598 = { 'updatedBy': { '$in': user } };
      const country3648 = await softDeleteCountry(countryFilter6598, updateBody);
      const cityFilter6338 = { 'addedBy': { '$in': user } };
      const city6302 = await softDeleteCity(cityFilter6338, updateBody);
      const cityFilter3383 = { 'updatedBy': { '$in': user } };
      const city5585 = await softDeleteCity(cityFilter3383, updateBody);
      const pincodeFilter3348 = { 'addedBy': { '$in': user } };
      const pincode4854 = await softDeletePincode(pincodeFilter3348, updateBody);
      const pincodeFilter2264 = { 'updatedBy': { '$in': user } };
      const pincode0184 = await softDeletePincode(pincodeFilter2264, updateBody);
      const stateFilter2380 = { 'addedBy': { '$in': user } };
      const state1085 = await softDeleteState(stateFilter2380, updateBody);
      const stateFilter2437 = { 'updatedBy': { '$in': user } };
      const state3351 = await softDeleteState(stateFilter2437, updateBody);
      const walletFilter8782 = { 'userId': { '$in': user } };
      const wallet1680 = await softDeleteWallet(walletFilter8782, updateBody);
      const walletFilter9737 = { 'addedBy': { '$in': user } };
      const wallet8059 = await softDeleteWallet(walletFilter9737, updateBody);
      const walletFilter6875 = { 'updatedBy': { '$in': user } };
      const wallet6499 = await softDeleteWallet(walletFilter6875, updateBody);
      const walletTransactionFilter2584 = { 'userId': { '$in': user } };
      const walletTransaction3293 = await softDeleteWalletTransaction(walletTransactionFilter2584, updateBody);
      const walletTransactionFilter1498 = { 'addedBy': { '$in': user } };
      const walletTransaction2420 = await softDeleteWalletTransaction(walletTransactionFilter1498, updateBody);
      const walletTransactionFilter4335 = { 'updatedBy': { '$in': user } };
      const walletTransaction6687 = await softDeleteWalletTransaction(walletTransactionFilter4335, updateBody);
      const shippingFilter8485 = { 'addedBy': { '$in': user } };
      const shipping4463 = await softDeleteShipping(shippingFilter8485, updateBody);
      const shippingFilter7916 = { 'updatedBy': { '$in': user } };
      const shipping9740 = await softDeleteShipping(shippingFilter7916, updateBody);
      const userTokensFilter4885 = { 'userId': { '$in': user } };
      const userTokens9283 = await softDeleteUserTokens(userTokensFilter4885, updateBody);
      const userRoleFilter5646 = { 'userId': { '$in': user } };
      const userRole4774 = await softDeleteUserRole(userRoleFilter5646, updateBody);
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
      const productFilter7528 = { 'category': { '$in': category } };
      const product3322 = await softDeleteProduct(productFilter7528, updateBody);
      const productFilter9778 = { 'subCategory': { '$in': category } };
      const product3640 = await softDeleteProduct(productFilter9778, updateBody);
      const categoryFilter6933 = { 'parentCategoryId': { '$in': category } };
      const category5526 = await softDeleteCategory(categoryFilter6933, updateBody);
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
      const pincodeFilter7791 = { 'countryId': { '$in': country } };
      const pincode4235 = await softDeletePincode(pincodeFilter7791, updateBody);
      const stateFilter5426 = { 'countryId': { '$in': country } };
      const state6078 = await softDeleteState(stateFilter5426, updateBody);
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
      const pincodeFilter2967 = { 'cityId': { '$in': city } };
      const pincode8957 = await softDeletePincode(pincodeFilter2967, updateBody);
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
      const cityFilter5586 = { 'stateId': { '$in': state } };
      const city2846 = await softDeleteCity(cityFilter5586, updateBody);
      const pincodeFilter1171 = { 'stateId': { '$in': state } };
      const pincode4070 = await softDeletePincode(pincodeFilter1171, updateBody);
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
      const walletTransactionFilter5582 = { 'walletId': { '$in': wallet } };
      const walletTransaction1172 = await softDeleteWalletTransaction(walletTransactionFilter5582, updateBody);
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
      const routeRoleFilter7613 = { 'roleId': { '$in': role } };
      const routeRole9635 = await softDeleteRouteRole(routeRoleFilter7613, updateBody);
      const userRoleFilter2639 = { 'roleId': { '$in': role } };
      const userRole3455 = await softDeleteUserRole(userRoleFilter2639, updateBody);
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
      const routeRoleFilter4796 = { 'routeId': { '$in': projectroute } };
      const routeRole2362 = await softDeleteRouteRole(routeRoleFilter4796, updateBody);
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
