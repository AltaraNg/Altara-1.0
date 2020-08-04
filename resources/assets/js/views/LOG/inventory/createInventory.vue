<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/inventory'" :title="mode + ' inventory'" :button-title="'view Inventory!'"/>

            <div class="attendance-body">
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
                            <select name="branch" id="branch" v-model="form.branch_id" class="custom-select" data-vv-as="branch id">
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
                            <select name="branch" id="supplier" v-model="form.supplier_id" class="custom-select" data-vv-as="supplier id">
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

                <div class="row px-4 pt-3 pb-4 text-center">

                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>

                <div class="mb-3 row attendance-item" v-for="(item, index) in inventoryList">
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.name}}
                    </div>

                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.user}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.supplier.name}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.branch.name}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        <span v-if="item.sku"> {{item.sku}}</span><span v-else>{{item | sku}}</span>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.price}}
                    </div>



                </div>

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
                inventoryList: [],
                brands: [],
                suppliers: [],
                mode: null,
                error: {},
                show: false,
                showForm: false,
                store: '/api/product',
                method: 'POST',
                headings: ['Product Name', 'Received by', 'Supplier', 'Branch', 'SKU', 'Price', 'Status']
            }
        },
        beforeRouteEnter(to, from, next) {
            if (to.meta.mode === 'edit'){
                get(`/api/product/${to.params.id}`).then((data) => {

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
            prepareForm(data) {
                this.$LIPS(true);
                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                get('/api/product').then((res) => {
                    Vue.set(this.$data, 'products', res.data.data.data);
                }).catch(() => Flash.setError('Error Preparing form'));

                get('/api/supplier').then((res) => {
                    Vue.set(this.$data, 'suppliers', res.data.data.data);
                }).catch(() => Flash.setError('Error Preparing form'));


                Vue.set(this.$data, 'form', data);

                if (this.mode === 'edit') {
                    //TODO change the edit form
                    this.store = `/api/product/${this.$route.params.id}`;
                    this.method = 'PUT';
                }
                this.$LIPS(false);
                this.show = true;

            },
            onGenerate() {
              this.$validator.validateAll().then(result => {
                  if (result) {
                      this.$LIPS(true);
                      this.inventoryList = this.inventoryList.concat(this.createInventoryList(this.form));
                      this.$LIPS(false);
                  }
              })
            },
            createInventoryList(object){
                let inventory = [];
                let sku = [];
                for (let i = 0; i <= object.quantity-1; i++){
                    object.product.branch = object.branch_id;
                    object.product.supplier = object.supplier_id;
                    object.product.sku = this.skuGen(object.product);
                    inventory.push(object.product);
                }
                // inventory.forEach((item, index) => {
                //     item.sku = this.skuGen(item);
                //     console.log(item.sku);
                // });
                return inventory;
            },

            skuGen({brand, category}){
                let b = brand.slice(0, 3).toUpperCase();
                let c = category.slice(0, 3).toUpperCase();
                let n = Math.round(Math.random() * 10000);
                return `${b}${c}${n}`;
            },
            onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.form.name = this.productName;
                            (this.mode === 'edit' ? put(this.store, this.form) : post(this.store, this.form))
                                .then(({data}) => {
                                    if (data.status === 'success') {
                                        Vue.set(this.$data, 'form',{});
                                        this.$swal({
                                            icon: 'success',
                                            title: this.mode === 'edit' ? 'Product Updated Successfully' : 'Product added Successfully'

                                        });
                                        return this.$router.push(
                                            {path: '/log/products'}
                                        )
                                    }
                                })
                                .catch(({response:r}) => {
                                    let {data, status} = r;
                                    if (status === 422) {
                                        this.error = data.errors ? data.errors : data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => {
                                this.$scrollToTop();
                                this.$LIPS(false);
                            });
                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            }
        },
        watch: {
            form: {
                handler: function (val) {

                    const brand = this.brands.find(el => el.id === val.brand_id);

                    if(brand){

                        Vue.set(this.$data, 'categories', brand.categories);
                }else return ''},
                deep: true
            }
        },
        computed: {

            ...mapGetters(['auth', 'getAuthUserDetails', "getBranches"])
        },
         created() {
             this.$prepareBranches();
         }
         ,
        filters: {
            sku(object){
                if (object){
                    let {brand, category} = object;
                    let b = brand.slice(0, 3).toUpperCase();
                    let c = category.slice(0, 3).toUpperCase();
                    let n = Math.round(Math.random() * 10000);
                    return `${b}${c}${n}`;


                }



            }
        }

    }
</script>
