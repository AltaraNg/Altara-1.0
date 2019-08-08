<template>
    <div>

        <div class="tab-content mt-1 attendance-body" v-if="show">
            <div class="tab-pane active text-center" id="reminder-panel" role="tabpanel">
                <order-item
                        v-for="(order,index) in orders"
                        :key="order.id"
                        :index="index"
                        :start-index="startIndex"
                        :order="order"
                        :dva_id="dva_id"
                        :is-repayment-valid="isRepaymentValid(order)"
                        :pay-summary="calcPaymentSummary(order)"
                        :repayment-level="getRepaymentLevel(order)"
                        :mode="mode"
                        @done="fetchList(list)"
                        @updateReminderList="updateReminder"
                        @display="displayDetails"/>
            </div>
            <div class="w-100 my-5 mx-0 hr" v-if="mode != 'normal-list'"></div>
        </div>

        <div class="tab-content mt-1 attendance-body" v-else>
            <div class="tab-pane active text-center">
                <div class="mb-3 row attendance-item">
                    <div class="col d-flex light-heading align-items-center justify-content-center">
                        No records found!
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-1 attendance-body" v-if="show && mode === 'sms'">
            <div class="mb-5 px-0 row align-items-center">
                <div class="clearfix d-flex justify-content-end w-100">
                    <button :disabled="$isProcessing" class="btn bg-default" @click="processSelected">
                        Send Reminder(s) <i class="far fa-paper-plane ml-1"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="purchase_order">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Purchase Order Summary</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>Order ID</th>
                                    <td>{{currentOrder.id}}</td>
                                </tr>
                                <tr>
                                    <th>Order date</th>
                                    <td>{{currentOrder.order_date}}</td>
                                </tr>
                                <tr>
                                    <th>Product</th>
                                    <td>{{currentOrder.store_product.product_name}}</td>
                                </tr>
                                <tr>
                                    <th>Repayment</th>
                                    <td>{{$formatCurrency(currentOrder.repayment_amount)}}</td>
                                </tr>
                                <tr>
                                    <th>Down Payment</th>
                                    <td>{{$formatCurrency(currentOrder.down_payment)}}</td>
                                </tr>
                                <tr>
                                    <th>Discount (%)</th>
                                    <td>{{getDiscount(currentOrder) | capitalize}}</td>
                                </tr>
                                <tr>
                                    <th>Sale Type</th>
                                    <td>{{currentOrder.sales_type.name | capitalize}}</td>
                                </tr>
                                <tr>
                                    <th>Total amount to Pay</th>
                                    <td>{{$formatCurrency(currentOrder.product_price)}}</td>
                                </tr>
                                <tr>
                                    <th>Processed by</th>
                                    <td>{{currentOrder['floor_agent'] ? currentOrder.floor_agent.full_name : null}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                           style="text-align: right">close dialogue</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="customer_info">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Customer Info. Summary</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>Customer ID</th>
                                    <td>{{currentOrder.customer.id}}</td>
                                </tr>
                                <tr>
                                    <th>Full Name</th>
                                    <td>{{$getCustomerFullName(currentOrder.customer)}}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{{$getCustomerAddress(currentOrder.customer)}}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{{currentOrder.customer.telephone}}</td>
                                </tr>
                                <tr>
                                    <th>Branch</th>
                                    <td>{{currentOrder.customer.branch.name}}</td>
                                </tr>
                                <tr>
                                    <th>Category</th>
                                    <td>{{currentOrder.customer.employment_status}}</td>
                                </tr>
                                <tr>
                                    <th>Work guarantor name</th>
                                    <td>{{currentOrder.customer.work_guarantor_first_name + " " +
                                        currentOrder.customer.work_guarantor_last_name + " - " +
                                        (currentOrder.customer.work_guarantor_relationship)}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Work guarantor phone</th>
                                    <td>{{currentOrder.customer.work_guarantor_telno}}</td>
                                </tr>
                                <tr>
                                    <th>Personal guarantor name</th>
                                    <td>{{currentOrder.customer.personal_guarantor_first_name + " " +
                                        currentOrder.customer.personal_guarantor_last_name + " - " +
                                        (currentOrder.customer.personal_guarantor_relationship)}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Personal guarantor phone</th>
                                    <td>{{currentOrder.customer.personal_guarantor_telno}}</td>
                                </tr>
                                <tr>
                                    <th>Verified by</th>
                                    <td>
                                        <router-link class="text-link" target="_blank"
                                                     :to="`/dva/verification?id=${currentOrder.customer.id}`">
                                            click here to see verifications status
                                        </router-link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="text-link mt-3 w-100 text-right" data-dismiss="modal" href="#">
                            close dialogue
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade repayment" id="repayment">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" v-if="showModalContent">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">
                            Repayment Plan/Summary - {{currentOrder.customer.employment_status | capitalize}}
                        </h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <h5 class="mt-3 mb-0">Amortization Schedule</h5>
                            <table class="table table-bordered">
                                <tbody class="text-center">
                                <tr>
                                    <th>Repayment</th>
                                    <td v-for="caption in repaymentCaption(currentOrder)" v-html="caption"></td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Due Date</th>
                                    <td v-for="date in getRepayment(currentOrder)">{{date}}</td>
                                </tr>
                                <tr>
                                    <th>Actual Pay Day</th>
                                    <td v-for="date in getRepayment(currentOrder, '_date')">{{date}}</td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Status</th>
                                    <td :class="status.class" v-for="status in getPaymentStatusClasses(currentOrder)">
                                        <i class="fas" :class="status.icon"></i>
                                    </td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Repayment Amount</th>
                                    <td v-for="payment in getRepayment(currentOrder,'repayments')">
                                        {{$formatCurrency(payment)}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Actual Amount Paid</th>
                                    <td v-for="payment in getRepayment(currentOrder,'_pay')">
                                        {{$formatCurrency(payment)}}
                                    </td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Payment Method</th>
                                    <td class="text-capitalize"
                                        v-for="repaymentMethod in getRepayment(currentOrder,'_payment_method')">
                                        {{convertPaymentMethodOrBankToName(repaymentMethod, 'payment_methods')}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Bank</th>
                                    <td class="text-capitalize"
                                        v-for="repaymentBank in getRepayment(currentOrder,'_payment_bank')">
                                        {{convertPaymentMethodOrBankToName(repaymentBank, 'banks')}}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <h5 class="mt-5 mb-0">Payment Summary</h5>
                            <table class="table table-bordered">
                                <tbody class="text-center">

                                <tr class="table-separator">
                                    <td class="text-left">Discount Detail (%)</td>
                                    <th>
                                        {{currentOrder["discount"]["name"] | capitalize}}
                                        -
                                        ({{currentOrder["discount"]["percentage_discount"]}})
                                    </th>
                                    <td>Total Before Discount</td>
                                    <th>{{$formatCurrency($roundDownAmt(currentOrder["product_price"]))}}</th>
                                    <td>Total Paid</td>
                                    <th>{{paymentSummary.amountPaid}}</th>
                                </tr>
                                <tr>
                                    <td class="text-left">Discount Amount</td>
                                    <th>{{paymentSummary.discountAmount}}</th>
                                    <td>Total After Discount</td>
                                    <th>{{paymentSummary.discountedTotal}}</th>
                                    <td>Total Debt</td>
                                    <th>{{paymentSummary.outstandingDebt}}</th>
                                </tr>
                                <tr>
                                    <td class="text-left">Down Payment</td>
                                    <th>{{$formatCurrency($roundDownAmt(currentOrder.down_payment))}}</th>
                                    <td>Total Plus Default Fee</td>
                                    <th>{{paymentSummary.totalPlusDefault}}</th>
                                    <td>Default Fee</td>
                                    <th>{{paymentSummary.defaultFee}}</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                           style="text-align: right">close dialogue</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade repayment" id="reminder_history">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Reminder History</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped" v-if="currentOrder.reminders.length">
                                <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>SMS/Feedback</th>
                                    <th>sender</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(reminder, index) in currentOrder.reminders">
                                    <th>{{index+1}}</th>
                                    <td>{{$dateTimeConvert(reminder.date)}}</td>
                                    <td>{{reminder.type}}</td>
                                    <td v-html="renderMessage(reminder)"></td>
                                    <td>{{reminder.user.full_name}}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div v-else class="my-4 text-center">
                                no reminders have been sent yet!
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                           style="text-align: right">close dialogue</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import Flash from "../utilities/flash";
    import {Message} from "../utilities/sms";
    import {get, post} from "../utilities/api";
    import OrderItem from '../components/OrderItem';

    let url = to => `/api/reminder/create?list=${to.query.list}`;

    export default {
        components: {OrderItem},

        props: {list: {default: null}, mode: null, preLoadedOrder: null, startIndex: null},

        watch: {
            list: function (list) {
                this.fetchList(list);
            },
            preLoadedOrder: function (data) {
                this.prepareForm(data);
            }
        },

        data() {
            return {
                orders: {},
                show: false,
                banks: null,
                reminder: [],
                currentOrder: {},
                paymentSummary: null,
                payment_methods: null,
                showModalContent: false,
            }
        },

        computed:{
            ...mapGetters(['auth'])
        },

        methods: {
            prepareForm(res) {
                this.show = false;
                this.showModalContent = false;
                this.banks = res.banks;
                this.dva_id = res.dva_id;
                this.payment_methods = res.payment_methods;

                this.orders = res.orders.filter(order => {

                    let {repaymentData} = this.getCountAndRepaymentData(order),
                        {count, interval} = this.amortizationPlan(order);

                    let hasMissedPayment = () => {
                        /*for the list 1 and 8 return true i.e no need for has
                        missed payment since it's obvious we are dealing with just one date
                        * 1st list is for all the customers that picked today
                        * 8th list is for all the promise calls all the promise call must be shown to */
                        if ([8, 1].includes(this.list) || this.mode === "normal-list") return true;

                        let payDay,
                            /*payDay holds the date
                            of the first vacant repayment*/

                            dayInterval,
                            /*dayInterval the number of days before or after a certain
                            repayment date. this varies according to collections app brief*/

                            datePool = [],
                            /*datePool hold an array of dates of length ranging from 1 to 3 in length
                            * is the current date is monday the date-pool will include dates for
                            * monday, sunday and saturday else it just hold the current date*/

                            today = new Date(),

                            isMonday = today.getDay() === 1,
                            /*isMonday how a boolean value of whether
                            the current date is monday or not*/

                            collectionsList = [9, 10, 11, 12, 13, 14],

                            accumulatedDays = (isMonday || collectionsList.includes(this.list)) ? 3 : 1;
                        /*accumulatedDays hold 1 or 3,
                        1 if the current date is not on a monday and
                        3 if the current date is on a monday*/

                        if (!(!!repaymentData)) return false;

                        /*step 1::
                        * the count is either 7 or 13,
                        * the loop runs for 6 or 12 times*/
                        for (let i = 1; i < count + 1; i++) {

                            /*get the resultant column 1st, 2nd, 3rd etc*/
                            let column = this.$getColumn(i);

                            /*step 2. get the first occurrence of a vacant pay eg. 5th_pay*/
                            if (!repaymentData[column + "_pay"]) {

                                /*step 3. find the corresponding due date for the vacant pay
                                * The generateDates returns an array of the due
                                dates for the order under consideration*/
                                payDay = this.generateDates({startDate: order.order_date, interval, count})[i - 1];
                                /*[i - 1] explained.
                                * eg if the i = 5,
                                * column = 5th_pay,
                                * then the 4th ( [5-1] - this is the 5th element or 4th index, array is 0 indexed)
                                * index of the resultant array is the pay day we are interested in*/
                                break;
                            }
                        }

                        /*step 4. assign the appropriate intervals
                        * NB:: This intervals where generated from the days
                        * stipulated on the collections app brief note that the case
                        * corresponds to the steps also indicated in the collections app brief*/
                        switch (this.list) {
                            case 2:
                                dayInterval = 7;
                                break;
                            case 3:
                                dayInterval = 3;
                                break;
                            case 4:
                                dayInterval = 0;
                                break;
                            case 5:
                                dayInterval = 1;
                                break;
                            case 6:
                                dayInterval = 5;
                                break;
                            case 7:
                                dayInterval = 31;
                                break;

                            case 9://collections visit: 1
                                dayInterval = 38;
                                break;
                            case 10://collections visit: 2
                                dayInterval = 45;
                                break;

                            case 11://recovery visit: 1
                                dayInterval = 61;
                                break;
                            case 12://recovery visit: 2
                                dayInterval = 75;
                                break;
                            case 13://recovery visit: 2
                                dayInterval = 90;
                                break;

                            case 14://external recovery - lawyer visit: 2
                                dayInterval = 121;
                                break;
                        }

                        //if (this.mode === "collection" || this.mode === "recovery" || this.mode === "call"){
                        if (["collection", "recovery", "call", "external-recovery"].includes(this.mode)) {
                            for (let p = 0; p < accumulatedDays; p++)
                                datePool.push(this.$getDate(today.addDays(-(p + dayInterval))));
                        }

                        if (this.mode === 'sms') {
                            for (let p = 0; p < accumulatedDays; p++)
                                datePool.push(this.$getDate(today.addDays(p + dayInterval)));
                        }

                        return datePool.includes(payDay);
                    };

                    let isMyBranch = () => {
                        if (this.auth('DVALead') || this.auth('FSLLead') || this.auth('CAGAccess')) return true;
                        //the branch to be used for this filter should be the branch of the
                        // product being bought not the branch of the customer
                        return parseInt(order.store_product.store_name) === res.branch;
                        //return order.customer.branch.id === res.branch;
                    };

                    /*console.log('store name: ' + parseInt(order.store_product.store_name) + ' | ' + order.store_product.store_name,
                        '--------- res branch: ' + res.branch,
                        '--------- isMyBranch: ' + isMyBranch(),
                        '--------- hasMissedPayment: ' + hasMissedPayment(),
                        '--------- final: ' + (isMyBranch() && hasMissedPayment()));*/

                    return isMyBranch() && hasMissedPayment();

                });

                !!this.orders.length && (this.show = true);
                this.$LIPS(false);
            },

            isOrderFormal: order => ['formal', 'salaried'].includes(order.customer.employment_status.toLowerCase()),

            generateDates({startDate, interval, count}) {
                let dates = [];
                for (let i = 0; i < count; i++) {
                    let orderDate = (new Date(startDate)).addDays((i + 1) * interval);
                    let dateString = this.$getDate(orderDate);
                    dates.push(dateString);
                }
                return dates;
            },

            renderMessage: reminder => !!reminder['sms'] ? reminder.sms.message.replace(/%0a/g, '</br>') : reminder.feedback,

            fetchList(list) {
                this.$LIPS(true);
                get(url({query: {list}})).then(({data}) => {
                    if (list === 8) {
                        let orders = [];
                        data.orders.forEach(promiseCall => orders.push(promiseCall.order));
                        data.orders = orders;
                    }
                    this.prepareForm(data);
                });
            },

            isPaymentDue: dueDate => new Date() > new Date(dueDate),

            getDiscount: ({discount}) => `${discount.name} (${discount.percentage_discount})`,

            isRepaymentValid: order => !(/*!order['repayment'] && */!order['repayment_formal'] && !order['repayment_informal']),

            displayDetails(order, modal) {
                this.paymentSummary = this.calcPaymentSummary(order);
                Vue.set(this.$data, 'currentOrder', order);
                this.showModalContent = true;
                return $(`#${modal}`).modal('toggle');
            },

            getCountAndRepaymentData(order) {
                let data = {count: this.amortizationPlan(order).count};
                if (order['repayment_formal'] != null) data.repaymentData = order.repayment_formal;
                if (order['repayment_informal'] != null) data.repaymentData = order.repayment_informal;
                return data;
            },

            calcPaymentSummary(order) {
                let datesDefaulted = [];
                let amountPerDefault = 500;
                let fmt = cur => this.$formatCurrency(cur);
                let amountPaid = this.$roundDownAmt(parseInt(order.down_payment));
                let {count, interval} = this.amortizationPlan(order);
                let {repaymentData} = this.getCountAndRepaymentData(order);

                let dueDates = this.generateDates({startDate: order.order_date, interval, count});
                dueDates.forEach((dueDate, index) => this.isPaymentDue(this.$getDate(new Date(dueDate).addDays(5))) &&
                    datesDefaulted.push({dueDate, actualPayDate: repaymentData[this.$getColumn(index) + "_date"]}));
                if (!!repaymentData) {
                    for (let i = 1; i < count + 1; i++)
                        amountPaid += this.$roundDownAmt(repaymentData[this.$getColumn(i) + '_pay']);
                } else amountPaid = 0;
                let {percentage_discount: discount} = order.discount;
                let multiplicationFactor = count === 6 ? 0.5 : 1;
                let repaymentCoveredAsDiscount = () => discount > 0 ? (discount === 5 ? 1 : 2) : 0;
                let discountAmount = order.repayment_amount * multiplicationFactor * repaymentCoveredAsDiscount();
                discountAmount = this.$roundDownAmt(discountAmount);

                let defaultFee = datesDefaulted.length * amountPerDefault;
                let discountedTotal = this.$roundDownAmt(order["product_price"] - discountAmount);

                return {
                    amountPaid: fmt(amountPaid),
                    discountAmount: fmt(this.$roundDownAmt(discountAmount)),
                    outstandingDebt: fmt(this.$roundDownAmt(parseInt(order["product_price"]) - amountPaid)),
                    discountedTotal: fmt(discountedTotal),
                    defaultFee: fmt(defaultFee),
                    totalPlusDefault: fmt(discountedTotal + defaultFee)
                };
            },

            getRepayment(order, clause = null) {
                if (!this.isRepaymentValid(order)) return null;
                let data = [], {repaymentData} = this.getCountAndRepaymentData(order);
                let {interval, count} = this.amortizationPlan(order);
                if (clause === null) return this.generateDates({startDate: order.order_date, interval, count});
                if (clause === 'repayments')
                    return (new Array(count)).fill(this.$roundDownAmt(order.repayment_amount), 0, count);
                for (let i = 1; i < count + 1; i++) data.push(repaymentData[this.$getColumn(i) + clause]);
                return data;
            },

            getPaymentStatusClasses(order) {
                if (!this.isRepaymentValid(order)) return null;
                let data = [],
                    {repaymentData} = this.getCountAndRepaymentData(order),
                    {count} = this.amortizationPlan(order),
                    dueDates = this.getRepayment(order);
                for (let i = 1; i < count + 1; i++) {
                    let status = {class: null, icon: null};
                    let position = this.$getColumn(i);
                    let isDue = this.isPaymentDue(dueDates[i - 1]);
                    let amountPaid = parseInt(repaymentData[position + '_pay']);
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
                    data.push(status);
                }
                return data;
            },

            getRepaymentLevel(order) {
                if (!this.isRepaymentValid(order)) return 0;
                let level = 0,
                    {count} = this.amortizationPlan(order),
                    {repaymentData} = this.getCountAndRepaymentData(order);
                for (let i = 1; i < count + 1; i++) if (repaymentData[this.$getColumn(i) + '_pay'] > 0) level++;
                return level + "/" + (count);
            },

            convertPaymentMethodOrBankToName(id, type) {
                return !id ? null : this.$data[type].find(obj => obj.id === id).name;
            },

            updateReminder(reminder, selected) {
                if (!selected) {
                    let index;
                    this.reminder.forEach((obj, i) => obj.order_id === reminder.order_id && (index = i));
                    this.reminder.splice(index, 1);
                } else this.reminder.push(reminder);
            },

            processSelected() {
                if (!this.reminder.length) {
                    this.$displayErrorMessage('please select at least one!');
                    return;
                }
                this.$LIPS(true);
                let smsContactList = this.reminder
                    .map(obj => {
                        let newObject = JSON.parse(JSON.stringify(obj));
                        newObject.order = this.orders.find(({id}) => id === obj.order_id);
                        newObject.message = this.generateCustomMessage(newObject.order);
                        return newObject;
                    });
                this.sendSMSReminders(smsContactList);
            },

            sendSMSReminders(smsContactList) {
                let messages = [];
                smsContactList.forEach((value, index) => {
                    let sms = new Message(value.message, value.contacts, false, value.dva_id);
                    sms.send(r => {
                        if (r.status === 200) {
                            delete sms.logToDB;
                            messages.push(sms);
                        }
                        if ((index + 1) === smsContactList.length) this.logSentMessages(messages, smsContactList);
                    });
                });
            },

            logSentMessages(messages, smsContactList) {
                if (!!messages) {
                    post('/api/message', {messages, bulk: true}).then(({data}) => {
                        let {sentAndLogged, ids} = data;
                        if (sentAndLogged) this.logSentReminders(smsContactList, ids);
                        else this.$displayErrorMessage('Error Logging sent sms details!');
                    });
                } else this.$displayErrorMessage('Error sending messages!');
            },

            logSentReminders(selectedList, ids) {
                ids.reverse();
                let newList = JSON.parse(JSON.stringify(selectedList));
                newList.forEach((value, index) => {
                    value.sms_id = ids[index];
                    delete value.message;
                    delete value.order;
                    delete value.contacts;
                    delete value.canBeSelected;
                });
                if (ids.length > 0) {
                    post('/api/reminder', {reminders: newList}).then(({data}) => {
                        if (data.saved) {
                            Flash.setSuccess('Reminders have been sent successfully!', 50000);
                            this.fetchList(this.list);
                        } else this.$displayErrorMessage('Error sending reminders!');
                        this.$scrollToTop();
                    });
                } else this.$displayErrorMessage('Error logging sent messages!');
            },

            generateCustomMessage(order) {
                const {customer, store_product, order_date, repayment_amount} = order;
                const {product_name} = store_product, {first_name, last_name} = customer;
                let message,
                    genDateArgs = {startDate: order_date, ...this.amortizationPlan(order)};
                let dates = this.generateDates(genDateArgs);
                let repaymentLevel = this.getRepaymentLevel(order).split("/")[0];
                if (this.list === 1) {
                    message = `Hello ${first_name} ${last_name}, thanks for patronizing us.`
                        + ` The following is the breakdown of the repayment plan for`
                        + ` the purchase of ${product_name}:%0a`;
                    if (dates.length > 0)
                        dates.forEach((date, index) =>
                            message += this.$getColumn(index + 1) + ": " + date + " => " + this.$formatCurrency(this.$roundDownAmt(repayment_amount)) + "%0a");
                } else {
                    message = `Hello ${first_name} ${last_name}, This is to remind you that your`
                        + ` ${this.$getColumn(parseInt(repaymentLevel) + 1)} repayment of ${this.$formatCurrency(this.$roundDownAmt(repayment_amount))} for ${product_name}`
                        + ` will be due on ${dates[repaymentLevel]}. we will be expecting you.`;
                }
                return message + "Please remember to pay on time to avoid late fees and other penalties.%0aThank you.";
            },

            amortizationPlan(order = this.currentOrder) {
                //'2019-07-07' this is the date the bank draft was implemented
                // and hence used as a factor to check for
                // if amortization should be 12 or 6
                let interval, count;
                if (new Date(order.order_date) <= new Date('2019-07-07')) {
                    if (order['repayment_formal'] != null) {
                        interval = 28;
                        count = 6;
                    }
                    if (order['repayment_informal'] != null) {
                        interval = 14;
                        count = 12;
                    }
                } else {
                    if (this.isBankDraftAvailable(order) && this.isOrderFormal(order)) {
                        interval = 28;
                        count = 6;
                    } else {
                        interval = 14;
                        count = 12;
                    }
                }
                return {interval, count};
            },

            isBankDraftAvailable() {
                //this is where the code for checking for bank draft will go
                return false;
            },

            repaymentCaption(order) {
                let {count} = this.amortizationPlan(order), data = [];
                for (let i = 1; i <= count; i++) {
                    let prefix = (this.$getColumn(i)).split('');
                    let appendix = [];
                    for (let j = 1; j <= 2; j++) appendix.unshift(prefix.pop());
                    data.push(`<td>${prefix.join('')}<sup>${appendix.join('')}</sup></td>`);
                }
                return data
            }
        },

        mounted() {
            this.mode != 'normal-list' ? this.fetchList(this.list) : this.prepareForm(this.preLoadedOrder);
            $(document).on("hidden.bs.modal", '.modal', () => {
                this.currentOrder = null;
                this.showModalContent = false;
            });
        },
    }
</script>

<style scoped type="scss">
    .table-separator {
        border-top: 2px solid #dee1e4;
    }
</style>