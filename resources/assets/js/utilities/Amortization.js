import Vue from 'vue';
import {store} from "../store/store";

let vue = new Vue();

class Order {

    constructor(order, customer) {
        this._order = order;
        this._customer = customer;
        this._paymentBanks = [];
        this._paymentMethods = [];
        this._actualPayDates = [];
        this._actualAmountsPaid = [];
        this._amountsToBePaid = [];
        this._repaymentCaptions = [];
        this._paymentStatusClasses = [];
        this._repaymentLevel = 0;

        /*summary*/
        this._amountPaid = null;
        this._discountAmount = null;
        this._outstandingDebt = null;
        this._discountedTotal = null;
        this._defaultFee = null;
        this._totalPlusDefault = null;

        /*for repayments*/
        this._payments = {};

        /*init setters*/
        this.setIsOrderFormal();
        this.setIsRepaymentValid();
        this.setRepaymentData();
        this.setCountAndInterval();
        this.setCommonDetails();
        this.setDueDates();
        this.setPaymentStatusClasses();
        this.calcAndSetPaymentSummary();
        this.setBranch();
        this.setDiscount();
    }

    /*custom setters*/
    setIsRepaymentValid() {
        this._isRepaymentValid = !(!this.order['repayment_formal'] && !this.order['repayment_informal']);
    }

    setIsOrderFormal() {
        this._isOrderFormal = ['formal', 'salaried'].includes(this._customer.employment_status.toLowerCase());
    }

    setRepaymentData() {
        if (this.order['repayment_formal'] != null) this._repaymentData = this.order.repayment_formal;
        if (this.order['repayment_informal'] != null) this._repaymentData = this.order.repayment_informal;
    }

    setCountAndInterval() {
        //'2019-07-07' this is the date the bank draft was implemented
        // and hence used as a factor to check for
        // if amortization should be 12 or 6
        let interval, count;
        if (new Date(this.order.order_date) <= new Date('2019-07-07')) {
            if (this.order['repayment_formal'] != null) {
                interval = 28;
                count = 6;
            }
            if (this.order['repayment_informal'] != null) {
                interval = 14;
                count = 12;
            }
        } else {
            if (Order.isBankDraftAvailable() && this.isOrderFormal) {
                interval = 28;
                count = 6;
            } else {
                interval = 14;
                count = 12;
            }
        }
        this._count = count;
        this._interval = interval;
    }

    setDueDates() {
        this._dueDates = Order.generateDueDates(this.order.order_date, this.interval, this.count)
    }

    setCommonDetails() {
        if (!this.isRepaymentValid) return;
        for (let i = 1; i < this.count + 1; i++) {
            /*for repayment captions*/
            let prefix = (vue.$getColumn(i)).split('');
            let appendix = [];
            for (let j = 1; j <= 2; j++) appendix.unshift(prefix.pop());
            this._repaymentCaptions.push(`<td>${prefix.join('')}<sup>${appendix.join('')}</sup></td>`);

            this._actualPayDates.push(this.repaymentData[`${vue.$getColumn(i)}_date`]);
            this._actualAmountsPaid.push(this.repaymentData[`${vue.$getColumn(i)}_pay`]);
            this._paymentBanks.push(this.repaymentData[`${vue.$getColumn(i)}_payment_bank`]);
            this._paymentMethods.push(this.repaymentData[`${vue.$getColumn(i)}_payment_method`]);
            this._amountsToBePaid.push(vue.$roundDownAmt(this.order.repayment_amount));

            if (this.repaymentData[`${vue.$getColumn(i)}_pay`] > 0) this._repaymentLevel++;
        }
    }

    setBranch() {
        this._branch = store.state.branches
            .find(branch => parseInt(branch.id) === parseInt(this.order.store_product.store_name));
    }

