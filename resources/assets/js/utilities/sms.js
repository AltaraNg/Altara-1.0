import {get, post} from "./api";

export class Message {
    constructor(message, contacts, logToDB = true, userId = null) {
        this.user_id = userId;
        this.message = message;
        this.logToDB = logToDB;
        this.contacts = contacts.split(",").filter(e => /\S/.test(e))
            .map(contact => '234' + contact.trim().substr(1)).join(',');
        this.setPages();
        this.setContactCount();
    }

    setContactCount() {
        this.contact_count = this.contacts.split(',').length;
    }

    setPages() {
        this.pages = Math.ceil(this.message.length / 160);
    }

    send(callback) {
        get(`/api/message/create?to=${this.contacts}&message=${this.message}`).then(res => {
            if (res.status === 200 && this.logToDB) {
                delete this.logToDB;
                post('/api/message', this)
            }
            return !!callback && callback(res);
        }).catch(err => {
            return !!callback && callback(err);
        });
    }
}