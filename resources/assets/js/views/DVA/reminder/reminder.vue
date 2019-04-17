<template>
    <div id="reminder">
        <div class="mt-5 mb-3 attendance-head">
            <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="true" class="nav-link active" data-toggle="tab" href="#reminder-1" role="tab">1<sup>st</sup> Reminder
                    </a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link" data-toggle="tab" href="#reminder-2" role="tab">2<sup>nd</sup> Reminder</a>
                </li>
                <li class="col p-0 nav-item mb-0">
                    <a aria-selected="false" class="nav-link" data-toggle="tab" href="#reminder-3" role="tab">3<sup>rd</sup> Reminder</a>
                </li>
            </ul>
        </div>
        <div class="mt-5 mb-3 attendance-head">
            <div class="row px-4 pt-3 pb-4 text-center">
                <div class="col light-heading" style="max-width: 120px">Select all</div>
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
                <div class="mb-3 row align-items-center attendance-item">
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
                        <input class="form-check-input my-0 mx-4 float-left position-relative" type="checkbox" value="true">
                        <span class="user mx-auto"><i class="user-icon fas fa-user-alt"></i></span>
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg user-name" data-reminder-1="1">LSB0839432</div>
                    <div @click="displayDetails(customer)" class="col-12 col-xs-2 col-md col-lg" data-hoverable="true">
                        20th, June 2018
                    </div>
                    <div @click="displayDetails(customer)" class="col-12 col-xs-3 col-md col-lg" data-hoverable="true">
                        ID: 4875 , Name: Ibeanu Hillary
                    </div>
                    <div @click="displayDetails(customer)" class="col-12 col-xs-2 col-md col-lg" data-hoverable="true">
                        Paid: 20,000 Debt: 49,000
                    </div>
                    <div @click="displayDetails(customer)" class="col-12 col-xs-2 col-md col-lg" data-hoverable="true">
                        3 Reminders sent
                    </div>
                    <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center">
                        <input class="form-control" type="text">
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="reminder-2" role="tabpanel">

            </div>
            <div class="tab-pane" id="reminder-3" role="tabpanel">

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

        <div class="modal fade" id="viewMore">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Attendance</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="px-2">
                                <div class="px-4">
                                    <div class="row">
                                        <span><strong>Status : </strong></span>
                                        <div class="col">This is a testing modal</div>
                                    </div>
                                </div>
                            </div>
                            {{customer}}
                            <div class="px-2">
                                <div class="px-4 row">
                                    <span><strong>Status : </strong></span>
                                    <div class="col">No Attendance</div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:" style="text-align: right">
                                close dialogue
                            </a>
                        </div>
                    </form>
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
                viewMore: {}
            }
        },
        methods: {
            displayDetails(customer) {
                return $(`#viewMore`).modal('toggle');
            }
        },
        mounted() {
            $(document).on("hidden.bs.modal", '.modal', () => this.viewMore = {});
        },
    }
</script>