<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/products'" :title="mode + ' product'" :button-title="'view Products!'"/>

            <div class="attendance-body">
                <form @submit.prevent="onSave">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Product name</label>
                            <input class="form-control" disabled placeholder="product name" type="text"
                                   v-model="form.name">
                            <small v-if="error.name">{{error.name[0]}}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Product feature</label>
                            <input class="form-control" name="feature" placeholder="product feature"
                                   type="text" v-model="form.feature" v-validate="'required|max:50'">
                            <small v-if="errors.first('feature')">{{ errors.first('feature') }}</small>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Brand</label>
                            <select name="brand" id="brand" v-model="form.brand" class=" text-capitalize font-weight-bold h5" >
                                <option value="all" selected="selected" >--select--</option>
                                <option
                                    :value="brand.id"
                                    v-for="brand of brands"
                                >{{ brand.name }}</option
                                >
                            </select>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Category</label>
                            <select name="category" id="category" v-model="form.category" class=" text-capitalize font-weight-bold h5" >
                                <option value="all" selected="selected" >--select--</option>
                                <option
                                    :value="category.id"
                                    v-for="category of categories"
                                >{{ category.name }}</option
                                >
                            </select>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Retail Price</label>
                            <input class="form-control" name="price" placeholder="retail price"
                                   type="number" v-model="form.retail_price" v-validate="'required|max:50'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>
                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link to="/log/products" class="mx-5 text-link mt-4 pt-2" v-if="mode ==='edit'">
                                Cancel
                            </router-link>
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                {{mode | capitalize}} Product <i class="far fa-paper-plane ml-1"></i>
                            </button>
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
                categories: [],
                brands: [],
                mode: null,
                error: {},
                show: false,
                store: '/api/product',
                method: 'POST',
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
                get('/api/brand').then((res) => {
                    Vue.set(this.$data, 'brands', res.data.data.data);
                }).catch(() => Flash.setError('Error Preparing form'));
                get('/api/category').then((res) => {
                    Vue.set(this.$data, 'categories', res.data.data.data);
                }).catch(() => Flash.setError('Error Preparing form'));
                Vue.set(this.$data, 'form', data);

                if (this.mode === 'edit') {
                    this.store = `/api/product/${this.$route.params.id}`;
                    this.method = 'PUT';
                }
                this.$LIPS(false);
                this.show = true;

            },
            onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
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
            // form: {
            //     handler: function (val) {
            //         const brand = this.brands.find(({id}) => id === val.brand_id);
            //         const category = this.categories.find(({id}) => id === val.category_id);
            //         Vue.set(this.$data.form, 'name', `${val.feature} ${brand ? brand.name : ''} ${category ? category.name : ''}`);
            //     },
            //     deep: true
            // }
        }
    }
</script>
