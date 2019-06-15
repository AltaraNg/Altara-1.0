<template>
    <div id="reminder">
        <div class="mt-5 mb-3 attendance-head">
            <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="true" class="nav-link active"
                       data-toggle="tab"
                       href="#reminder-panel"
                       @click="fetchList(1)"
                       role="tab">1<sup>st</sup> Reminder</a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link"
                       data-toggle="tab" href="#reminder-panel"
                       @click="fetchList(2)"
                       role="tab">2<sup>nd</sup> Reminder</a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link"
                       data-toggle="tab" href="#reminder-panel"
                       @click="fetchList(3)"
                       role="tab">3<sup>rd</sup> Reminder</a>
                </li>
            </ul>
        </div>

        <div class="mt-5 mb-3 attendance-head">
            <div class="row px-4 pt-3 pb-4 text-center">
                <div class="col p-0 text-link" @click="selectAll" style="max-width: 120px">
                    Click to {{doSelectAll ? 'De-select' : 'Select'}} all
                </div>
                <div class="col light-heading">Order Number</div>
                <div class="col light-heading">Order Summary</div>
                <div class="col light-heading">Customer Info Summary</div>
                <div class="col light-heading">Repayment Summary</div>
                <div class="col light-heading">Reminder History</div>
            </div>
        </div>

        <div class="tab-content mt-1 attendance-body" v-if="show && !!orders.length">
            <div class="tab-pane active text-center" id="reminder-panel" role="tabpanel">
                <div class="mb-3 row attendance-item" v-if="!!orders.length" v-for="(order, index) in orders">
                    <!--:data-key="index" @click="itemClicked(index)">-->
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
                        <div v-if="checkIfAlreadySentReminder(index)" class="d-flex align-items-center">
                            <input class="form-check-input my-0 mx-4 float-left position-relative " type="checkbox"
                                   v-model="reminder[index].selected" @click="toggleSelect(index)">
                        </div>
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

        <div class="mt-1 attendance-body" v-if="!!orders.length">
            <div class="mb-5 px-0 row align-items-center">
                <div class="w-100 my-5 mx-0 hr"></div>
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
                                    <th>Verified by</th>
                                    <td>
                                        <router-link class="text-link"
                                                     target="_blank"
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
                            <h5 class="mt-3 mb-0">Amortization Schedule</h5>
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
                                    <td v-for="payment in getRepayment(currentOrder,'repayments')">{{$formatCurrency(payment)}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Actual Amount Paid</th>
                                    <td v-for="payment in getRepayment(currentOrder,'_pay')">{{$formatCurrency(payment)}}</td>
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
                                    <th>{{$formatCurrency(currentOrder["product_price"])}}</th>
                                    <td>Total Paid</td>
                                    <th>{{$formatCurrency(getPaymentSummary(currentOrder).amountPaid)}}</th>
                                </tr>
                                <tr>
                                    <td class="text-left">Discount Amount</td>
                                    <th>{{$formatCurrency(getPaymentSummary(currentOrder).discountAmount)}}</th>
                                    <td>Total After Discount</td>
                                    <th>{{$formatCurrency(getPaymentSummary(currentOrder).discountedTotal)}}</th>
                                    <td>Total Debt</td>
                                    <th>{{$formatCurrency(getPaymentSummary(currentOrder).outstandingDebt)}}</th>
                                </tr>
                                <tr>
                                    <td class="text-left">Down Payment</td>
                                    <th>{{$formatCurrency(currentOrder.down_payment)}}</th>
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
    import SMS from "../../../helpers/sms";
    import Flash from "../../../helpers/flash";
    import {Message} from "../../../helpers/sms";
    import {get, post} from "../../../helpers/api";

    let url = to => `/api/reminder/create?list=${to.query.list}`;

    export default {
        beforeRouteEnter(to, from, next) {
            get(url({query: {list: 1}})).then(({data}) => {
                next(vm => vm.prepareForm(data));
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            this.showModalContent = false;
            get(url({query: {list: 1}})).then(({data}) => {
                this.prepareForm(data);
                next();
            });
        },

        data() {
            return {
                list: 1,
                //form: {},
                orders: {},
                show: false,
                banks: null,
                reminder: null,
                currentOrder: {},
                doSelectAll: false,
                payment_methods: null,
                showModalContent: false,
                isCurrentOrderInformal: null,
                currentOrderRepaymentDates: null
            }
        },
        methods: {
            prepareForm(res) {
                this.show = false;
                this.showModalContent = false;
                [this.orders, this.payment_methods, this.banks, this.dva_id] = [
                    // res.orders.filter(order => order.customer.branch.id === res.branch),
                    res.orders.filter(order => {
                        let {count, repaymentData} = this.getCountAndRepaymentData(order);
                        let hasMissedPayment = () => {
                            if (this.list === 1) return true;
                            let payDay,
                                // today = new Date('2019-05-13'),
                                today = new Date(),
                                isMonday = today.getDay() === 1/*remember to change this to 1*/,
                                accumulatedDays = isMonday ? 3 : 1, dayInterval, datePool = [];

                            for (let i = 1; i < count; i++) {
                                let column = this.getColumn(i);
                                if (!(!!repaymentData[column + "_pay"])) {
                                    payDay = this.generateDates({
                                        startDate: order.order_date,
                                        interval: count === 7 ? 28 : 14,
                                        count: count - 1
                                    })[i - 1];
                                    break;
                                }
                            }

                            if (this.list === 2) dayInterval = 7;
                            if (this.list === 3) dayInterval = 3;

                            for (let p = 0; p < accumulatedDays; p++) datePool.push(this.getDateString(today.addDays(p + dayInterval)));
                            return datePool.includes(payDay);
                        };
                        let isMyBranch = () => {
                            if (this.$store.getters.auth('DVALead')) return true;
                            return order.customer.branch.id === res.branch;
                        };
                        return isMyBranch() && hasMissedPayment();
                    }), res.payment_methods, res.banks, res.dva_id];
                this.initializeReminders() && (this.show = true);
            },

            initializeReminders() {
                this.reminder = [];
                this.orders.forEach(order => {
                    this.reminder.push({
                        'selected': false,
                        'customer_id': order.customer.id,
                        'phone': order.customer.telephone,
                        'order_id': order.id,
                        'sms_id': null,
                        'repayment_level': this.getRepaymentLevel(order),
                        'feedback': null,//this may be unnecessary
                        'dva_id': this.dva_id,
                        'type': 'sms',
                        'date': this.getDateString(),//double check this it might be unnecessary
                        'canBeSelected': this.isReminderSent(order),
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

            toggleSelect(index) {
                if (this.reminder.length > 0) {
                    if (this.reminder[index].canBeSelected) this.reminder[index].selected = !this.reminder[index].selected;
                    else alert('sorry a reminder has already been sent to user!');
                }
            },

            checkIfAlreadySentReminder(index) {
                if (this.reminder.length > 0) {
                    return this.reminder[index].canBeSelected;
                }
            },

            selectAll() {
                if (this.reminder.length > 0) {
                    this.doSelectAll = !this.doSelectAll;
                    this.reminder.forEach(order => order.canBeSelected && (order.selected = this.doSelectAll));
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

            generateCustomMessage(order) {
                const {customer, store_product, order_date, product_price, repayment_amount} = order;
                const {product_name} = store_product, {first_name, last_name} = customer;
                let message;
                let isFormal = this.isOrderFormal(order);
                let genDateArgs = {};
                if (isFormal) genDateArgs = {startDate: order_date, interval: 28, count: 6};
                if (!isFormal) genDateArgs = {startDate: order_date, interval: 14, count: 12};
                let dates = this.generateDates(genDateArgs);
                let repaymentLevel = this.getRepaymentLevel(order).split("/")[0];
                if (this.list === 1) {
                    message = `Hello ${first_name} ${last_name}, thanks for patronizing us.`
                        + ` The following is the breakdown of the repayment plan for`
                        + ` the purchase of ${product_name}:%0a`;
                    if (dates.length > 0)
                        dates.forEach((date, index) =>
                            message += this.getColumn(index + 1) + ": " + date + " => " + this.$formatCurrency(repayment_amount) + "%0a");
                } else {
                    message = `Hello ${first_name} ${last_name}, This is to remind you that your`
                        + ` ${this.getColumn(parseInt(repaymentLevel) + 1)} repayment of ${this.$formatCurrency(product_price)} for ${product_name}`
                        + ` will be due on ${dates[repaymentLevel]}. we will be expecting you.`;
                }
                return message + "Please remember to pay on time to avoid late fees and other penalties.%0aThank you.";
            },

            processSelected() {
                this.$LIPS(true);
                let smsContactList = this.reminder
                    .filter(obj => !!obj.selected)
                    .map(obj => {
                        let newObject = JSON.parse(JSON.stringify(obj));
                        newObject.phone = '234' + obj.phone.trim().substr(1);
                        newObject.order = this.orders.find(order => order.id === obj.order_id);
                        newObject.message = this.generateCustomMessage(newObject.order);
                        newObject.isSent = false;
                        return newObject;
                    });
                if (!!smsContactList.length) this.sendSMSReminders(smsContactList);
                else this.displayErrorMessage('please select at least one!');
            },

            sendSMSReminders(smsContactList) {
                smsContactList.forEach((value, index) => {
                    SMS.sendFirstReminder(value, res => {
                        value.isSent = res.status === 200;
                        if ((index + 1) === smsContactList.length) {
                            this.logSentMessages(smsContactList);
                        }
                    });
                });
            },

            logSentMessages(smsContactList) {
                let messages = [];
                smsContactList.forEach((obj, index) => {
                    obj.isSent && messages.push(new Message(obj.dva_id, obj.message, obj.phone));
                    if ((index + 1) === smsContactList.length) {
                        if (messages.length > 0) {
                            post('/api/message', {messages, bulk: true}).then(({data}) => {
                                let {sentAndLogged, ids} = data;
                                if (sentAndLogged) this.logSentReminders(smsContactList, ids);
                                else this.displayErrorMessage('Error Logging sent sms details!');
                            });
                        } else this.displayErrorMessage('Error sending messages!');
                    }
                });
            },

            logSentReminders(selectedList, ids) {
                ids.reverse();
                let newList = JSON.parse(JSON.stringify(selectedList));
                newList.forEach((value, index) => {
                    value.sms_id = ids[index];
                    delete value.isSent;
                    delete value.message;
                    delete value.order;
                    delete value.phone;
                    delete value.selected;
                    delete value.canBeSelected;
                });
                if (ids.length > 0) {
                    post('/api/reminder', {reminders: newList}).then(({data}) => {
                        this.initializeReminders() && this.$scrollToTop();
                        if (data.saved) {
                            Flash.setSuccess('Reminders have been sent successfully!', 50000);
                            this.fetchList(this.list);
                        } else this.displayErrorMessage('Error sending reminders!');
                    })
                } else this.displayErrorMessage('Error logging sent messages!');
            },

            fetchList(list) {
                this.$LIPS(true);
                this.list = list;
                get(url({query: {list}})).then(({data}) => {
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
                return 'Paid: ' + this.$formatCurrency(values.amountPaid) + ' | Debt: ' + this.$formatCurrency(values.outstandingDebt);
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
                let data = [], {count, repaymentData} = this.getCountAndRepaymentData(order),
                    dueDates = this.getRepayment(order);
                for (let i = 1; i < count; i++) {
                    let status = {class: null, icon: null};
                    let position = this.getColumn(i);
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
</style>