<template>
    <div>
      
       <side-nav v-if="auth"></side-nav>
        <div class="main" id="main">
            <nav v-if="auth" class="navbar navbar-expand-lg bg-white">
                <div class="container">
                    <div class="navbar-translate">
                        <router-link class="navbar-brand p-0" to="/home"><img class="float-left" :src="`/images/altara_logo.png`"></router-link>
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
                                <span class="nav-link dropdown-toggle" id="menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="now-ui-icons users_circle-08"></i>{{user_name}}
                                </span>
                                <div class="dropdown-menu" aria-labelledby="menu">
                                    <router-link to="/user/profile" class="dropdown-item">
                                        <i class="now-ui-icons ui-1_settings-gear-63 pr-1"></i>
                                        My Profile
                                    </router-link>
                                    <span class="dropdown-item"><i class="now-ui-icons arrows-1_refresh-69 pr-1"></i>Manage Customers</span>
                                    <span class="dropdown-item" @click.stop="logout"><i class="now-ui-icons media-1_button-power pr-1"></i>Logout</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="alert alert-success mr-4 ml-4" role="alert" v-if="flash.success" style="background-color:#00982f;">
                <div class="container">
                    <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                    <strong>Success!</strong>&nbsp;{{flash.success}}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                </div>
            </div>

            <div class="alert alert-danger ml-4 mr-4" role="alert" v-if="flash.error">
                <div class="container">
                    <div class="alert-icon"><i class="far fa-thumbs-up"></i></div>
                    <strong>Oops!</strong>&nbsp;{{flash.error}}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                </div>
            </div>

<transition name="fade" v-if="guest">
        <!--<div class="section section-tabs" id="login">-->
        <div class="mt-1 mt-sm-5 section-tabs" id="login">
            <div class="col-md-5 ml-auto mr-auto">
                <div class="card">
                    <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
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
                                <small class="error-control" v-if="errors.first('Staff ID')">{{ errors.first('Staff ID') }}
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
                                    errors.first('password') }} </small>
                                <small class="error-control" v-if="error.password">{{error.password[0]}}</small>
                            </div>
                            <div class="col-sm-12 mb-3 float-left px-0 px-md-3">
                                <button class="btn btn-block btn-lg btn-primary" type="submit" data-background-color="orange">
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

          <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Auth from "./store/auth";
import Flash from "./helpers/flash";
import Loader from "./components/Loader.vue";
import SideNav from "./components/SideNav.vue";
import { post, interceptors } from "./helpers/api";
export default {
  components: {
    SideNav,
    Loader
  },
  data() {
    return {
      flash: Flash.state,
      authState: Auth.state,
      user_name: localStorage.getItem("user_name"),
      form: {
        staff_id: "",
        password: ""
      },
      error: {},
      isProcessing: false
    };
  },
  beforeCreate() {
    if (localStorage.getItem("api_token")) this.$router.push("/home");
  },
  created() {
    interceptors(err => {
      if (err.response.status === 401) {
        Auth.remove();
        this.$router.push("/");
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
  watch: {
  },
  methods: {
    login() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.isProcessing = true;
          this.error = {};
          post("api/login", this.form)
            .then(res => {
              if (res.data.authenticated) {
                Auth.set(
                  res.data.api_token,
                  res.data.user_id,
                  res.data.user_name,
                  res.data.role
                );
                Flash.setSuccess("You have successfully logged in.");
                this.$router.push("/home");
              }
              this.isProcessing = false;
            })
            .catch(err => {
              if (err.response.status === 422) {
                this.error = err.response.data;
                if (err.response.data.errors) {
                  this.error = err.response.data.errors;
                }
                if (err.response.data.email) {
                  this.error = err.response.data;
                }
              }
              this.isProcessing = false;
              Flash.setError("Check your login details and try again!");
            });
        }
        if (!result) {
          console.log("Kindly fill all the fields in the form!");
        }
      });
    },
    logout() {
      post("/api/logout").then(res => {
        if (res.data.logged_out) {
          Auth.remove();
          Flash.setSuccess("You have successfully logged out!");
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
<style type="scss" scoped>
li > .nav-link:hover,
li > .router-link-active,
li > .router-link-exact-active {
  background-color: #074a74 !important;
  border-radius: 4px;
  font-weight: 500;
  color: white !important;
}
.navbar-brand {
  font-size: 26px;
  font-weight: 500;
  color: #074a74 !important;
  text-transform: capitalize;
}
.alert {
  position: absolute !important;
  z-index: 101 !important;
}
</style>