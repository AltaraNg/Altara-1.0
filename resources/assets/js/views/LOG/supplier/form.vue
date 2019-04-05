<template>
  <transition name="fade">
    <div class="pt-md-3 pt-2" id="employeeRegister">
      <div class="card">
        <ul class="nav nav-tabs justify-content-center bg-default">
          <h6>{{mode}} Supplier</h6>
        </ul>
        <div class="card-body pl-4 pr-4">
          <form @submit.prevent="onSave" id="supplierReportform">
            <h5>Supplier Details</h5>
            <div class="clearfix">
              <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Supplier ID</label>
                <input
                  class="form-control"
                  data-vv-as="supplier id"
                  name="supplier_id"
                  placeholder="supplier id"
                  type="text"
                  disabled
                  v-model="form.supplier_id"
                  v-validate="'required|max:50'"
                >
                <small v-if="errors.first('supplier_id')">{{ errors.first('supplier_id') }}</small>
              </div>
              
              <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Supplier Name</label>
                <input
                  class="form-control"
                  data-vv-as="supplier name"
                  name="supplier_name"
                  placeholder="supplier name"
                  type="text"
                  v-model="form.supplier_name"
                  v-validate="'required|max:150'"
                >
                <small v-if="errors.first('supplier_name')">{{ errors.first('supplier_name') }}</small>
              </div>

               <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Phone Number</label>
                <input
                  :class="{'is-invalid': error.phone_number }"
                  class="form-control"
                  data-vv-as="phone number"
                  name="phone_number"
                  placeholder="081xxxxxxxx"
                  type="tel"
                  v-model="form.contact_phone_no"
                  v-validate="'required|numeric|max:11|min:11'">

                <small v-if="errors.first('phone_number')">{{errors.first('phone_number') }}</small>
                <small v-if="error.contact_phone_no">{{error.contact_phone_no[0]}}</small>
              </div>


<div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Contact Person Name</label>
                <input
                  class="form-control"
                  data-vv-as="contact person name"
                  name="contact_person_name"
                  placeholder="enter contact name here"
                  type="text"
                  v-model="form.contact_person_name"
                  v-validate="'required|max:50'">

                <small v-if="errors.first('contact_person_name')">{{errors.first('contact_person_name') }}</small>
              </div>

              <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Address</label>
                <textarea
                  class="form-control w-100"
                  name="address"
                  placeholder="address"
                  rows="1"
                  v-model="form.address"
                  v-validate="'required|max:255'"
                ></textarea>
                <small v-if="errors.first('address')">{{errors.first('address')}}</small>
              </div>

              <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Date of registration</label>
                <input
                  class="form-control"
                  data-vv-as="date of reg"
                  name="date_of_reg"
                  type="date"
                  v-model="form.date_of_reg"
                  v-validate="'required'">

                <small v-if="errors.first('date_of_reg')">{{errors.first('date_of_reg')}}</small>
              </div>


<div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Email</label>
                <input
                  class="form-control"
                  data-vv-as="email"
                  name="email"
                  placeholder="enter bank account name here"
                  type="email"
                  v-model="form.email"
                  v-validate="'required|max:50'"
                >
                <!-- <small
                           v-if="errors.first('bank_account_name')">
                           {{errors.first('bank_account_name') }}
                </small>-->
              </div>



              <div class="spaceBetween mb-md-2 mb-0"></div>
            
