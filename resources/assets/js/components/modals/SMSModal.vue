<template>
    <div id="SMSModal" class="modal fade">
        <div class="modal-dialog">
            <form action="javascript:" class="modal-content" @submit.prevent="sendSMS">
                <div class="modal-header py-2">
                    <h6 class="modal-title py-2">
                        Send Message
                    </h6>
                    <a aria-label="Close" class="close py-1" data-dismiss="modal" href="javascript:">
                        <span class="modal-close text-danger"><i class="fas fa-times"></i></span>
                    </a>
                </div>
                <div class="modal-body" id="index" v-if='customer'>
                    <div class="form-group clearfix">
                        <div class="clearfix">
                            <div class="form-group">
                                <label>Customer's phone no.</label>
                                <input class="form-control" :value="customer.telephone + ' - ' + $getCustomerFullName(customer)" type="text" disabled>
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
    import {log} from '../../utilities/log';
    import {post} from "../../utilities/api";
    import Flash from "../../utilities/flash";
    import {Message} from '../../utilities/sms';
    import {EventBus} from '../../utilities/event-bus';

    export default {

        data() {
            return {
                value: null,
                DSAId: null,
                DSAName: null,
                message: null,
                customer:null,
                showChangeCustomerManagerModal: true
            }
        },

        methods: {
            async handleModalToggle(customer) {
                await Vue.set(this.$data, 'customer', customer);
                $("#SMSModal").modal("toggle");
            },

            sendSMS() {
                console.log("sending message...");
                this.$validator.validateAll().then(async result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            let newCustomerMessage = new Message(this.message, this.customer.telephone)

                            await newCustomerMessage.send((response, insertIds) => {
                                console.log(response, insertIds);
                            });

                            this.$LIPS(false);
                            this.$scrollToTop();

                        }else this.$networkErr();
                    } else this.$networkErr('form');
                });
            }
        },

        created() {
            EventBus.$on("SMSModal", this.handleModalToggle);
        }
    }
</script>
