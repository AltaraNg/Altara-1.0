<template>
    <div class="Flo-Rel-FWid px-md-4 px-2">
        <h4 class="mx-md-3 mx-0 py-0 my-0"><strong>Document Verifications Agents(DVA) Portal</strong></h4>
        <router-view/>
    </div>
</template>
<script>
    import Flash from '../../helpers/flash';
    export default{
        beforeCreate(){
            if(!(this.$store.state.DVAAccess.indexOf(parseInt(localStorage.getItem('role'))) !== -1) &&
                !localStorage.getItem('api_token')){
                Flash.setError('You dont have access to that page!');
                this.$router.push('/login');
            }
        },
    }
</script>