<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance attendance-view" id="index">
            <div class="mt-5 attendance-head">
                <div class="mb-5 row align-items-center">
                    <div class="col-12 title-con">
                        <span class="title">{{mode | capitalize}} Brand</span>
                        <div class="row justify-content-end">
                            <router-link class="text-link mt-3" to="/log/brands">view all brands!</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="attendance-body">
                <form @submit.prevent="onSave">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm" style="border-radius: .4rem">
                        <div class="form-group col-12 float-left px-0 px-md-3">
                            <label>Brand name</label>
                            <input class="form-control mb-2" placeholder="brand name" name="brand name" type="text" v-model="form.name"
                                   v-validate="'required|max:50'">
                            <small v-if="errors.first('brand name')">{{ errors.first('brand name') }}</small>
                            <small v-if="error.name">{{error.name[0]}}</small>
                        </div>
                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link to="/log/brands" class="mx-5 text-link mt-4 pt-2" v-if="mode ==='edit'">Cancel</router-link>
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
    import Flash from "../../../utilities/flash";
    import {byMethod, get} from '../../../utilities/api';
    import {log} from "../../../utilities/log";

    function initialize(to) {
        let urls = {create: `/api/brand/create`, edit: `/api/brand/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {
        data() {
            return {
                form: {},
                mode: null,
                error: {},
                show: false,
                store: '/api/brand',
                method: 'POST',
            }
        },
        beforeRouteEnter(to, from, next) {
            get(initialize(to))
                .then(({data}) => next(vm => vm.prepareForm(data)))
                .catch(({response}) => next(vm => vm.handleErr(response)));
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            get(initialize(to))
                .then(({data}) => this.prepareForm(data))
                .catch(({response}) => vm.handleErr(response));
        },
        methods: {
            handleErr(e) {
                Flash.setError('Error Preparing form');
            },
            prepareForm(data) {
                this.show = false;
                this.error = {};
                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                Vue.set(this.$data, 'form', data.form);
                if (this.mode === 'edit') {
                    this.store = `/api/brand/${this.$route.params.id}`;
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
                                        if (data['updated']) this.$router.push('/log/brands');
                                    }
                                    this.error= {};
                                })
                                .catch(({response}) => {
                                    if (response.status === 422) {
                                        this.error = response.data.errors ? response.data.errors : response.data;
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