<template>
    <div style="margin-left: 5rem; margin-right: 5rem;">
    <div class="card">
        <form class="card-body" @submit.prevent="getCalc">
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
                        <option :value="type" :key="type.id"  v-for="type in downPaymentRates">
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
                </div> 
            </div>
            <br/>

            <table class="table">
                <br/>
                <tbody>
                    <tr>
                        <th class="text-muted">Product Name</th>
                        <td class='product' >
                           <AutoComplete v-on:childToParent="selectedItem" :apiUrl="apiUrls.getProduct" />
                        </td>
                    </tr>
                    <tr>
                        <th class="text-muted">Product Price </th>
                        <td class='product' >{{selectedProduct}}</td>
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
    <div class="modal fade repayment" id="amortizationPreview">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">
                                Repayment Plan/Summary
                            </h6>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <div class="modal-body">
                            <div class="table-responsive">

                                <h5 class="mt-3 mb-0">Order Information</h5>
                                <table class="table table-bordered">
                                    <tbody>
                                    <tr class="table-separator">
                                        <td>Customer ID</td>
                                        <td>Product</td>
                                        <th>Branch</th>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">{{this.customerId}}
                                        </td>
                                        <th>LG Standing Fan</th>
                                        <td class="font-weight-bold">Ikoyi</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <h5 class="mt-5 mb-0">Amortization Schedule</h5>
                                <table class="table table-bordered">
                                    <tbody class="text-center">
                                    <tr class="table-separator">
                                        <th>Due Date</th>
                                        <td v-for="am in amortization">{{am.expected_payment_date.split(' ')[0]}}</td>
                                    </tr>
        
    
                                    <tr class="table-separator">
                                        <th>Repayment Amount</th>
                                        <td v-for="am in amortization">
                                            {{$formatCurrency(am.expected_amount)}}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="text-center">
                <button class="btn bg-default" @click="logSale()" type="submit">Log Sale</button>
            </div> 
                    </div>
                   
                </div>
            </div>
    </div>
</template>

<script>

import {get, post} from '../utilities/api';
import {mapGetters} from "vuex";
import AutoComplete from './AutoComplete.vue';

export default {
    props:{customerId: null},
    components:{AutoComplete},
    data() {
        return {
            error: {},
            product:'',
            salesLogForm: {},
            repaymentDuration:[],
            repaymentCyclesopt:[],
            downPaymentRates:[],
            businessTypes:[],
            amortization:[],
            calculation:[],
            apiUrls: {
                repaymentDuration: `/api/repayment_duration`,
                repaymentCycles: `/api/repayment_cycle`,
                downPaymentRates: `/api/down_payment_rate`,
                businessTypes: `/api/business_type`,
                previewAmortization:`/api/amortization/preview`,
                createOrder:`/api/new_order`,
                getCalculation: `/api/price_calculator`,
                getProduct:`/api/product/?productName=`
            },
            inputValue: '',
            selectedProduct:''

        }
    },
    async mounted(){
        await this.getRepaymentDuration();
        await this.getRepaymentCycles();
        await this.getDownPaymentRates();
        await this.getBusinessTypes();
        await this.getCalculation();
    },
    computed:{
        ...mapGetters(['getPaymentMethods']),
    },
    methods:{
        async logSale() {
            this.salesLogForm.customer_id = this.customerId;
            const data ={
                ...this.salesLogForm,...{
                    "product_id": "205-0962-FRE-FOU-GA",
                    "branch_id":localStorage.getItem('branch_id'),
                    "status_id":1
                }
            }
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$LIPS(true);
                    post(this.apiUrls.createOrder,data).then((res) => {
                        this.$LIPS(false);
                                                $(`#amortizationPreview`).modal('toggle');

                        this.$swal({
                            icon: 'success',
                            title: 'Sale Successfully Logged'
                        })
                        this.$emit('done');
                    }).catch(() => {
                        this.$LIPS(false);
                        Flash.setError("Error submitting form")
                    })
                } else this.$networkErr('form');
            });
        },
        async submitForm() {
            // this.salesLogForm.customer_id = this.customerId;
            // const data ={
            //     ...this.salesLogForm,...{
            //         "product_id": "205-0962-FRE-FOU-GA",
            //         "branch_id":localStorage.getItem('branch_id'),
            //         "status_id":1
            //     }
            // }
            // console.log(`dataaaa ${JSON.stringify(data)}`);
            // this.$validator.validateAll().then(result => {
            //     if (result) {
            //         this.$LIPS(true);
            //         post(this.apiUrls.previewAmortization,data).then((res) => {
            //             this.$LIPS(false);
            //             this.amortization = res.data.data;
            //             console.log('this.amortizationthis.amortization',this.amortization)
            //             $(`#amortizationPreview`).modal('toggle');
            //             // this.$swal({
            //             //     icon: 'success',
            //             //     title: 'Payment Successfully Logged'
            //             // })
            //             // this.$emit('done');
            //         }).catch(() => {
            //             this.$LIPS(false);
            //             Flash.setError("Error submitting form")
            //         })
            //     } else this.$networkErr('form');
            // });
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
        getCalc(){
            this.salesLogForm.customer_id = this.customerId;
            const data0 ={
                ...this.salesLogForm,...{
                    "product_id": "205-0962-FRE-FOU-GA",
                    "branch_id":localStorage.getItem('branch_id'),
                    "status_id":1
                }
            }
            console.log(`dataaaa ${JSON.stringify(data0)}`);
            console.log(`this.calculation ${this.calculation}`);
            const caly= this.calculation;
            const data = caly.filter((x)=> x.business_type_id === data0.business_type_id && x.down_payment_rate_id === data0.payment_type_id.id)[0];
            console.log(`dataaaa data0 ${data}`);

            const margin = data['margin'];
            const interest = data['interest'];
            const plan = 20;
            let mPrice=65000; 
            mPrice = mPrice * margin + Number(mPrice);
            const dPrice = mPrice * (plan / 100);
            const rPrice = mPrice - dPrice;
            const afInt = rPrice * interest * 12;
            const pInt = afInt + dPrice + rPrice;
            const aTax = 0.05 * pInt + pInt;
            const upFront = aTax * (plan /100);
            const rePay = aTax - upFront;
            const mRepay = rePay / 12;

            

        },
        async getCalculation(){
            try{
                const fetchGetCalclations = await get(this.apiUrls.getCalculation);
                
                // const test = fetchGetCalclation.data.data.data.data;
                const unwrapped = fetchGetCalclations.data.data;
                this.calculation = unwrapped;
                const unwrapped0 = JSON.stringify(unwrapped);

                console.log(`test dataooo data ${unwrapped0}`);
                console.log(`test dataooo data ${unwrapped}`);
                // console.log(`test calculator data ${JSON.stringify(fetchGetCalclations)["data"]}`);
                // console.log(`test calculator data ${this.calculation}`);
                // console.log(`test calculator data ${JSON.stringify(this.calculation)}`);
            }
            catch(err){
                this.$displayErrorMessage(err);
            }
        },
        selectedItem(value){
            console.log('poploic fff',value);
            this.selectedProduct=value;
        },
        async getProduct(){
            try{
                const fetchProduct = await get(this.apiUrls.getProduct+this.product);
                console.log(`test product data ${fetchProduct}`);
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

.dropdown{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.dropdown-input{
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder{
  opacity: 0.7;
}
</style>