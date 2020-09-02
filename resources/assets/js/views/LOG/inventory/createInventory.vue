<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/inventory'" :title="mode + ' inventory'" :button-title="'view Inventory!'"/>

            <div class="attendance-body" v-if="mode === 'create'">
                <form @submit.prevent="onGenerate">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="form-group col-md-3 col-12 ">
                            <label for="product" class="form-control-label">Product</label>
                            <br>
                            <select name="product" id="product" v-model="form.product" class="custom-select" data-vv-as="product id">
                                <option disabled value="" >--select--</option>
                                <option
                                    :value="product"
                                    v-for="product of products"
                                >{{ product.name }}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3 col-12 ">
                            <label for="branch" class="form-control-label">Branch</label>
                            <br>
                            <select name="branch" id="branch" v-model="form.branch" class="custom-select" data-vv-as="branch id">
                                <option disabled value="" >--select--</option>
                                <option
                                    :value="branch"
                                    v-for="branch of getBranches"
                                >{{ branch.name }}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3 col-12 ">
                            <label for="supplier" class="form-control-label">Supplier</label>
                            <br>
                            <select name="supplier" id="supplier" v-model="form.supplier" class="custom-select" data-vv-as="supplier id">
                                <option disabled value="" >--select--</option>
                                <option
                                    :value="supplier"
                                    v-for="supplier of suppliers"
                                >{{ supplier.name }}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3 col-12">
                            <label for="quantity" class="form-control-label">Quantity</label>
                            <br>
                            <input id="quantity" name="quantity" type="number" class="number form-control" v-model="form.quantity">
                        </div>

                        <div class="text-right w-100">
                        <input type="submit" value="Generate" class="btn bg-default w-25">
                        </div>
                    </div>
                </form>

                <div v-if="inventoryList.products.length > 0">

                <div class="row  pt-1 pb-2 text-center">

                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>

                <div class="mb-3 row attendance-item text-center" v-for="(item, index) in inventoryList.products">

                    <div class="col d-flex align-items-center text-center" style="max-width: 120px">
                        <span class="user mx-auto" >{{index + 1}}</span>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center text-center">
                        {{item.product_name}}
                    </div>

                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.receiver_name}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.supplier_name}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.branch_name}}
                </div>

                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.price}}
                    </div>



                </div>
                    <div class="text-right w-100">
                        <button class="bg-default btn" @click="onSave">Submit</button>
                    </div>
                </div>



            </div>

            <div class="attendance-body" v-else>
                <form @submit.prevent="update">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="form-group col-md-2">
                            <label>Inventory SKU: </label>
                            <p>{{form.sku || 25}}</p>
                        </div>
                        <div class="form-group col-md-2">
                            <label>Product Name: </label>
                            <p>{{form.product_name || 25}}</p>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="price">Price: </label><br>

                            <input id="price" type="number" v-model="form.price" name="price" class="custom-select w-50">
                        </div>
                        <div class="form-group col-md-2">
                            <label>Supplier Name: </label>
                            <p>{{form.supplier_name | capitalize}}</p>
                        </div>

                        <div class="form-group col-md-2">
                            <label>Branch: </label>
                            <p>{{form.branch_name || 25}}</p>
                            <small class="small">transfer product</small>
                        </div>
                        <div class="form-group col-md-2">
                            <input type="submit" value="Submit" class="btn bg-default w-100">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {log} from "../../../utilities/log";
    import Flash from "../../../utilities/flash";
    import {post, get, put} from '../../../utilities/api';
    import Typeahead from '../../../components/Typeahead';
    import CustomHeader from '../../../components/customHeader';
    import {mapGetters} from "vuex";

    function initialize(to) {
        let urls = {create: `/api/product/create`, edit: `/api/product/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {
        components: {Typeahead, CustomHeader},
        props: {},
        data() {
            return {
                products: [],
                form: {},
                inventoryList: {products: []},
                brands: [],
                suppliers: [],
                mode: null,
                error: {},
                show: false,
                showForm: false,
                store: '/api/inventory',
                method: 'POST',
                headings: ['S/N','Product Name', 'Received by', 'Supplier', 'Branch', 'Price']
            }
        },
        beforeRouteEnter(to, from, next) {
            if (to.meta.mode === 'edit'){
                get(`/api/inventory/${to.params.id}`).then((data) => {

                    next(vm => {

                        vm.prepareForm(data.data.data)
                    })
                })
                    .catch(() => next(() => Flash.setError('Error Preparing form')));
            }
            else{
                let form = {};
                next(vm => {
                    vm.prepareForm(form)
                })
            }
        },
        methods: {
           async prepareForm(data) {
                this.$LIPS(true);
                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                await get('/api/product').then((res) => {
                    Vue.set(this.$data, 'products', res.data.data.data);
                }).catch(() => Flash.setError('Error Preparing form'));

                await get('/api/supplier').then((res) => {
                    Vue.set(this.$data, 'suppliers', res.data.data.data);
                }).catch(() => Flash.setError('Error Preparing form'));


                Vue.set(this.$data, 'form', data);

                if (this.mode === 'edit') {
                    //TODO change the edit form
                    this.store = `/api/inventory/${this.$route.params.id}`;
                    this.method = 'PUT';

                    this.form.product_name = this.products.find(item => {
                        return item.id === this.form.product_id;
                    }).name;
                    this.form.supplier_name = this.suppliers.find(item => {
                        return item.id === this.form.supplier_id;
                    }).name;
                    this.form.branch_name = this.getBranches.find(item => {
                        return item.id === this.form.branch_id;
                    }).name;

                }
                this.$LIPS(false);
                this.show = true;

            },
            onGenerate() {
              this.$validator.validateAll().then(result => {
                  if (result) {
                      this.$LIPS(true);
                       const product = this.form.product;
                      const supplier = this.form.supplier;
                      const branch = this.form.branch;




                      for(let i =0; i < this.form.quantity; i++){
                          this.inventoryList.products.push({
                              product_name: product.name,
                              product_id: product.id,
                              supplier_id: supplier.id,
                              supplier_name: supplier.name,
                              branch_id: branch.id,
                              branch_name: branch.name,
                              price: product.retail_price,
                              receiver_name: product.user,
                              receiver_id: this.getAuthUserDetails.userId,
                              received_date: this.$getDate(),

                          })
                      }


                      this.form = {};
                      this.$LIPS(false);
                  }
              })
            },

            update(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            console.log(this.form);
                            put(this.store, this.form).then(data => {
                                this.$swal({
                                    icon: 'success',
                                    title: 'Inventory Updated Successfully'

                                });
                                this.$router.push(
                                    {path: '/log/inventory'}
                                );
                            });


                            this.$LIPS(false);


                            this.$LIPS(false);
                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            },


             async onSave() {
                let status = '';
                  await this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.inventoryList.products.forEach(e => {
                                post(this.store, e)
                                    .then(({data}) => {
                                        console.log(data);
                                        status = data.status;
                                    }).catch(({response:r}) => {
                                    let {data, status} = r;
                                    if (status === 422) {
                                        this.error = data.errors ? data.errors : data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => {
                                    this.$scrollToTop();
                                    this.$LIPS(false);
                                })
                            });


                            this.$swal({
                                icon: 'success',
                                title: 'Inventory added Successfully'

                            });
                                this.$router.push(
                                    {path: '/log/inventory'}
                                );
                                this.$LIPS(false);


                            this.$LIPS(false);
                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            }
        },

        computed: {

            ...mapGetters(['auth', 'getAuthUserDetails', "getBranches"])
        },
         created() {
             this.$prepareBranches();
             console.log(this.getAuthUserDetails);
         }
         ,
           }
</script>
