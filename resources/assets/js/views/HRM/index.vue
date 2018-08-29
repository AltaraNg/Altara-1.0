<template>
    <div class="Flo-Rel-FWid px-md-4 px-2">
        <h4 class="mx-md-3 mx-0 py-0 my-0 text-center" id="index">
            <router-link
                    v-if="$routerHistory.hasPrevious()"
                    :to="{ path: $routerHistory.previous().path }"
                    class="text-secondary float-left ml-4 pl-3"
                    id="back">
                <span class="mr-5 float-left">
                    <i class="far fa-arrow-alt-circle-left float-left"></i>
                    <span class="back float-left ml-2">Back</span>
                </span>
            </router-link>
            <strong class="mx-auto">Human Resource Management Portal</strong>
            <router-link
                    v-if="$routerHistory.hasForward()"
                    :to="{ path: $routerHistory.next().path }"
                    class="text-secondary float-right mr-4 pr-3"
                    id="forward">
                <span class="ml-5 float-right">
                    <i class="far fa-arrow-alt-circle-right float-right"></i>
                    <span class="forward float-right mr-2">Forward</span>
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
            /*if (!(this.$store.state.HRAccess.indexOf(parseInt(localStorage.getItem('role'))) !== -1) &&
                !localStorage.getItem('api_token')) {
                Flash.setError('You dont have access to that page!');
                this.$router.push('/login');
            }*/
        },
    }
</script>