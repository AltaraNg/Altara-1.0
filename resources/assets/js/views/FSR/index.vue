<template>
    <div class="Flo-Rel-FWid px-md-4 px-2">
        <h4 class="mx-md-3 mx-0 py-0 my-0 text-center" id="index">
            <router-link
                    v-if="$routerHistory.hasPrevious()"
                    :to="{ path: $routerHistory.previous().path }"
                    class="text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3"
                    id="back">
                <span class="mr-5 float-left">
                    <i class="far fa-arrow-alt-circle-left float-left"></i>
                    <span class="back float-left ml-2 d-none d-sm-block">Back</span>
                </span>
            </router-link>
            <strong class="mx-auto d-none d-sm-block w-100 float-left" data-title="title">
                <span>Floor Sales and Logistics</span> Portal
            </strong>
            <strong class="mx-auto d-block d-sm-none w-100 float-left" data-title="title">
                <span>FSL</span> Portal
            </strong>
            <router-link
                    v-if="$routerHistory.hasForward()"
                    :to="{ path: $routerHistory.next().path }"
                    class="text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3"
                    id="forward">
                <span class="ml-5 float-right">
                    <i class="far fa-arrow-alt-circle-right float-right"></i>
                    <span class="forward float-right mr-2 d-none d-sm-block">Forward</span>
                </span>
            </router-link>
        </h4>
        <router-view/>
    </div>
</template>
<script>
    import Flash from '../../helpers/flash';
    export default{
         beforeCreate(){
             if (!(this.$store.state.FSRAccess.indexOf(parseInt(localStorage.getItem('role'))) !== -1) &&
                 !localStorage.getItem('api_token')) {
                 Flash.setError('You do not have access to that page!');
                 this.$router.push('/home');
             }
         },
    }
</script>