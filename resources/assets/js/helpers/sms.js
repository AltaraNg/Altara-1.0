import {get} from './api';

export default {
    message: '',
    welcome(details) {
        this.message = 'Welcome to Altara credit. Please keep your login details safe. Your login details are as follows,'
            + ' Staff ID: "' + details.loginID + '" password: "' + details.loginPassword + '"';
        this.send(details);
    },
    passwordReset(details) {
        this.message = 'Password reset successful! if your did not request for a new password kindly report back immediately,'
            + ' new password : "' + details.password + '"';
        this.send(details);
    },
    send(details) {
        /*get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to="
            + 234 + details.phone + "&text=" + this.message + "")
            .then(res => {
            }).catch(err => {
        });*/
    }
}