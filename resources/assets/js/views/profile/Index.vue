<template>
    <div id="profile-view">
        <router-view/>
    </div>
</template>
<script>
    import Auth from '../../store/auth';
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';
    import Flash from '../../helpers/flash';
    export default{
        data(){
            return{
                Auth:Auth.state,
            }
        },
        computed:{
            ...mapGetters([
                'getProfileAccess'
            ]),
        },
        methods:{
            ...mapActions([

            ]),
        },
        beforeCreate(){
            const role_id = parseInt(localStorage.getItem('role'));
            this.$store.dispatch('mutateProfileAccess', role_id);
            if(!(this.$store.state.ProfileAccess.indexOf(role_id) !== -1) || !localStorage.getItem('api_token')){
                Flash.setError('You dont have access to that page!');
                this.$router.push('/login');
            }
        },
        created(){
            console.log(this.getProfileAccess);
        }
    }
</script>
<style type="scss" scoped>

</style>