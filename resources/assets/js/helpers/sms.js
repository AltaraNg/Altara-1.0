import { get } from './api';
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
        get("http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient="
            + 234 + details.phone + "&message=" + this.message + "")
            .then(res => {
            }).catch(err => {
            });
    }
}
