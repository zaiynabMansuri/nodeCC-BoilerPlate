/**
 * seeder.js
 * @description :: functions that seeds mock data to run the application
 */
const _ = require('lodash');
const User = require('../model/user');
const authConstant = require('../constants/authConstant');
const Role = require('../model/role');
const ProjectRoute = require('../model/projectRoute');
const RouteRole = require('../model/routeRole');
const UserRole = require('../model/userRole');
const { replaceAll } = require('../utils/common');

/* seeds default users */
async function seedUser () {
  try {
    let user = await User.findOne({
      'username':'Art38',
      'isActive':true,
      'isDeleted':false
    });
    if (!user || !user.isPasswordMatch('KrKrtoGBnpPAa3t') ) {
      let user = new User({
        'password':'KrKrtoGBnpPAa3t',
        'username':'Art38',
        'role':authConstant.USER_ROLE.User
      });
      await User.create(user);
    }
    let admin = await User.findOne({
      'username':'Dalton.Hessel',
      'isActive':true,
      'isDeleted':false
    });
    if (!admin || !admin.isPasswordMatch('ERA_i3xhOSelCft') ) {
      let admin = new User({
        'password':'ERA_i3xhOSelCft',
        'username':'Dalton.Hessel',
        'role':authConstant.USER_ROLE.Admin
      });
      await User.create(admin);
    }
    console.info('Users seeded 🍺');
  } catch (error){
    console.log('User seeder failed.');
  }
}
/* seeds roles */
async function seedRole () {
  try {
    const roles = [ 'System_User' ];
    for (let i = 0; i < roles.length; i++) {
      let result = await Role.findOne({
        name: roles[i],
        code: roles[i].toUpperCase() 
      });
      if (!result) {
        await Role.create({
          name: roles[i],
          code: roles[i].toUpperCase(),
          weight: 1
        });
      }
    };
    console.info('Role model seeded 🍺');
  } catch (error){
    console.log('Role seeder failed.');
  }
}

/* seeds routes of project */
async function seedProjectRoutes (routes) {
  try {
    if (routes && routes.length) {
      for (let i = 0; i < routes.length; i++) {
        const routeMethods = routes[i].methods;
        for (let j = 0; j < routeMethods.length; j++) {
          const routeObj = {
            uri: routes[i].path.toLowerCase(),
            method: routeMethods[j],
            route_name: `${replaceAll((routes[i].path).toLowerCase().substring(1), '/', '_')}`
          };
          if (routeObj.route_name){
            let result = await ProjectRoute.findOne(routeObj);
            if (!result) {
              await ProjectRoute.create(routeObj);
            }
          }
        }
      }
      console.info('ProjectRoute model seeded 🍺');
    }
  } catch (error){
    console.log('ProjectRoute seeder failed.');
  }
}

