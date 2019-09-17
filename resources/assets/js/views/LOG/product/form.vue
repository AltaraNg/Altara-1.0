<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/products'" :title="mode + ' product'" :button-title="'view Products!'"/>

            <div class="attendance-body">
                <form @submit.prevent="onSave" enctype="multipart/form-data">
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
                            <typeahead :options="brands" caption="name" v-model="form.brand_id"/>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Category</label>
                            <typeahead :options="categories" caption="name" v-model="form.category_id"/>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Retail Price</label>
                            <input class="form-control" name="price" placeholder="retail price"
                                   type="number" v-model="form.retail_price" v-validate="'required|max:50'">
                            <small v-if="errors.first('price')">{{ errors.first('price') }}</small>
                        </div>

                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label class="w-100 float-left">Availability Status</label>
                            <div class="radio p-0 col-md-6 col-6 float-left" v-for="{name,value} in statuses">
                                <input :id="name" :value="value" name="status" type="radio" v-model="form.is_active"
                                       v-validate="'required'">
                                <label :for="name">{{name}}</label>
                            </div>
                            <small v-if="errors.first('status')">{{ errors.first('status') }}</small>
                        </div>

                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label class="w-100 float-left">Upload Image</label>

                            <div class="upload-image p-2">

                                        <div class="upload-box">
                                            <image-upload v-model="form.img_url"/>
                                        </div>
                                    </div>
                                    <small v-if="error[img_url]">{{error[img_url][0]}}</small>

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
    import {byMethod, get} from '../../../utilities/api';
    import Typeahead from '../../../components/Typeahead';
    import CustomHeader from '../../../components/customHeader';
    import ImageUpload from '../../../components/ImageUpload';

    function initialize(to) {
        let urls = {create: `/api/product/create`, edit: `/api/product/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {
        components: {Typeahead, CustomHeader, ImageUpload},
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
                statuses: [{name: 'available', value: 1}, {name: 'unavailable', value: 0}],
                img_url: ''
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
                Vue.set(this.$data, 'brands', data.brands);
                Vue.set(this.$data, 'categories', data.categories);
                if (this.mode === 'edit') {
                    this.store = `/api/product/${this.$route.params.id}`;
                    this.method = 'PUT';
                }
                this.show = true;
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
                    const brand = this.brands.find(({id}) => id === val.brand_id);
                    const category = this.categories.find(({id}) => id === val.category_id);
                    Vue.set(this.$data.form, 'name', `${val.feature} ${brand ? brand.name : ''} ${category ? category.name : ''}`);
                },
                deep: true
            }
        }
    }
</script>
