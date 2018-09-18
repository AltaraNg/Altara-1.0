import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        loader: false,
        ProfileAccess: [],
        ProfileEditAccess: [],
        DSAAccess: [1, 2, 3, 8, 9, 15, 17],
        DVAAccess: [1, 2, 3, 8, 9, 13, 16, 20, 21],
        HRMAccess: [1, 2, 3, 6, 7, 8, 9],
        FSRAccess: [1, 2, 3, 8, 9, 11, 14, 18],
        authRole: parseInt(localStorage.getItem('role')),
        api_token: localStorage.getItem('api_token'),
    },
    getters: {
        verifyDSAAccess: state => {
            return (state.DSAAccess.includes(state.authRole)) && (state.api_token);
        },
        verifyDVAAccess: state => {
            return (state.DVAAccess.includes(state.authRole)) && (state.api_token);
        },
        verifyHRMAccess: state => {
            return (state.HRMAccess.includes(state.authRole)) && (state.api_token);
        },
        verifyFSRAccess: state => {
            return (state.FSRAccess.includes(state.authRole)) && (state.api_token);
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
        }
    },
    actions: {
        mutateProfileAccess: (context, payload) => {
            context.commit('mutateProfileAccess', payload);
        }
    }
});