import {get} from './api';
import Flash from './flash';
export function sendWelcomeMessage(textMessage, textDetails) {
    let message = textMessage + ' Staff ID: ' + textDetails.loginID + ' password: ' + textDetails.loginPassword + "";
    get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to="
        + 234 + textDetails.phone + "&text=" + message + "")
        .then(function (res) {
            console.log(res);
            if (res.status === 200) {
                Flash.setSuccess('Welcome Message has been sent to the registered employee with his details!');
            } else {
                Flash.setError('Sorry! An error was encountered while trying to send the message!');
            }
        });
}