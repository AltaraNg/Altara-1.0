import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        years: () => {
            let years = [], startYear = new Date().getFullYear();
            for (let i = 0; i < 6; i++) {
                years.push(startYear--);
            }
            return years;
        },
        states: null,
        branches: null,
        lifestyleBranches: [8]/*note this is different from other number used in the array below, this one is the id of the lifestyle branches the others below are role id for users*/,
        loader: false,
        ProfileAccess: [],
        ProfileEditAccess: [],
        DSALead: [1, 2, 8, 9, 15],
        DSACaptain: [1, 2, 8, 9, 15, 17],
        DSAAccess: [1, 2, 8, 9, 15, 17, 18],
        DVALead: [1, 2, 8, 9, 13, 16],
        DVAAccess: [1, 2, 8, 9, 13, 16, 21, 22, 23],
        HRMAccess: [1, 2, 6, 7, 8, 9],
        FSLLead: [1, 2, 8, 9, 11],
        supervisor: [1, 2, 8, 9, 11, 14],
        FSLAccess: [1, 2, 8, 9, 11, 14, 19],
        authRole: parseInt(localStorage.getItem('role')),
        api_token: localStorage.getItem('api_token'),
        user_id: localStorage.getItem('user_id'),
        months: [
            {id: '01', name: "January"},
            {id: '02', name: "February"},
            {id: '03', name: "March"},
            {id: '04', name: "April"},
            {id: '05', name: "May"},
            {id: '06', name: "June"},
            {id: '07', name: "July"},
            {id: '08', name: "August"},
            {id: '09', name: "September"},
            {id: '10', name: "October"},
            {id: '11', name: "November"},
            {id: '12', name: "December"},
        ]
    },
    getters: {
        getYears: state => state.years(),
        getStates: state => state.states,
        getMonths: state => state.months,
        getBranches: state => state.branches,
        getProfileAccess: state => state.ProfileAccess,
        getProfileEditAccess: state => state.ProfileEditAccess,
        verifyFSLLead: state => state.FSLLead.includes(state.authRole),

        auth: state => role => state[role].includes(state.authRole),

        verifyDSALead: state => state.DSALead.includes(state.authRole),
        verifyDSACaptain: state => state.DSACaptain.includes(state.authRole),
        verifyDSAAccess: state => state.DSAAccess.includes(state.authRole) && state.api_token,
        verifyDVAAccess: state => state.DVAAccess.includes(state.authRole) && state.api_token,
        verifyHRMAccess: state => state.HRMAccess.includes(state.authRole) && state.api_token,
        verifyFSLAccess: state => state.FSLAccess.includes(state.authRole) && state.api_token,
    },
    mutations: {
        mutateAuth: state => {
            Vue.set(state, 'authRole', parseInt(localStorage.getItem('role')));
            Vue.set(state, 'api_token', localStorage.getItem('api_token'));
            Vue.set(state, 'user_id', localStorage.getItem('user_id'));
        },
        mutateStates: (state, states) => Vue.set(state, 'states', states),
        mutateBranches: (state, branches) => Vue.set(state, 'branches', branches),
        mutateProfileAccess: (state, payload) => state.ProfileAccess.push(payload),

    },
    actions: {
        mutateAuth: context => context.commit('mutateAuth'),
        mutateStates: (context, states) => context.commit('mutateStates', states),
        mutateBranches: (context, branches) => context.commit('mutateBranches', branches),
        mutateProfileAccess: (context, payload) => context.commit('mutateProfileAccess', payload),
    }
});