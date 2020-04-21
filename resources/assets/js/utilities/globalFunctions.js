import Vue from 'vue';
import Flash from './flash';
import {store} from '../store/store';
import {get} from './api'


/**custom made vue filters
 the argument s is the string u want to capitalize
 e i a -> element, index, array**/
Vue.filter('capitalize', s => {
    if (s) {
        s = (s.replace(/_/g, ' ').split(" "));
        s.forEach((e, i, a) => a[i] = e.charAt(0).toUpperCase() + e.slice(1));
        return s.join(' ');
    }
    return '';
});


/**the argument s is the string to be converted to slug**/
Vue.filter('slug', s => !s ? '' : s.replace(/ /g, '_').toLowerCase());


/**custom add Date prototype**/
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};


/**NB functions her can be accessed anywhere on the project(vue components)
 * by using this.$functionName the argument c stands for customer
 * I used c just to reduce file size**/
Vue.prototype.$getCustomerFullName = (c, withMiddleName = false) =>
    c ? `${c.first_name + (c.middle_name ? " " + c.middle_name + " " : " ") + c.last_name}` : null;

Vue.prototype.$getCustomerAddress = c =>
    c ? `${c.add_houseno} ${c.add_street} ${c.area_address}, ${c.city}, ${c.state}.` : null;

Vue.prototype.$getCustomerOfficeAddress = c =>
    c ? `${c.comp_house_no} ${c.comp_street_name} ${c.comp_area}, ${c.company_city}, ${c.company_state}.` : null;

/**the customer.verification is what is passed as v**/
Vue.prototype.$getCustomerApprovalStatus = v =>
    !!v ? (v.address && v.id_card && v.passport && v.processing_fee && v.work_guarantor && v.personal_guarantor) : false;


/**used in any form to avoid submitting forms more than
 * once or repeatedly while processing already**/
Vue.prototype.$isProcessing = false;


/**sets the loader and isProcessing to what us true or false**/
Vue.prototype.$LIPS = function (s) {//s is a boolean
    // this.$store.state.loader = this.$isProcessing = s;
    this.$isProcessing = s;
    // TODO:: cleanup
    store.dispatch('toggleLoader', s);
};


/**scrolls to page top with animation**/
Vue.prototype.$scrollToTop = () => $("html, body").animate({scrollTop: 0}, 500);


/**return the today's date - yyyy-mm-dd;**/
Vue.prototype.$getDate = (date = new Date(), monthStartsFromZero = true) => {
    /**changes 2 to 02, 10 to 10**/
    const toTwoDigits = num => num < 10 ? '0' + num : num;
    return `${date.getFullYear()}-`
        + `${toTwoDigits((date.getMonth() + (monthStartsFromZero && 1)))}-`
        + `${toTwoDigits(date.getDate())}`;
};

//this is used to round down an amount to the nearest hundred
Vue.prototype.$roundDownAmt = amount => (Math.floor(amount / 100) * 100);

/**return the network status(true | false) of the system if connected to a
 network not NB: this doesn't work with internet access. it only
 detects the system is connected to a network**/
Vue.prototype.$network = () => process.env.NODE_ENV === 'development' ? true : window.navigator.onLine;


/**currency formatter**/
const formatter = (new Intl.NumberFormat('en-NG',
    {style: 'currency', currency: 'NGN', minimumFractionDigits: 2}));
Vue.prototype.$formatCurrency = price => !!price ? formatter.format(price) : price;


/**throws custom error messages**/
Vue.prototype.$networkErr = function (err = '', duration = 30000, msg = null) {
    this.$scrollToTop();
    this.$LIPS(false);
    if (!msg) msg = 'No network access, try again later!';
    if (err === 'form') msg = 'Please ensure all the fields are filled correctly!';
    if (err === 'page') {
        msg = 'You do not have access to that page!';
        this.$router.push('/home');
    }
    if (err === 'edit') msg = 'You do not have access to edit details because it is out of your jurisdiction!';
    if (err === 'unique') msg = 'Your details contains a unique field that already exists in our record change it and try again!';
    Flash.setError(msg, duration);
};

Vue.prototype.$displayErrorMessage = function (error) {
    this.$networkErr(null, 50000, error)
};

/*** this function checks for app level branch Hence the call for list of branches is done
 * Once throughout the application lifecycle this is for memory optimization
 * also this ensure we have 1 instance of the branches variable
 * throughout the app which is stores with vuex*/
/**r is the response from the request**/
Vue.prototype.$prepareBranches = () => {
    !store.getters.getBranches && get('/api/branches')
        .then(r => store.dispatch('mutateBranches', r.data.branches));
};

