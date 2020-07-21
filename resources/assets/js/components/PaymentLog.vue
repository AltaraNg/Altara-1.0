<template>
    <div style="margin-left: 5rem; margin-right: 5rem;">
    <div class="card">
        <form class="card-body" @submit.prevent="submitForm">
            <div class="row">
                <div class="col form-group align-self-center text-capitalize">
                    <b>Cutomer ID : {{customerId}}</b>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Repayment Cycle</label>
                    <select class="custom-select w-100" v-model="salesLogForm.repayment_cycle_id" v-validate="'required'">
                        <option disabled selected="selected">Repayment Cycle</option>
                        <option :value="type.id" :key="type.id"  v-for="type in repaymentCyclesopt">
                            {{type.name}}
                        </option>
                    </select>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Repayment Duration</label>
                    <select class="custom-select w-100" v-model="salesLogForm.repayment_duration_id" v-validate="'required'">
                        <option disabled selected="selected">Repayment Duration</option>
                        <option :value="type.id" :key="type.id"  v-for="type in repaymentDuration">
                            {{type.name}}
                        </option>
                    </select>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Downpayment Rates</label>
                    <select class="custom-select w-100" v-model="salesLogForm.payment_type_id" v-validate="'required'">
                        <option disabled selected="selected">Downpayment Rates</option>
                        <option :value="type.id" :key="type.id"  v-for="type in downPaymentRates">
                            {{type.name}}
                        </option>
                    </select>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Business Type</label>
                    <select class="custom-select w-100" v-model="salesLogForm.business_type_id" v-validate="'required'">
                        <option disabled selected="selected">Business Type</option>
                        <option :value="type.id" :key="type.id" v-for="type in businessTypes">
                            {{type.name}}
                        </option>
                    </select>
                </div>
                <div class="col form-group">
                    <label for="amount" class="form-control-label">Down Payment</label>
                    <input class="w-100 custom-select" name="amount" v-model="salesLogForm.down_payment" v-validate="'required'" type="number" placeholder="Enter Amount"/>
                </div> -->
            </div>
            <br/>

            <table class="table">
                <br/>
                <tbody>
                    <tr>
                        <th class="text-muted">Product Name</th>
                        <td class='product' >
                            <input class="w-100 custom-select" v-model="salesLogForm.down_payment" v-validate="'required'" type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-muted">Product Price </th>
                        <td class='product' ></td>
                    </tr>
                    <tr>
                        <th class="text-muted">First Payment</th>
                        <td class='product' ></td>
                    </tr>
                    <tr>
                        <th class="text-muted">Repayment</th>
                        <td class='product' ></td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">
                <button class="btn bg-default"  type="submit">View Amortization</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>

import {get, post} from '../utilities/api';
import {mapGetters} from "vuex";

export default {
    props:{customerId: null},
    data() {
        return {
            error: {},
            salesLogForm: {},
            repaymentDuration:[],
            repaymentCyclesopt:[],
            downPaymentRates:[],
            businessTypes:[],
            apiUrls: {
                repaymentDuration: `/api/repayment_duration`,
                repaymentCycles: `/api/repayment_cycle`,
                downPaymentRates: `/api/down_payment_rate`,
                businessTypes: `/api/business_type`
            },
        }
    },
    async mounted(){
        await this.getRepaymentDuration();
        await this.getRepaymentCycles();
        await this.getDownPaymentRates();
        await this.getBusinessTypes();
    },
    computed:{
        ...mapGetters(['getPaymentMethods']),
    },
    methods:{
        async submitForm() {
            this.salesLogForm.customer_id = this.customerId;
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$LIPS(true);
                    post(this.apiUrls.payment, this.salesLogForm).then((res) => {
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
        async getRepaymentDuration(){
            try{
                const fetchRepaymentDuration = await get(this.apiUrls.repaymentDuration);
                this.repaymentDuration = fetchRepaymentDuration.data.data.data;
            }
            catch(err){
                this.$displayErrorMessage(err);
            }
        },
        async getRepaymentCycles(){
            try{
                const fetchRepaymentCycles = await get(this.apiUrls.repaymentCycles);
                this.repaymentCyclesopt = fetchRepaymentCycles.data.data.data;
            }
            catch(err){
                this.$displayErrorMessage(err);
            }
        },
        async getDownPaymentRates(){
            try{
                const fetchDownPaymentRates = await get(this.apiUrls.downPaymentRates);
                this.downPaymentRates = fetchDownPaymentRates.data.data.data;
            }
            catch(err){
                this.$displayErrorMessage(err);
            }
        },
        async getBusinessTypes(){
            try{
                const fetchBusinessTypes = await get(this.apiUrls.businessTypes);
                this.businessTypes = fetchBusinessTypes.data.data.data;
            }
            catch(err){
                this.$displayErrorMessage(err);
            }
                            console.log('fdfdfd',this.repaymentCyclesopt)

        },
        
    }
}
</script>

<style scoped>
.product{
    background: #F3F3F3;
    border: 1px solid #A4A5AB;
    box-sizing: border-box;
    border-radius: 5px;
    width: 70%;
    padding:5px;
    margin:50px !important;
}
</style>