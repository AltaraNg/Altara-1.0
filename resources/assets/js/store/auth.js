export default {
    state: {
        portal_access: null,
        api_token: null,
        user_name: null,
        user_id: null,
        role: null,
    },
    initialize() {
        this.state.portal_access = parseInt(localStorage.getItem('portal_access'));
        this.state.user_id = parseInt(localStorage.getItem('user_id'));
        this.state.user_name = localStorage.getItem('user_name');
        this.state.api_token = localStorage.getItem('api_token');
        this.state.role = parseInt(localStorage.getItem('role'));
    },
    set(api_token, user_id, user_name, role, portal_access) {
        localStorage.setItem('portal_access', portal_access);
        localStorage.setItem('user_name', user_name);
        localStorage.setItem('api_token', api_token);
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('role', role);
        this.initialize()
    },
    remove() {
        localStorage.removeItem('portal_access');
        localStorage.removeItem('api_token');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_id');
        localStorage.removeItem('role');
        this.initialize()
    }
}
