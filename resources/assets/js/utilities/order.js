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
        if (parseInt(this.order.payment_method_id) === 4) {
            this._isOrderFormal = true
        }
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
            if ((Order.isBankDraftAvailable() && this.isOrderFormal) ||
                parseInt(this.order.payment_method_id) === 4) {
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
        if (this.order['store_product']) {
            this._branch = store.state.branches
                .find(branch => parseInt(branch.id) === parseInt(this.order.store_product['store_name']));
        } else this._branch = null;
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
        /*helper function*/
        let fmt = cur => vue.$formatCurrency(cur), {repayment_amount, down_payment, product_price} = this.order;

        /*discount amount*/
        let mFactor = this.count === 6 ? 0.5 : 1,
            {percentage_discount: discount} = this.order.discount,
            repaymentAsDiscount = discount > 0 ? (discount === 5 ? 1 : 2) : 0,
            discountAmount = vue.$roundDownAmt(repayment_amount * mFactor * repaymentAsDiscount);
        this._discountAmount = fmt(discountAmount);

        /*(total)amount paid = down payment + total repayments  + discount(if any)*/
        let amountPaid = 0, totalRepayments = 0;
        if (!!this.repaymentData) {
            for (let i = 0; i < this.count + 1; i++) {
                let repayment = parseInt(this.actualAmountsPaid[i]);
                totalRepayments += !!repayment ? vue.$roundDownAmt(repayment) : 0
            }
            amountPaid = vue.$roundDownAmt(parseInt(down_payment)) + totalRepayments + discountAmount;
        }
        this._amountPaid = fmt(amountPaid);

        /*discounted total :: total amount to be paid - discount*/
        let discountedTotal = vue.$roundDownAmt(product_price - discountAmount);
        this._discountedTotal = fmt(discountedTotal);

        /*total default fee*/
        let amountPerDefault = 500;
        let datesDefaulted = [];
        let defaultFee = 0;
        if (new Date(this.order.order_date) > new Date('2019-07-07')) {
            //the order is a new record then use the default fee
            /**this is where the calculation for the default fee goes into*/
            /*this.dueDates.forEach((dueDate, index) =>
            Order.isPaymentDue(vue.$getDate(new Date(dueDate).addDays(5))) &&
            datesDefaulted.push({dueDate, actualPayDate: this.actualPayDates[index]}));*/
            defaultFee = datesDefaulted.length * amountPerDefault;
        }
        this._defaultFee = fmt(defaultFee);


        /*total plus default*/
        this._totalPlusDefault = fmt(discountedTotal + defaultFee);

        /*outstanding debt*/
        this._outstandingDebt = fmt(vue.$roundDownAmt(parseInt(product_price) - amountPaid));
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
export default Order;