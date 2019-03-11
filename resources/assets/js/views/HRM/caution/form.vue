<template>
    <transition name="fade">
        <div>
            <div class="pt-md-3 pt-2 attendance attendance-view" id="index">
                <div class="mt-5 attendance-head">
                    <div class="mb-5 row align-items-center">
                        <div class="col-12 title-con">
                            <span class="title">Send Caution</span>
                            <div class="row justify-content-end">
                                <router-link class="text-link mt-3" to=".">view all cautions!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="attendance-body">
                    <form @submit.prevent="onSave">
                        <div class="p-5 row bg-white shadow-sm" style="border-radius: .4rem">
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Employee Name</label>
                                <typeahead :options="users" caption="full_name" v-model="form.user_id"/>
                            </div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Issued by</label>
                                <select class="custom-select w-100" disabled
                                        data-vv-validate-on="blur"
                                        name="issued_by"
                                        v-model="form.issuer_id" v-validate="'required'">
                                    <option :value="issuer.id">{{issuer.full_name}}</option>
                                </select>
                            </div>
                            <div class="spaceBefore"></div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Date</label>
                                <input class="form-control" data-vv-as="date" name="date" type="date"
                                       v-model="form.date" v-validate="'required'">
                                <small v-if="errors.first('date')">{{errors.first('date')}}</small>
                            </div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Penalty</label>
                                <select class="custom-select w-100"
                                        data-vv-validate-on="blur"
                                        name="penalty"
                                        v-model="form.penalty" v-validate="'required'">
                                    <option selected value="">-- select penalty --</option>
                                    <option value="1">penalties</option>
                                </select>
                                <small v-if="errors.first('penalty')">{{errors.first('penalty') }}</small>
                            </div>
                            <div class="spaceBefore"></div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Reason</label>
                                <textarea class="form-control w-100"
                                          name="reason"
                                          placeholder="reason for caution"
                                          rows="2"
                                          v-model="form.reason"
                                          v-validate="'required|max:255'"></textarea>
                                <small v-if="errors.first('reason')">{{errors.first('reason')}}</small>
                            </div>
                        </div>
                        <div class="mb-5 px-0 row align-items-center">
                            <div class="w-100 mb-4 mt-5 mx-0 hr"></div>
                            <div class="clearfix d-flex justify-content-end w-100">
                                <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                    create Attendance <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {get, post} from "../../../helpers/api";
    import {log} from "../../../helpers/log";
    import Flash from "../../../helpers/flash";

    import Typeahead from '../../../components/Typeahead';

    const apiLink = () => `/caution/create`;
    export default {
        components: {Typeahead},
        data() {
            return {
                users: null,
                columns: {},
                show: false,
                form: {},
                error: {},
                issuer:{},
            }
        },
        beforeRouteEnter(to, from, next) {
            get(`/api${apiLink(to)}`).then(res => {
                next(vm => vm.prepareForm(res.data));
            }).catch(err => {
                next(vm => vm.handleErr(err));
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            this.$LIPS(true);
            get(`/api${apiLink(to)}`).then(res => {
                this.prepareForm(res.data);
                next();
            }).catch(err => {
                this.handleErr(err);
                next();
            });
        },
        methods: {
            onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            post('/api/caution', {form: this.form})
                                .then(res => {
                                    if (res.data.saved) {
                                        log(`CautionSent`, `${this.users.find(obj => obj.id === this.form.user_id).staff_id}`);
                                        this.prepareForm(res.data);
                                        Flash.setSuccess(`Caution sent!`, 5000);
                                    }
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) {
                                        this.error = e.data.errors ? e.data.errors : e.data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => {
                                    this.$LIPS(false);
                                    this.$scrollToTop();
                                });
                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            },
            prepareForm(data) {
                Vue.set(this.$data, 'form', data.form);
                Vue.set(this.$data, 'users', data.users);
                this.issuer = data.users.find(obj => obj.id === data.form.issuer_id);
                this.show = true;
                this.$LIPS(false);
            },
            handleErr(e) {
                Flash.setError('Error Preparing form');
            },
        }
    }
</script>