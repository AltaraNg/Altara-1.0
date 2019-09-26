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
                            <typeahead :options="products" caption="name" v-model="form.product_id"/>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Brand</label>
                            <typeahead :options="brands" caption="name" v-model="form.brand_id"/>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Feature</label>
                            <input class="form-control" type="text" v-model="form.feature"></input>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Branch</label>
                            <typeahead :options="branches" caption="name" v-model="form.branch_id"/>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Quantity</label>
                            <input class="form-control" name="quantity" placeholder="retail price"
                                   v-model="form.quantity" v-validate="'required|max:50|numeric'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Supplier</label>
                            <typeahead :options="suppliers" caption="name" v-model="form.supplier_id"/>
                        </div>

                        <!--<div class="form-group col-md-6 col-12 float-left px-0 px-md-3">-->
                            <!--<label class="w-100 float-left">Availability Status</label>-->
                            <!--<div class="radio p-0 col-md-6 col-6 float-left" v-for="{name,value} in statuses">-->
                                <!--<input :id="name" :value="value" name="status" type="radio" v-model="form.is_active"-->
                                       <!--v-validate="'required'">-->
                                <!--<label :for="name">{{name}}</label>-->
                            <!--</div>-->
                            <!--<small v-if="errors.first('status')">{{ errors.first('status') }}</small>-->
                        <!--</div>-->


                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link to="/log/products" class="mx-5 text-link mt-4 pt-2" v-if="mode ==='edit'">
                                Cancel
                            </router-link>
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit" @click="displayAmortization()">
                                Generate Inventory <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>


            <div class="modal fade repayment" id="amortization"  v-if="showModalContent">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">
                                Inventory Order
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
                                    <thead>

                                    <tr class="table-separator">
                                        <th>s/n</th>
                                        <th>inventory number</th>
                                        <th>Product Sku</th>
                                        <th>Name</th>
                                        <th>Branch</th>
                                        <th>Order Id</th>
                                        <th>Sold date</th>
                                        <th>Seller_id</th>
                                    </tr>
                                    </thead>
                                    <tbody v-for="n in product">
                                    <tr >
                                        <td class="font-weight-bold">{{n}}
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td class="font-weight-bold"><input name="" v-model="form.productName"/></td>
                                        <td class="font-weight-bold">{{n}}
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td class="font-weight-bold"></td>
                                    </tr>
                                    </tbody>

                                </table>




                            </div>
                        </div>

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
    import {byMethod, get} from '../../../utilities/api';
    import Typeahead from '../../../components/Typeahead';
    import CustomHeader from '../../../components/customHeader';


    function initialize(to) {
        let urls = {create: `/api/product/create`, edit: `/api/product/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {
        components: {Typeahead, CustomHeader},
        props: {},
        data() {
            return {
                form: {},
                branches: [
                    {
                        'id': 1,
                        'name': 'Ikolaba',

                    },
                    {
                        'id': 2,
                        'name': 'Mushin',

                    },
                    {
                        'id': 3,
                        'name': 'Ojota',

                    }
                ],
                brands: [
                    {
                        'id': 1,
                        'name': 'Nokia',

                    },
                    {
                        'id': 2,
                        'name': 'Hisense',

                    },
                    {
                        'id': 3,
                        'name': 'Samsung',

                    },
                    {
                        'id': 4,
                        'name': 'Jinsung',

                    }
                ],
                suppliers: [
                    {
                        'id': 1,
                        'name': 'Panasonic',

                    },
                    {
                        'id': 2,
                        'name': 'Thomasson',

                    },
                    {
                        'id': 3,
                        'name': 'Indomitable',

                    },
                    {
                        'id': 4,
                        'name': 'Sunbo Electronics',

                    }
                ],
                products: [
                    {
                        'id': 1,
                        'name': 'Fridge',

                    },
                    {
                        'id': 2,
                        'name': 'Phone',

                    },
                    {
                        'id': 3,
                        'name': 'Motorcycle',

                    },
                    {
                        'id': 4,
                        'name': 'Sewing Machine',

                    }
                ],
                mode: null,
                error: {},
                show: false,
                showModalContent: false,
                store: '/api/product',
                product: 1,
                method: 'POST',
                statuses: [{name: 'available', value: 1}, {name: 'unavailable', value: 0}],

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
                Vue.set(this.$data, 'form', data.form);
                Vue.set(this.$data, 'branches', data.branches);
                Vue.set(this.$data, 'brands', data.brands);
                Vue.set(this.$data, 'categories', data.categories);
                if (this.mode === 'edit') {
                    this.store = `/api/product/${this.$route.params.id}`;
                    this.method = 'PUT';
                }
                this.show = true;
            },

            modal(name) {
                $(`#${name}`).modal('toggle');
                /*this method is used to automatically
                * toggle the modal with the id of
                * "name passed to it"*/
                this.errors.clear(name);
            },

            displayAmortization() {
                this.$validator.validateAll().then(result => {
                    if (result){
                        this.product = parseInt(this.form.quantity);
                        this.showModalContent = true;
                        return $(`#amortization`).modal('toggle');
                    }else this.$networkErr('form');
                });



    },

            onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            byMethod(this.method, this.store, this.form)
                                .then(({data}) => {
                                    if (data.saved || data.updated) {
                                        log(data.log, data.staff_id);
                                        Vue.set(this.$data, 'form', data.form);
                                        Flash.setSuccess(data.message, 5000);
                                        if (data['updated']) this.$router.push('/log/products');
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
                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            },
            processForm() {




            },


        },
        watch: {}
    }
</script>
