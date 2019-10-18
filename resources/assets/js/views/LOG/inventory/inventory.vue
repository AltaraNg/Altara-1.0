<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/inventory'" :title="'Generate Inventory'" :button-title="'view Inventory!'"/>

            <div class="attendance-body">
                <form @submit.prevent="processForm" enctype="multipart/form-data">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">

                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Product</label>
                            <typeahead :options="products" caption="name" v-model="form.product"/>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Quantity</label>
                            <input class="form-control" name="quantity" placeholder="retail price"
                                   v-model="quantity" v-validate="'required|max:50|numeric'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Supplier ID</label>
                            <typeahead :options="suppliers" caption="name" v-model="form.supplier"/>
                        </div>

               </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link to="/log/products" class="mx-5 text-link mt-4 pt-2" v-if="mode ==='edit'">
                                Cancel
                            </router-link>   
                            <button :disabled="$isProcessing || quantity==''" class="btn bg-default" type="submit" @click="addProductForm()">
                                Generate Inventory <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <h5 class="mt-5 mb-0" v-if="canAddProduct">Add a new payment</h5>
                                <table class="table table-bordered" v-if="canAddProduct">
                                    <tbody class="text-center">
                                    <tr class="table-separator">
                                        <td class="text-left">S/No.</td>
                                        <th>Product </th>
                                        <th>Inventory SKU</th>
                                        <th>Market Price</th>
                                        <th>Serial/IMEI Number</th>
                                        <th>Recieved Date</th>
                                        <th>Recieved By</th>
                                    </tr>
                                    <tr v-for="(product,index) in productForm.products" >
                                        <th>{{index+1}}</th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" name="product_sku" type="text" 
                                                       v-model="productForm.products[index].product_name" disabled>
                                            </div>
                                        </th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" name="inventory_sku" type="text"  
                                                 v-model="productForm.products[index].inventory_sku" disabled>
                                            </div>
                                        </th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" name="market_price" type="text"
                                                       v-model="productForm.products[index].market_price" disabled>
                                            </div>
                                        </th>

                                        <th>
                                              <div class="form-group mb-0">
                                                <input class="form-control" name="serial_no" type="text" v-model="productForm.products[index].serial_number" v-validate="'required'" >
                                            </div>
                                        </th>

                                        <th>
                                             <div class="form-group mb-0">
                                                <input class="form-control" name="recieved_date" type="date"  
                                                v-model="productForm.products[index].recieved_date" >
                                            </div>
                                            <!-- <select class="custom-select w-100"
                                                    v-model="productForm.payments[index]._payment_bank">
                                                <option :value="id" v-for="{name, id} in getBanks">{{name}}</option>
                                            </select> -->
                                        </th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" data-vv-as="date" name="date" type="text"
                                                       v-model="productForm.products[index].receiver_id" vdisabled >
                                            </div>
                                        </th>

                                        <th>
                                            <button @click="deleteProduct(index)"
                                                    class="ml-2 btn status status-sm my-sm-2 not-approved">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </th>

                                    </tr>
                                    </tbody>
                                </table>
            <div>

                <button :disabled="$isProcessing" class="btn bg-default" type="submit" @click="onSave()">
                    Save Inventory <i class="far fa-paper-plane ml-1"></i>
                </button>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {log} from "../../../utilities/log";
    import Flash from "../../../utilities/flash";
    import {byMethod, get} from '../../../utilities/api';
    import Typeahead from '../../../components/Typeahead';
    import CustomHeader from '../../../components/customHeader';
    import Auth from '../../../utilities/auth';


    function initialize(to) {
        let urls = {create: `/api/inventory/create`, edit: `/api/product/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {
        components: {Typeahead, CustomHeader},
        props: {},
        data() {
            return {
                form: {},
                 user: {
                    name: Auth.state.user_name,
                    id: Auth.state.user_id
                },
                mode: null,
                error: {},
                index: null,
                show: false,
                showModalContent: false,
                store: '/api/inventory',
                number: 0,
                products: [],
                suppliers: [],
                product: null,
                categories: null,
                brands: null,
                supplier: null,
                quantity:'',

                method: 'POST',
                statuses: [{name: 'available', value: 1}, {name: 'unavailable', value: 0}],
                productForm: {products: []},
                canAddProduct: true

            }
        },
        beforeRouteEnter(to, from, next) {

                get(initialize(to))
                .then(({data}) => next(vm => vm.prepareForm(data)))
                .catch(() => next(() => Flash.setError('Error Preparing form')));
        },
        methods: {
            prepareForm(data) {
                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                Vue.set(this.$data, 'brands', data.brands);
                Vue.set(this.$data, 'categories', data.categories);
                Vue.set(this.$data, 'suppliers', data.suppliers);
                Vue.set(this.$data, 'products', data.products);
                if (this.mode === 'edit') {
                    this.store = `/api/inventory/${this.$route.params.id}`;
                    this.method = 'PUT';
                }
                this.show = true;
                this.canAddProduct = /*this.canUserAddPayment;*/ true;
                this.productForm = {products: []};
            },

             processForm() {
                // this.show = false;
                // this.$LIPS(true);
                // get(`/api/customer/lookup/${this.customer_id}`)
                //     .then(res => this.updateView(res.data))
                //     .catch(() => {
                //         this.$LIPS(false);
                //         Flash.setError('Error Fetching customer detail');
                //     });
            },



            onSave() {
                console.log(this.productForm.products)
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.productForm.products.forEach(e => {
                                byMethod(this.method, this.store, e)
                                    .then(({data}) => {
                                        if (data.saved || data.updated) {
                                            // log(data.log, data.staff_id);
                                            Vue.set(this.$data, 'form', data.form);
                                            Flash.setSuccess(data.message, 5000);
                                            if (data['updated']) this.$router.push('/log/inventory');
                                        }
                                    })
                                    .catch(({response: r}) => {
                                        let {data, status} = r;
                                        if (status === 422) {
                                            this.error = data.errors ? data.errors : data;
                                            this.$networkErr('unique');
                                        }
                                    }).finally(() => {
                                    this.$scrollToTop();
                                    this.$LIPS(false);
                                });
                            })

                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            },
    

 addProductForm() {
     this.$validator.validateAll().then(result => {
         if (result){
             const quantity = parseInt(this.form.quantity);

             const product = this.getEntity(this.form.product, this.products);
             const supplier = this.getEntity(this.form.supplier, this.suppliers);

             //generates rows according to the quantity of products
             for (let i = 0; i< this.quantity; i++){
                 this.productForm.products.push({
                     product_name: product.name,
                     product_id: product.id,
                     supplier_id:supplier.id,
                     inventory_sku: '',
                     serial_number: '',
                     market_price: product.retail_price,
                     received_date: this.$getDate(),
                     receiver_id: this.user.id,
                     seller_id: this.user.id

                 });
                 // this.reNumber();
             }
         }
     })
            

            },

            deleteProduct(index) {
                this.productForm.products.splice(index, 1);
                this.reNumber();
            },
            
              reNumber() {
                this.productForm.products.forEach((product, index) => {
                    /*this line below mean if the repayment level is 3 i.e the customer has made 3 repayment
                    * u want to display on the ui "4th repayment"
                    * so repaymentLevel(3) + index(0 - length of the added payments) + 1*/
                    let next =  index + 1;
                    this.productForm.products[index]._col = next;
                    this.productForm.products[index].column = this.$getColumn(next) + " Products";
                })
            },
            getEntity(id, array){
                return array.find(entity => entity.id === id)
            }
        },
        created(){




        },
        watch: {
            productForm: {
                handler: function () {
                    let date = new Date().getFullYear();
                    date = date.toString().slice(2,4);
                    this.productForm.products.forEach( e =>{
                        // let product = this.getEntity(e.product, this.products);
                        let category_id = this.getEntity(e.product_id, this.products).category_id;
                        let category_name = this.getEntity(category_id, this.categories).name;
                    e.inventory_sku =   `${category_name.slice(0,3).toUpperCase()}-${e.product_name.slice(0,3).toUpperCase()}-0${e.serial_number.slice(3, -1)}-00${this.productForm.products.indexOf(e)}`;

                        // Vue.set(this.$data.e, 'inventory_sku', 'random' );

                    });
                },
                // console.log(index);
                deep: true
            },


        }
    }
</script>
