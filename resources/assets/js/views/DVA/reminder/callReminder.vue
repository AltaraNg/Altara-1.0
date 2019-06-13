<template>
    <div id="reminder">
        <div class="mt-5 mb-3 attendance-head">
            <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                <li class="col p-0 nav-item mb-0" v-for="(tab,index) in tabs">
                    <a aria-selected="true" class="nav-link" :class="index === 0 && 'active'"
                       data-toggle="tab" href="#reminder-panel" @click="fetchList(index+4)"
                       role="tab" v-html="tab + ' Call'"></a>
                </li>
                <!--NB: the @click="fetchList(index+4) translates to
                fetchList(4) fetchList(5) fetchList(6) fetchList(7) fetchList(8)
                for the number of the elements in the tabs array ie. 6
                this matches the list as a number that is sent to the backend to be
                used to process the dates for a particular list "-->
            </ul>
        </div>

        <div class="mt-5 mb-3 attendance-head">
            <div class="row px-4 pt-3 pb-4 text-center">
                <div class="col light-heading" v-for="header in headings">{{header}}</div>
            </div>
        </div>

        <div class="tab-content mt-1 attendance-body" v-if="show && !!orders.length">
            <div class="tab-pane active text-center" id="reminder-panel" role="tabpanel">
                <div class="mb-3 row attendance-item" v-if="!!orders.length" v-for="(order, index) in orders">
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
                        <span v-if="checkIfAlreadySentReminder(index)"
                              @click="logReminder(index)"
                              class="user mx-auto waiting-reminder">
                            <i class="fas fa-hourglass-start"></i>
                        </span>
                        <span class="user mx-auto sent-reminder" v-else><i class="fas fa-check"></i></span>
                        <span class="user mx-auto">{{index+1}}</span>
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"
                         data-reminder-1="1">{{order.id}}
                    </div>
                    <div @click="displayDetails(order, 'purchase_order')"
                         class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                         data-hoverable="true">
                        {{order.order_date}}
                    </div>
                    <div @click="displayDetails(order,'customer_info')"
                         class="col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"
                         data-hoverable="true">
                        ID: {{order.customer.id}} - {{order.customer.employment_status | capitalize}}
                    </div>
                    <div @click="displayDetails(order, 'repayment')"
                         class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                         data-hoverable="true">
                        {{getFinancialStatus(order)}}
                    </div>
                    <div @click="displayDetails(order,'reminder_history')"
                         class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                         data-hoverable="true">
                        {{order.reminders.length}} reminder(s) sent
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center">
                        <textarea class="form-control" rows="1" v-model="reminder[index].feedback"
                                  :disabled="!reminder[index].canBeSelected"></textarea>
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center">
                        <input class="form-control" type="date" v-model="promiseCalls[index].date"
                               :disabled="!reminder[index].canBeSelected">
                    </div>
                </div>
            </div>
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

        <div class="w-100 my-5 mx-0 hr"></div>

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
                                    <td>{{$format(currentOrder.repayment_amount)}}</td>
                                </tr>
                                <tr>
                                    <th>Down Payment</th>
                                    <td>{{$format(currentOrder.down_payment)}}</td>
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
                                    <td>{{$format(currentOrder.product_price)}}</td>
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
                                        (currentOrder.customer.work_guarantor_relationship)}}</td>
                                </tr>
                                <tr>
                                    <th>Work guarantor phone</th>
                                    <td>{{currentOrder.customer.work_guarantor_telno}}</td>
                                </tr>
                                <tr>
                                    <th>Personal guarantor name</th>
                                    <td>{{currentOrder.customer.personal_guarantor_first_name + " " +
                                        currentOrder.customer.personal_guarantor_last_name + " - " +
                                        (currentOrder.customer.personal_guarantor_relationship)}}</td>
                                </tr>

                                <tr>
                                    <th>Personal guarantor phone</th>
                                    <td>{{currentOrder.customer.personal_guarantor_telno}}</td>
                                </tr>


                                <tr>
                                    <th>Verified by</th>
                                    <td>--</td>
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

        <div class="modal fade repayment" id="repayment">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" v-if="showModalContent">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Repayment Plan/Summary - {{currentOrder.customer.employment_status
                            | capitalize}}</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <tbody class="text-center">
                                <tr>
                                    <th>Repayment</th>
                                    <td>1<sup>st</sup></td>
                                    <td>2<sup>nd</sup></td>
                                    <td>3<sup>rd</sup></td>
                                    <td>4<sup>th</sup></td>
                                    <td>5<sup>th</sup></td>
                                    <td>6<sup>th</sup></td>
                                    <td v-if="isCurrentOrderInformal">7<sup>th</sup></td>
                                    <td v-if="isCurrentOrderInformal">8<sup>th</sup></td>
                                    <td v-if="isCurrentOrderInformal">9<sup>th</sup></td>
                                    <td v-if="isCurrentOrderInformal">10<sup>th</sup></td>
                                    <td v-if="isCurrentOrderInformal">11<sup>th</sup></td>
                                    <td v-if="isCurrentOrderInformal">12<sup>th</sup></td>
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
                                        {{$format(payment)}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Actual Amount Paid</th>
                                    <td v-for="payment in getRepayment(currentOrder,'_pay')">{{$format(payment)}}</td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Payment Method</th>
                                    <td class="text-capitalize"
                                        v-for="repaymentMethod in getRepayment(currentOrder,'_payment_method')">
                                        {{convertPaymentMethodOrBankToName(repaymentMethod, 'payment')}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Bank</th>
                                    <td class="text-capitalize"
                                        v-for="repaymentBank in getRepayment(currentOrder,'_payment_bank')">
                                        {{convertPaymentMethodOrBankToName(repaymentBank, 'bank')}}
                                    </td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Summary</th>
                                    <td>Discount Detail (%)</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{currentOrder["discount"]["name"] | capitalize}}
                                        -
                                        ({{currentOrder["discount"]["percentage_discount"]}})
                                    </th>
                                    <td>Total Before Discount</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{$format(currentOrder["product_price"])}}
                                    </th>
                                    <td>Total Paid</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{$format(getPaymentSummary(currentOrder).amountPaid)}}
                                    </th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Discount Amount</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{$format(getPaymentSummary(currentOrder).discountAmount)}}
                                    </th>
                                    <td>Total After Discount</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{$format(getPaymentSummary(currentOrder).discountedTotal)}}
                                    </th>
                                    <td>Total Debt</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{$format(getPaymentSummary(currentOrder).outstandingDebt)}}
                                    </th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Down Payment</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{$format(currentOrder.down_payment)}}
                                    </th>
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
                                    <th>Comment</th>
                                    <th>sender</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(reminder, index) in currentOrder.reminders">
                                    <th>{{index+1}}</th>
                                    <td>{{reminder.date}}</td>
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
    import Flash from "../../../helpers/flash";
    import {get, post} from "../../../helpers/api";

    let url = to => `/api/reminder/create?list=${to.query.list}`;

    export default {
        beforeRouteEnter(to, from, next) {
            get(url({query: {list: 4}})).then(({data}) => {
                next(vm => vm.prepareForm(data));
            });
        },

        beforeRouteUpdate(to, from, next) {
            this.show = false;
            this.showModalContent = false;
            get(url({query: {list: 4}})).then(({data}) => {
                this.prepareForm(data);
                next();
            });
        },

        data() {
            return {
                list: 4,
                orders: {},
                show: false,
                banks: null,
                reminder: null,
                currentOrder: {},
                promiseCalls: null,
                payment_methods: null,
                showModalContent: false,
                isCurrentOrderInformal: null,
                currentOrderRepaymentDates: null,
                tabs: ["1<sup>st</sup>", "2<sup>nd</sup>", "3<sup>rd</sup>", "Guarantor's", "Promise"],
                headings: ['Action', 'Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary',
                    'Reminder History', 'Feedback', 'Promise Date']
            }
        },

        methods: {
            prepareForm(res) {
                this.show = false;
                this.showModalContent = false;
                [this.orders, this.payment_methods, this.banks, this.dva_id] = [
                    res.orders.filter(order => {
                        let {count, repaymentData} = this.getCountAndRepaymentData(order);
                        let hasMissedPayment = () => {
                            if (this.list === 8) return true;
                            let payDay,
                                today = new Date(),
                                isMonday = today.getDay() === 1, /*1 mean mondays*/
                                accumulatedDays = isMonday ? 3 : 1,
                                dayInterval,
                                datePool = [];

                            //step 1.
                            for (let i = 1; i < count; i++) {
                                let column = this.getColumn(i);
                                //step 2. get the first occurrence of a vacant pay
                                if (!(!!repaymentData[column + "_pay"])) {
                                    //step 3. find the corresponding due date for the vacant pay
                                    payDay = this.generateDates({
                                        startDate: order.order_date,
                                        interval: count === 7 ? 28 : 14,
                                        count: count - 1
                                    })[i - 1];
                                    break;
                                }
                            }

                            //step 4. check if the date is
                            switch (this.list) {
                                case 4:
                                    //4a: same as today (for first call reminder due date = current date)
                                    //return (this.getDateString(today) === payDay);
                                    dayInterval = 0;
                                    break;
                                case 5:
                                    //4a: same as today (for first call reminder due date = current date + 1 day)
                                    //return (this.getDateString(today.addDays(-1)) === payDay);
                                    dayInterval = 1;
                                    break;
                                case 6:
                                    //4a: same as today (for first call reminder due date = current date + 7 days)
                                    //return (this.getDateString(today.addDays(-7)) === payDay);
                                    dayInterval = 5;//7;
                                    break;
                                case 7:
                                    //4a: same as today (for first call reminder due date = current date + 28 days)
                                    //return (this.getDateString(today.addDays(-28)) === payDay);
                                    dayInterval = 31; //28;
                                    break;
                            }

                            for (let p = 0 ; p < accumulatedDays; p ++){
                                datePool.push(this.getDateString(today.addDays(-(p+dayInterval))))
                            }

                            return datePool.includes(payDay);
                        };

                        let isMyBranch = () => {
                            if(this.$store.getters.auth('DVALead')) return true;
                            return order.customer.branch.id === res.branch;
                        };

                        return isMyBranch() && hasMissedPayment();
                    }), res.payment_methods, res.banks, res.dva_id];
                this.initializeReminders() && (this.show = true);
            },

            initializeReminders() {
                this.reminder = [];
                this.promiseCalls = [];
                this.orders.forEach(order => {
                    this.reminder.push({
                        'customer_id': order.customer.id,
                        'order_id': order.id,
                        'repayment_level': this.getRepaymentLevel(order),
                        'dva_id': this.dva_id,
                        'type': 'call',
                        'date': this.getDateString(),//double check this it might be unnecessary
                        'canBeSelected': this.isReminderSent(order),
                    });
                    this.promiseCalls.push({
                        order_id: order.id,
                        user_id: this.dva_id,
                        customer_id: order.customer.id,
                        date: null,
                    });
                });
                this.$LIPS(false);
                return true;
            },

            displayErrorMessage(error) {
                this.$scrollToTop();
                Flash.setError(error, 50000);
                this.$LIPS(false);
            },

            checkIfAlreadySentReminder(index) {
                if (this.reminder.length > 0) {
                    return this.reminder[index].canBeSelected;
                }
            },

            isOrderFormal({repayment_informal}) {
                return repayment_informal === null;
            },

            generateDates({startDate, interval, count}) {
                let dates = [];
                for (let i = 0; i < count; i++) {
                    let orderDate = (new Date(startDate)).addDays((i + 1) * interval);
                    let dateString = this.getDateString(orderDate);
                    dates.push(dateString);
                }
                return dates;
            },

            getDateString(date = new Date(), monthStartsFromZero = true) {
                return date.getFullYear() + '-' + (date.getMonth() + (monthStartsFromZero && 1)) + '-' + date.getDate();
            },

            isReminderSent(order) {
                var value = true, date;
                if (!!order) {
                    if (order.reminders.length > 0) {
                        let today = this.getDateString();
                        order.reminders.forEach(reminder => {
                            //refactor below by using regx characters to split
                            let reminderDateTimeArr = reminder.date.split(' ');//(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
                            let dateArr = reminderDateTimeArr[0].split('-');//'2019-03-24' -> ['2019','03','24']
                            let timeArr = reminderDateTimeArr[1].split(':');//'02:00:00' -> ['02','00','00']
                            let arr = [...dateArr, ...timeArr] // ['2019','03','24','02','00','00']
                                .map(item => parseInt(item, 10)); //[2019,3,24,2,0,0]
                            date = this.getDateString(new Date(Date.UTC(...arr)), false);
                            date === today && (value = false);
                        });
                    }
                }
                return value;
            },

            renderMessage(reminder) {
                return !!reminder['sms'] ?
                    reminder.sms.message.replace(/%0a/g, '</br>')
                    : 'call feedback: ' + reminder.feedback;
            },

            logReminder(index) {
                let reminder = this.reminder[index];
                delete reminder.order;
                delete reminder.canBeSelected;
                post('/api/reminder', {reminders: [reminder]}).then(({data}) =>
                    data.saved ? this.logPromiseCall(this.promiseCalls[index])
                        : this.displayErrorMessage('Error Logging reminders!')
                );
            },

            logPromiseCall(promiseCall) {
                if (!!promiseCall.date) {
                    console.log(promiseCall);
                    post('/api/promise_call', promiseCall).then(({data}) =>
                        data.saved ? this.done("Reminder Logged!, Promise call added!")
                            : this.displayErrorMessage('Error Logging promise call!')
                    );
                } else this.done("Reminder Logged!");
            },

            done(message) {
                this.initializeReminders() && this.$scrollToTop();
                Flash.setSuccess(message, 5000);
                this.fetchList(this.list);
            },

            fetchList(list) {
                this.$LIPS(true);
                this.list = list;
                get(url({query: {list}})).then(({data}) => {
                    if (list === 8) {
                        let orders = [];
                        data.orders.forEach(promiseCall => orders.push(promiseCall.order));
                        data.orders = orders;
                    }
                    this.prepareForm(data);
                });
            },

            isPaymentDue(dueDate) {
                return new Date() > new Date(dueDate);
            },

            getDiscount({discount}) {
                return `${discount.name} (${discount.percentage_discount})`;
            },

            isOrderRepaymentValid(order) {
                return !(!order['repayment'] && !order['repayment_formal'] && !order['repayment_informal']);
            },

            getColumn(i) {
                let column = null;
                switch (i) {
                    case 1:
                        column = i + 'st';
                        break;
                    case 2:
                        column = i + 'nd';
                        break;
                    case 3:
                        column = i + 'rd';
                        break;
                    default:
                        column = i + 'th';
                        break;
                }
                return column;
            },

            displayDetails(order, modal) {
                Vue.set(this.$data, 'currentOrder', order);
                this.isCurrentOrderInformal = !(['formal', 'salaried'].includes(order.customer.employment_status.toLowerCase()));
                this.showModalContent = true;
                return $(`#${modal}`).modal('toggle');
            },

            getCountAndRepaymentData(order) {
                let count = 0, repaymentData = null, {repayment_formal, repayment_informal} = order;
                if (order['repayment_formal'] != null) {
                    count = 7;
                    repaymentData = repayment_formal;
                }
                if (order['repayment_informal'] != null) {
                    count = 13;
                    repaymentData = repayment_informal;
                }
                return {count, repaymentData};
            },

            getPaymentSummary(order) {
                let amountPaid = parseInt(order.down_payment),
                    outstandingDebt = 0,
                    {count, repaymentData} = this.getCountAndRepaymentData(order);
                for (let i = 1; i < count; i++) amountPaid += repaymentData[this.getColumn(i) + '_pay'];
                outstandingDebt = parseInt(order["product_price"]) - amountPaid;
                var discountAmount = (order['discount']['percentage_discount'] / 100) * order["product_price"];
                var discountedTotal = order["product_price"] - discountAmount;
                return {amountPaid, outstandingDebt, discountAmount, discountedTotal};
            },

            getFinancialStatus(order) {
                if (!this.isOrderRepaymentValid(order)) return 'no repayment detail';
                let values = this.getPaymentSummary(order);
                return 'Paid: ' + this.$format(values.amountPaid) + ' | Debt: ' + this.$format(values.outstandingDebt);
            },

            getRepayment(order, clause = null) {
                if (!this.isOrderRepaymentValid(order)) return null;
                let data = [], {count, repaymentData} = this.getCountAndRepaymentData(order);
                if (clause === null) {
                    data = this.generateDates({
                        startDate: order.order_date,
                        interval: count === 7 ? 28 : 14,
                        count: count - 1
                    });
                    this.currentOrderRepaymentDates = data;
                    return data;
                }
                if (clause === 'repayments') {
                    let {repayment_amount} = order;
                    for (let i = 1; i < count; i++)
                        data.push(this.isCurrentOrderInformal ? repayment_amount : (repayment_amount * 2));
                    return data;
                }
                for (let i = 1; i < count; i++) data.push(repaymentData[this.getColumn(i) + clause]);
                return data;
            },

            getPaymentStatusClasses(order) {
                if (!this.isOrderRepaymentValid(order)) return null;
                let data = [], {count, repaymentData} = this.getCountAndRepaymentData(order), dueDates = this.getRepayment(order);
                for (let i = 1; i < count; i++) {
                    let status = {class: null, icon: null};
                    let position = this.getColumn(i);
                    let isDue = this.isPaymentDue(dueDates[i-1]);
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
                if (!this.isOrderRepaymentValid(order)) return 0;
                let level = 0, {count, repaymentData} = this.getCountAndRepaymentData(order);
                for (let i = 1; i < count; i++) if (repaymentData[this.getColumn(i) + '_pay'] > 0) level++;
                return level + "/" + (count - 1);
            },

            convertPaymentMethodOrBankToName(id, type) {
                return (!id) ? null : this.$data[type === 'bank' ? 'banks' : 'payment_methods'].find(obj => obj.id === id).name;
            },
        },

        mounted() {
            $(document).on("hidden.bs.modal", '.modal', () => {
                this.currentOrder = null;
                this.showModalContent = false;
            });

            //this is linked to the function that generates dates
            Date.prototype.addDays = function (days) {
                var date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            };
        },
    }
</script>

<style scoped type="scss">
    .check-box-overlay {
        height: 100%;
        width: 100%;
        float: left;
        position: absolute;
        z-index: 1;
    }

    .table-separator {
        border-top: 2px solid #dee1e4;
    }

    .attendance-head .light-heading:nth-child(1) {
        max-width: 120px;
    }
</style>