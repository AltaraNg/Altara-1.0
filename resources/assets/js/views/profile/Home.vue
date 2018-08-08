<template>
    <div id="profile-view">
        <h1>This is the Profile Page Layout!</h1>
        <li v-for="classmate in classmates">{{classmate.name}}  |  Department  : {{classmate.dept}}</li>

        {{getUser}}
        <br>
        {{getMother}}
        <br>
        <button v-on:click="mutateMother('I love you mum')">change the mum name</button>
        <router-view/>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';
    export default{
        data(){
            return{}
        },
        computed:{
            classmates(){
                return this.$store.state.classmates;
            },
            ...mapGetters([
                'getUser',
                'getMother',
            ]),
        },
        methods:{
            /*mutMother(res){
                this.$store.dispatch('mutateMother',res);
            },*/
            ...mapActions([
                'mutateMother'
            ])
        }
    }
</script>
<style type="scss" scoped>

</style>