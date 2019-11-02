const initialState = () => ({
    showCustomerManagerModal: false,
});

const state = initialState();

const getters = {
    showCustomerManagerModal: state => state.showCustomerManagerModal
};

const actions = {
    showCustomerManagerModal: ({commit}, bool) => commit('SET_CUSTOMER_MANAGER_MODAL', bool),
    reset: ({commit}) => commit('RESET')
};

const mutations = {
    SET_CUSTOMER_MANAGER_MODAL: (state, data) => state.showCustomerManagerModal = data,
    RESET(state) {
        const newState = initialState();
        Object.keys(newState).forEach(key => {
            state[key] = newState[key]
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}