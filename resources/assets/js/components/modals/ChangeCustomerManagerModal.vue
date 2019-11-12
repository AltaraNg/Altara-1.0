<template>
    <div id="changeCustomerManagerModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header py-2">
                    <h6 class="modal-title py-2">
                        Change Manager for Customer
                    </h6>
                    <a aria-label="Close" class="close py-1" data-dismiss="modal" href="javascript:">
                        <span class="modal-close text-danger"><i class="fas fa-times"></i></span>
                    </a>
                </div>
                <div class="modal-body" id="index" v-if="customer">
                    <div class="form-group clearfix">
                        <div class="clearfix">
                            <div class="form-group">
                                <label>Customer name</label>
                                <input class="form-control" :value="$getCustomerFullName(customer) + ' - ID: ' + customer.id" type="text" disabled>
                            </div>
                            <div class="form-group">
                                <label>DSA name</label>
                                <typeahead :options="getTypeaheadUsersList" caption="full_name" v-model="DSAId"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button class="btn status approved" @click="changeCustomerManager">save changes</button>
                    <a data-dismiss="modal" href="javascript:" class="text-link">close dialogue</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Typeahead from '../Typeahead';
    import {log} from '../../utilities/log';
    import {post} from "../../utilities/api";
    import Flash from "../../utilities/flash";
    import {EventBus} from '../../utilities/event-bus';

    export default {

        components: {Typeahead},

        data() {
            return {
                value: null,
                DSAId: null,
                DSAName: null,
                customer:null,
                showChangeCustomerManagerModal: true
            }
        },

        computed: {
            ...mapGetters(['getTypeaheadUsersList', 'getAuthUserDetails', 'auth'])
        },

        methods: {
            handleModalToggle(customer) {
                this.customer = customer;
                $("#changeCustomerManagerModal").modal("toggle");
            },

            changeCustomerManager() {
                const data = {customer_id: this.customer.id, user_id: this.DSAId};
                if (!this.DSAId || !this.customer.id) {
                    return Flash.setError("Please fill the form correctly to continue");
                }
                this.$LIPS(true);
                post('/api/update_customer_manager', data)
                    .then(response => {
                        if (response.status === 201) {
                            log(`CustomerAssignedNewDsa`, "CustomerId: " + this.customer.id + " newDsa: " + this.DSAId);
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
                        this.$scrollToTop();
                        this.$LIPS(false);
                    });
            }
        },

        created() {
            this.$prepareTypeaheadUsersList();
            EventBus.$on("toggleChangeCustomerManagerModal", this.handleModalToggle);
        }
    }
</script>
