<template>
    <transition name="fade">

        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <div >
                <custom-header
                        :to="'/log/inventory/search'"
                        :title="'Search Products'"
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
                            <label>Show-Room</label>
                            <typeahead :options="getBranches" caption="name" v-model="form.branch" />
                        </div>

                        <div class="form-group col-md-4 col-6 float-left px-0 px-md-3">
                            <label>Brand</label>
                            <typeahead :options="getBrands" caption="name" v-model="form.brand" />
                        </div>
                        <div class="form-group col-md-4 col-6 float-left px-0 px-md-3">
                            <label>Status</label>
                            <typeahead :options="status" caption="name" v-model="form.availability" />
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
                                    :disabled="Object.keys(form).length < 2"
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
                        <th class="text-center">S/No.</th>
                        <th class="text-center">Product</th>

                        <th class="text-center">Market Price</th>
                        <th class="text-center">Quantity</th>
                    </tr>
                    <tr v-for="(product,index) in productForm.products">
                        <td>{{index+1}}</td>

                        <td>
                            <div class="form-group mb-0">

                                <p>{{ product.product_name }}</p>
                            </div>
                        </td>



                        <td>
                            <div class="form-group mb-0">

                                <p>{{ product.market_price | currency('₦', 0)}}</p>
                            </div>
                        </td>

                        <td>
                            <div class="form-group mb-0">
                                <p>{{product.quantity | numberZero}}</p>
                            </div>
                        </td>

                        <td>
                            <button
                                    v-if="product.quantity >0"
                                    @click="modal('modal', product)"
                                    class="ml-2 btn status status-sm my-sm-2 bg-default"
                            >
                                View
                            </button>



                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="attendance-body" v-if="productForm.products.length === 0 && requestSent">
                <p class="text-center text-info">There are no products matching the criteria</p>
            </div>




            <div :id="'modal'" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">{{modalTitle}}</h6>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal" href="javascript:">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <div>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Inventory SKU</th>
                                    <th>Market Price</th>
                                    <th>Serial/IMEI Number</th>
                                    <th>Received By</th>
                                    <th>Received Date</th>
                                    <th>Sold Date</th>
                                    <th>Branch</th>



                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(inventory_item,index) in searchInventory">
                                    <td>{{index + 1}}</td>
                                    <td>{{inventory_item.inventory_sku}}</td>
                                    <td>{{inventory_item.market_price}}</td>
                                    <td>{{inventory_item.serial_number}}</td>
                                    <td>received by</td>
                                    <td>{{inventory_item.received_date}}</td>
                                    <td>{{inventory_item.sold_date}}</td>
                                    <td>{{getEntity(inventory_item.branch_id, getBranches).name}}</td>

                                </tr>
                                </tbody>
                            </table>
                            <div class="float-right">
                                <button class="btn-default btn">edit</button>
                            </div>

                        </div>

                    </div>

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
    import { getMethod, get } from "../../../utilities/api";
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
        // mixins: [Vue2Filters.mixin],
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
                    {id: 0, name: 'sold out'},
                ],
                show: false,

                search: "/api/products/search",
                number: 0,

                // products: [],
                suppliers: [],
                product: null,
                categories: null,
                brands: null,
                supplier: null,
                branches: null,
                quantity: "",
                showDiv: false,
                searchInventory: [],
                modalTitle: '',

                method: "POST",
                statuses: [
                    {name: "available", value: 1},
                    {name: "unavailable", value: 0}
                ],
                productForm: {products:[]},

                canAddProduct: true,
                requestSent: false

            };


        },

        created(){
            this.$prepareInventories();
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


            modal(name, product) {
                // get inventory product matching in the inventory
                let temp = this.getMatchingProduct(product.product_id);
                Vue.set(this.$data, "searchInventory", temp);
                Vue.set(this.$data, "modalTitle", product.product_name);

                $(`#${name}`).modal('toggle');
                /*this method is used to automatically
                * toggle the modal with the id of
                * "name passed to it"*/
                this.errors.clear(name);


            },



            addProductForm() {
                getMethod('GET', this.search, this.form)
                    .then(({ data }) => {
                        // console.log(data.products)
                        this.productForm.products = [];

                        this.requestSent = true;
                        data.products.forEach(product => {
                            this.productForm.products.push({
                                product_name: product.name,
                                market_price: product.retail_price,
                                product_id: product.id,
                                quantity: this.getMatchingProduct(product.id).length

                            });

                            this.reNumber();
                        });
                    })

            }


            ,

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

            getMatchingProduct(id){
                /*
                this should get product based on the category and brand ids
                 */
                return this.getInventories.filter(inventory => inventory.product_id === id)
            }
        },
        computed: {
            ...mapGetters(['getInventories', "getBranches", 'getCategories', 'getBrands']),




        },





        watch: {
            productForm: {


            }
        },
        filters: {
            numberZero: function(num) {
                return num === 0 ? 'Not Available' : num
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
    .table{
        background: white;
    }
    .modal-dialog{
        width: 100%;
        min-width: 450px;
    }
    .modal-dialog table{
        width: 100%;
    }

</style>