/* seeds role for routes */
async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/admin/user/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/product/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/product/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/product/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/product/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/product/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/product/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/product/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/product/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/product/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/product/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/product/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/product/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/product/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/product/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/category/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/category/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/category/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/category/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/category/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/category/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/category/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/category/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/category/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/category/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/category/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/category/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/category/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/category/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/order/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/order/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/order/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/order/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/order/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/order/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/order/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/order/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/order/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/order/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/order/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/order/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/order/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/order/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/cart/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/cart/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/aggregate',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/cart/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/cart/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/cart/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/cart/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/cart/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/cart/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/country/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/country/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/country/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/country/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/country/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/country/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/country/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/country/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/country/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/country/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/country/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/country/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/country/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/country/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/city/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/city/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/city/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/city/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/city/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/city/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/city/aggregate',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/city/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/city/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/city/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/city/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/city/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/city/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/city/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pincode/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/pincode/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pincode/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/pincode/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/pincode/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/pincode/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/pincode/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pincode/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pincode/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pincode/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pincode/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pincode/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pincode/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/pincode/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/state/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/state/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/state/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/state/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/state/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/state/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/state/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/state/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/state/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/state/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/state/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/state/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/state/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/state/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallet/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/wallet/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/wallet/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/wallet/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/wallet/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/wallet/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/wallet/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallet/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallet/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallet/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallet/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallet/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallet/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/wallet/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallettransaction/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallettransaction/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallettransaction/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallettransaction/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/wallettransaction/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallettransaction/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallettransaction/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/wallettransaction/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallettransaction/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallettransaction/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallettransaction/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallettransaction/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/wallettransaction/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/wallettransaction/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/shipping/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/shipping/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/shipping/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/shipping/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/shipping/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/shipping/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/shipping/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/shipping/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/shipping/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/shipping/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/shipping/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/shipping/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/shipping/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/shipping/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/usertokens/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/role/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/role/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/aggregate',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/projectroute/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/routerole/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/routerole/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/userrole/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/product/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/product/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/category/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/category/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/order/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/order/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/order/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/order/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/order/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/order/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/order/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/order/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/order/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/order/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/order/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/order/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/order/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/order/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/cart/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/cart/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/country/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/country/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/city/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/city/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pincode/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pincode/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pincode/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pincode/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/pincode/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pincode/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pincode/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pincode/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pincode/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pincode/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pincode/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pincode/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pincode/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/pincode/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/state/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/state/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/state/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/state/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/state/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/state/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/state/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/state/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/state/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/state/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/state/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/state/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/state/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/state/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallet/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallet/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallet/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallet/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/wallet/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallet/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallet/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallet/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallet/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallet/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallet/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallet/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallet/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/wallet/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallettransaction/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallettransaction/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallettransaction/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallettransaction/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/wallettransaction/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallettransaction/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallettransaction/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wallettransaction/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallettransaction/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallettransaction/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallettransaction/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallettransaction/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wallettransaction/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/wallettransaction/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shipping/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shipping/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shipping/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shipping/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/shipping/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shipping/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shipping/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shipping/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shipping/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shipping/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shipping/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shipping/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shipping/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/shipping/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/user/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/product/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/product/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/product/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/product/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/product/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/product/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/product/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/product/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/product/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/product/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/product/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/product/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/product/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/product/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/category/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/category/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/order/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/order/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/order/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/order/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/order/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/order/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/order/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/order/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/order/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/order/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/order/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/order/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/order/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/order/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/cart/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/cart/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/cart/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/cart/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/cart/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/cart/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/cart/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/cart/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/cart/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/cart/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/cart/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/cart/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/cart/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/cart/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/country/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/country/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/country/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/country/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/country/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/country/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/country/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/country/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/country/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/country/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/country/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/country/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/country/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/country/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/city/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/city/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/city/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/city/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/city/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/city/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/city/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/city/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/city/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/city/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/city/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/city/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/city/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/city/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/pincode/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/pincode/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/pincode/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/pincode/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/pincode/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/pincode/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/pincode/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/pincode/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/pincode/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/pincode/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/pincode/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/pincode/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/pincode/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/pincode/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/state/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/state/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/state/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/state/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/state/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/state/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/state/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/state/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/state/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/state/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/state/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/state/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/state/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/state/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallet/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallet/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallet/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallet/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/wallet/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallet/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallet/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallet/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallet/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallet/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallet/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallet/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallet/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/wallet/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallettransaction/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallettransaction/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallettransaction/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallettransaction/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/wallettransaction/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallettransaction/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallettransaction/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/wallettransaction/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallettransaction/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallettransaction/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallettransaction/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallettransaction/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/wallettransaction/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/wallettransaction/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/shipping/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/shipping/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/shipping/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/shipping/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/shipping/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/shipping/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/shipping/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/shipping/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/shipping/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/shipping/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/shipping/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/shipping/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/shipping/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/shipping/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/role/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/routerole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/userrole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },

    ];
    if (routeRoles && routeRoles.length) {
      for (let i = 0; i < routeRoles.length; i++) {
        let route = await ProjectRoute.findOne({
          uri: routeRoles[i].route.toLowerCase(),
          method: routeRoles[i].method,
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        let role = await Role.findOne({
          code: (routeRoles[i].role).toUpperCase(),
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        if (route && route.id && role && role.id) {
          let routeRoleObj = await RouteRole.findOne({
            roleId: role.id,
            routeId: route.id
          });
          if (!routeRoleObj) {
            await RouteRole.create({
              roleId: role.id,
              routeId: route.id
            });
          }
        }
      };
      console.info('RouteRole model seeded 🍺');
    }
  } catch (error){
    console.log('RouteRole seeder failed.');
  }
}

/* seeds roles for users */
async function seedUserRole (){
  try {
    let user = await User.findOne({
      'username':'Art38',
      'isActive':true,
      'isDeleted':false
    });
    let userRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (user && user.isPasswordMatch('KrKrtoGBnpPAa3t') && userRole){
      let count = await UserRole.countDocuments({
        userId: user.id,
        roleId: userRole.id
      });
      if (count == 0) {
        await UserRole.create({
          userId: user.id,
          roleId: userRole.id 
        });
        console.info('user seeded 🍺');
      }   
    }
    let admin = await User.findOne({
      'username':'Dalton.Hessel',
      'isActive':true,
      'isDeleted':false
    });
    let adminRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (admin && admin.isPasswordMatch('ERA_i3xhOSelCft') && adminRole){
      let count = await UserRole.countDocuments({
        userId: admin.id,
        roleId: adminRole.id
      });
      if (count == 0) {
        await UserRole.create({
          userId: admin.id,
          roleId: adminRole.id 
        });
        console.info('admin seeded 🍺');
      }   
    }
  } catch (error){
    console.log('UserRole seeder failed.');
  }
}

async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();
};
module.exports = seedData;