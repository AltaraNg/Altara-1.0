<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/brands'" :title="mode + ' Brand'" :button-title="'view brands!'"/>

            <div class="attendance-body">
                <form @submit.prevent="onSave">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="form-group col-12 float-left px-0 px-md-3">
                            <label>Brand name</label>
                            <input class="form-control mb-2" placeholder="brand name" name="brand name" type="text"
                                   v-model="form.name"
                                   v-validate="'required|max:50'">
                            <small v-if="errors.first('brand name')">{{ errors.first('brand name') }}</small>
                            <small v-if="error.name">{{error.name[0]}}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3" v-if="mode === 'edit'">
                            <label class="w-100 float-left">Status</label>
                            <div class="radio p-0 col-md-6 col-6 float-left" v-for="{name,value} in statuses">
                                <input :id="name" :value="value" name="status" type="radio" v-model="form.is_active"
                                       v-validate="'required'">
                                <label :for="name">{{name}}</label>
                            </div>
                            <small v-if="errors.first('status')">{{ errors.first('status') }}</small>
                        </div>
                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link to="/log/brands" class="mx-5 text-link mt-4 pt-2" v-if="mode ==='edit'">
                                Cancel
                            </router-link>
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                {{mode | capitalize}} Brand <i class="far fa-paper-plane ml-1"></i>
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
    import {get, post,put} from "../../../utilities/api";
    import CustomHeader from '../../../components/customHeader';

    function initialize(to) {
        let urls = {create: `/api/brand/create`, edit: `/api/brand/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {

        components: {CustomHeader},

        data() {
            return {
                form: {},
                mode: null,
                error: {},
                show: false,
                store: '/api/brand',
                method: 'POST',
                statuses: [{name: 'active', value: 1}, {name: 'inactive', value: 0}]
            }
        },
        beforeRouteEnter(to, from, next) {
            if (to.meta.mode === 'edit'){
                get(`/api/brand/${to.params.id}`).then((data) => {

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
            // get(initialize(to))
            //     .then(({data}) => next(vm => vm.prepareForm(data)))
            //     .catch(() => next(() => Flash.setError('Error Preparing form')));
        },
        methods: {
            prepareForm(data) {
                this.$LIPS(true);
                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                Vue.set(this.$data, 'form', data);
                if (this.mode === 'edit') {
                    this.store = `/api/brand/${this.$route.params.id}`;
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
                                            title: this.mode === 'edit' ? 'Brand Updated Successfully' : 'Brand added Successfully'

                                        });
                                        return this.$router.push(
                                            {path: '/log/brands'}
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
        }
    }
</script>
