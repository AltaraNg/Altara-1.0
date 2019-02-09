<template>
   <transition name="fade">
      <div class="pt-md-3 pt-2" id="employeeRegister">
         <div class="card">
            <ul class="nav nav-tabs bg-default justify-content-center"><h6>Messaging</h6></ul>
            <div class="card-body p-4 ">
               <form @submit.prevent="sendMessage" class="clearfix" id="messaging">
                  <div class="form-group col-md-12 px-md-3 px-1 float-left">
                     <label>Phone Numbers</label>
                     <textarea class="form-control col-sm-12" name="contacts" v-model="contacts" v-validate="'required'"
                               placeholder="Kindly add the number and seperate each with a semi-colon ';'" rows="3" ></textarea>
                     <small v-if="errors.first('contacts')">{{errors.first('contacts')}}</small>
                  </div>
                  <div class="form-group col-md-12 px-md-3 px-1 float-left">
                     <label>Message Body</label>
                     <textarea class="form-control col-sm-12" name="message" v-validate="'required'"
                               placeholder="the content of the message goes here" rows="3" v-model="sentData.message"></textarea>
                     <small v-if="errors.first('message')">{{errors.first('message')}}</small>
                  </div>
                  <hr class="style-two">
                  <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right">
                     <button :disabled="$isProcessing" class="btn btn-block btn-lg bg-default" type="submit">
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
            sentData: {},
            form: {}
         }
      },
      methods: {
         sendMessage() {
            this.$validator.validateAll().then(async result => {
               if (result) {
                  if (this.$network()) {
                     this.$LIPS(true);
                     let contacts = this.contacts.split(",").filter(str => /\S/.test(str));
                     contacts.forEach(el => {
                        this.sentData.phone = el.trim().substr(1);
                        SMS.dvaMessage(this.sentData);
                     });
                     this.done(contacts);
                  } else this.$networkErr();
               } else this.$networkErr('form');
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
            post('/api/message', this.form).then(() => this.resetData());
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

<style lang="scss" scoped>
   @import "../../../../sass/app/variables";

   #messaging {
      textarea {
         font: 500 1.5rem $default-font;
      }
   }
</style>