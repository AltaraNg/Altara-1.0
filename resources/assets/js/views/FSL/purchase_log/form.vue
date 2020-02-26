<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">



            <div class="attendance-body">
                <h2 class="text_align-center">Purchase Log</h2>
                <form @submit.prevent="onSave" >
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="col-md-6">
                        <div class="form-group  px-0 px-md-3">
                            <label>Invoice Ref No</label>
                            <input class="form-control" placeholder="product name" type="text"
                                   v-model="form.name">
                            <small v-if="error.name">{{error.name[0]}}</small>
                        </div>

                        <div class="form-group  px-0 px-md-3 type_ahead">
                            <label>Date</label>
                            <date-picker :bootstrap-styling='true'
                                         v-model="form.date"
                                         placeholder="Select Date"
                                         :disabled="false"

                            ></date-picker>
                        </div>



                        <div class="form-group  px-0 px-md-3">
                            <label for="customer_id">Customer Id</label>
                            <input class="form-control" name="customer_id" placeholder="Customer ID"
                                   type="text" v-model="form.customer_id" v-validate="'required | integer'">
                            <small v-if="errors.first('customer_id')">{{ errors.first('customer_id') }}</small>
                        </div>

                        <div class="form-group  px-0 px-md-3 type_ahead">
                            <label>Sales Category</label>
                            <typeahead :options="categories" caption="name" v-model="form.sales_category"/>
                        </div>


                        <div class="form-group  px-0 px-md-3 type_ahead">
                            <label>Sales Agent</label>
                            <typeahead :options="categories" caption="name" v-model="form.sales_agent"/>
                        </div>
                        <div class="form-group  px-0 px-md-3 type_ahead">
                            <label>Sales Type</label>
                            <typeahead :options="categories" caption="name" v-model="form.sales_type"/>
                        </div>


                        </div>

                        <div class="col-md-6  px-5">

                        <div class="form-group  px-0 px-md-3">
                            <label>Retail Price</label>
                            <input class="form-control" name="price" placeholder="retail price"
                                   type="number" v-model="form.retail_price" v-validate="'required|max:50'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>

                        <div class="form-group  px-0 px-md-3">
                            <label>First Payment</label>
                            <input class="form-control" name="price" placeholder="First Payment"
                                   type="number" v-model="form.first_payment" v-validate="'required|max:50'">
                            <small v-if="errors.first('first_payment')">{{ errors.first('first_payment') }}</small>
                        </div>

                        <div class="form-group  px-0 px-md-3">
                            <label>Repayment</label>
                            <input class="form-control" name="price" placeholder="retail price"
                                   type="number" v-model="form.retail_price" v-validate="'required|max:50'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>
                        <div class="form-group  px-0 px-md-3">
                            <label>Payment method</label>
                            <input class="form-control" name="price" placeholder="retail price"
                                   type="number" v-model="form.retail_price" v-validate="'required|max:50'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>
                        <div class="form-group  px-0 px-md-3">
                            <label>Bank</label>
                            <input class="form-control" name="price" placeholder="retail price"
                                   type="number" v-model="form.retail_price" v-validate="'required|max:50'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>
                        <div class="form-group  px-0 px-md-3">
                            <label>Referred By</label>
                            <input class="form-control" name="price" placeholder="retail price"
                                   type="number" v-model="form.retail_price" v-validate="'required|max:50'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>

                        </div>


                        





                        <!-- image upload -->







                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link to="/log/products" class="mx-5 text-link mt-4 pt-2" v-if="mode ==='edit'">
                                Cancel
                            </router-link>
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                 Submit <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<style>
    .type_ahead{
        width: 75%;
    }
</style>

<script>
    import Vue from 'vue';
    import {log} from '../../../utilities/log';
    import Flash from '../../../utilities/flash'
    import {byMethod, get} from '../../../utilities/api';
    import CustomHeader from '../../../components/customHeader';
    import Typeahead from '../../../components/Typeahead';
    import DatePicker from 'vuejs-datepicker';

    function initialize(to) {

    }

    export default {
        components: {Typeahead, CustomHeader, DatePicker},
        data() {
            return {
                form: {},
                banks: {},
                error: {},
                mode: null,
                show: false,
                store: '/api/branch',
                method: 'POST',
            }
        },

    }
</script>
