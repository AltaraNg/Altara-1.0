<template>
    <div id="SMSModal" class="modal fade">
        <div class="modal-dialog">
            <form action="javascript:" class="modal-content" @submit.prevent="sendSMS" id="customSMSForm">
                <div class="modal-header py-2">
                    <h6 class="modal-title py-2">
                        Send Message
                    </h6>
                    <a aria-label="Close" class="close py-1" data-dismiss="modal" href="javascript:">
                        <span class="modal-close text-danger"><i class="fas fa-times"></i></span>
                    </a>
                </div>
                <div class="modal-body" id="index" v-if='customer || order'>
                    <div class="form-group clearfix">
                        <div class="clearfix">
                            <div class="form-group">
                                <label>Customer's phone no.</label>
                                <input class="form-control" disabled
                                       :value="telephone + ' - ' + customerName" type="text">
                            </div>

                            <div class="form-group">
                                <span class="radio mr-5"
                                      v-for="type in ['custom', 'auto-generate']">
                                    <input :id="type" :value="type" type="radio" v-model="messageType">
                                    <label :for="type">{{type | capitalize}} Message</label>
                                </span>
                            </div>

                            <div class="form-group">
                                <label>Text message</label>
                                <textarea rows="4" v-model="message" class="form-control" v-validate="'required'"
                                          placeholder="message goes here..." name="message"></textarea>
                                <small v-if="errors.first('message')">{{errors.first('message')}}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button class="btn status approved" type="submit">Send SMS</button>
                    <a data-dismiss="modal" href="javascript:" class="text-link">close dialogue</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from "vuex";
    import {post} from "../../utilities/api";
    import Flash from "../../utilities/flash";
    import {Message} from '../../utilities/sms';
    import {EventBus} from '../../utilities/event-bus';

    export default {

        data() {
            return {
                order: null,
                value: null,
                DSAId: null,
                DSAName: null,
                message: null,
                customer: null,
                messageType: 'custom',
                showChangeCustomerManagerModal: true
            }
        },

        computed: {
            telephone() {
                if (this.customer != null) return this.customer.telephone;
                if (this.order != null) return this.order.order.customer.telephone;
                return null;
            },

            customerName() {
                let customer;
                if (this.customer != null) customer = this.customer;
                if (this.order != null) customer = this.order.order.customer;
                return this.$getCustomerFullName(customer)
            },

            ...mapGetters(['getAuthUserDetails'])
        },

        methods: {
            async handleModalToggle({customer, order}) {
                await Vue.set(this.$data, 'order', order);
                await Vue.set(this.$data, 'customer', customer);
                this.toggleModal();
            },

            toggleModal() {
                $("#SMSModal").modal("toggle");
            },

            sendSMS() {
                this.$validator.validateAll().then(async result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            let newCustomerMessage = new Message(this.message, this.telephone, true, this.getAuthUserDetails.userId);
                            await newCustomerMessage.send((response, insertIds) => {
                                this.order ?
                                    this.linkSMSToOrderAsReminder(insertIds)
                                    : this.done("sms sent successfully");
                            });
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },

            linkSMSToOrderAsReminder(smsIds) {
                this.order.setReminder('custom-sms', smsIds[0]);
                delete this.order.reminder.canBeSelected;
                delete this.order.reminder.contacts;
                post('/api/reminder', {reminders: [this.order.reminder]})
                    .then(({data}) => data.saved && this.done('sms sent successfully'))
                    .catch(() => this.$displayErrorMessage('Error Logging reminders!'));
            },

            done(message) {
                Flash.setSuccess(message);
                this.$scrollToTop();
                this.toggleModal();
                this.$LIPS(false);
                this.message = null;
            }
        },

        watch: {
            'messageType': function (newValue) {
                //do stuff for generating sms
            }
        },

        created() {
            EventBus.$on("SMSModal", this.handleModalToggle);
        }
    }
</script>
