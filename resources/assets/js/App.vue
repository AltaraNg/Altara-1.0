<template>
    <div>
        <loader/>
        <side-nav v-if="auth"/>
        <div class="main" id="main">
            <nav v-if="auth" class="navbar navbar-expand-lg bg-white">
                <div class="container">
                    <div class="navbar-translate">
                        <router-link class="navbar-brand p-0" to="/home">
                            <img class="float-left" :src="`/images/altara_logo.png`">
                        </router-link>
                        <button type="button"
                                aria-expanded="false"
                                data-toggle="collapse"
                                data-target="#navigation"
                                aria-label="Toggle navigation"
                                aria-controls="navigation-index"
                                class="navbar-toggler navbar-toggler-right">
                            <i class="fas fa-bars"></i>
                            <!--<span class="navbar-toggler-bar bar1"></span>
                            <span class="navbar-toggler-bar bar2"></span>
                            <span class="navbar-toggler-bar bar3"></span>-->
                        </button>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/home" class="nav-link">
                                    <i class="fas fa-home pr-1"></i>
                                    Home
                                </router-link>
                            </li>
                            <li class="nav-item" v-if="guest">
                                <router-link to="/login" class="nav-link">
                                    <i class="fas fa-sign-in-alt pr-1"></i>
                                    Login
                                </router-link>
                            </li>
                            <li class="nav-item dropdown" v-if="auth">
                                <span class="nav-link dropdown-toggle" id="menu" data-toggle="dropdown"
                                      aria-haspopup="true" aria-expanded="false">
                                    <i class="now-ui-icons users_circle-08"></i>{{authState.user_name | capitalize}}
                                </span>
                                <div class="dropdown-menu" aria-labelledby="menu">
                                    <router-link to="/user/profile" class="dropdown-item">
                                        <i class="now-ui-icons ui-1_settings-gear-63 pr-1"></i>
                                        My Profile
                                    </router-link>
                                    <span class="dropdown-item"><i class="now-ui-icons arrows-1_refresh-69 pr-1"></i>Manage Customers</span>
                                    <span class="dropdown-item" @click.stop="logout">
                                        <i class="now-ui-icons media-1_button-power pr-1"></i>Logout</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <transition name="fade">
                <div data-anim="animated" class="alert alert-success mr-4 ml-4" role="alert" v-if="flash.success"
                     style="background-color:#00982f;">
                    <div class="container">
                        <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                        <strong class="mr-2">Success!</strong>&nbsp;{{flash.success}}
                        <button type="button" class="close ml-3" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div data-anim="animated" class="alert alert-danger ml-4 mr-4" role="alert" v-if="flash.error">
                    <div class="container">
                        <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                        <strong class="mr-2">Oops!</strong>&nbsp;{{flash.error}}
                        <button type="button" class="close ml-3" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                    </div>
                </div>
            </transition>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Auth from "./store/auth";
    import Flash from "./helpers/flash";
    import Loader from "./components/Loader.vue";
    import SideNav from "./components/SideNav.vue";
    import {post, interceptors} from "./helpers/api";
    export default {
        components: {
            SideNav,
            Loader
        },
        data() {
            return {
                flash: Flash.state,
                authState: Auth.state,
                isProcessing: false
            };
        },
        beforeCreate() {
            /*if (localStorage.getItem("api_token")) {
                this.$router.push("/home");
                Flash.setSuccess("Welcome Back!");
            }*/
            if (!localStorage.getItem("api_token")) {
                this.$router.push("/login");
                Flash.setError("You have to Login!");
            }
        },
        created() {
            interceptors(err => {
                if (err.response.status === 401) {
                    Auth.remove();
                    this.$router.push("/login");
                }
                if (err.response.status === 500) {
                    Flash.setError(err.response.statusText);
                }
                if (err.response.status === 404) {
                    this.$router.push("/not-found");
                }
            });
            Auth.initialize();
        },
        computed: {
            auth() {
                return this.authState.api_token && this.authState.user_id;
            },
            guest() {
                return !this.auth;
            },
        },
        watch: {},
        methods: {
            LIPS(s){
                this.$store.state.loader = this.isProcessing = s;
            },
            logout() {
                this.LIPS(true);
                post("/api/logout").then(res => {
                    if (res.data.logged_out) {
                        this.LIPS(false);
                        Auth.remove();
                        Flash.setSuccess("You have successfully logged out!");
                        this.$router.push("/login");
                    }
                });
            }
        },
        mounted(){
        }
    };
</script>
<style type="scss" scoped>
    li > .nav-link:hover,
    li > .router-link-active,
    li > .router-link-exact-active {
        background-color : #074a74 !important;
        border-radius    : 4px;
        font-weight      : 500;
        color            : white !important;
    }

    .navbar-brand {
        font-size      : 26px;
        font-weight    : 500;
        color          : #074a74 !important;
        text-transform : capitalize;
    }

    .alert {
        position : absolute !important;
        z-index  : 101 !important;
        border-radius: 5px;
    }

    .fade-enter-active, .fade-leave-active {
        transition : opacity .7s;
    }
</style>