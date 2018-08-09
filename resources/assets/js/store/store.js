import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        loader:false,
        ProfileAccess:[],
        ProfileEditAccess:[],
        DSAAccess:[1,2,3,4,9,10,11],
        DVAAccess:[1,2,3,4,6,9,13,14],
        DCAAccess:[1,2,3,4,6,9,13,14],
    },
    getters:{
        getDSAAccess:state => {
            return state.DSAAccess;
        },
        getDVAAccess:state => {
            return state.DVAAccess;
        },
        getDCAAccess:state => {
            return state.DVAAccess;
        },
        getProfileAccess:state => {
            return state.ProfileAccess;
        },
        getProfileEditAccess:state => {
            return state.ProfileEditAccess;
        }
    },
    mutations:{
        mutateProfileAccess:(state, payload) => {
            state.ProfileAccess.push(payload);
        }
    },
    actions:{
        mutateProfileAccess:(context, payload) => {
            context.commit('mutateProfileAccess', payload);
        }
    }
});