
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomePage.vue';
//import Register from '../views/auth/Register.vue';

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
import EmployeeRegister from '../views/HRM/employee/Register.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {path: '/',redirect:{name:'home'}},
        {path:'/home',component:Home,name:'home'},
        {path:'/login',component:Login,name:'login'},
        //{path:'/register',component:Register,name:'register'},
        {path:'/user',component:Profile,
            children: [
                { path: 'profile', component: ProfileHome },
                { path: 'profile/edit', component: ProfileEdit },
            ]
        },
        //dsa dept
        {path:'/dsa',component:DSA,
            children:[
                {path:'/',redirect:{name:'DSAHome'}},
                {path:'home',component:DSAHome,name:'DSAHome'},
                {path:'customer/register',component:CustomerRegister,name:'customerRegister'}
            ]
        },
        //dva dept
        {path:'/dva',component:DVA,
            children:[
                {path:'/',redirect:{name:'DVAHome'}},
                {path:'home',component:DVAHome,name:'DVAHome'},
            ]
        },
        //hrm dept
        {path:'/hrm',component:HRM,
            children:[
                {path:'/',redirect:{name:'HRMHome'}},
                {path:'home',component:HRMHome,name:'HRMHome'},
                {path:'employee/register',component:EmployeeRegister,name:'employeeRegister'},
            ]
        },
        { path: '/not-found', component: NotFound },
        { path: '*', component: NotFound },
    ]
});
export default router