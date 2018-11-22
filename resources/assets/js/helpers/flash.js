export default {
    state: {
        success: null,
        error: null,
    },
    setSuccess(message, time = 3000) {
        this.removeMsg();
        this.state.success = message;
        setTimeout(() => {
            this.removeMsg();
        }, time);
        //sets success message for the app
    },
    setError(message, time = 3000) {
        this.removeMsg();
        this.state.error = message;
        setTimeout(() => {
            this.removeMsg();
        }, time);
        //sets error message for the app
    },
    removeMsg() {
        this.state.error = this.state.success = null;
    },
}