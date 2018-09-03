<template>
    <transition name="fade">
        <div class="section-tabs" id="login">
            <div class="col-md-5 ml-auto mr-auto" id="loginCard" v-bind:style="{ marginTop: cardMT+'px'}">
                <div class="card">
                    <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist"
                        data-background-color="orange">
                        <h6>Staff Login</h6>
                    </ul>
                    <form @submit.prevent="login" class="pt-1 pb-3">
                        <div class="card-body fullWidth floLeft">

                            <div class="col-sm-12 float-left px-0 px-md-3">
                                <label class="category">* Staff ID</label>
                                <div class="input-group">
                                    <input class="form-control" placeholder="Staff ID"
                                           v-model="form.staff_id" v-validate="'required'" name="Staff ID">
                                    <span class="input-group-addon"><i class="fa fa-user-circle"></i></span>
                                </div>
                                <small class="error-control"
                                       v-if="errors.first('Staff ID')">{{ errors.first('Staff ID') }}
                                </small>
                                <small class="error-control" v-if="error.staff_id">{{error.staff_id[0]}}</small>
                                <small class="error-control" v-if="error.email">{{error.email[0]}}</small>
                            </div>
                            <div class="col-sm-12 float-left px-0 px-md-3">
                                <label class="category">* Password</label>
                                <div class="input-group">
                                    <input placeholder="Password" type="password" class="form-control"
                                           v-model="form.password" v-validate="'required|min:6|max:25'"
                                           name="password">
                                    <span class="input-group-addon"><i class="fas fa-key"></i></span>
                                </div>
                                <small class="error-control" v-if="errors.first('password')">{{
                                    errors.first('password') }}
                                </small>
                                <small class="error-control" v-if="error.password">{{error.password[0]}}</small>
                            </div>
                            <div class="col-sm-12 mb-3 float-left px-0 px-md-3">
                                <button class="btn btn-block btn-lg btn-primary" type="submit"
                                        data-background-color="orange">
                                    Login! &nbsp; <i class="far fa-paper-plane" :disabled="isProcessing"></i>
                                </button>
                            </div>
                            <span class="text-center float-left w-100 pb-4">Forgot Password? <router-link
                                    to="/forgotPassword">Click here</router-link></span>
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
    export default{
        data(){
            return {
                form: {
                    staff_id: '',
                    password: ''
                },
                cardMT: '',
                error: {},
                isProcessing: false
            }
        },
        methods: {
            watchCardMT(){
                let winHeight = $(window).height();
                let cardHeight = $('#loginCard').height();
                this.cardMT = (winHeight - cardHeight) / 2;
            },
            login() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$store.state.loader = this.isProcessing = true;
                        this.error = {};
                        post('api/login', this.form)
                            .then((res) => {
                                if (res.data.authenticated === true) {
                                    Auth.set(res.data.api_token, res.data.user_id, res.data.user_name, res.data.role,
                                        res.data.portal_access);
                                    this.$router.push('/home');
                                    this.$store.state.loader = this.isProcessing = false;
                                    Flash.setSuccess('You have successfully logged in.' );
                                } else if (res.data.authenticated === false) {
                                    this.$store.state.loader = this.isProcessing = false;
                                    Flash.setError(res.data.message);
                                }
                            })
                            .catch((err) => {
                                if (err.response.status === 422) {
                                    this.error = err.response.data;
                                    if (err.response.data.errors) {
                                        this.error = err.response.data.errors;
                                    }
                                    if (err.response.data.email) {
                                        this.error = err.response.data;
                                    }
                                }
                                this.$store.state.loader = this.isProcessing = false;
                                Flash.setError('Check your login details and try again!');
                            });
                    }
                    if (!result) {
                        console.log('Kindly fill all the fields in the form!');
                    }
                });
            }
        },
        beforeCreate(){
            if (localStorage.getItem('api_token')) this.$router.push('/home');
        },
        computed: {},
        mounted(){
            this.watchCardMT();
        },
    }
</script>
<style></style>