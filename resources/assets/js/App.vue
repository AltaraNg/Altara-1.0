<template>
    <transition name="fade">
        <div>
            <loader/>
            <side-nav v-if="auth"/>
            <div class="main" id="main">
                <nav class="navbar navbar-expand-lg bg-white" v-if="auth">
                    <div class="container">
                        <div class="navbar-translate">
                            <router-link class="navbar-brand p-0" to="/home">
                                <img :src="`/images/altara_logo.png`" class="float-left">
                            </router-link>
                            <button aria-controls="navigation-index" aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    class="navbar-toggler navbar-toggler-right" data-target="#navigation"
                                    data-toggle="collapse" type="button">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse justify-content-end" id="navigation">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/home"><i class="fas fa-home pr-1"></i> Home
                                    </router-link>
                                </li>
                                <li class="nav-item dropdown" v-if="auth">
                                    <span aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle"
                                          data-toggle="dropdown" id="menu">
                                        <i class="now-ui-icons users_circle-08"></i> {{authState.user_name | capitalize}}
                                    </span>
                                    <div aria-labelledby="menu" class="dropdown-menu">
                                        <router-link class="dropdown-item p-4" to="/user/profile">
                                            <i class="now-ui-icons ui-1_settings-gear-63 pr-1"></i> My Profile
                                        </router-link>
                                        <span @click.stop="logout" class="dropdown-item p-4">
                                            <i class="now-ui-icons media-1_button-power pr-1"></i> Logout
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <transition name="fade">
                    <div class="alert alert-success mr-4 ml-4" data-anim="animated" v-if="flash.success">
                        <div class="container">
                            <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                            <strong class="mr-2">Success!</strong>&nbsp;{{flash.success}}
                            <button @click="clearFlash" aria-label="Close" class="close" type="button">
                                <span aria-hidden="true">
                                   <i class="now-ui-icons ui-1_simple-remove ml-4" style="font-size: 16px"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="alert alert-danger ml-4 mr-4" data-anim="animated" v-if="flash.error">
                        <div class="container">
                            <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                            <strong class="mr-2">Oops!</strong>&nbsp;{{flash.error}}
                            <button @click="clearFlash" aria-label="Close" class="close" type="button">
                                <span aria-hidden="true">
                                   <i class="now-ui-icons ui-1_simple-remove ml-4" style="font-size: 16px"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </transition>
                <router-view></router-view>
            </div>
            <SMSModal v-if="showSMSModal"/>
            <ChangeCustomerManagerModal v-if="showCustomerManagerModal"/>
        </div>
    </transition>
</template>
<script>
    import {mapGetters} from "vuex";
    import Auth from "./utilities/auth";
    import Flash from "./utilities/flash";
    import Loader from "./components/Loader.vue";
    import SideNav from "./components/SideNav.vue";
    import {interceptors, post} from "./utilities/api";
    import SMSModal from './components/CustomSMSButton/SMSModal';
    import ChangeCustomerManagerModal from './components/modals/ChangeCustomerManagerModal';

    export default {
        components: {
            SideNav,
            Loader,
            SMSModal,
            ChangeCustomerManagerModal
        },
        data() {
            return {
                flash: Flash.state,
                authState: Auth.state,
            };
        },
        beforeCreate() {
            Auth.initialize();
            /*if (localStorage.getItem("api_token")) {
                this.$router.push("/home");
                Flash.setSuccess("Welcome Back!");
            }*/
            if (!localStorage.getItem("api_token")) {
                Flash.setError("You have to Login!");
                this.$router.push("/login");
            }
        },
        created() {
            interceptors(err => {
                if (err.response.status === 401) {
                    Auth.remove();
                    this.$router.push("/login");
                }
                if (err.response.status === 500) Flash.setError(err.response.statusText);
                if (err.response.status === 404 && this.auth) this.$router.push("/not-found");
            });
            window.addEventListener('load', () => {
                this.showStatus(navigator.onLine);
                window.addEventListener('online', () => this.showStatus(true));
                window.addEventListener('offline', () => this.showStatus(false));
            });
        },
        computed: {
            ...mapGetters('ModalAccess', ['showCustomerManagerModal', 'showSMSModal']),
            auth() {
                return this.authState.api_token && this.authState.user_id;
            },
            guest() {
                return !this.auth;
            },
        },
        methods: {
            logout() {
                if (this.$network()) {
                    this.$LIPS(true);
                    post("/api/logout").then(({data}) => {
                        if (data.logged_out) {
                            this.$LIPS(false);
                            Auth.remove();
                            Flash.setSuccess("You have successfully logged out!");
                            this.$router.push("/login");
                        }
                    });
                } else this.$networkErr();
            },
            showStatus(online) {
                online ? Flash.setSuccess('you are connected to the internet!') : this.$networkErr();
            },
            clearFlash() {
                Flash.removeMsg();
            }
        },
    };
</script>
