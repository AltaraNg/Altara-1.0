<template>
    <h4 class="mx-md-3 mx-0 py-0 my-0 text-center" id="index">
        <router-link v-if="$routerHistory.hasPrevious()" :to="previous"
                class="text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3" id="back">
                <span class="mr-5 float-left">
                    <i class="far fa-arrow-alt-circle-left float-left"></i>
                    <small class="back float-left ml-2 d-none d-sm-block">Back</small>
                </span>
        </router-link>
        <strong class="mx-auto w-100 float-left" data-title="title">
            <span class="d-none d-sm-block">{{pageTitle}} Portal</span>
            <span class="d-block d-sm-none">{{pageTitleSmall}} Portal</span>
        </strong>
        <router-link v-if="$routerHistory.hasForward()" :to="forward"
                class="text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3" id="forward">
                <span class="ml-5 float-right">
                    <i class="far fa-arrow-alt-circle-right float-right"></i>
                    <small class="forward float-right mr-2 d-none d-sm-block">Forward</small>
                </span>
        </router-link>
    </h4>
</template>
<script>
    export default {
        /*router navigation is used in the entire app for in app navigaton(basically previous and next)
        * the : pageTitle is the title of the page where this navigation component is used
        * the : pageTitleSmall is the minimized title for the small screen view
        * the previous is the this.$routerHistory.previous().path sent from the parent component
        * the forward is the this.$routerHistory.next().path sent from the parent component*/
        props: ['pageTitle', 'pageTitleSmall','previous','forward']
    }
</script>