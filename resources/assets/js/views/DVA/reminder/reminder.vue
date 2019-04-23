<template>
    <div id="reminder">
        <div class="mt-5 mb-3 attendance-head">
            <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="true" class="nav-link active" data-toggle="tab" href="#reminder-1"
                       role="tab">1<sup>st</sup> Reminder</a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link" data-toggle="tab" href="#reminder-2"
                       role="tab">2<sup>nd</sup> Reminder</a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link" data-toggle="tab" href="#reminder-3"
                       role="tab">3<sup>rd</sup> Reminder</a>
                </li>
            </ul>
        </div>
        <div class="mt-5 mb-3 attendance-head">
            <div class="row px-4 pt-3 pb-4 text-center">
                <div class="col text-link" @click="selectAll" style="max-width: 120px">Click to Select all</div>
                <div class="col light-heading">Order Number</div>
                <div class="col light-heading">Order Summary</div>
                <div class="col light-heading">Customer Info Summary</div>
                <div class="col light-heading">Repayment Summary</div>
                <div class="col light-heading">Reminder History</div>
                <div class="col light-heading">Comment</div>
            </div>
        </div>
        <div class="tab-content mt-1 attendance-body">
            <div class="tab-pane active text-center" id="reminder-1" role="tabpanel">
                <div class="mb-3 row align-items-center attendance-item" v-for="customer in customers">
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
                        <input class="form-check-input my-0 mx-4 float-left position-relative" type="checkbox"
                               v-model="customer.check">
                        <span class="user mx-auto"><i class="user-icon fas fa-user-alt"></i></span>
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg user-name" data-reminder-1="1">LSB0839432</div>
                    <div @click="displayDetails(customer, 'purchase_order')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        20th, June 2018
                    </div>
                    <div @click="displayDetails(customer,'customer_info')" class="col-12 col-xs-3 col-md col-lg"
                         data-hoverable="true">
                        ID: 4875
                    </div>
                    <div @click="displayDetails(customer, 'repayment')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        Paid: 20,000 Debt: 49,000
                    </div>
                    <div @click="displayDetails(customer,'reminder_history')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        3 Reminders sent
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center">
                        <input class="form-control" type="text">
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="reminder-2" role="tabpanel">
                <div class="mb-3 row align-items-center attendance-item" v-for="customer in customers">
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
                        <input class="form-check-input my-0 mx-4 float-left position-relative" type="checkbox"
                               v-model="customer.check">
                        <span class="user mx-auto"><i class="user-icon fas fa-user-alt"></i></span>
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg user-name" data-reminder-1="1">LSB0839432</div>
                    <div @click="displayDetails(customer, 'purchase_order')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        20th, June 2018
                    </div>
                    <div @click="displayDetails(customer,'customer_info')" class="col-12 col-xs-3 col-md col-lg"
                         data-hoverable="true">
                        ID: 4875
                    </div>
                    <div @click="displayDetails(customer, 'repayment')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        Paid: 20,000 Debt: 49,000
                    </div>
                    <div @click="displayDetails(customer,'reminder_history')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        3 Reminders sent
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center">
                        <input class="form-control" type="text">
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="reminder-3" role="tabpanel">
                <div class="mb-3 row align-items-center attendance-item" v-for="customer in customers">
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
                        <input class="form-check-input my-0 mx-4 float-left position-relative" type="checkbox"
                               v-model="customer.check">
                        <span class="user mx-auto"><i class="user-icon fas fa-user-alt"></i></span>
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg user-name" data-reminder-1="1">LSB0839432</div>
                    <div @click="displayDetails(customer, 'purchase_order')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        20th, June 2018
                    </div>
                    <div @click="displayDetails(customer,'customer_info')" class="col-12 col-xs-3 col-md col-lg"
                         data-hoverable="true">
                        ID: 4875
                    </div>
                    <div @click="displayDetails(customer, 'repayment')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        Paid: 20,000 Debt: 49,000
                    </div>
                    <div @click="displayDetails(customer,'reminder_history')" class="col-12 col-xs-2 col-md col-lg"
                         data-hoverable="true">
                        3 Reminders sent
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center">
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
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>Order ID</th>
                                    <td>EFS002243</td>
                                </tr>
                                <tr>
                                    <th>Product</th>
                                    <td>21 inches Samsung LED TV</td>
                                </tr>
                                <tr>
                                    <th>Repayment (&#8358;)</th>
                                    <td>45,600</td>
                                </tr>
                                <tr>
                                    <th>Down Payment (%)</th>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <th>Discount (&#8358;)</th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Total amount to Pay (&#8358;)</th>
                                    <td>149,000</td>
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
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>Full Name</th>
                                    <td>EFS002243</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>53 Akpo Street Achara Layout Enugu Nigeria</td>
                                </tr>
                                <tr>
                                    <th>Branch</th>
                                    <td>Challenge Branch</td>
                                </tr>
                                <tr>
                                    <th>Category</th>
                                    <td>Informal</td>
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
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Repayment Plan/Summary</h6>
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
                                    <td>7<sup>th</sup></td>
                                    <td>8<sup>th</sup></td>
                                    <td>9<sup>th</sup></td>
                                    <td>10<sup>th</sup></td>
                                    <td>11<sup>th</sup></td>
                                    <td>12<sup>th</sup></td>
                                </tr>
                                <tr>
                                    <th>Due date</th>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                    <td>2019-2-19</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td class="paid"><i class="fas fa-check"></i></td>
                                    <td class="paid"><i class="fas fa-check"></i></td>
                                    <td class="paid"><i class="fas fa-check"></i></td>
                                    <td class="paid"><i class="fas fa-check"></i></td>
                                    <td class="missed"><i class="fas fa-times"></i></td>
                                    <td class="missed"><i class="fas fa-times"></i></td>
                                    <td class="missed"><i class="fas fa-times"></i></td>
                                    <td class="missed"><i class="fas fa-times"></i></td>
                                    <td class="pending"><i class="fas fa-hourglass-start"></i></td>
                                    <td class="pending"><i class="fas fa-hourglass-start"></i></td>
                                    <td class="pending"><i class="fas fa-hourglass-start"></i></td>
                                    <td class="pending"><i class="fas fa-hourglass-start"></i></td>
                                </tr>
                                <tr>
                                    <th>Pay Date</th>
                                    <td>2019-02-18</td>
                                    <td>2019-02-18</td>
                                    <td>2019-02-18</td>
                                    <td>2019-02-18</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Amount Paid (&#8358;)</th>
                                    <td>4200.00</td>
                                    <td>4200.00</td>
                                    <td>4200.00</td>
                                    <td>4200.00</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Summary (&#8358;)</th>
                                    <td>Grand Total</td>
                                    <th colspan="3">4200.00</th>
                                    <td>Total Paid</td>
                                    <th colspan="3">4200.00</th>
                                    <td>Total Debt</td>
                                    <th colspan="3">4200.00</th>
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
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>Comment</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>20/03/2018</td>
                                    <td>This man...he is a debtor niccur. Yeah does it sound like a comment This
                                        man...he is a debtor niccur. Yeah
                                        does it sound like a comment This man...he is a debtor niccur. Yeah does it
                                        sound like a commentThis man.
                                    </td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>20/03/2018</td>
                                    <td>This man...he is a debtor niccur. Yeah does it sound like a comment</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>20/03/2018</td>
                                    <td>This man...he is a debtor niccur. Yeah does it sound like a comment</td>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {
                    id: 1,
                    name: 'Ibeanu Hillary',
                    messages: [
                        {id: 1, body: "This is the body of the random message sent to a customer!"},
                        {id: 2, body: "This is the body of the random message sent to a customer!"},
                        {id: 3, body: "This is the body of the random message sent to a customer!"}
                    ],
                    repayments: [],
                    orders: [
                        {id: 223131, date: '09-09-2017'}
                    ]
                },
                viewMore: {},
                customers: [
                    {check: false},
                    {check: false},
                    {check: false},
                    {check: false},
                    {check: false},
                ]
            }
        },
        methods: {
            displayDetails(customer, modal = 'viewMore') {
                return $(`#${modal}`).modal('toggle');
            },
            selectAll() {
                this.customers.forEach(customer =>customer.check = true);
            }
        },
        mounted() {
            $(document).on("hidden.bs.modal", '.modal', () => this.viewMore = {});
        },
    }
</script>