    setPaymentStatusClasses() {
        if (!this.isRepaymentValid) /*this._repayment = null;*/ return;
        for (let i = 1; i < this.count + 1; i++) {
            let status = {class: null, icon: null};
            let position = vue.$getColumn(i);
            let isDue = Order.isPaymentDue(this.dueDates[i - 1]);
            let amountPaid = parseInt(this.repaymentData[position + '_pay']);
            if (amountPaid) {
                status.class = 'paid';
                status.icon = 'fa-check';
            } else if (isDue && !amountPaid) {
                status.class = 'missed';
                status.icon = 'fa-times';
            } else if (!isDue) {
                status.class = 'pending';
                status.icon = 'fa-hourglass-start';
            }
            this._paymentStatusClasses.push(status);
        }
    }

    calcAndSetPaymentSummary() {
        let datesDefaulted = [];
        let amountPerDefault = 500;
        let fmt = cur => vue.$formatCurrency(cur);
        let amountPaid = vue.$roundDownAmt(parseInt(this.order.down_payment));

        this.dueDates.forEach((dueDate, index) =>
            Order.isPaymentDue(vue.$getDate(new Date(dueDate).addDays(5))) &&
            datesDefaulted.push({dueDate, actualPayDate: this.actualPayDates[index]}));

        if (!!this.repaymentData) {
            for (let i = 0; i < this.count + 1; i++) {
                let amtPaid = parseInt(this.actualAmountsPaid[i]);
                amountPaid += !!amtPaid ? vue.$roundDownAmt(amtPaid) : 0
            }
        } else amountPaid = 0;

        let {percentage_discount: discount} = this.order.discount;
        let multiplicationFactor = this.count === 6 ? 0.5 : 1;
        let repaymentCoveredAsDiscount = () => discount > 0 ? (discount === 5 ? 1 : 2) : 0;

        let discountAmount = this.order.repayment_amount * multiplicationFactor * repaymentCoveredAsDiscount();
        discountAmount = vue.$roundDownAmt(discountAmount);

        let defaultFee = datesDefaulted.length * amountPerDefault;
        let discountedTotal = vue.$roundDownAmt(this.order["product_price"] - discountAmount);

        this._amountPaid = fmt(amountPaid);
        this._discountAmount = fmt(vue.$roundDownAmt(discountAmount));
        this._outstandingDebt = fmt(vue.$roundDownAmt(parseInt(this.order["product_price"]) - amountPaid));
        this._discountedTotal = fmt(discountedTotal);
        this._defaultFee = fmt(defaultFee);
        this._totalPlusDefault = fmt(discountedTotal + defaultFee);
    }

    setDiscount() {
        this._discount = this.order.discount.name + " " + this.order.discount.percentage_discount;
    }

    /*getters*/
    set payments(payments) {
        this._payments = payments;
    }

    get payments() {
        return this._payments;
    }

    get repaymentLevel() {
        return this._repaymentLevel;
    }

    get order() {
        return this._order;
    }

    get customer() {
        return this._customer;
    }

    get isRepaymentValid() {
        return this._isRepaymentValid;
    }

    get isOrderFormal() {
        return this._isOrderFormal;
    }

    get repaymentData() {
        return this._repaymentData;
    }

    get count() {
        return this._count;
    }

    get interval() {
        return this._interval;
    }

    get dueDates() {
        return this._dueDates;
    }

    get paymentStatusClasses() {
        return this._paymentStatusClasses;
    }

    get repaymentCaptions() {
        return this._repaymentCaptions;
    }

    get paymentBanks() {
        return this._paymentBanks;
    }

    get paymentMethods() {
        return this._paymentMethods;
    }

    get actualPayDates() {
        return this._actualPayDates;
    }

    get actualAmountsPaid() {
        return this._actualAmountsPaid;
    }

    get amountsToBePaid() {
        return this._amountsToBePaid;
    }

    get amountPaid() {
        return this._amountPaid;
    }

    get discountAmount() {
        return this._discountAmount;
    }

    get outstandingDebt() {
        return this._outstandingDebt;
    }

    get discountedTotal() {
        return this._discountedTotal;
    }

    get defaultFee() {
        return this._defaultFee;
    }