<h5>Supplier Account Details</h5>
            
              <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Bank</label>
                <select
                  class="custom-select w-100"
                  data-vv-validate-on="blur"
                  name="bank"
                  v-model="form.bank_id"
                  v-validate="'required'"
                >
                  <option selected value>-- select bank --</option>
                  <option
                    :value="bank.id"
                    v-for="bank in banks"
                  >{{bank.name | capitalize}}</option>
                </select>
                <small v-if="errors.first('bank')">{{errors.first('bank') }}</small>
              </div>

 <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Bank Account Number</label>
                <input
                  class="form-control"
                  data-vv-as="bank account no"
                  name="bank_account_no"
                  placeholder="enter full name here"
                  type="number"
                  v-model="form.bank_account_no"
                  v-validate="'required|max:50'"
                >
                <small v-if="errors.first('bank_account_no')">{{errors.first('bank_account_no') }}</small>
              </div>

              <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label>Bank Account Name</label>
                <input
                  class="form-control"
                  data-vv-as="bank account name"
                  name="bank_account_name"
                  placeholder="enter bank account name here"
                  type="text"
                  v-model="form.bank_account_name"
                  v-validate="'required|max:50'">

                <small
                  v-if="errors.first('bank_account_name')"
                >{{errors.first('bank_account_name') }}</small>
              </div>

              <div class="spaceBetween mb-md-2 mb-0"></div>
  <h5>Supplier Status</h5>

<div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                <label class="w-100 float-left pl-1">Status</label>
                <div class="radio p-0 col-md-6 col-6 float-left" v-for="status in statuses">
                  <input
                    :id="status"
                    :value="status"
                    name="status"
                    type="radio"
                    v-model="form.status"
                    v-validate="'required'">
                  <label :for="status">{{status}}</label>
                </div>
                <small v-if="errors.first('status')">{{errors.first('status')}}</small>
              </div>

              <hr class="style-two">
            </div>

            <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3">
              <div class="clearfix d-flex justify-content-end">
                <button
                  @click="onCancel"
                  class="mx-3 btn btn-secondary"
                  type="button"
                  v-if="mode ==='edit'"
                >Cancel</button>
                <button :disabled="$isProcessing" class="mx-3 btn bg-default" type="submit">
                  {{mode | capitalize}} Supplier
                  <i class="far fa-paper-plane ml-1"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import Flash from "../../../helpers/flash";

export default {
  props: {},
  data() {
    return {
      form: {
        supplier_id: "ALTS/001/POL/18", //this will come from a counter in the db
        supplier_name: null,
        date_of_reg: this.$getDate(),
        status: "active",
        address: null,
        contact_phone_no: null,
        contact_person_name: null,
        bank_name: null,
        bank_account_no: null,
        bank_account_name: null,
        email: null
      },
      mode: null,
      error: {},
      show: false,
      resource: "suppliers",
      store: "/api/suppliers",
      method: "POST",
      title: "Create",
      statuses: ["active", "suspended"],
      banks: [
        /*this object is temporary pending when catagory if fetched from backend*/
        { id: 1, name: "First bank" },
        { id: 2, name: "Second bank" }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    //1. make request to back end for the form to be used

    //2 send to the method in this component that will handle it when component is created

    //3. set the current mode of the form
    next(vm => vm.setMode(to.meta.mode));
  },
  beforeRouteUpdate(to, from, next) {
    //1. make request to back end for the form to be used

    //2 send to the method in this component that will handle it when component is created

    //3. Edit data that will be used for api update call
    this.store = `/api/suppliers/${this.$route.params.id}`;
    this.method = "PUT";

    //3. set the current mode of the form
    this.setMode(to.meta.mode);
    next();
  },
  methods: {
    setMode(mode) {
      this.show = false;
      /** set the current mode of the form*/
      Vue.set(this.$data, "mode", mode);
    },
    onCancel() {},
    onSave() {
      /** 1. Validate form*/
      this.$validator.validateAll().then(result => {
        /** 2.if validation is successful*/
        if (result) {
          /** 3. Check is there is network*/
          if (this.$network()) {
            //There is network
            /** 4. Show loader and set isProcessing to true*/
            this.$LIPS(true);
            /** 5. Clear errors*/
            this.error = {};
            /** 6 make request to BE*/
            console.log(this.form);

            this.$LIPS(false);

            /** 7. Log the process*/

            document.getElementById("supplierReportform").reset();
            this.$validator.reset();
            // this.initForm();
            this.$scrollToTop();
            this.$LIPS(false);
            Flash.setSuccess("Supplier Added");

            /** 8. Throw success message*/

            /** 9. Take to the page view of the current supplier created*/
          } else this.$networkErr();
        } else this.$networkErr("form");
      });
    }
  }
};
</script>