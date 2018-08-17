<template>
    <div class="Flo-Rel-FWid px-md-4 px-2">
        <h4 class="mx-md-3 mx-1 py-0 my-0"><strong>Direct Sales Agents(DSA) Portal</strong></h4>
        <router-view/>
    </div>
</template>
<script>
    import Flash from '../../helpers/flash';
    export default{
        beforeCreate(){
            if(!(this.$store.state.DSAAccess.indexOf(parseInt(localStorage.getItem('role'))) !== -1) &&
                !localStorage.getItem('api_token')){
                Flash.setError("You don't have access to that page!");
                this.$router.push('/login');
            }
        },
    }
</script>