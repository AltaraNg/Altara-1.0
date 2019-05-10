<template>
    <div id="reminder">
        <div class="mt-5 mb-3 attendance-head">
            <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="true" class="nav-link"
                       :class="{'active':$route.query.list === '1' || !($route.query.list)}" data-toggle="tab"
                       href="#reminder-panel"
                       @click="getReminderList(1)"
                       role="tab">1<sup>st</sup> Reminder</a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link" :class="{'active':$route.query.list === '2'}"
                       data-toggle="tab" href="#reminder-panel"
                       @click="getReminderList(2)"
                       role="tab">2<sup>nd</sup> Reminder</a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link" :class="{'active':$route.query.list === '3'}"
                       data-toggle="tab" href="#reminder-panel"
                       @click="getReminderList(3)"
                       role="tab">3<sup>rd</sup> Reminder</a>
                </li>
            </ul>
        </div>

        <div class="mt-5 mb-3 attendance-head">
            <div class="row px-4 pt-3 pb-4 text-center">
                <div class="col p-0 text-link" @click="selectAll" style="max-width: 120px">
                    Click to {{doSelectAll ? 'Select' : 'De-select'}} all
                </div>
                <div class="col light-heading">Order Number</div>
                <div class="col light-heading">Order Summary</div>
                <div class="col light-heading">Customer Info Summary</div>
                <div class="col light-heading">Repayment Summary</div>
                <div class="col light-heading">Reminder History</div>
            </div>
        </div>

        <div class="tab-content mt-1 attendance-body" v-if="show">
            <div class="tab-pane active text-center" id="reminder-panel" role="tabpanel">
                <div class="mb-3 row attendance-item" v-for="(order, index) in orders">
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center " style="max-width: 120px">
                        <input class="form-check-input my-0 mx-4 float-left position-relative" type="checkbox"
                               v-model="reminder[index].selected">
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

        <div class="mt-1 attendance-body">
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
                                    <th>Repayment (&#8358;)</th>
                                    <td>{{currentOrder.repayment_amount}}</td>
                                </tr>
                                <tr>
                                    <th>Down Payment (%)</th>
                                    <td>{{currentOrder.down_payment}}</td>
                                </tr>
                                <tr>
                                    <th>Discount (&#8358;)</th>
                                    <td>{{getDiscount(currentOrder)}}</td>
                                </tr>
                                <tr>
                                    <th>Total amount to Pay (&#8358;)</th>
                                    <td>{{currentOrder.product_price}}</td>
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
                                    <th>Branch</th>
                                    <td>{{currentOrder.customer.branch.name}}</td>
                                </tr>
                                <tr>
                                    <th>Category</th>
                                    <td>{{currentOrder.customer.employment_status}}</td>
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
                                <tr>
                                    <th>Due date</th>
                                    <td v-for="date in getRepayment(currentOrder,'_date')">{{date}}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td :class="status.class" v-for="status in getPaymentStatusClasses(currentOrder)">
                                        <i class="fas" :class="status.icon"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Amount Paid (&#8358;)</th>
                                    <td v-for="payment in getRepayment(currentOrder,'_pay')">{{payment}}</td>
                                </tr>
                                <tr>
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
                                <tr>
                                    <th>Summary (&#8358;)</th>
                                    <td>Grand Total</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">{{currentOrder["product_price"]}}</th>
                                    <td>Total Paid</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{getAmountPaidAndOutStandingDebt(currentOrder).amountPaid}}
                                    </th>
                                    <td>Total Debt</td>
                                    <th :colspan="isCurrentOrderInformal ? 3 : 1">
                                        {{getAmountPaidAndOutStandingDebt(currentOrder).outstandingDebt}}
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
                                    <td>{{reminder.feedback}}</td>
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
    import {get, post} from "../../../helpers/api";
    import SMS from "../../../helpers/sms";
    import Flash from "../../../helpers/flash";

    function initialize(to) {
        let urls = {create: `/api/reminder/create${to.query.list ? '?list=' + to.query.list : ''}`};
        return urls.create;
    }

    export default {
        beforeRouteEnter(to, from, next) {
            //1. make request to back-end
            get(initialize(to)).then(({data}) => {
                //2 send to the method to prepare form//
                next(vm => vm.prepareForm(data));
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            this.showModalContent = false;
            //1. make request to back-end
            get(initialize(to)).then(({data}) => {
                //2 send to the method to prepare form
                this.prepareForm(data);
                next();
            });
        },

        data() {
            return {
                form: {},
                show: false,
                showModalContent: false,
                orders: {},
                currentOrder: {},
                doSelectAll: false,
                banks: null,
                payment_methods: null,
                isCurrentOrderInformal: null,
                reminder: [],
            }
        },
        methods: {
            prepareForm(res) {
                this.show = false;
                this.showModalContent = false;
                //this function is used when a data is sent to this component
                //or this component makes a request to backend the
                //data received is used to prepare the form
                [this.orders, this.payment_methods, this.banks, this.dva_id] = [res.orders, res.payment_methods, res.banks, res.dva_id];
                this.initializeReminders() && (this.show = true);
            },

            initializeReminders(){
                const today = new Date();
                this.orders.forEach(order => {
                    this.reminder.push({
                        'selected': false,
                        'customer_id': order.customer.id,
                        'phone': order.customer.telephone,
                        'order_id': order.id,
                        'sms_id': null,
                        'repayment_level': this.getRepaymentLevel(order),
                        'feedback': null,
                        'dva_id': this.dva_id,
                        'type': 'sms',
                        'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    });
                });
                return true;
            },

            selectAll() {
                this.doSelectAll = !this.doSelectAll;
                this.reminder.forEach(order => order.selected = this.doSelectAll);
            },

            processSelected() {
                let SMSContactList = this.reminder
                    .filter(obj => !!obj.selected)
                    .map(obj => '234' + obj.phone.trim().substr(1));
                if (!!SMSContactList.length) SMS.sendFirstReminder({SMSContactList}, this.saveReminders);
                else {
                    this.$scrollToTop();
                    Flash.setError('please select at least one order!', 50000);
                }
            },

            saveReminders({messages}) {
                let contactsSentSMSFromReminderList = this.reminder.filter(obj => !!obj.selected);
                contactsSentSMSFromReminderList.forEach((value, index) => {
                    value.sms_id = messages[index].messageId;
                    value.feedback = 'sms sent';
                    delete value.phone;
                    delete value.selected;
                });
                post('/api/reminder', {reminders: contactsSentSMSFromReminderList}).then(({data}) => {
                    this.initializeReminders() && this.$scrollToTop();
                    if(data.saved) Flash.setSuccess('Reminders have been sent successfully!',10000);
                })
            },

            isPaymentDue(dueDate) {
                return new Date() > new Date(dueDate);
            },

            getDiscount({discount}) {
                return `${discount.name} (${discount.percentage})`;
            },

            isOrderRepaymentValid(order) {
                return !(!order['repayment'] && !order['repayment_formal'] && !order['repayment_informal']);
            },

            getReminderList(list) {
                this.$router.push({query: {list}});
                if (this.$route.query.list != list) this.$LIPS(true);
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
                this.isCurrentOrderInformal = order.customer.employment_status === 'informal(business)';
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

            getAmountPaidAndOutStandingDebt(order) {
                let amountPaid = 0, outstandingDebt = 0, {count, repaymentData} = this.getCountAndRepaymentData(order);
                for (let i = 1; i < count; i++) amountPaid += repaymentData[this.getColumn(i) + '_pay'];
                outstandingDebt = parseInt(order["product_price"]) - amountPaid;
                return {amountPaid, outstandingDebt};
            },

            getFinancialStatus(order) {
                if (!this.isOrderRepaymentValid(order)) return 'no repayment detail';
                let values = this.getAmountPaidAndOutStandingDebt(order);
                return 'paid: ' + values.amountPaid + ' debt: ' + values.outstandingDebt;
            },

            getRepayment(order, clause) {
                if (!this.isOrderRepaymentValid(order)) return null;
                let data = [], {count, repaymentData} = this.getCountAndRepaymentData(order);
                for (let i = 1; i < count; i++) data.push(repaymentData[this.getColumn(i) + clause]);
                return data;
            },

            getPaymentStatusClasses(order) {
                if (!this.isOrderRepaymentValid(order)) return null;
                let data = [], {count, repaymentData} = this.getCountAndRepaymentData(order);
                for (let i = 1; i < count; i++) {
                    let status = {class: null, icon: null};
                    let position = this.getColumn(i);
                    let isDue = this.isPaymentDue(repaymentData[position + '_date']);
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
        },
    }
</script>