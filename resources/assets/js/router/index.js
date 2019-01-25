import Vue from 'vue';
import VueRouter from 'vue-router';
import Flash from '../helpers/flash';
import {store} from '../store/store';
import {routerHistory, writeHistory} from 'vue-router-back-button'

const Home = () => import( '../views/HomePage.vue');

const Login = () => import( '../views/auth/Login.vue');

const NotFound = () => import( '../views/NotFound.vue');

const DSA = () => import( '../views/DSA/index.vue');
const DSAHome = () => import( '../views/DSA/HomePage.vue');
const DSAReport = () => import( '../views/DSA/report/report.vue');

const CustomerList = () => import( '../components/CustomerList.vue');
const CustomerUpdate = () => import( '../views/DSA/utility/form.vue');
const CustomerProfileFull = () => import( '../components/CustomerProfileFull.vue');
const CustomerRegister = () => import( '../views/DSA/registration/Register.vue');

const DVA = () => import( '../views/DVA/index.vue');
const DVAHome = () => import( '../views/DVA/HomePage.vue');
const DVAMessage = () => import( '../views/DVA/messaging/message.vue');
const DVAVerification = () => import( '../views/DVA/verification/verification.vue');

const Profile = () => import( '../views/profile/Index.vue');
const ProfileEdit = () => import( '../views/profile/Edit.vue');
const ProfileHome = () => import( '../views/profile/HomePage.vue');

const HRM = () => import( '../views/HRM/index.vue');
const HRMHome = () => import( '../views/HRM/HomePage.vue');
const EmployeeManager = () => import( '../views/HRM/employee/Manager.vue');
const EmployeeRegister = () => import( '../views/HRM/employee/Register.vue');

const FSL = () => import('../views/FSL/index.vue');
const FSLHome = () => import('../views/FSL/HomePage.vue');
const Branch = () => import('../views/FSL/branch/branches.vue');
const BranchForm = () => import('../views/FSL/branch/form.vue');
const Inventory = () => import('../views/FSL/inventory/inventory.vue');
const SuppliersForm = () => import('../views/FSL/supplier/form.vue');
const BrandForm = () => import('../views/FSL/brand/form.vue');
const CategoryForm = () => import('../views/FSL/category/form.vue');
const ProductForm = () => import('../views/FSL/product/form.vue');

Vue.use(VueRouter);
Vue.use(routerHistory);
const router = new VueRouter({
   hashbang: false,
   history: true,
   linkActiveClass: 'active',
   mode: 'history',
   routes: [
      {path: '/', redirect: {name: 'home'}},
      {path: '/home', component: Home, name: 'home', meta: {role: localStorage.getItem("role_id")}},
      {path: '/login', component: Login, name: 'login'},
      {
         path: '/user', component: Profile, children: [
            {path: 'profile', component: ProfileHome},
            {path: 'profile/edit', component: ProfileEdit},
         ]
      },
      {
         path: '/dsa', component: DSA, meta: {DSA: true}, children: [
            {path: '/', redirect: {name: 'DSAHome'}},
            {path: 'home', component: DSAHome, name: 'DSAHome'},
            {path: 'report', component: DSAReport, name: 'DSAReport'},
            {path: 'customer/register', component: CustomerRegister, name: 'customerRegister'},
            {path: 'customer/update', component: CustomerUpdate, name: 'DSACustomerUpdate'}
         ]
      },
      {
         path: '/dva', component: DVA, meta: {DVA: true}, children: [
            {path: '/', redirect: {name: 'DVAHome'}},
            {path: 'home', component: DVAHome, name: 'DVAHome'},
            {path: 'message', component: DVAMessage, name: 'DVAMessage'},
            {path: 'customer/update', component: CustomerUpdate, name: 'DVACustomerUpdate'},
            {path: 'verification', component: DVAVerification, name: 'DVAVerification'},
         ]
      },
      {
         path: '/hrm', component: HRM, meta: {HRM: true}, children: [
            {path: '/', redirect: {name: 'HRMHome'}},
            {path: 'home', component: HRMHome, name: 'HRMHome'},
            {path: 'employee/manager', component: EmployeeManager, name: 'employeeManager'},
            {path: 'employee/register', component: EmployeeRegister, name: 'employeeRegister'},
         ]
      },
      {
         path: '/fsl', component: FSL, meta: {FSL: true}, children: [
            {path: 'home', component: FSLHome, name: 'FSLHome'},
            {path: 'inventory', component: Inventory, name: 'inventory'},
            {path: 'branch', component: Branch, name: 'branch'},
            {path: 'branch/:id/edit', component: BranchForm, name: 'branchEdit', meta: {mode: 'edit'}},
            {path: 'branch/create', component: BranchForm, name: 'branchCreate', meta: {mode: 'create'}},
            {path: 'brands/:id/edit', component: BrandForm, name: 'BrandEdit', meta: {mode: 'edit'}},
            {path: 'brands/create', component: BrandForm, name: 'BrandCreate', meta: {mode: 'create'}},
            {path: 'products/:id/edit', component: ProductForm, name: 'productEdit', meta: {mode: 'edit'}},
            {path: 'products/create', component: ProductForm, name: 'productCreate', meta: {mode: 'create'}},
            {path: 'categories/:id/edit', component: CategoryForm, name: 'categoryEdit', meta: {mode: 'edit'}},
            {path: 'categories/create', component: CategoryForm, name: 'categoryCreate', meta: {mode: 'create'}},
            {path: 'suppliers/:id/edit', component: SuppliersForm, name: 'suppliersEdit', meta: {mode: 'edit'}},
            {path: 'suppliers/create', component: SuppliersForm, name: 'suppliersCreate', meta: {mode: 'create'}}
         ]
      },
      {path: '/customer/list', component: CustomerList, name: 'customerList'},
      {path: '/customer/:id', component: CustomerProfileFull, name: 'customerProfileFull'},
      {path: '/not-found', component: NotFound},
      {path: '*', component: NotFound},
   ]
});

router.mode = 'html5';
router.afterEach(writeHistory);
router.beforeEach((to, from, next) => {
   /*route access control*/
   let home = (((to.path).split("/")).filter(Boolean)[0]).toUpperCase();
   /* get the base for every route eg.
   * :route : '/dsa/customer/register'
   * : home will return 'DSA*/
   if (to.matched.some(m => m.meta[home])) {
      /*if home ('DSA in this case is matched')*/
      if (store.getters['verify' + home + 'Access']) return next();
      /*for home = 'DSA' the store.getters.verifyDSAAccess will be called
      * the method in store will return true if a user has access to the portal hence next();
      * and false is a user don't have access hence error message and redirect to home*/
      Flash.setError('You do not have access to that page!', 3000);
      return next({name: 'home'});
   }
   /*else next will call the route for the all unknown path
   * : the : 'NotFound'*/
   next();
});
export default router