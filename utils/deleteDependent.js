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
      const userFilter8013 = { 'addedBy': { '$in': user } };
      const user4924 = await deleteUser(userFilter8013);
      const userFilter8352 = { 'updatedBy': { '$in': user } };
      const user6083 = await deleteUser(userFilter8352);
      const productFilter5286 = { 'sellerId': { '$in': user } };
      const product1048 = await deleteProduct(productFilter5286);
      const productFilter5293 = { 'addedBy': { '$in': user } };
      const product3669 = await deleteProduct(productFilter5293);
      const productFilter3822 = { 'updatedBy': { '$in': user } };
      const product4914 = await deleteProduct(productFilter3822);
      const categoryFilter1505 = { 'addedBy': { '$in': user } };
      const category5697 = await deleteCategory(categoryFilter1505);
      const categoryFilter2408 = { 'updatedBy': { '$in': user } };
      const category7339 = await deleteCategory(categoryFilter2408);
      const orderFilter5735 = { 'addedBy': { '$in': user } };
      const order9411 = await deleteOrder(orderFilter5735);
      const orderFilter6545 = { 'updatedBy': { '$in': user } };
      const order8673 = await deleteOrder(orderFilter6545);
      const bannerFilter4460 = { 'addedBy': { '$in': user } };
      const banner4044 = await deleteBanner(bannerFilter4460);
      const bannerFilter5720 = { 'updatedBy': { '$in': user } };
      const banner6794 = await deleteBanner(bannerFilter5720);
      const bannerFilter5007 = { 'sellerId': { '$in': user } };
      const banner7544 = await deleteBanner(bannerFilter5007);
      const cartFilter5970 = { 'addedBy': { '$in': user } };
      const cart6478 = await deleteCart(cartFilter5970);
      const cartFilter9540 = { 'updatedBy': { '$in': user } };
      const cart7690 = await deleteCart(cartFilter9540);
      const countryFilter5346 = { 'addedBy': { '$in': user } };
      const country3615 = await deleteCountry(countryFilter5346);
      const countryFilter8444 = { 'updatedBy': { '$in': user } };
      const country0236 = await deleteCountry(countryFilter8444);
      const cityFilter1168 = { 'addedBy': { '$in': user } };
      const city3093 = await deleteCity(cityFilter1168);
      const cityFilter8695 = { 'updatedBy': { '$in': user } };
      const city3731 = await deleteCity(cityFilter8695);
      const pincodeFilter7746 = { 'addedBy': { '$in': user } };
      const pincode6799 = await deletePincode(pincodeFilter7746);
      const pincodeFilter7135 = { 'updatedBy': { '$in': user } };
      const pincode6566 = await deletePincode(pincodeFilter7135);
      const stateFilter8734 = { 'addedBy': { '$in': user } };
      const state8251 = await deleteState(stateFilter8734);
      const stateFilter7984 = { 'updatedBy': { '$in': user } };
      const state2867 = await deleteState(stateFilter7984);
      const walletFilter4346 = { 'userId': { '$in': user } };
      const wallet7722 = await deleteWallet(walletFilter4346);
      const walletFilter4402 = { 'addedBy': { '$in': user } };
      const wallet5627 = await deleteWallet(walletFilter4402);
      const walletFilter7438 = { 'updatedBy': { '$in': user } };
      const wallet5731 = await deleteWallet(walletFilter7438);
      const walletTransactionFilter7041 = { 'userId': { '$in': user } };
      const walletTransaction9554 = await deleteWalletTransaction(walletTransactionFilter7041);
      const walletTransactionFilter1424 = { 'addedBy': { '$in': user } };
      const walletTransaction4327 = await deleteWalletTransaction(walletTransactionFilter1424);
      const walletTransactionFilter6130 = { 'updatedBy': { '$in': user } };
      const walletTransaction9881 = await deleteWalletTransaction(walletTransactionFilter6130);
      const shippingFilter3011 = { 'addedBy': { '$in': user } };
      const shipping4337 = await deleteShipping(shippingFilter3011);
      const shippingFilter2359 = { 'updatedBy': { '$in': user } };
      const shipping6709 = await deleteShipping(shippingFilter2359);
      const userTokensFilter4064 = { 'userId': { '$in': user } };
      const userTokens9294 = await deleteUserTokens(userTokensFilter4064);
      const userRoleFilter0912 = { 'userId': { '$in': user } };
      const userRole8376 = await deleteUserRole(userRoleFilter0912);
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
      const productFilter8955 = { 'category': { '$in': category } };
      const product3255 = await deleteProduct(productFilter8955);
      const productFilter8158 = { 'subCategory': { '$in': category } };
      const product3642 = await deleteProduct(productFilter8158);
      const categoryFilter3714 = { 'parentCategoryId': { '$in': category } };
      const category4006 = await deleteCategory(categoryFilter3714);
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
      const pincodeFilter3593 = { 'countryId': { '$in': country } };
      const pincode8236 = await deletePincode(pincodeFilter3593);
      const stateFilter9564 = { 'countryId': { '$in': country } };
      const state9849 = await deleteState(stateFilter9564);
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
      const pincodeFilter1765 = { 'cityId': { '$in': city } };
      const pincode1957 = await deletePincode(pincodeFilter1765);
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
      const cityFilter0375 = { 'stateId': { '$in': state } };
      const city5236 = await deleteCity(cityFilter0375);
      const pincodeFilter4599 = { 'stateId': { '$in': state } };
      const pincode6341 = await deletePincode(pincodeFilter4599);
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
      const walletTransactionFilter1246 = { 'walletId': { '$in': wallet } };
      const walletTransaction4806 = await deleteWalletTransaction(walletTransactionFilter1246);
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
      const routeRoleFilter4634 = { 'roleId': { '$in': role } };
      const routeRole6435 = await deleteRouteRole(routeRoleFilter4634);
      const userRoleFilter9074 = { 'roleId': { '$in': role } };
      const userRole7477 = await deleteUserRole(userRoleFilter9074);
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
      const routeRoleFilter1964 = { 'routeId': { '$in': projectroute } };
      const routeRole4852 = await deleteRouteRole(routeRoleFilter1964);
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
      const userFilter4975 = { 'addedBy': { '$in': user } };
      const user6712 = await softDeleteUser(userFilter4975, updateBody);
      const userFilter2378 = { 'updatedBy': { '$in': user } };
      const user9918 = await softDeleteUser(userFilter2378, updateBody);
      const productFilter4074 = { 'sellerId': { '$in': user } };
      const product8395 = await softDeleteProduct(productFilter4074, updateBody);
      const productFilter9821 = { 'addedBy': { '$in': user } };
      const product3886 = await softDeleteProduct(productFilter9821, updateBody);
      const productFilter3277 = { 'updatedBy': { '$in': user } };
      const product5987 = await softDeleteProduct(productFilter3277, updateBody);
      const categoryFilter5793 = { 'addedBy': { '$in': user } };
      const category0595 = await softDeleteCategory(categoryFilter5793, updateBody);
      const categoryFilter3013 = { 'updatedBy': { '$in': user } };
      const category3660 = await softDeleteCategory(categoryFilter3013, updateBody);
      const orderFilter5101 = { 'addedBy': { '$in': user } };
      const order1698 = await softDeleteOrder(orderFilter5101, updateBody);
      const orderFilter8125 = { 'updatedBy': { '$in': user } };
      const order0242 = await softDeleteOrder(orderFilter8125, updateBody);
      const bannerFilter5155 = { 'addedBy': { '$in': user } };
      const banner9967 = await softDeleteBanner(bannerFilter5155, updateBody);
      const bannerFilter4542 = { 'updatedBy': { '$in': user } };
      const banner1412 = await softDeleteBanner(bannerFilter4542, updateBody);
      const bannerFilter8463 = { 'sellerId': { '$in': user } };
      const banner4956 = await softDeleteBanner(bannerFilter8463, updateBody);
      const cartFilter1666 = { 'addedBy': { '$in': user } };
      const cart9588 = await softDeleteCart(cartFilter1666, updateBody);
      const cartFilter4098 = { 'updatedBy': { '$in': user } };
      const cart4196 = await softDeleteCart(cartFilter4098, updateBody);
      const countryFilter5000 = { 'addedBy': { '$in': user } };
      const country7747 = await softDeleteCountry(countryFilter5000, updateBody);
      const countryFilter0342 = { 'updatedBy': { '$in': user } };
      const country8829 = await softDeleteCountry(countryFilter0342, updateBody);
      const cityFilter2240 = { 'addedBy': { '$in': user } };
      const city7231 = await softDeleteCity(cityFilter2240, updateBody);
      const cityFilter7387 = { 'updatedBy': { '$in': user } };
      const city2447 = await softDeleteCity(cityFilter7387, updateBody);
      const pincodeFilter1382 = { 'addedBy': { '$in': user } };
      const pincode7885 = await softDeletePincode(pincodeFilter1382, updateBody);
      const pincodeFilter7087 = { 'updatedBy': { '$in': user } };
      const pincode5843 = await softDeletePincode(pincodeFilter7087, updateBody);
      const stateFilter3845 = { 'addedBy': { '$in': user } };
      const state4089 = await softDeleteState(stateFilter3845, updateBody);
      const stateFilter5431 = { 'updatedBy': { '$in': user } };
      const state4670 = await softDeleteState(stateFilter5431, updateBody);
      const walletFilter9642 = { 'userId': { '$in': user } };
      const wallet2586 = await softDeleteWallet(walletFilter9642, updateBody);
      const walletFilter2623 = { 'addedBy': { '$in': user } };
      const wallet9470 = await softDeleteWallet(walletFilter2623, updateBody);
      const walletFilter8653 = { 'updatedBy': { '$in': user } };
      const wallet5093 = await softDeleteWallet(walletFilter8653, updateBody);
      const walletTransactionFilter2524 = { 'userId': { '$in': user } };
      const walletTransaction5868 = await softDeleteWalletTransaction(walletTransactionFilter2524, updateBody);
      const walletTransactionFilter4358 = { 'addedBy': { '$in': user } };
      const walletTransaction2498 = await softDeleteWalletTransaction(walletTransactionFilter4358, updateBody);
      const walletTransactionFilter3978 = { 'updatedBy': { '$in': user } };
      const walletTransaction5971 = await softDeleteWalletTransaction(walletTransactionFilter3978, updateBody);
      const shippingFilter3495 = { 'addedBy': { '$in': user } };
      const shipping1432 = await softDeleteShipping(shippingFilter3495, updateBody);
      const shippingFilter2151 = { 'updatedBy': { '$in': user } };
      const shipping3699 = await softDeleteShipping(shippingFilter2151, updateBody);
      const userTokensFilter8796 = { 'userId': { '$in': user } };
      const userTokens7095 = await softDeleteUserTokens(userTokensFilter8796, updateBody);
      const userRoleFilter6965 = { 'userId': { '$in': user } };
      const userRole1675 = await softDeleteUserRole(userRoleFilter6965, updateBody);
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
      const productFilter9529 = { 'category': { '$in': category } };
      const product4542 = await softDeleteProduct(productFilter9529, updateBody);
      const productFilter1476 = { 'subCategory': { '$in': category } };
      const product5473 = await softDeleteProduct(productFilter1476, updateBody);
      const categoryFilter2495 = { 'parentCategoryId': { '$in': category } };
      const category6839 = await softDeleteCategory(categoryFilter2495, updateBody);
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
      const pincodeFilter5818 = { 'countryId': { '$in': country } };
      const pincode2329 = await softDeletePincode(pincodeFilter5818, updateBody);
      const stateFilter5598 = { 'countryId': { '$in': country } };
      const state0968 = await softDeleteState(stateFilter5598, updateBody);
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
      const pincodeFilter8516 = { 'cityId': { '$in': city } };
      const pincode6482 = await softDeletePincode(pincodeFilter8516, updateBody);
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
      const cityFilter8476 = { 'stateId': { '$in': state } };
      const city4238 = await softDeleteCity(cityFilter8476, updateBody);
      const pincodeFilter4247 = { 'stateId': { '$in': state } };
      const pincode1075 = await softDeletePincode(pincodeFilter4247, updateBody);
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
      const walletTransactionFilter8670 = { 'walletId': { '$in': wallet } };
      const walletTransaction0467 = await softDeleteWalletTransaction(walletTransactionFilter8670, updateBody);
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
      const routeRoleFilter8249 = { 'roleId': { '$in': role } };
      const routeRole1663 = await softDeleteRouteRole(routeRoleFilter8249, updateBody);
      const userRoleFilter4788 = { 'roleId': { '$in': role } };
      const userRole8177 = await softDeleteUserRole(userRoleFilter4788, updateBody);
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
      const routeRoleFilter9252 = { 'routeId': { '$in': projectroute } };
      const routeRole6065 = await softDeleteRouteRole(routeRoleFilter9252, updateBody);
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
