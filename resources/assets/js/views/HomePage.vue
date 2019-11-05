<template>
    <div class="col-md-12 px-md-3 p-0">
        <!--<div v-for="{name,url,icon} in cards" v-if="$store.getters.auth(name+'Access')"-->
        <div v-for="{name,url,icon} in cards" v-if="auth(name+'Access')"
             class="col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3">
            <router-link class="card" :to="url">
                <ul class="nav nav-tabs bg-default justify-content-center"><h6>{{name}} Portal</h6></ul>
                <div class="card-body float-left w-100">
                    <div class="text-center w-100 float-left">
                        <i class="fas" :class="icon"></i>
                        <p class="pt-md-3 pt-2">For the {{name}} Agents.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3">
            <a href="http://catalog.altaracredit.com/" target="_blank" class="card">
                <ul class="nav nav-tabs bg-default justify-content-center">
                    <h6>Altara Catalogue</h6>
                </ul>
                <div class="card-body float-left w-100">
                    <div class="text-center w-100 float-left">
                        <i class="far fa-images"></i>
                        <p class="pt-md-3 pt-2">Official Altara Online Catalogue</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
    import Auth from '../utilities/auth';
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                cards: [
                    {name: 'DSA', url: 'dsa/home', icon: 'fa-id-card'},
                    {name: 'DVA', url: 'dva/home', icon: 'fa-file-signature'},
                    {name: 'HRM', url: 'hrm/home', icon: 'fa-user'},
                    {name: 'FSL', url: 'fsl/home', icon: 'fa-box'},
                    {name: 'LOG', url: 'log/home', icon: 'fa-truck'},
                    {name: 'CAG', url: 'CAG/home', icon: 'fa-id-card'},
                    {name: 'ALTARAPAY', url: 'altarapay/home', icon: 'fa-money-bill-alt'}
                ]
            }
        },
        computed: {
            ...mapGetters(['auth']),
        },
        beforeCreate() {
            Auth.initialize();
            if (!this.$store.state.api_token && !this.$store.state.authRole) this.$store.dispatch('mutateAuth');
        },
    }
</script>