import {get} from './api';
// export function sendWelcomeMessage(textMessage, textDetails) {
//     let message = textMessage + ' Staff ID: "' + textDetails.loginID + '" password: "' + textDetails.loginPassword + '"';
//     get("http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient="
//     + 234 + textDetails.phone + "&message=" + message + "")
//         .then(response => {
//             console.log(response)
//         })
//         .catch(error => {
//             console.log(error.response)
//         });
// }

// get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to="
// + 234 + textDetails.phone + "&text=" + message + "")

// get("http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient="
//     + 234 + textDetails.phone + "&message=" + message + "")
export default {
    message: '',
    welcome(details){
        this.message = 'Welcome to Altara credit. Please keep your login details safe. Your login details are as follows,'
            + ' Staff ID: "' + details.loginID + '" password: "' + details.loginPassword + '"';
        this.send(details);
    },
    passwordReset(details){
        this.message = 'Password reset successful! if your did not request for a new password kindly report back immediately,'
            + ' new password : "' + details.password + '"';
        this.send(details);
    },
    send(details){
        get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to="
            + 234 + details.phone + "&text=" + this.message + "")
            .then(res => {
            }).catch(err => {
        });
    }
}
