<template>
    <div class="col-md-12 px-md-3 p-0">
        <div v-if="verifyDSAAccess" class="col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3">
            <router-link class="card" to="dsa/home">
                <ul class="nav nav-tabs bg-default justify-content-center">
                    <h6>DSA Portal</h6>
                </ul>
                <div class="card-body float-left w-100">
                    <div class="text-center w-100 float-left">
                        <i class="fas fa-id-card"></i>
                        <p class="pt-md-3 pt-2">For the DSA Agents.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div v-if="verifyDVAAccess" class="col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3">
            <router-link to="dva/home" class="card">
                <ul class="nav nav-tabs bg-default justify-content-center">
                    <h6>DVA Portal</h6>
                </ul>
                <div class="card-body float-left w-100">
                    <div class="text-center w-100 float-left">
                        <i class="fas fa-file-signature"></i>
                        <p class="pt-md-3 pt-2">For the DVA Agents.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div v-if="verifyHRMAccess" class="col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3">
            <router-link to="hrm/home" class="card">
                <ul class="nav nav-tabs bg-default justify-content-center">
                    <h6>HRM Portal</h6>
                </ul>
                <div class="card-body float-left w-100">
                    <div class="text-center w-100 float-left">
                        <i class="fas fa-female"></i>
                        <i class="fas fa-male"></i>
                        <p class="pt-md-3 pt-2">For the HRM officers.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div v-if="verifyFSLAccess" class="col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3">
            <router-link to="fsl/home" class="card">
                <ul class="nav nav-tabs bg-default justify-content-center">
                    <h6>Floor Sales Portal</h6>
                </ul>
                <div class="card-body float-left w-100">
                    <div class="text-center w-100 float-left">
                        <i class="fas fa-box"></i>
                        <p class="pt-md-3 pt-2">For Floor sales Representatives</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3">
            <a href="http://catalog-altara.herokuapp.com/" target="_blank" class="card">
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
    import Auth from '../store/auth'
    import {mapActions, mapGetters} from 'vuex';

    export default {
        beforeCreate() {
            Auth.initialize();
            this.$store.dispatch('mutateAuth');
        },
        computed: {
            ...mapGetters([
                'verifyDSAAccess',
                'verifyDVAAccess',
                'verifyHRMAccess',
                'verifyFSLAccess',
            ]),
        },
        methods: {
            ...mapActions([]),
        }
    }
</script>