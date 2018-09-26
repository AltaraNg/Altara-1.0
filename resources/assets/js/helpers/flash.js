export default {
    state: {
        success: null,
        error: null,
    },
    setSuccess(message) {
        this.removeMsg();
        this.state.success = message;
        setTimeout(() => {
            this.removeMsg();
        }, 3000);
    },
    setError(message) {
        this.removeMsg();
        this.state.error = message;
        setTimeout(() => {
            this.removeMsg();
        }, 3000);
    },
    removeMsg() {
        this.state.error = this.state.success = null;
    },
}