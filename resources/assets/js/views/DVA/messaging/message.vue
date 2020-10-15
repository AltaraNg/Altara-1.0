<template>
<div>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs bg-default justify-content-center">
                    <h6>Messaging</h6>
                </ul>
                <div class="card-body p-4 ">
                    <form
                        @submit.prevent="sendMessage"
                        class="clearfix"
                        id="messaging"
                    >
                        <div
                            class="form-group col-md-12 px-md-3 px-1 float-left"
                        >
                            <label>Phone Numbers</label>
                            <textarea
                                class="form-control col-sm-12"
                                name="contacts"
                                v-model="contacts"
                                v-validate="'required'"
                                placeholder="Kindly add the number and separate each with a semi-colon ';'"
                                rows="3"
                            ></textarea>
                            <small v-if="errors.first('contacts')">{{
                                errors.first("contacts")
                            }}</small>
                        </div>
                        <div
                            class="form-group col-md-12 px-md-3 px-1 float-left"
                        >
                            <label>Message Body</label>
                            <textarea
                                class="form-control col-sm-12"
                                name="message"
                                v-validate="'required'"
                                placeholder="the content of the message goes here"
                                rows="3"
                                v-model="message"
                            ></textarea>
                            <small v-if="errors.first('message')">{{
                                errors.first("message")
                            }}</small>
                        </div>
                        <hr class="style-two" />
                        <div
                            class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"
                        >
                            <button
                                :disabled="$isProcessing"
                                class="btn btn-block btn-lg bg-default"
                                type="submit"
                            >
                                Send messages
                                <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </transition>
    <div class="modal fade repayment" id="sms_modal">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">SMS Response</h6>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                                <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                            </a>
                        </div>
                        <div class="modal-body" v-if="showModalContent1">
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Phone</th>
                                        <th>Response Type</th>
                                        <th>Description</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="type in dataMessages">
                                        
                                        <td>{{type.to}}</td>
                                        <td>{{type.status.groupName}}</td>
                                        <td>{{type.status.description}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                            style="text-align: right" >close dialogue</a>
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>
<script>
import { Message } from "../../../utilities/sms";
import Flash from "../../../utilities/flash";

export default {
    data() {
        return {
            contacts: "",
            message: "",
            form: {},
            dataMessages:[],
            showModalContent1:true,

        };
    },
    methods: {
        sendMessage() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    if (this.$network()) {
                        this.$LIPS(true);
                        new Message(this.message, this.contacts).send(r => {
                            
                            r.status === 200;
                            const success = [1,3];
                            const data = r.data.messages;
                            console.log('dataMessages',data);
                            this.dataMessages=data;
                             this.done();
                        });
                    } else this.$networkErr();
                } else this.$networkErr("form");
            });
        },
        done() {
            $(`#sms_modal`).modal("toggle");
            this.$scrollToTop();
            this.$LIPS(false);
            // Flash.setSuccess("done!");
            // this.resetData();
        },
        resetData() {
            this.contacts = "";
            this.message = "";
            for (let key in this.form) this.form[key] = null;
        }
    },
    created() {
        this.resetData();
    }
};
</script>
