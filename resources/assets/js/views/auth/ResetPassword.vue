<template>
    <transition name="fade">
        <div id="forgotPasswordCard">
            <div :style="{ marginTop: `${cardMT}px`}" class="col-md-5 mx-auto" id="forgotPasswordCard">
                <div class="card">
                    <ul class="nav nav-tabs justify-content-center bg-default"><h6>PASSWORD RESET FORM</h6></ul>
                     <form @submit.prevent="reset" class="pt-1 pb-3">
                        <div class="card-body clearfix px-5">
                            <div class="col-sm-12 px-0 px-md-3">
                                <label class="category">* PASSWORD</label>
                               <div class="input-group">
                                    <input class="form-control" name="password"
                                           :type="pass" v-model="form.password"
                                           v-validate="'required|min:6|max:25'">
                                    <span class="input-group-addon" @click="showPassword"><i class="ml-2" :class="icon"></i></span>
                                </div>
                              <small class="error-control" v-if="errors.first('password')">
                                    {{errors.first('password') }}
                                </small>
                            </div>
                            <br/>
                            <div class="col-sm-12 px-0 px-md-3">
                                <label class="category">* CONFIRM PASSWORD</label>
                                <div class="input-group">
                                    <input class="form-control" name="confirm password"
                                           :type="pass1" v-model="form.password_confirmation"
                                           v-validate="'required|min:6|max:25'">
                                    <span class="input-group-addon" @click="showPassword1"><i class="ml-2" :class="icon1"></i></span>
                                </div>
                                <small class="error-control" v-if="errors.first('confirm password')">
                                    {{errors.first('confirm password') }}
                                </small>
                            </div>
                            <div class="col-sm-12 mb-4 px-0 px-md-3 pt-3">
                                <button :disabled="validator()" class="btn btn-block bg-default" type="submit">
                                   RESET
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
    import Auth from '../../utilities/auth';
    import {put} from '../../utilities/api';
    import Flash from '../../utilities/flash';
    import VueSweetalert2 from 'vue-sweetalert2';

    Vue.use(VueSweetalert2);


    export default {
        data() {
            return {
                form: {password: '', password_confirmation: ''},
                cardMT: '',
                error: {},
                icon: "far fa-eye",
                pass: "password",
                icon1: "far fa-eye",
                pass1: "password",
            }
        },
        methods: {
              validator(){
               if (!this.form.password_confirmation || !this.form.password_confirmation || this.$isProcessing || this.errors.first('password') || this.errors.first('confirm password')){
                   return true;
               }
            },
            showPassword(){
                this.pass = this.pass === 'password' ?  'text' : 'password';
                this.icon = this.icon === 'far fa-eye-slash' ?  'far fa-eye' : 'far fa-eye-slash';
            },
            showPassword1(){
                this.pass1 = this.pass1 === 'password' ?  'text' : 'password';
                this.icon1 = this.icon1 === 'far fa-eye-slash' ?  'far fa-eye' : 'far fa-eye-slash';
            },
            async reset() {
                if (this.form.password !== this.form.password_confirmation ){
                    return this.$swal({
                        icon: 'error',
                        title: 'Passwords do not match',
                    });
                }
                this.$LIPS(true);
                this.error = {};

                const data = {
                    token: this.$route.params.token, 
                    password: this.form.password, 
                    password_confirmation: this.form.password_confirmation
                }

                await put('/api/password/reset',data)
                .then(({data}) => {
                    this.$LIPS(false);  
                    this.$swal({
                        icon: 'success',
                        title: 'Password Reset Successful'
                    })
                    .then((result) => {
                        if (result.value) {
                            this.$router.push("/login");
                        } 
                    });
                })
                .catch(({response: {data}}) => {
                    console.log('err',data);
                    this.error = data.errors ? data.errors : data;
                    this.$swal({
                        icon: 'error',
                        title: data.error_message,
                    });
                    this.$LIPS(false);  
                });
            }
        },
        mounted() {
            this.cardMT = (window.innerHeight - $('#forgotPasswordCard').height()) / 2;
            this.$LIPS(false);
        },
    }
</script>