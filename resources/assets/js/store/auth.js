export default {
    state: {
        api_token: null,
        user_id: null,
        user_name:null,
        role:null,
        portal_access:null,
    },
    initialize() {
        this.state.api_token = localStorage.getItem('api_token');
        this.state.user_id = parseInt(localStorage.getItem('user_id'));
        this.state.user_name = localStorage.getItem('user_name');
        this.state.role = parseInt(localStorage.getItem('role'));
        this.state.portal_access = parseInt(localStorage.getItem('portal_access'));
    },
    set(api_token, user_id, user_name, role, portal_access) {
        localStorage.setItem('api_token', api_token);
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('user_name', user_name);
        localStorage.setItem('role', role);
        localStorage.setItem('portal_access', portal_access);
        this.initialize()
    },
    remove() {
        localStorage.removeItem('api_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('role');
        localStorage.removeItem('portal_access');
        this.initialize()
    }
}
