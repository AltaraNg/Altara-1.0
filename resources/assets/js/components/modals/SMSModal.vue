<template>
    <div id="SMSModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header py-2">
                    <h6 class="modal-title py-2">
                        Send Message
                    </h6>
                    <a aria-label="Close" class="close py-1" data-dismiss="modal" href="javascript:">
                        <span class="modal-close text-danger"><i class="fas fa-times"></i></span>
                    </a>
                </div>
                <div class="modal-body" id="index">
                    <div class="form-group clearfix">
                        <div class="clearfix">
                            <div class="form-group">
                                <label>Customer's phone no.</label>
                                <input class="form-control" :value="customerPone - customerName" type="text" disabled>
                            </div>
                            <div class="form-group">
                                <label>Text message</label>
                                <textarea rows="4" v-model="message" class="form-control" v-validate="'required'"
                                          placeholder="message goes here..."></textarea>
                                <small v-if="errors.first('message')">{{errors.first('message')}}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button class="btn status approved" @click="sendSMS">Send SMS</button>
                    <a data-dismiss="modal" href="javascript:" class="text-link">close dialogue</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {log} from '../../utilities/log';
    import {post} from "../../utilities/api";
    import Flash from "../../utilities/flash";
    import {EventBus} from '../../utilities/event-bus';

    export default {

        data() {
            return {
                value: null,
                DSAId: null,
                DSAName: null,
                message: null,
                customerId: null,
                customerPone: null,
                customerName: null,
                customerBranchId: null,
                showChangeCustomerManagerModal: true
            }
        },

        methods: {
            handleModalToggle({customerName, customerId, customerPone}) {
                this.customerId = customerId;
                this.customerPone = customerPone;
                this.customerName = customerName;
                $("#SMSModal").modal("toggle");
            },

            sendSMS() {
                console.log("sending message...");

                return;

                const data = {customer_id: this.customerId, user_id: this.DSAId};
                if (!this.DSAId || !this.customerId) {
                    return Flash.setError("Please fill the form correctly to continue");
                }
                this.$LIPS(true);
                post('/api/update_customer_manager', data)
                    .then(response => {
                        if (response.status === 201) {
                            log(`CustomerAssignedNewDsa`, "CustomerId: " + this.customerId + " newDsa: " + this.DSAId);
                            Flash.setSuccess("A new DSA has been assigned to the customer.", 5000);
                            EventBus.$emit('clearTypeAhead');
                        }
                    })
                    .catch(({response}) => {
                        let message;
                        switch (response.status) {
                            case 400:
                                message = 'Bad Request. Check the inputs and try again.';
                                break;
                            case 409:
                                message = 'DSA Already Assigned to Customer.';
                                break;
                            default:
                                message = "Error processing request. Try again later."
                        }
                        Flash.setError(message);
                    })
                    .finally(() => {
                        this.handleModalToggle({customerName: null, customerId: null});
                        this.$LIPS(false);
                    });
            }
        },

        created() {
            EventBus.$on("SMSModal", this.handleModalToggle);
        }
    }
</script>