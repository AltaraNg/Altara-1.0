import Vue from 'vue';
import VueRouter from 'vue-router';
import Flash from '../utilities/flash';
import { store } from '../store/store';
import { routerHistory, writeHistory } from 'vue-router-back-button'

const Home = () =>
    import ('../views/HomePage.vue');
const Login = () =>
    import ('../views/auth/Login.vue');
const ResetPassword = () =>
    import ('../views/auth/ResetPassword.vue');
const ForgotPassword = () =>
    import ('../views/auth/ForgotPassword.vue');
const NotFound = () =>
    import ('../views/NotFound.vue');
const DSA = () =>
    import ('../views/DSA/Index.vue');
const DSAHome = () =>
    import ('../views/DSA/HomePage.vue');
const DSAReport = () =>
    import ('../views/DSA/report/report.vue');
const CustomerForm = () =>
    import ('../views/shared/customerForm.vue');
const DVA = () =>
    import ('../views/DVA/Index.vue');
const DVAHome = () =>
    import ('../views/DVA/HomePage.vue');
const DVAMessage = () =>
    import ('../views/DVA/messaging/message.vue');
const DVAVerification = () =>
    import ('../views/DVA/verification/verification.vue');
const CAG = () =>
    import ('../views/CAG/index.vue');
const CAGHome = () =>
    import ('../views/CAG/HomePage.vue');
const OrderList = () =>
    import ('../views/DVA/AllOrderList.vue');
const AllOverdue = () =>
    import ('../views/DVA/AllOverduePayment');
const Reminder = () =>
    import ('../views/DVA/reminder/reminder.vue');
const Profile = () =>
    import ('../views/profile/Index.vue');
const ProfileEdit = () =>
    import ('../views/profile/Edit.vue');
const ProfileHome = () =>
    import ('../views/profile/HomePage.vue');
const HRM = () =>
    import ('../views/HRM/index.vue');
const HRMHome = () =>
    import ('../views/HRM/HomePage.vue');
const DataViewer = () =>
    import ('../components/DataViewer.vue');
const EmployeeForm = () =>
    import ('../views/HRM/employee/employeeForm.vue');
const AltaraPay = () =>
    import ('../views/AltaraPay/index.vue');
const AltaraPayHome = () =>
    import ('../views/AltaraPay/HomePage.vue');
const DirectDebitSales = () =>
    import ('../views/AltaraPay/sales/DirectDebitSales.vue');
const Caution = () =>
    import ('../views/HRM/caution/index.vue');
const CautionForm = () =>
    import ('../views/HRM/caution/form.vue');
const FSL = () =>
    import ('../views/FSL/index.vue');
const FSLHome = () =>
    import ('../views/FSL/HomePage.vue');
const BranchForm = () =>
    import ('../views/FSL/branch/form.vue');
const POSForm = () =>
    import ('../views/FSL/pos/form.vue');
const PaymentForm = () =>
    import ('../views/FSL/payment/form.vue');
const CustomerLookup = () =>
    import ('../views/FSL/lookup/lookup.vue');
const Attendance = () =>
    import ('../views/FSL/attendance/index.vue');
const AttendanceForm = () =>
    import ('../views/FSL/attendance/form.vue');
const LOG = () =>
    import ('../views/LOG/index.vue');
const LOGHome = () =>
    import ('../views/LOG/HomePage.vue');
const Inventory = () =>
    import ('../views/LOG/inventory/inventory.vue');
const SuppliersForm = () =>
    import ('../views/LOG/supplier/form.vue');
const BrandForm = () =>
    import ('../views/LOG/brand/form.vue');
const CategoryForm = () =>
    import ('../views/LOG/category/form.vue');
const ProductForm = () =>
    import ('../views/LOG/product/form.vue');
const Renewal = () =>
    import ('../views/FSL/renewal/renewal.vue');
const CreditWorthy = () =>
    import ("../views/FSL/credit_worthy/credit_worthy.vue");
const AltaraLoan = () =>
    import ('../views/AltaraLoan/index.vue');
const AltaraLoanHome = () =>
    import ('../views/AltaraLoan/HomePage.vue');
