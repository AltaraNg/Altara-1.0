<template>
    <div id="profile-view">
        <router-view/>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';
    import Auth from '../../utilities/auth';
    import Flash from '../../utilities/flash';
    export default{
        data(){
            return {
                Auth: Auth.state,
            }
        },
        computed: {
            ...mapGetters([
                'getProfileAccess'
            ]),
        },
        methods: {
            ...mapActions([]),
        },
        beforeCreate(){
            const role_id = parseInt(localStorage.getItem('role'));
            this.$store.dispatch('mutateProfileAccess', role_id);
            if (!(this.$store.state.ProfileAccess.indexOf(role_id) !== -1) && !localStorage.getItem('api_token')) {
                Flash.setError('You do not have access to that page!');
                this.$router.push('/login');
            }
        },
    }
</script>