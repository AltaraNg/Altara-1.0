<template>
    <div class="side-nav float-left" v-if="showSideNav" :class="{ 'active': sideNavActive }" id="appSideNav">
        <div class="side-nav-header w-100 text-center float-left">
            <a class="float-right" @click="sideNavActive = !sideNavActive"><i class="fas fa-bars"></i></a>
        </div>
        <div class="float-left position-relative w-100 p-2 side-nav-link">
            <router-link to="/home" class="p-3 w-100 float-left">
                <i class="fas fa-home icon mt-2 float-left"></i>
                <span class="name font-weight-bold mt-2 float-left ml-2" :class="{'hide':sideNavActive}">Home</span>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showSideNav: window.innerWidth > 990,
                sideNavActive: true,
            }
        },
    }
</script>