    get totalPlusDefault() {
        return this._totalPlusDefault;
    }

    get branch() {
        return this._branch;
    }

    get discount() {
        return this._discount;
    }

    get customerName() {
        return this.customer.first_name + " " + this.customer.last_name;
    }

    get customerWGName() {
        let {work_guarantor_first_name: a, work_guarantor_last_name: b, work_guarantor_relationship: c} = this.customer;
        return `${a} ${b} - ${c}`;
    }

    get customerPGName() {
        let {personal_guarantor_first_name: a, personal_guarantor_last_name: b, personal_guarantor_relationship: c} = this.customer;
        return `${a} ${b} - ${c}`;
    }

    /*static methods*/
    static generateDueDates(startDate, interval, count) {
        let dates = [];
        for (let i = 0; i < count; i++) {
            let orderDate = (new Date(startDate)).addDays((i + 1) * interval);
            let dateString = vue.$getDate(orderDate);
            dates.push(dateString);
        }
        return dates;
    }

    static isPaymentDue(dueDate) {
        return new Date() > new Date(dueDate);
    }

    static isBankDraftAvailable() {
        return false;
    }

    static renderMessage(reminder) {
        return !!reminder['sms'] ? reminder.sms.message.replace(/%0a/g, '</br>') : reminder.feedback;
    }

    static convertToName(id, type) {
        return !id ? null : store.state[type].find(obj => obj.id === id).name;
    }
}


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
        this.order.reminders.forEach(reminder => {
            //refactor below by using regx characters to split
            let reminderDateTimeArr = reminder.date.split(' ');//(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
            let dateArr = reminderDateTimeArr[0].split('-');//'2019-03-24' -> ['2019','03','24']
            let timeArr = reminderDateTimeArr[1].split(':');//'02:00:00' -> ['02','00','00']
            let arr = [...dateArr, ...timeArr] // ['2019','03','24','02','00','00']
                .map(item => parseInt(item, 10)); //[2019,3,24,2,0,0]
            date = vue.$getDate(new Date(Date.UTC(...arr)), false);
            date === today && (this._isReminderSent = true);
        });
    }

    setFinancialStatus() {
        this._financialStatus =
            !this.isRepaymentValid ? 'no detail!' : `Paid: ${this.amountPaid} | Debt: ${this.outstandingDebt}`;
    }

    generateAndSetNextSMSReminder() {
        const {store_product, repayment_amount, customer, order_date} = this.order,
            {first_name, last_name} = customer, name = first_name + " " + last_name,
            {product_name} = store_product;

        let message;
        if (order_date === vue.$getDate()) {
            message = `Hello ${name}, thanks for patronizing us.`
                + ` The following is the breakdown of the repayment plan for`
                + ` the purchase of ${product_name}:%0a`;
            this.dueDates.forEach((date, index) =>
                message += vue.$getColumn(index + 1) + ": " + date + " => " +
                    vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + "%0a");
        } else {
            message = `Hello ${name}, This is to remind you that your`
                + ` ${vue.$getColumn(parseInt(this.repaymentLevel) + 1)} repayment of`
                + ` ${vue.$formatCurrency(vue.$roundDownAmt(repayment_amount))} for ${product_name}`
                + ` will be due on ${this.dueDates[this.repaymentLevel]}. we will be expecting you.`;
        }
        this._nextSMSReminder = message + "Please remember to pay on time to avoid" +
            " late fees and other penalties.%0aThank you.";
    }

    //NB:: this method is called from outside of this class.
    //to use always call this method after instantiating the class.
    setReminder(type) {
        this._reminder = {
            type,
            'dva_id': this.dvaId,
            'order_id': this.order.id,
            'feedback': null,
            'customer_id': this.customer.id,
            'canBeSelected': !this.isReminderSent,
            'repayment_level': this.repaymentLevel
        };
        if (type === 'sms') {
            this._reminder.sms_id = null;
            this._reminder.contacts = this.customer.telephone;
        }
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

module.exports = {Order, OrderWithPromiseCall};