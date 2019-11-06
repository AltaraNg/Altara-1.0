const initialState = () => ({
    showSMSModal: false,
    showCustomerManagerModal: false,
});

const state = initialState();

const getters = {
    showSMSModal: state => state.showSMSModal,
    showCustomerManagerModal: state => state.showCustomerManagerModal
};

const actions = {
    showSMSModal: ({commit}, bool) => commit('SET_SMS_MODAL', bool),
    showCustomerManagerModal: ({commit}, bool) => commit('SET_CUSTOMER_MANAGER_MODAL', bool),
    addCustomerOptionsModalsToDom: ({commit}) => commit('ADD_CUSTOMER_OPTIONS_MODALS_TO_DOM'),
    removeCustomerOptionsModalsFromDom: ({commit}) => commit('REMOVE_CUSTOMER_OPTIONS_MODALS_FROM_DOM'),
    reset: ({commit}) => commit('RESET')
};

const mutations = {
    SET_SMS_MODAL: (state, data) => state.showSMSModal = data,
    SET_CUSTOMER_MANAGER_MODAL: (state, data) => state.showCustomerManagerModal = data,
    ADD_CUSTOMER_OPTIONS_MODALS_TO_DOM: (state) => {
        state.showSMSModal = true;
        state.showCustomerManagerModal = true;
    },
    REMOVE_CUSTOMER_OPTIONS_MODALS_FROM_DOM: (state) => {
        state.showSMSModal = false;
        state.showCustomerManagerModal = false;
    },
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