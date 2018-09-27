<template>
    <transition name="fade">
        <div class="section-tabs" id="login">
            <div class="col-md-5 ml-auto mr-auto" id="loginCard" v-bind:style="{ marginTop: cardMT+'px'}">
                <div class="card">
                    <ul class="nav nav-tabs nav-tabs-neutral justify-content-center bg-default" role="tablist">
                        <h6>Staff Login</h6>
                    </ul>
                    <form @submit.prevent="login" class="pt-1 pb-3">
                        <div class="card-body w-100 float-left">
                            <div class="col-sm-12 float-left px-0 px-md-3">
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
                            <div class="col-sm-12 float-left px-0 px-md-3">
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
                            <div class="col-sm-12 mb-3 float-left px-0 px-md-3">
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
                form: {
                    staff_id: '',
                    password: ''
                },
                cardMT: '',
                error: {},
            }
        },
        methods: {
            watchCardMT() {
                let winHeight = $(window).height(),
                    cardHeight = $('#loginCard').height();
                this.cardMT = (winHeight - cardHeight) / 2;
            },
            login() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if(this.$network()){
                            this.$LIPS(true);
                            this.error = {};
                            post('api/login', this.form)
                                .then((res) => {
                                    if (res.data.authenticated) {
                                        Auth.set(res.data);
                                        this.$router.push('/home');
                                        Flash.setSuccess('You have successfully logged in.');
                                    } else if (!res.data.authenticated) Flash.setError(res.data.message);
                                    this.$LIPS(false);
                                })
                                .catch((err) => {
                                    if (err.response.status === 422) {
                                        this.error = err.response.data;
                                        if (err.response.data.errors) this.error = err.response.data.errors;
                                    }
                                    this.$LIPS(false);
                                    Flash.setError('Check your login details and try again!');
                                });
                        }else{
                            this.$networkErr();
                        }
                    }
                    if (!result) {
                    }
                });
            }
        },
        beforeCreate() {
            if (localStorage.getItem('api_token')) this.$router.push('/home');
        },
        mounted() {
            this.watchCardMT();
        },
    }
</script>
<style></style>