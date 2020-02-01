<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">



            <div class="attendance-body">
                <form @submit.prevent="onSave" >
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
                            <label class="w-100 float-left">Product Image</label>
                            <image-upload v-model="form.img_url"></image-upload>

                        </div>

                        <!-- image upload -->







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
    import {log} from '../../../utilities/log';
    import Flash from '../../../utilities/flash'
    import {byMethod, get} from '../../../utilities/api';
    import CustomHeader from '../../../components/customHeader';
    import Typeahead from '../../../components/Typeahead';

    function initialize(to) {

    }

    export default {
        components: {Typeahead, CustomHeader},
        data() {
            return {
                form: {},
                banks: {},
                error: {},
                mode: null,
                show: false,
                store: '/api/branch',
                method: 'POST',
            }
        },

    }
</script>
