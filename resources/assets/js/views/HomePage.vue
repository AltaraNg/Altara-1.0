<template>
    <div class="col-md-12 Flo-Rel px-md-3 p-0">
        <div class="col-md-4 float-left product py-md-3 py-0 px-md-4 px-3">
            <!--<router-link class="card" to="/customer-register">-->
            <router-link class="card" to="dsa/home">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                    <h6 class="text-center">DSA Portal</h6>
                </ul>
                <div class="card-body Flo-Rel-FWid">
                    <div class="text-center w-100 float-left">
                        <i class="fas fa-id-card"></i>
                        <p class="pt-md-3 pt-2">For the DSA Agents.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-md-4 float-left product py-md-3 py-0 px-md-4 px-3">
            <router-link to="dva/home" class="card">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                    <h6 class="text-center">DVA Portal</h6>
                </ul>
                <div class="card-body Flo-Rel-FWid">
                    <div class="text-center w-100 float-left">
                        <i class="fas fa-file-signature"></i>
                        <p class="pt-md-3 pt-2">For the DVA Agents.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-md-4 float-left product py-md-3 py-0 px-md-4 px-3">
            <router-link to="hrm/home" class="card">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                    <h6 class="text-center">HRM Portal</h6>
                </ul>
                <div class="card-body Flo-Rel-FWid">
                    <div class="text-center w-100 float-left">
                        <i class="fas fa-female"></i>
                        <i class="fas fa-male"></i>
                        <p class="pt-md-3 pt-2">For the HRM officers.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-md-4 float-left product py-md-3 py-0 px-md-4 px-3">
            <a href="http://catalog-altara.herokuapp.com/" target="_blank" class="card">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                    <h6 class="text-center">Altara Catalogue</h6>
                </ul>
                <div class="card-body Flo-Rel-FWid">
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
    export default{

        beforeCreate(){
            if(!(this.$store.state.ProfileAccess.indexOf(role_id) !== -1) && !localStorage.getItem('api_token')){
                Flash.setError('You dont have access to that page!');
                this.$router.push('/login');
            }
        },

    }
</script>