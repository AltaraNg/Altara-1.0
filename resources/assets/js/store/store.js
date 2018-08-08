import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
    //strict:true,
    state: {
        loader:false,
        mother:'',
        user:100,
        DSAAccess:[1,2,6,10,13,14],
        DVAAccess:[1,2,6,10,13,14],
        DCAAccess:[]
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
        }
    },
    mutations:{
        /*mutateMother:(state, payload) => {
            state.mother = 'Bibiana Uwagba Nkemdilim' + payload;
        }*/
    },
    actions:{
        /*mutateMother:(context, payload) => {
            setTimeout(function(){
                context.commit('mutateMother', payload);
            },5000);
        }*/
    }
});