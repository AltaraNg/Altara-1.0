<template>
    <transition name="fade">
        <div id="login">
            <div class="col-md-5 mx-auto" id="loginCard" :style="{ marginTop: `${cardMT}px`}">
                <div class="card">
                    <ul class="nav nav-tabs justify-content-center bg-default"><h6>Staff Login</h6></ul>
                    <form @submit.prevent="login" class="pt-1 pb-3">
                        <div class="card-body clearfix">
                            <div class="col-sm-12 px-0 px-md-3">
                                <label class="category">* Staff ID</label>
                                <div class="input-group">
                                    <input class="form-control" placeholder="Staff ID"
                                           v-model="form.staff_id" v-validate="'required'" name="Staff ID">
                                    <span class="input-group-addon"><i class="ml-2 fa fa-user-circle"></i></span>
                                </div>
                                <small class="error-control"
                                       v-if="errors.first('Staff ID')">{{ errors.first('Staff ID') }}
                                </small>
                                <small class="error-control" v-if="error.staff_id">{{error.staff_id[0]}}</small>
                            </div>
                            <div class="col-sm-12 px-0 px-md-3">
                                <label class="category">* Password</label>
                                <div class="input-group">
                                    <input placeholder="Password" type="password" class="form-control"
                                           v-model="form.password" v-validate="'required|min:6|max:25'"
                                           name="password">
                                    <span class="input-group-addon"><i class="ml-2 fas fa-key"></i></span>
                                </div>
                                <small class="error-control" v-if="errors.first('password')">
                                    {{errors.first('password') }}
                                </small>
                            </div>
                            <div class="col-sm-12 mb-4 px-0 px-md-3">
                                <button class="btn btn-block bg-default" :disabled="$isProcessing" type="submit">
                                    Login! &nbsp; <i class="far fa-paper-plane"></i>
                                </button>
                            </div>
                            <span class="text-center float-left w-100 pb-4">Forgot Password? <router-link
                                    to="/forgotPassword" class="text-info">Click here</router-link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Auth from '../../store/auth';
    import Flash from '../../helpers/flash';
    import {post} from '../../helpers/api';

    export default {
        data() {
            return {
                form: {staff_id: '', password: ''},
                cardMT: '',
                error: {}
            }
        },
        methods: {
            login() {
                this.$validator.validateAll().then(async result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            await post('/api/login', this.form)
                                .then(res => {
                                    res = res.data;
                                    if (res.auth) {
                                        Auth.set(res);
                                        this.$router.push('/home');
                                        Flash.setSuccess(res.message);
                                    }
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) this.error = e.data.errors ? e.data.errors : e.data;
                                    Flash.setError(e.data.message);
                                });
                            this.$LIPS(false);
                        } else this.$networkErr();
                    }
                });
            }
        },
        beforeCreate() {
            if (localStorage.getItem('api_token')) this.$router.push('/home');
        },
        mounted() {
            this.cardMT = (window.innerHeight - $('#loginCard').height()) / 2;
            this.$LIPS(false);
        },
    }
</script>
<style></style>