Vue.use(VueRouter);
Vue.use(routerHistory);
const router = new VueRouter({
    hashbang: false,
    history: true,
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { path: '/home', component: Home, name: 'home', meta: { requiresAuth: true, role: localStorage.getItem("role_id") } },
        { path: '/login', component: Login, name: 'login' },
        { path: '/password/forgot', component: ForgotPassword, name: 'forgotPassword', meta: { requiresAuth: false } },
        { path: '/password/reset/:token', component: ResetPassword, name: 'resetPassword', meta: { requiresAuth: false } },
        {
            path: '/user',
            component: Profile,
            meta: { requiresAuth: true },
            children: [
                { path: 'profile', component: ProfileHome },
                { path: 'profile/edit', component: ProfileEdit },
            ]
        },
        {
            path: '/dsa',
            component: DSA,
            meta: { requiresAuth: true, DSA: true },
            children: [
                { path: '/', redirect: { name: 'DSAHome' } },
                { path: 'home', component: DSAHome, name: 'DSAHome' },
                { path: 'report', component: DSAReport, name: 'DSAReport' },
                { path: 'customer/create', component: CustomerForm, meta: { mode: 'register' } },
            ]
        },
        {
            path: '/altarapay',
            component: AltaraPay,
            meta: { requiresAuth: true, ALTARAPAYy: true },
            children: [
                { path: '/', redirect: { name: 'AltaraPayHome' } },
                { path: 'home', component: AltaraPayHome, name: 'AltaraPayHome' },
                { path: 'lookup', component: CustomerLookup, name: 'customer-lookup-altarapay', meta: { customSMS: true } },
                {
                    path: 'verification',
                    component: DVAVerification,
                    name: 'verification-altarapay',
                    meta: { mode: 'verification' }
                },
                { path: 'direct-debit-sales', component: DirectDebitSales, name: 'direct-debit-sales', meta: { customSMS: true } },
                {
                    path: 'direct-debit-overdue',
                    component: AllOverdue,
                    name: 'direct-debit-overdue',
                    meta: { mode: 'direct-debit' }
                },
            ]
        }, {
            path: '/cashloan',
            component: AltaraLoan,
            meta: { requiresAuth: true, CASHLOAN: true },
            children: [
                { path: '/', redirect: { name: 'AltaraLoanHome' } },
                { path: 'home', component: AltaraLoanHome, name: 'AltaraLoanHome' },
                { path: 'lookup', component: CustomerLookup, name: 'customer-lookup-cashloan', meta: { customSMS: true } },
                { path: 'direct-debit-sales', component: DirectDebitSales, name: 'direct-debit-sales-cashloan', meta: { customSMS: true } },
                {
                    path: 'direct-debit-overdue',
                    component: AllOverdue,
                    name: 'direct-debit-overdue-cashloan',
                    meta: { mode: 'direct-debit' }
                },
                {
                    path: "credit-worthy",
                    component: CreditWorthy,
                    name: "credit-worthy",
                    meta: { mode: "create" }
                },
            ]
        },
        {
            path: '/dva',
            component: DVA,
            meta: { requiresAuth: true, DVA: true },
            children: [
                { path: '/', redirect: { name: 'DVAHome' } },
                { path: 'home', component: DVAHome, name: 'DVAHome' },
                { path: 'message', component: DVAMessage, name: 'DVAMessage' },
                {
                    path: 'customer/update',
                    component: CustomerForm,
                    meta: { mode: 'update' },
                    alias: '/dsa/customer/update',
                    name: 'customerUpdate'
                },
                { path: 'verification', component: DVAVerification, name: 'verification', meta: { mode: 'verification' } },
                { path: 'sales', component: OrderList, name: 'sales-dva', meta: { customSMS: true } },
                { path: 'lookup', component: CustomerLookup, name: 'customer-lookup-dva', meta: { customSMS: true } },
                { path: 'reminder/sms', component: Reminder, name: 'sms-reminder', meta: { mode: 'sms' } },
                { path: 'reminder/call', component: Reminder, name: 'call-reminder', meta: { mode: 'call' } },
                { path: 'reminder/collection', component: Reminder, name: 'collection', meta: { mode: 'collection' } },
                { path: 'reminder/recovery', component: Reminder, name: 'recovery', meta: { mode: 'recovery' } },
                {
                    path: 'reminder/external-recovery',
                    component: Reminder,
                    name: 'external-recovery',
                    meta: { mode: 'external-recovery' }
                },
                { path: 'all-overdue', component: AllOverdue, name: 'all-overdue-dva' },
            ]
        },
        {
            path: '/cag',
            component: CAG,
            meta: { requiresAuth: true, CAG: true },
            children: [
                { path: '/', redirect: { name: 'CAGHome' } },
                { path: 'home', component: CAGHome, name: 'CAGHome' },
                { path: 'sales', component: OrderList, name: 'sales-cag', meta: { customSMS: false } },
                { path: 'all-overdue', component: AllOverdue, name: 'all-overdue-cag' },
            ]
        },
        {
            path: '/hrm',
            component: HRM,
            meta: { requiresAuth: true, HRM: true },
            children: [
                { path: '/', redirect: { name: 'HRMHome' } },
                { path: 'home', component: HRMHome, name: 'HRMHome' },
                {
                    path: 'employee',
                    component: DataViewer,
                    meta: { appModel: 'user', source: '/api/user', new: '/hrm/employee' }
                },
                { path: 'employee/create', component: EmployeeForm, meta: { mode: 'create' } },
                { path: 'employee/:id/edit', component: EmployeeForm, meta: { mode: 'edit' } },
                { path: 'attendance', component: Attendance },
                {
                    path: 'attendance/create',
                    component: AttendanceForm,
                    name: 'attendanceCreateHrm',
                    meta: { mode: 'create' }
                },
                { path: 'caution', component: Caution },
                { path: 'caution/create', component: CautionForm, name: 'createCaution', meta: { mode: 'create' } }
            ]
        },
        {
            path: '/fsl',
            component: FSL,
            meta: { requiresAuth: true, FSL: true },
            children: [
                { path: 'home', component: FSLHome, name: 'FSLHome' },
                {
                    path: 'branch',
                    component: DataViewer,
                    meta: { appModel: 'branch', source: '/api/branch', new: '/fsl/branch' }
                },
                { path: 'branch/:id/edit', component: BranchForm, meta: { mode: 'edit' } },
                { path: 'branch/create', component: BranchForm, meta: { mode: 'create' } },
                {
                    path: 'attendance/create',
                    component: AttendanceForm,
                    name: 'attendanceCreateFsl',
                    meta: { mode: 'create' }
                },
                { path: 'sales', component: OrderList, name: 'sales-fsl', meta: { customSMS: true } },
                { path: 'sales/create', component: POSForm, name: 'post-sales' },
                { path: 'payment', component: PaymentForm, name: 'down-payment' },
                { path: 'lookup', component: CustomerLookup, name: 'customer-lookup-dva', meta: { customSMS: true } },
                { path: 'reminder/renewal', component: Renewal, name: 'renewal', meta: { mode: 'renewal' } },
                {
                    path: "credit-worthy",
                    component: CreditWorthy,
                    name: "credit-worthy",
                    meta: { mode: "create" }
                },
            ]
        },
        {
            path: '/log',
            component: LOG,
            meta: { requiresAuth: true, LOG: true },
            children: [
                { path: 'home', component: LOGHome, name: 'LOGHome' },
                { path: 'inventory', component: Inventory, name: 'inventory' },
                {
                    path: 'brands',
                    component: DataViewer,
                    meta: { appModel: 'brand', source: '/api/brand', new: '/log/brands' }
                },
                { path: 'brands/:id/edit', component: BrandForm, name: 'BrandEdit', meta: { mode: 'edit' } },
                { path: 'brands/create', component: BrandForm, name: 'BrandCreate', meta: { mode: 'create' } },

                {
                    path: 'products',
                    component: DataViewer,
                    meta: { appModel: 'product', source: '/api/product', new: '/log/products' }
                },
                { path: 'products/:id/edit', component: ProductForm, name: 'productEdit', meta: { mode: 'edit' } },
                { path: 'products/create', component: ProductForm, name: 'productCreate', meta: { mode: 'create' } },

                {
                    path: 'categories',
                    component: DataViewer,
                    meta: { appModel: 'category', source: '/api/category', new: '/log/categories' }
                },
                { path: 'categories/:id/edit', component: CategoryForm, name: 'categoryEdit', meta: { mode: 'edit' } },
                { path: 'categories/create', component: CategoryForm, name: 'categoryCreate', meta: { mode: 'create' } },

                {
                    path: 'suppliers',
                    component: DataViewer,
                    meta: { appModel: 'supplier', source: '/api/supplier', new: '/log/suppliers' }
                },
                { path: 'suppliers/:id/edit', component: SuppliersForm, name: 'suppliersEdit', meta: { mode: 'edit' } },
                { path: 'suppliers/create', component: SuppliersForm, name: 'suppliersCreate', meta: { mode: 'create' } },
            ]
        },

        {
            path: '/customer',
            component: DataViewer,
            meta: { requiresAuth: true, appModel: 'customer', source: '/api/customer', new: '/dsa/customer' }
        },
        { path: '/not-found', component: NotFound, meta: { requiresAuth: true } },
        { path: '*', component: NotFound, meta: { requiresAuth: true } },
    ]
});

router.mode = 'html5';
router.afterEach(writeHistory);
router.afterEach(() => store.state.loader = false);
router.beforeEach((to, from, next) => {
    const home = to.path.split('/').filter(Boolean)[0].toUpperCase();
    const token = localStorage.getItem('api_token');
    const reRoute = (path) => {
        Flash.setError('You do not have access to that page!');
        return next({ name: path });
    };

    home === 'PASSWORD' && token ? reRoute('home') : next();

    if (to.matched.some(route => route.meta.requiresAuth)) {
        token ? next() : reRoute('login');
    }

    if (to.matched.some(m => m.meta[home])) {
        store.getters.auth(home + 'Access') ? next() : reRoute('home');
    }
    next();
});
export default router