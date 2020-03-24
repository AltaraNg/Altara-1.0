export default {
    state: {
        portal_access: null,
        api_token: null,
        user_name: null,
        user_id: null,
        role: null,
        branch_id:null,
    },
    initialize() {
        this.state.portal_access = parseInt(localStorage.getItem('portal_access'));
        this.state.user_id = parseInt(localStorage.getItem('user_id'));
        this.state.user_name = localStorage.getItem('user_name');
        this.state.api_token = localStorage.getItem('api_token');
        this.state.role = parseInt(localStorage.getItem('role'));
        this.state.branch_id = parseInt(localStorage.getItem('branch_id'));
    },
    set(data) {
        localStorage.setItem('portal_access', data.portal_access);
        localStorage.setItem('user_name', data.user_name);
        localStorage.setItem('api_token', data.api_token);
        localStorage.setItem('user_id', data.user_id);
        localStorage.setItem('role', data.role);
        localStorage.setItem('branch_id', data.branch_id);
        
        this.initialize()
    },
    remove() {
        localStorage.clear();
        this.initialize()
    }
}
