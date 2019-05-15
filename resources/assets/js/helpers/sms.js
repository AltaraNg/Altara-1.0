import {get} from "./api";

export class Message {
    constructor(userId, message, contacts) {
        this.user_id = userId;
        this.message = message;
        this.contacts = contacts;
        this.setPages();
        this.setContactCount();
    }

    setContactCount() {
        if (this.contacts.constructor === String)
            this.contact_count = this.contacts.split(',').length;
        if (this.contacts.constructor === Array)
            this.contact_count = this.contacts.length;
    }

    setPages() {
        this.pages = Math.ceil(this.message.length / 160);
    }
}

export default {
    message: "",
    welcome(details) {
        this.message = `Welcome to Altara credit. Please secure your login details. Staff ID: ${details.loginID}, password: ${details.loginPassword}`;
        this.send(details);
    },
    customerReg(details) {
        this.message = `Dear ${details.first_name} ${details.last_name}, Welcome to Altara Credit Limited, You are hereby invited to our showroom at ${details.branch.description} to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: ${details.branch.phone_yoruba}. Your customer id is: ${details.id}`;
        this.send({phone: details.telephone.substr(1)});
    },
    passwordReset(details) {
        this.message = `Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is ${details.staff_id}, new password: ${details.password}`;
        this.send(details);
    },

    transfer(details) {
        this.message = `Transfer Successful, your new staff ID is ${details.loginID} `;
        this.send(details);
    },

    dvaMessage(details, callback) {
        this.message = details.message;
        this.sendWithCallback(details, callback);
    },

    /*sendFirstReminder(details, callback) {
        this.message = "Thanks for patronizing us. lol its working";
        details.contacts = details.SMSContactList.join(',');
        delete details.SMSContactList;
        return this.sendWithCallback(details, callback);
    },*/

    sendFirstReminder(details, callback) {
        this.message = details.message;
        return this.sendWithCallback(details, callback);
    },

    sendWithCallback({phone}, callback) {
        get(`/api/message/create?to=${phone}&message=${this.message}`).then(res => {
            res.status === 200 && console.log("sms sent successfully");
            return !!callback && callback(res);
        }).catch(err => {
            return !!callback && callback(err);
        });
    },

    send(details) {
        get(`/api/message/create?to=234${details.phone}&message=${this.message}`).then(res => {
            res.status === 200 && console.log("sms sent successfully");
        });
    }
};
