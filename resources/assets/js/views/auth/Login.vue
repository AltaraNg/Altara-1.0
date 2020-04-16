<template>
    <transition name="fade">
        <div id="login">
            <div :style="{ marginTop: `${cardMT}px`}" class="col-md-5 mx-auto" id="loginCard">
                <div class="card">
                    <ul class="nav nav-tabs justify-content-center bg-default"><h6>Staff Login</h6></ul>
                    <form @submit.prevent="login" class="pt-1 pb-3">
                        <div class="card-body clearfix px-5">
                            <div class="col-sm-12 px-0 px-md-3">
                                <label class="category">* Staff ID</label>
                                <div class="input-group">
                                    <input class="form-control" name="Staff ID"
                                           placeholder="Staff ID" v-model="form.staff_id" v-validate="'required'">
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
                                    <input class="form-control" name="password" placeholder="Password"
                                           type="password" v-model="form.password"
                                           v-validate="'required|min:6|max:25'">
                                    <span class="input-group-addon"><i class="ml-2 fas fa-key"></i></span>
                                </div>
                                <small class="error-control" v-if="errors.first('password')">
                                    {{errors.first('password') }}
                                </small>
                            </div>
                            <div class="col-sm-12 mb-4 px-0 px-md-3 pt-3">
                                <button :disabled="$isProcessing" class="btn btn-block bg-default" type="submit">
                                    Login! &nbsp; <i class="far fa-paper-plane"></i>
                                </button>
                            </div>
                            <span class="text-center float-left w-100 pb-4">Forgot Password? <router-link
                                    class="text-info" to="/password/forgot">Click here</router-link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Auth from '../../utilities/auth';
    import {post} from '../../utilities/api';
    import Flash from '../../utilities/flash';

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
                const past = this.$store.state.route.from.fullPath;
                this.$validator.validateAll().then(async result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            await post('/api/login', this.form)
                                .then(({data}) => {
                                    if (data.auth) {
                                        Auth.set(data);
                                        this.$store.dispatch('mutateAuth');
                                        this.$router.push(past);
                                        Flash.setSuccess(data.message);
                                    }
                                })
                                .catch(({response: {data}}) => {
                                    this.error = data.errors ? data.errors : data;
                                    Flash.setError(data.message);
                                });
                            this.$LIPS(false);
                        } else this.$networkErr();
                    }
                });
            }
        },
        beforeCreate() {
            !!localStorage.getItem('api_token') && this.$router.push('/home');
        },
        mounted() {
            this.cardMT = (window.innerHeight - $('#loginCard').height()) / 2;
            this.$LIPS(false);
        },
    }
</script>