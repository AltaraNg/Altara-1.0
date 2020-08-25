<template>
    <div style="margin-left: 5rem; margin-right: 5rem;">
    <div class="card">
        <form class="card-body" @submit.prevent="submitForm">
            <div class="row">
                <div class="col form-group align-self-center text-capitalize">
                    <b>Cutomer ID : {{customerId}}</b>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Payment Type</label>
                    <select class="custom-select w-100" v-model="cashLogForm.payment_type_id" v-validate="'required'">
                        <option disabled selected="selected">Payment Type</option>
                        <option :value="type.id" :key="type.id"  v-for="type in paymentType">
                            {{type.type}}
                        </option>
                    </select>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Payment Method</label>
                    <select class="custom-select w-100" v-model="cashLogForm.payment_method_id" v-validate="'required'">
                        <option disabled selected="selected">Payment Method</option>
                        <option :value="type.id" :key="type.id" v-for="type in getPaymentMethods">
                            {{type.name}}
                        </option>
                    </select>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Amount</label>
                    <input class="w-100 custom-select" name="amount" v-model="cashLogForm.amount" v-validate="'required'" type="number" placeholder="Enter Amount"/>
                    <small v-if="errors.first('amount')">{{errors.first('amount')}}</small>
                </div>
            </div>
            <br/>
            <textarea v-model="cashLogForm.comment" name="comment" class="form-control" rows="6" placeholder="Enter comment ...">
            </textarea>
             <div class="text-center">
                <button class="btn bg-default"  type="submit"> Submit</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>

import {get, post} from '../utilities/api';
import {mapGetters} from "vuex";

export default {
    props:{customerId: null, orderId: null},
    data() {
        return {
            error: {},
            cashLogForm: {},
            paymentType:[],
            apiUrls: {
                payment: `/api/payment`,
                paymentType: `/api/payment-type`,
            },
        }
    },
    async mounted(){
            await this.getPaymentType();
    },
    computed:{
        ...mapGetters(['getPaymentMethods']),
    },
    methods:{
        async submitForm() {
            this.cashLogForm.customer_id = this.customerId;
            this.cashLogForm.model_id = parseInt(this.orderId);
            this.cashLogForm.model = 'new_order'; //Todo: Make dynamic later
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$LIPS(true);
                    post(this.apiUrls.payment, this.cashLogForm).then((res) => {
                        this.$LIPS(false);
                        this.$swal({
                            icon: 'success',
                            title: 'Payment Successfully Logged'
                        })
                        this.$emit('done');
                    }).catch(() => {
                        this.$LIPS(false);
                        Flash.setError("Error submitting form")
                    })
                } else this.$networkErr('form');
            });
        },
        async getPaymentType(){
            try{
                const fetchPaymentType = await get(this.apiUrls.paymentType);
                this.paymentType = fetchPaymentType.data.data;
            }
            catch(err){
                this.$displayErrorMessage(err);
            }
        },

    }
}
</script>

<style>

</style>
