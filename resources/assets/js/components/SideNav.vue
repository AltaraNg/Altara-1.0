<template>
    <div class="side-nav" v-if="!showSideNav" v-bind:class="{ 'active': sideNavActive }" id="appSideNav">
        <div class="side-nav-header w-100 float-left ">
            <a href="#" class="float-right" @click="toggleSideNav()"><i class="fas fa-bars"></i></a></div>
        <div class="float-left position-relative w-100 p-2 side-nav-link">
            <router-link to="/home" class="p-3 w-100 float-left">
                <i class="fas fa-home icon mt-1 float-left"></i>
                <span class="name mt-2 float-left ml-2" v-bind:class="{hide:sideNavActive}">Home</span>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                showSideNav:true,
                sideNavActive:true,
                window: {
                    width: 0,
                    height: 0
                }
            }
        },
        methods:{
            toggleSideNav(){
                this.sideNavActive = ((this.sideNavActive == false));
            },
            /*toggleLoader(){
                if(this.$store.state.loader === true){
                    return this.$store.state.loader = false
                }else{
                    return this.$store.state.loader = true
                }
            }*/
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
                if(this.window.width >= 990){
                    this.showSideNav = false;
                }
            },
        },
        created(){
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
    }
</script>