/*** this function checks for app level states Hence the call for list of states is done
 * Once throughout the application lifecycle this is for memory optimization
 * also this ensure we have 1 instance of the states variable
 * throughout the app which it stores with vuex*/
/**r is the response from the request**/
Vue.prototype.$prepareStates = () => {
    !store.getters.getStates && get('/api/state')
        .then(r => store.dispatch('mutateStates', r.data.states));
};

Vue.prototype.$prepareCategories = () => {

    !store.getters.getCategories && get('/api/categories')
        .then(r => store.dispatch('mutateCategories', r.data.categories));
};
Vue.prototype.$prepareInventories = () => {

    !store.getters.getInventories && get('/api/inventories')
        .then(r => store.dispatch('mutateInventories', r.data.inventories));
};

Vue.prototype.$prepareBrands = () => {

    !store.getters.getBrands && get('/api/brands')
        .then(r => store.dispatch('mutateBrands', r.data.brands));
};

Vue.prototype.$prepareUsers = () => {

    !store.getters.getUsers && get('/api/users')
        .then(r => store.dispatch('mutateUsers', r.data.users));
};

Vue.prototype.$preparePaymentMethods = () => {
    !store.getters.getPaymentMethods && get('/api/payment_method')
        .then(r => store.dispatch('mutatePaymentMethods', r.data.paymentMethods));
};

Vue.prototype.$prepareBanks = () => {
    !store.getters.getBanks && get('/api/bank')
        .then(r => store.dispatch('mutateBanks', r.data.banks));
};

Vue.prototype.$prepareTypeaheadUsersList = () => {
    !store.getters.getTypeaheadUsersList && get('/api/users/list_type/type_ahead')
        .then(r => store.dispatch('mutateTypeaheadUsersList', r.data.users));
};

/**convert a time in 24 hours format to 12 hours format**/
Vue.prototype.$timeConvert = time => {
    // Check correct time format and split into components
    if (time) {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    return time;
};

Vue.prototype.$dateTimeConvert = function (dateTime) {
    let [date, time] = dateTime.split(" ");
    return date + "  " + this.$timeConvert(time);
};


Vue.prototype.$getColumn = (i) => {
    let column = null;
    switch (i) {
        case 1:
            column = i + 'st';
            break;
        case 2:
            column = i + 'nd';
            break;
        case 3:
            column = i + 'rd';
            break;
        default:
            column = i + 'th';
            break;
    }
    return column;
};


Vue.prototype.$editAccess = function (user = '', customer = '') {
    /**this is a method for access control between dsa <=> customer and dva <=> customer**/
    /**the rules are as follows
     * 0. Only a DSA or a DVA can be considered or have access to edit/update/verify a customer
     * 1. Leads(DSA and DVA) have ultimate access to perform any action on any customer related task
     * 2. DSA captains can edit/update customers that belong to the same branch with them
     * 3. DSA's can only update/edit customers that they registered.
     * 4. DVA's Can verify/edit/update customers in there branch**/
    if (!!user && !!customer) {
        /**check is a customer and a user exist ie a customer that is
         * meant to be edited and the user that wants to
         * edit the customer else: false*/

        /*Note for the lifestyle DVA they have access to work on
        * any customer irrespective of the
        * branch he is registered*/

        if (store.getters.auth('DSAAccess')) {
            /**ref 0: if user is a DSA*/
            if (store.state.DSALead.includes(user.role_id)) {
                /**if it user a lead: grant permission*/
                return true;
            } else {
                /**else if either a dsa captain or just dsa both user branch and customer branch must be same*/
                if (user.branch_id === customer.branch_id) {
                    /**if both branch(user and customer) match*/
                    if (store.state.DSACaptain.includes(user.role_id)) {
                        /**if user is a  captain grant access*/
                        return true;
                    } else {
                        /**check is the user that registered the customer is the same user trying to update/edit
                         * if its the same person grant access*/
                        if (user.id === customer.user.id) {
                            return true
                        } else /**else if its not the same person deny access*/return false;
                    }
                } else /***if not same branch deny access*/ return false;
            }
        } else if (store.getters.auth('DVAAccess')) {
            /**ref 0: if user is DVA*/
            if (store.state.DVALead.includes(user.role_id)) {
                /**if the user is a lead grant access*/
                return true
            } else {
                if (store.state.lifestyleBranches.includes(user.branch_id)) {
                    /*if the DVA's branch is lifestyle grant access*/
                    return true;
                }
                /**if not a lead check if branch of user and customer is the same*/
                if (user.branch_id === customer.branch_id) {
                    /**IF BOTH branch is the same grant accee*/
                    return true
                } else /**else is both branch doesnt match deny access*/return false;
            }
        } else /**if user is not dva or dsa: no access ie false*/return false;

    } else /**if there is no user or customer deny access*/return false;
};
