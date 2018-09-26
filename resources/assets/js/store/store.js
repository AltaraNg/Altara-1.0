import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        loader: false,
        ProfileAccess: [],
        ProfileEditAccess: [],
        DSAAccess: [1, 2, 8, 9, 15, 17],
        DVAAccess: [1, 2, 8, 9, 13, 16, 20, 21],
        HRMAccess: [1, 2, 6, 7, 8, 9],
        FSLAccess: [1, 2, 8, 9, 11, 14, 18],
        authRole: parseInt(localStorage.getItem('role')),
        api_token: localStorage.getItem('api_token'),
    },
    getters: {
        verifyDSAAccess: state => {
            if ((state.DSAAccess.includes(state.authRole)) && (state.api_token)) {
                return true;
            }
            return false;
        },
        verifyDVAAccess: state => {
            if ((state.DVAAccess.includes(state.authRole)) && (state.api_token)) {
                return true;
            }
            return false;
        },
        verifyHRMAccess: state => {
            if ((state.HRMAccess.includes(state.authRole)) && (state.api_token)) {
                return true;
            }
            return false;
        },
        verifyFSLAccess: state => {
            if ((state.FSLAccess.includes(state.authRole)) && (state.api_token)) {
                return true;
            }
            return false;
        },

        getProfileAccess: state => {
            return state.ProfileAccess;
        },
        getProfileEditAccess: state => {
            return state.ProfileEditAccess;
        }
    },
    mutations: {
        mutateProfileAccess: (state, payload) => {
            state.ProfileAccess.push(payload);
        },
        mutateAuth: (state) => {
            state.authRole = parseInt(localStorage.getItem('role'));
            state.api_token = localStorage.getItem('api_token');
        }
    },
    actions: {
        mutateProfileAccess: (context, payload) => {
            context.commit('mutateProfileAccess', payload);
        },
        mutateAuth: (context) => {
            context.commit('mutateAuth');
        }

    }
});