<template>
    <transition name="fade">
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
                            <!--<a class="navbar-brand p-0" @click="runQuery" href="#">
                                <img class="float-left" :src="`/images/altara_logo.png`">
                            </a>-->
                            <button type="button"
                                    aria-expanded="false"
                                    data-toggle="collapse"
                                    data-target="#navigation"
                                    aria-label="Toggle navigation"
                                    aria-controls="navigation-index"
                                    class="navbar-toggler navbar-toggler-right">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse justify-content-end" id="navigation">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link to="/home" class="nav-link">
                                        <i class="fas fa-home pr-1"></i> Home
                                    </router-link>
                                </li>
                                <li class="nav-item dropdown" v-if="auth">
                                    <span class="nav-link dropdown-toggle" id="menu" data-toggle="dropdown"
                                          aria-haspopup="true" aria-expanded="false">
                                        <i class="now-ui-icons users_circle-08"></i> {{authState.user_name | capitalize}}
                                    </span>
                                    <div class="dropdown-menu" aria-labelledby="menu">
                                        <router-link to="/user/profile" class="dropdown-item p-4">
                                            <i class="now-ui-icons ui-1_settings-gear-63 pr-1"></i> My Profile
                                        </router-link>
                                        <span class="dropdown-item p-4" @click.stop="logout">
                                        <i class="now-ui-icons media-1_button-power pr-1"></i> Logout
                                    </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <transition name="fade">
                    <div data-anim="animated" class="alert alert-success mr-4 ml-4" v-if="flash.success">
                        <div class="container">
                            <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                            <strong class="mr-2">Success!</strong>&nbsp;{{flash.success}}
                            <button type="button" @click="clearFlash" class="close" aria-label="Close">
                                <span aria-hidden="true">
                                    <i class="now-ui-icons ui-1_simple-remove ml-4" style="font-size: 16px"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div data-anim="animated" class="alert alert-danger ml-4 mr-4" v-if="flash.error">
                        <div class="container">
                            <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                            <strong class="mr-2">Oops!</strong>&nbsp;{{flash.error}}
                            <button type="button" @click="clearFlash" class="close" aria-label="Close">
                                <span aria-hidden="true">
                                    <i class="now-ui-icons ui-1_simple-remove ml-4" style="font-size: 16px"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </transition>
                <router-view></router-view>
            </div>
        </div>
    </transition>
</template>
<script>
    import Auth from "./store/auth";
    import Flash from "./helpers/flash";
    import Loader from "./components/Loader.vue";
    import SideNav from "./components/SideNav.vue";
    import {interceptors, post, get} from "./helpers/api";

    export default {
        components: {
            SideNav,
            Loader
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
                if (err.response.status === 404) this.$router.push("/not-found");
            });
            window.addEventListener('load', () => {
                this.showStatus(navigator.onLine);
                window.addEventListener('online', () => this.showStatus(true));
                window.addEventListener('offline', () => this.showStatus(false));
            });
        },
        computed: {
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
                    post("/api/logout").then(res => {
                        if (res.data.logged_out) {
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
            }/*,
            async runQuery() {
                try {
                    this.$LIPS(true);
                    const result = await get("/api/runQuery");
                    console.log(result);
                    this.$LIPS(false);
                } catch (e) {
                    Flash.setError('Error Running query :(');
                }
            }*/
        },
    };
</script>