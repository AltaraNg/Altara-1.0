<template>
    <transition name="fade">

        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <div >
                <custom-header
                        :to="'/log/inventory'"
                        :title="'Generate Inventory'"
                        :button-title="'view Inventory!'"
                />
            </div>

            <div class="attendance-body" >
                <form @submit.prevent enctype="multipart/form-data">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Category</label>
                            <typeahead :options="getCategories" caption="name" v-model="form.category" />
                        </div>

                        <div class="form-group col-md-4 col-6 float-left px-0 px-md-3">
                            <label>Show Room</label>
                            <typeahead :options="getBranches" caption="name" v-model="form.branch" />
                        </div>

                        <div class="form-group col-md-4 col-6 float-left px-0 px-md-3">
                            <label>Brand</label>
                            <typeahead :options="getBrands" caption="name" v-model="form.brand" />
                        </div>
                        <div class="form-group col-md-4 col-6 float-left px-0 px-md-3">
                            <label>Status</label>
                            <typeahead :options="status" caption="name" v-model="form.status" />
                        </div>

                    </div>
                    <div class="mb-5 px-0 row align-items-center" >
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link
                                    to="/log/products"
                                    class="mx-5 text-link mt-4 pt-2"
                                    v-if="mode ==='edit'"
                            >Cancel</router-link>
                            <button
                                    :disabled="Object.keys(form).length < 4"
                                    class="btn bg-default"
                                    type="submit"
                                    @click="addProductForm()"
                            >
                                Search Product
                                <i class="far fa-paper-plane ml-1"></i>
                            </button>



                        </div>
                    </div>
                </form>
            </div>

            <div class="attendance-body" v-if="productForm.products.length > 0">
                <h5 class="mt-5 mb-0" v-if="canAddProduct">Search results</h5>
                <table class="table table-bordered" v-if="canAddProduct">
                    <tbody class="text-center">
                    <tr class="table-separator">
                        <td class="text-left">S/No.</td>
                        <th>Product</th>
                        <th>Inventory SKU</th>
                        <th>Market Price</th>
                        <th>Quantity</th>
                    </tr>
                    <tr v-for="(product,index) in productForm.products">
                        <th>{{index+1}}</th>

                        <th>
                            <div class="form-group mb-0">
                                <input
                                        class="form-control"
                                        name="product_sku"
                                        type="text"
                                        v-model="productForm.products[index].product_name"
                                        disabled
                                />
                            </div>
                        </th>

                        <th>
                            <div class="form-group mb-0">
                                <input
                                        class="form-control"
                                        name="inventory_sku"
                                        type="text"
                                        v-model="productForm.products[index].inventory_sku"
                                        disabled
                                />
                            </div>
                        </th>

                        <th>
                            <div class="form-group mb-0">
                                <input
                                        class="form-control"
                                        name="market_price"
                                        type="text"
                                        v-model="productForm.products[index].market_price"
                                        disabled
                                />
                            </div>
                        </th>





                        <th>
                            <div class="form-group mb-0">
                                <input
                                        class="form-control"
                                        name="received_date"
                                        type="date"
                                        v-model="productForm.products[index].product_id"
                                />
                            </div>
                        </th>

                        <th>
                            <div class="form-group mb-0">
                                <input
                                        class="form-control"
                                        data-vv-as="date"
                                        name="date"
                                        type="text"
                                        v-model="user.name"
                                        disabled
                                />
                            </div>
                        </th>

                        <th>
                            <button
                                    @click="deleteProduct(index)"
                                    class="ml-2 btn status status-sm my-sm-2 not-approved"
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </th>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <button :disabled="$isProcessing" class="btn bg-default" type="submit" @click="onSave()">
                        Save Inventory
                        <i class="far fa-paper-plane ml-1"></i>
                    </button>
                </div>
            </div>



        </div>






    </transition>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Vue from "vue";
    import { log } from "../../../utilities/log";
    import Flash from "../../../utilities/flash";
    import { byMethod, get } from "../../../utilities/api";
    import Typeahead from "../../../components/Typeahead";


    import CustomHeader from "../../../components/customHeader";
    import Auth from "../../../utilities/auth";

    function initialize(to) {
        let urls = {
            create: `/api/inventory/create`,
            edit: `/api/inventory/${to.params.id}/edit`
        };
        return urls[to.meta.mode];
    }
    export default {
        name: "ProductSearch",
        components: { Typeahead, CustomHeader },
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
                status: [
                    {id: 1, name: 'available'},
                    {id: 2, name: 'sold out'},
                ],
                show: false,
                showModalContent: false,
                store: "/api/inventory",
                number: 0,
                // products: [],
                suppliers: [],
                product: null,
                categories: null,
                brands: null,
                supplier: null,
                branches: null,
                quantity: "",

                method: "POST",
                statuses: [
                    {name: "available", value: 1},
                    {name: "unavailable", value: 0}
                ],
                productForm: {products:[]},

                canAddProduct: true
            };


        },
        // beforeRouteEnter(to, from, next) {
        //     get(initialize(to))
        //         .then(({ data }) => next(vm => vm.prepareForm(data)))
        //         .catch(() => next(() => Flash.setError("Error Preparing form")));
        // },
        created(){
            this.$prepareProducts();
            this.$prepareBranches();
            this.$prepareCategories();
            this.$prepareBrands();
        },

        methods: {




            prepareForm() {


                console.log(this.getCategories);


                this.show = true;
                this.canAddProduct = /*this.canUserAddPayment;*/ true;

            },

            onSave() {

                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.productForm.products.forEach(e => {
                                if (this.mode = "edit"){
                                    delete e.product_name;
                                }
                                byMethod(this.method, this.store, e)
                                    .then(({ data }) => {
                                        if (data.saved || data.updated) {
                                            // log(data.log, data.staff_id);
                                            Vue.set(this.$data, "productForm", data.form);
                                            Flash.setSuccess(data.message, 5000);
                                            if (data["updated"]) this.$router.push("/log/inventory");
                                        }
                                    })
                                    .catch(({ response: r }) => {
                                        let { data, status } = r;
                                        if (status === 422) {
                                            this.error = data.errors ? data.errors : data;
                                            this.$networkErr("unique");
                                        }
                                    })
                                    .finally(() => {
                                        this.$scrollToTop();
                                        this.$LIPS(false);
                                    });
                            });
                        } else this.$networkErr();
                    } else this.$networkErr("form");
                });
            },

            addProductForm() {
                let gotProduct = this.getMatchingProduct(this.form);
                 //generates rows according to the quantity of products
                gotProduct.forEach(product => {
                    this.productForm.products.push({
                        product_name: product.name,
                        market_price: product.retail_price,
                        product_id: product.id,

                    });
                    this.reNumber();
                });
                 // for (let i = 0; i < this.quantity; i++) {
                 //     this.productForm.products.push({
                 //         product_name: product.name,
                 //         product_id: product.id,
                 //                supplier_id: supplier.id,
                 //                inventory_sku: "",
                 //                serial_number: "",
                 //                branch_id: "",
                 //                market_price: product.retail_price,
                 //                received_date: this.$getDate(),
                 //                receiver_id: this.user.id
                 //            });
                 //            // this.reNumber();
                 //        }
                 //
                 //

                // console.log(this.getMatchingProduct(this.form));
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
                    let next = index + 1;
                    this.productForm.products[index]._col = next;
                    this.productForm.products[index].column =
                        this.$getColumn(next) + " Products";
                });
            },
            getEntity(id, array) {
                return array.find(entity => entity.id === id);
            },

            getMatchingProduct({category, brand}){
                return this.getProducts.filter(({category_id, brand_id}) => category_id === category && brand_id === brand)
            }
        },
        computed: {
            ...mapGetters(['getProducts', "getBranches", 'getCategories', 'getBrands']),


        },





        watch: {
            productForm: {
                handler: function() {

                    this.productForm.products.forEach(e => {
                        let category_id = this.getEntity(e.product_id, this.products)
                            .category_id;
                        let category_name = this.getEntity(category_id, this.categories).name;
                        e.inventory_sku = `${category_name.slice(
                            0,
                            3
                        )}-${e.product_name.slice(0, 3)}-${e.serial_number.slice(
                            e.serial_number.length - 4
                        )}-0${this.productForm.products.indexOf(e)+1}`.toUpperCase();
                        e.serial_number = e.serial_number.toUpperCase();
                    });
                },
                deep: true
            }
        }
    };
</script>


<style scoped>
    #product-search{
        width: 50%;
        margin: auto;
        padding-top: 20px;
    }
    button{
        display: inline;
    }

</style>