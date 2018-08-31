import {get} from './api';
export function sendWelcomeMessage(textMessage, textDetails) {
    let message = textMessage + ' Staff ID: "' + textDetails.loginID + '" password: "' + textDetails.loginPassword + '"';
    get("http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient="
    + 234 + textDetails.phone + "&message=" + message + "")
        // .then(function (res) {})
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
}

// http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient="
// + 234 + textDetails.phone + "&message=" + message + "

// get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to="
// + 234 + textDetails.phone + "&text=" + message + "")

// get("http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient="
//     + 234 + textDetails.phone + "&message=" + message + "")