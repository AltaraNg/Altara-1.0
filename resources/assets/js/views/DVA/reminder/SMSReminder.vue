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
                <div class="col light-heading">Comment</div>
            </div>
        </div>
        <div class="tab-content mt-1 attendance-body" v-if="show">
            <div class="tab-pane active text-center" id="reminder-panel" role="tabpanel">
                <div class="mb-3 row attendance-item" v-for="(order, index) in orders">
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center " style="max-width: 120px">
                        <input class="form-check-input my-0 mx-4 float-left position-relative" type="checkbox">
                        <!-- v-model="customer.check">-->
                        <span class="user mx-auto">{{index+1}}</span>
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"
                         data-reminder-1="1">{{order.order_id}}
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
                    <div @click="displayDetails(order, getModalType(order.customer.employment_status))"
                         class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                         data-hoverable="true">
                        {{getFinancialStatus(order)}}
                    </div>
                    <div @click="displayDetails(order,'reminder_history')"
                         class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                         data-hoverable="true">
                        {{order.reminders.length}} reminder(s) sent
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                        <input class="form-control" type="text">
                    </div>
                </div>
            </div>
        </div>


        <div class="mt-1 attendance-body">
            <div class="mb-5 px-0 row align-items-center">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="clearfix d-flex justify-content-end w-100">
                    <button :disabled="$isProcessing" class="btn bg-default">
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
                                    <td>{{currentOrder.order_id}}</td>
                                </tr>
                                <tr>
                                    <th>Order date</th>
                                    <td>{{currentOrder.order_date}}</td>
                                </tr>
                                <tr>
                                    <th>Product</th>
                                    <td>{{currentOrder.product_name}}</td>
                                </tr>
                                <tr>
                                    <th>Repayment (&#8358;)</th>
                                    <td>{{currentOrder.product_price}}</td>
                                </tr>
                                <tr>
                                    <th>Down Payment (%)</th>
                                    <td>{{currentOrder.order_type}}</td>
                                </tr>
                                <tr>
                                    <th>Discount (&#8358;)</th>
                                    <td>-</td>
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

        <div class="modal fade repayment" id="repaymentInformal">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Repayment Plan/Summary - Informal</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
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
                                    <td>7<sup>th</sup></td>
                                    <td>8<sup>th</sup></td>
                                    <td>9<sup>th</sup></td>
                                    <td>10<sup>th</sup></td>
                                    <td>11<sup>th</sup></td>
                                    <td>12<sup>th</sup></td>
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
                                    <th>Summary (&#8358;)</th>
                                    <td>Grand Total</td>
                                    <th colspan="3">{{currentOrder["product_price"]}}</th>
                                    <td>Total Paid</td>
                                    <th colspan="3">{{getAmountPaidAndOutStandingDebt(currentOrder).amountPaid}}</th>
                                    <td>Total Debt</td>
                                    <th colspan="3">{{getAmountPaidAndOutStandingDebt(currentOrder).outstandingDebt}}
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

        <div class="modal fade repayment" id="repaymentFormal">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Repayment Plan/Summary - Formal</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <tbody class="text-center">
                                <tr>
                                    <th>Repayment</th>
                                    <td colspan="2">1<sup>st</sup></td>
                                    <td colspan="2">2<sup>nd</sup></td>
                                    <td colspan="2">3<sup>rd</sup></td>
                                    <td colspan="2">4<sup>th</sup></td>
                                    <td colspan="2">5<sup>th</sup></td>
                                    <td colspan="2">6<sup>th</sup></td>
                                </tr>
                                <tr>
                                    <th>Due date</th>
                                    <td colspan="2">2019-2-19</td>
                                    <td colspan="2">2019-2-19</td>
                                    <td colspan="2">2019-2-19</td>
                                    <td colspan="2">2019-2-19</td>
                                    <td colspan="2">2019-2-19</td>
                                    <td colspan="2">2019-2-19</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td colspan="2" class="paid"><i class="fas fa-check"></i></td>
                                    <td colspan="2" class="paid"><i class="fas fa-check"></i></td>
                                    <td colspan="2" class="missed"><i class="fas fa-times"></i></td>
                                    <td colspan="2" class="missed"><i class="fas fa-times"></i></td>
                                    <td colspan="2" class="pending"><i class="fas fa-hourglass-start"></i></td>
                                    <td colspan="2" class="pending"><i class="fas fa-hourglass-start"></i></td>
                                </tr>
                                <tr>
                                    <th>Pay Date</th>
                                    <td colspan="2">2019-02-18</td>
                                    <td colspan="2">2019-02-18</td>
                                    <td colspan="2">2019-02-18</td>
                                    <td colspan="2">2019-02-18</td>
                                    <td colspan="2">-</td>
                                    <td colspan="2">-</td>
                                </tr>
                                <tr>
                                    <th>Amount Paid (&#8358;)</th>
                                    <td colspan="2">4200.00</td>
                                    <td colspan="2">4200.00</td>
                                    <td colspan="2">4200.00</td>
                                    <td colspan="2">4200.00</td>
                                    <td colspan="2">-</td>
                                    <td colspan="2">-</td>
                                </tr>
                                <tr>
                                    <th>Summary (&#8358;)</th>
                                    <td>Grand Total</td>
                                    <th colspan="3">{{currentOrder["product_price"]}}</th>
                                    <td>Total Paid</td>
                                    <th colspan="3">{{getAmountPaidAndOutStandingDebt(currentOrder).amountPaid}}</th>
                                    <td>Total Debt</td>
                                    <th colspan="3">{{getAmountPaidAndOutStandingDebt(currentOrder).outstandingDebt}}
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
    import {get} from "../../../helpers/api";

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
                isFormal: false,
                orders: {},
                currentOrder: {},
                doSelectAll: false,
            }
        },
        methods: {
            getReminderList(list) {
                this.$router.push({query: {list}});
                if(this.$route.query.list != list)this.$LIPS(true);
            },
            prepareForm({orders}) {
                this.show = false;
                this.showModalContent = false;
                //this function is used when a data is sent to this component
                //or this component makes a request to backend the
                //data received is used to prepare the form
                this.orders = orders;
                Vue.set(this.$data, 'orders', orders);
                this.show = true;
                this.$LIPS(false);
            },


            isPaymentDue(date) {
                return new Date() > new Date(date);
            },

            getPaymentStatusClasses(order) {
                if (!order['repayment']) return null;
                let {repayment} = order, data = [];
                for (let i = 1; i < 13; i++) {
                    let status = {class: null, icon: null};
                    let position = this.getColumn(i);
                    let isDue = this.isPaymentDue(repayment[position + '_date']);
                    let amountPaid = parseInt(repayment[position + '_pay']);
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
            getAmountPaidAndOutStandingDebt(order) {
                let amountPaid = 0, outstandingDebt = 0;
                for (let i = 1; i < 13; i++) amountPaid += order["repayment"][this.getColumn(i) + '_pay'];
                outstandingDebt = parseInt(order["product_price"]) - amountPaid;
                return {amountPaid, outstandingDebt};
            },
            getFinancialStatus(order) {
                if (!order['repayment']) return 'no repayment detail';
                let values = this.getAmountPaidAndOutStandingDebt(order);
                return 'paid: ' + values.amountPaid + ' debt: ' + values.outstandingDebt;
            },
            getRepayment(order, clause) {
                if (!order["repayment"]) return null;
                const {repayment} = order;
                let data = [];
                for (let i = 1; i < 13; i++) data.push(repayment[this.getColumn(i) + clause]);
                return data;
            },
            async onSave() {
                /*this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.form.forEach(obj => delete obj.no_signout);
                            byMethod(this.method, this.store, {form: this.form})
                                .then(res => {
                                    if (res.data.saved || res.data.updated) {
                                        log(`Attendance ${this.mode}d`, `${res.employee_id}`);
                                        Flash.setSuccess(`Attendance Submitted successfully!`, 3000);
                                        this.$router.push('/');
                                    }
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) Flash.setError(e.data.message ? e.data.message : e.data);
                                })
                                .finally(() => {
                                    this.$LIPS(false);
                                    this.$scrollToTop();
                                });
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });*/
            },
            getModalType(category) {
                const cat = category.toLowerCase();
                switch (cat) {
                    case 'formal':
                    case'salaried':
                        return 'repaymentFormal';
                    case 'informal(business)':
                        return 'repaymentInformal';
                    case 'unemployed':
                        return null;
                }
            },
            displayDetails(order, modal) {
                this.isFormal = 'repaymentFormal' === modal;
                Vue.set(this.$data, 'currentOrder', order);
                this.showModalContent = true;
                return $(`#${modal}`).modal('toggle');
            },
            selectAll() {
                this.doSelectAll = !this.doSelectAll;
                this.customers.forEach(customer => customer.check = this.doSelectAll);
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