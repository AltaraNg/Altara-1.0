<template>
    <transition name="fade">
        <div class="float-left w-100 pt-md-3 pt-2" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs bg-default justify-content-center"><h6>Messaging</h6></ul>
                <div class="card-body p-4 clear w-100">
                    <form @submit.prevent="sendMessage" class="w-100 clear">
                        <div class="form-group col-md-12 px-md-3 px-1 float-left">
                            <label>Phone Numbers</label>
                            <textarea class="form-control col-sm-12"
                                      placeholder="Kindly add the number and seperate each with a semi-colon ';' "
                                      rows="3" v-validate="'required'" name="contacts"
                                      :class="{'is-invalid': errors.first('contacts')}" v-model="contacts"></textarea>
                            <small class="text-muted" v-if="errors.first('contacts')">{{errors.first('contacts')}}
                            </small>
                        </div>
                        <div class="form-group col-md-12 px-md-3 px-1 float-left">
                            <label>Message Body</label>
                            <textarea class="form-control col-sm-12" placeholder="the content of the message goes here"
                                      rows="3" v-validate="'required'" name="message"
                                      :class="{'is-invalid': errors.first('message')}"
                                      v-model="sentData.message"></textarea>
                            <small class="text-muted" v-if="errors.first('message')">{{errors.first('message')}}</small>
                        </div>
                        <hr class="style-two">
                        <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right">
                            <button type="submit" class="btn btn-block btn-lg bg-default" :disabled="$isProcessing">
                                Send messages <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import SMS from '../../../helpers/sms';
    import {post} from '../../../helpers/api';
    import Flash from '../../../helpers/flash';

    export default {
        data() {
            return {
                contacts: '',
                sentData: '',
                form: '',
            }
        },
        methods: {
            sendMessage() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            var contacts = this.contacts.split(";").filter(function (str) {
                                return /\S/.test(str);
                            });
                            for (var i = 0; i < contacts.length; i++) {
                                this.sentData.phone = contacts[i].trim().substr(1);
                                SMS.dvaMessage(this.sentData);
                                if (contacts.length - 1 === i) this.done(contacts);
                            }
                        } else this.$networkErr();
                    }
                    if (!result) this.$networkErr('form');
                });
            },
            done(contacts) {
                this.$LIPS(false);
                Flash.setSuccess('Messages sent!');
                this.form.contacts = contacts;
                this.form.contact_count = contacts.length;
                this.form.message = this.sentData.message;
                this.form.pages = Math.ceil(this.form.message.length / 160);
                let remaining = this.form.message.length % 160;
                if (remaining > 0) this.form.pages += 1;
                post('/api/message', this.form).then(res => this.resetData());
            },
            resetData() {
                this.contacts = '';
                this.sentData = {message: '', phone: ''};
                this.form = {pages: 0, user_id: '', message: '', contacts: [], contact_count: 0};
            },
        },
        created() {
            this.resetData();
        }
    }
</script>