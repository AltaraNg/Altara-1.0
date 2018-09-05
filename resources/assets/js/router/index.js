import Vue from 'vue';
import VueRouter from 'vue-router';
import { routerHistory, writeHistory } from 'vue-router-back-button'
import Home from '../views/HomePage.vue';

import Login from '../views/auth/Login.vue';
import NotFound from '../views/NotFound.vue';

import DSA from '../views/DSA/index.vue';
import DSAHome from '../views/DSA/HomePage.vue';
import CustomerRegister from '../views/DSA/registration/Register.vue';

import DVA from '../views/DVA/index.vue';
import DVAHome from '../views/DVA/HomePage.vue';

import Profile from '../views/profile/Index.vue';
import ProfileEdit from '../views/profile/Edit.vue';
import ProfileHome from '../views/profile/HomePage.vue';

import HRM from '../views/HRM/index.vue';
import HRMHome from '../views/HRM/HomePage.vue';
import EmployeeManager from '../views/HRM/employee/Manager.vue';
import EmployeeRegister from '../views/HRM/employee/Register.vue';

Vue.use(VueRouter);
Vue.use(routerHistory);
const router = new VueRouter({
    routes:[
        {path:'/', component:Home },
        {path:'/home',component:Home,name:'home',meta: { role: localStorage.getItem("role_id") }, alias: '/welcome-home'},
        {path:'/login',component:Login,name:'login'},
        {path:'/user',component:Profile,
            children: [
                { path: 'profile', component: ProfileHome },
                { path: 'profile/edit', component: ProfileEdit },
            ]
        },
        //dsa dept
        {path:'/dsa',component:DSA,
            children:[
                // {path:'/',redirect:{name:'DSAHome'}},
                {path:'home',component:DSAHome,name:'DSAHome', alias: '/dsa-home'},
                {path:'customer/register',component:CustomerRegister,name:'customerRegister',alias: '/register-customer'}
			]
        },
        //dva dept
        {path:'/dva',component:DVA,
            children:[
                // {path:'/',redirect:{name:'DVAHome'}},
                {path:'home',component:DVAHome,name:'DVAHome', alias: '/dva-home'},
            ]
        },
        //hrm dept
        {path:'/hrm',component:HRM,
            children:[
                // {path:'/',redirect:{name:'HRMHome'}},
                {path:'home',component:HRMHome,name:'HRMHome',  alias: '/hrm-home'},
                {path:'employee/register',component:EmployeeRegister,name:'employeeRegister', alias: '/register-employee'},
                {path:'employee/manager',component:EmployeeManager,name:'employeeManager', alias: '/manage-employee'},
            ]
        },
        { path: '/not-found', component: NotFound },
        { path: '*', component: NotFound },
    ]
});
 
router.afterEach(writeHistory)
//place the router guard
router.beforeEach((to, from, next) => {
    //check if the path user is going to is our param path
    // if(from.meta.role == 11 || from.meta.role == 1){
    // if( to.path != '/dsa' ||  to.path != '/customer/register' ||  to.path != '/dsa/home' ){
    //     //check if the user item is already set
    //         //move to the route
	// 		next('/home');
	// 		 //prompt for username
	// 		 Flash.setError("DSAs are not allowed on this route");
    //         }else{
    //        //prompt for username
	// 		 Flash.setSuccess("Welcome to the Admin");
    //         //return, do not move to the route
	// 	//	return;
	// 		next();
	// 		}
    // }
//check if the path user is going to is our param path
// if( to.path == '/dsa' ||  to.path == '/customer/register' ||  to.path == '/dsa/home' ){
//     //check if the user item is already set
//         if(from.meta.role == 11 || from.meta.role == 1){
//         //move to the route
//         next('/home');
//          //prompt for username
//          Flash.setError("Only DSA are allowed on this route");
//         }else{
//        //prompt for username
//          Flash.setSuccess("Welcome to the Admin");
//         //return, do not move to the route
//     //	return;
//         next();
//         }
// }

 
        // if( to.path == '/hrm' ||  to.path == '/employee/register' ||  to.path == '/hrm/home' ||  to.path == 'employee/manager'){
        //     //check if the user item is already set
        //     if(to.meta.role != 5){
        //         //move to the route
        //         next('/home');
        //          //prompt for username
        //          Flash.setError("Only Hr are allowed on this route");
        //         }else{
        //        //prompt for username
        //          Flash.setSuccess("Welcome to the Admin");
        //         //return, do not move to the route
        //     //	return;
        //         next();
        //         }
        // }
    next();
});
export default router