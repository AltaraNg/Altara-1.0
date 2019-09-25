<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/categories'" :title="mode + ' Category'" :button-title="'view categories!'"/>

            <div class="attendance-body">
                <form @submit.prevent="onSave">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="form-group col-12 float-left px-0 px-md-3">
                            <label>Category name</label>
                            <input class="form-control mb-2" placeholder="category name" name="category name"
                                   type="text" v-model="form.name"
                                   v-validate="'required|max:50'">
                            <small v-if="errors.first('category name')">{{ errors.first('category name') }}</small>
                            <small v-if="error.name">{{error.name[0]}}</small>
                        </div>
                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link to="/log/categories" class="mx-5 text-link mt-4 pt-2" v-if="mode ==='edit'">
                                Cancel
                            </router-link>
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                {{mode | capitalize}} Category <i class="far fa-paper-plane ml-1"></i>
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
    import CustomHeader from '../../../components/customHeader';

    function initialize(to) {
        let urls = {create: `/api/category/create`, edit: `/api/category/${to.params.id}/edit`};
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
                store: '/api/category',
                method: 'POST',
            }
        },
        beforeRouteEnter(to, from, next) {
            get(initialize(to))
                .then(({data}) => next(vm => vm.prepareForm(data)))
                .catch(() => next(() => Flash.setError('Error Preparing form')));
        },
        methods: {
            prepareForm({form}) {
                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                Vue.set(this.$data, 'form', form);
                if (this.mode === 'edit') {
                    this.store = `/api/category/${this.$route.params.id}`;
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
                                        if (data['updated']) this.$router.push('/log/categories');
                                    }
                                    this.error = {};
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
            }
        }
    }
</script>