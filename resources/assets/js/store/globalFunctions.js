import Vue from 'vue';
import Flash from '../helpers/flash';
import {store} from '../store/store';
import {get} from '../helpers/api'

//NB functions her can be accessed anywhere
// on the project(vue components)
// by using this.$functionName

Vue.prototype.$isProcessing = false;
//this is basically used in any form to avoid submitting
// forms more than once or repeatedly
// while processing already

Vue.prototype.$LIPS = function (s) {
    this.$store.state.loader = this.$isProcessing = s
};
//sets loader to true(show) or false(hide); isProcessing
// if true (disables the button its called on)
// or disables is if true

Vue.prototype.$scrollToTop = () => $("html, body").animate({scrollTop: 0}, 500);
//scrolls the page (with animation) to the top

Vue.prototype.$getDate = () => {
    const toTwoDigits = num => num < 10 ? '0' + num : num;
    let today = new Date(),
        year = today.getFullYear(),
        month = toTwoDigits(today.getMonth() + 1),
        day = toTwoDigits(today.getDate());
    return `${year}-${month}-${day}`;
    //return the current date; format : yyyy-mm-dd;
};
Vue.prototype.$network = () => window.navigator.onLine;
//return the network status(true | false) of the system if connected to a
// network not NB: this doesn't work with internet access. it only
//detects the system is connected to a network


Vue.prototype.$networkErr = function (err = '') {
    this.$scrollToTop();
    this.$LIPS(false);
    let msg = 'No network access, try again later!';
    if (err === 'form') msg = 'Please ensure all the fields are filled correctly!';
    if (err === 'page') {
        msg = 'You do not have access to that page!';
        this.$router.push('/home');
    }
    if (err === 'edit') msg = 'You do not have access to edit details because it is out of your jurisdiction!';
    if (err === 'unique') msg = 'Your details contains a unique field that already exists in our record change it and try again!';
    Flash.setError(msg, 10000);
    //custom message for network "no network connection" and
    //form field validation error
};

Vue.prototype.$prepareBranches = () => {
    /*** this function checks for app level branch Hence the call for list of branches is done
     * Once throughout the application lifecycle this is for memory optimization
     * also this ensure we have 1 instance of the branches variable
     * throughout the app which is stores with vuex*/
    const branches = store.getters.getBranches;
    if (!branches) get('/api/branches').then(res => store.dispatch('mutateBranches', res.data.branches));
};

Vue.prototype.$prepareStates = () => {
    /*** this function checks for app level branch Hence the call for list of states is done
     * Once throughout the application lifecycle this is for memory optimization
     * also this ensure we have 1 instance of the states variable
     * throughout the app which is stores with vuex*/
    const states = store.getters.getStates;
    if (!states) get('/api/state').then(res => store.dispatch('mutateStates', res.data.states));
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

        if (store.getters.verifyDSAAccess) {
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
        } else if (store.getters.verifyDVAAccess) {
            /**ref 0: if user is DVA*/
            if (store.state.DVALead.includes(user.role_id)) {
                /**if the user is a lead grant access*/
                return true
            } else {
                if(store.state.lifestyleBranches.includes(user.branch_id)){
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