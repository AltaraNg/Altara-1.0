import {get} from './api';
export function sendWelcomeMessage(textMessage, textDetails) {
    let message = textMessage + ' Staff ID: ' + textDetails.loginID + ' password: ' + textDetails.loginPassword + "";
    get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to="
        + 234 + textDetails.phone + "&text=" + message + "")
        .then(function (res) {})
}