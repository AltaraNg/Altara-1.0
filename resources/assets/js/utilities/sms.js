import {get, post} from "./api";

export class Message {
    constructor(message, contacts, logToDB = true, userId = null) {
        this.user_id = userId;
        this.message = message;
        this.logToDB = logToDB;
        this.contacts = contacts
            .split(",").filter(e => /\S/.test(e))
            .map(contact => '234' + contact.trim().substr(1))
            .join(',');
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
        get(`/api/message/create?to=${this.contacts}&message=${this.message}`).then(async res => {
            if (res.status === 200 && this.logToDB) {
                var sentMessageIds;
                delete this.logToDB;
                await post('/api/message', this).then(({data:{ids}}) => sentMessageIds = ids);
            }
            return !!callback && callback(res, sentMessageIds);
        }).catch(err => !!callback && callback(err));
    }
}
