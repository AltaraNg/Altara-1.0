import Order from './order';
import Vue from 'vue';
let vue = new Vue();

class OrderWithPromiseCall extends Order {
    constructor(order, dvaId) {
        super(order, order.customer);
        this._isReminderSent = false;
        this._dvaId = dvaId;
        this._isSelected = false;
        this.setReminder(null);
        this.setIsReminderSent();
        this.setFinancialStatus();
        this.setPromiseCall();
        this.generateAndSetNextSMSReminder();
    }

    /*custom setters*/
    setIsReminderSent() {
        let date;
        let today = vue.$getDate();
        if (!this.order.reminders || this.order.reminders.length < 1) return;
        this.order.reminders.forEach(reminder => {
            //refactor below by using regx characters to split
            let reminderDateTimeArr = reminder.date.split(' ');//(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
            let dateArr = reminderDateTimeArr[0].split('-');//'2019-03-24' -> ['2019','03','24']
            let timeArr = reminderDateTimeArr[1].split(':');//'02:00:00' -> ['02','00','00']
            let arr = [...dateArr, ...timeArr] // ['2019','03','24','02','00','00']
                .map(item => parseInt(item, 10)); //[2019,3,24,2,0,0]
            arr[1]--;//month starts from 0 in javascript dates hence january(1) will be january(0) in javascript dates
            date = vue.$getDate(new Date(Date.UTC(...arr)));
            date === today && (this._isReminderSent = true);
        });
    }

    setFinancialStatus() {
        this._financialStatus =
            !this.isRepaymentValid ? 'no detail!' : `Paid: ${this.amountPaid} | Debt: ${this.outstandingDebt}`;
    }

    generateAndSetNextSMSReminder() {
        let product_name = null;
        if (this.order['store_product']) product_name = this.order.store_product.product_name;
        const {repayment_amount, order_date} = this.order;

        let message;
        if (order_date === vue.$getDate()) {
            message = `Hello ${this.customerName}, thanks for patronizing us.`
                + ` The following is the breakdown of the repayment plan for`
                + ` the purchase of ${product_name}:%0a`;
            this.dueDates.forEach((date, index) =>
                message += vue.$getColumn(index + 1) + ": " + date + " => " +
                    vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + "%0a");
        } else {
            message = `Hello ${this.customerName}, This is to remind you that your`
                + ` ${vue.$getColumn(parseInt(this.repaymentLevel) + 1)} repayment of`
                + ` ${vue.$formatCurrency(vue.$roundDownAmt(repayment_amount))} for ${product_name}`
                + ` will be due on ${this.dueDates[this.repaymentLevel]}.` 
                + ` we will be expecting you to either make a transfer to Altara Account or make cash payment at Altara showroom.`;
        }
        this._nextSMSReminder = message + "Please remember not to make payment in any form through any Altara Agent" +
            "Also pay on time to avoid late fees and other penalties.%0aThank you.";
    }

    //NB:: this method is called from outside of this class.
    //to use always call this method after instantiating the class.
    setReminder(type, SMSId = null) {
        this._reminder = {
            type,
            'feedback': null,
            'is_visited': null,
            'dva_id': this.dvaId,
            'order_id': this.order.id.replace(/ +/g, ""),
            'customer_id': this.customer.id,
            'canBeSelected': !this.isReminderSent,
            'repayment_level': this.repaymentLevel + "/" + this.count
        };
        if (type === 'sms') this._reminder.contacts = this.customer.telephone;
        if (type === 'sms' || 'custom-sms') this._reminder.sms_id = SMSId;
    }

    setPromiseCall() {
        this._promiseCall = {
            order_id: this.order.id,
            user_id: this.dvaId,
            customer_id: this.customer.id,
            date: null
        }
    }

    /*setters*/
    set isSelected(value) {
        this._isSelected = value;
    }

    /*getters*/
    get isReminderSent() {
        return this._isReminderSent;
    }

    get dvaId() {
        return this._dvaId;
    }

    get financialStatus() {
        return this._financialStatus;
    }

    get nextSMSReminder() {
        return this._nextSMSReminder;
    }

    get reminder() {
        return this._reminder;
    }

    get isSelected() {
        return this._isSelected;
    }

    get promiseCall() {
        return this._promiseCall;
    }
}

export default OrderWithPromiseCall;