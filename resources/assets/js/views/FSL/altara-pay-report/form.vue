<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/categories'" :title="mode + ' Category'" />

            <div class="attendance-body">
                <form @submit.prevent="onSave">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                     
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                             <label>Number of Who Showed interest In Altara Pay</label>
                            <input class="form-control mb-2" placeholder="Interest" name="showed interest"
                                   type="number" v-model="form.interest"
                                   v-validate="'required|max:3'">
                            <small v-if="errors.first('showed interest')">{{ errors.first('showed interest') }}</small>
                        </div>

                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Number of Credit Check</label>
                            <input class="form-control" name="credit_check" placeholder="credit check"
                                   type="number" v-model="form.check" v-validate="'required|max:3'">
                            <small v-if="errors.first('credit_check')">{{ errors.first('credit_check') }}</small>
                        </div>
                       
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                {{mode | capitalize}} Submit Report <i class="far fa-paper-plane ml-1"></i>
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
        let urls = {create: `/api/altara_pay_report/create`,/* edit: `/api/category/${to.params.id}/edit` */};
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
                store: '/api/altara_pay_report',
                method: 'POST',
            }
        },
        // beforeRouteEnter(to, from, next) {
        //     console.log(to);
        //     get(initialize(to))
        //         .then(({data}) => next(vm => vm.prepareForm(data)))
        //         .catch(() => next(() => Flash.setError('Error Preparing form')));
        // },

          beforeRouteEnter(to, from, next) { 
            get(initialize(to)).then(({data}) => next(vm => vm.prepareForm(data)))
            .catch(() => next(() => Flash.setError('Error Preparing form')));
        },
        methods: {
          async prepareForm(data) {
                console.log(data)
                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                Vue.set(this.$data, 'form', data.form);
                // if (this.mode === 'edit') {
                //     this.store = `/api/category/${this.$route.params.id}`;
                //     this.method = 'PUT';
                // }
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
                                        if (data['updated']) this.$router.push('/altara_pay_report/create');
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
