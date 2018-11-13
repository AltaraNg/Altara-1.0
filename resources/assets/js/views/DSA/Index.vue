<template>
    <div class="px-md-4 px-2">
        <app-navigation :pageTitle="'Direct Sales Agents'" :pageTitleSmall="'DSA'"
                        :previous="{ path: $routerHistory.previous().path }"
                        :forward="{ path: $routerHistory.next().path }"/>
        <router-view/>
    </div>
</template>
<script>
    import AppNavigation from '../../components/AppNavigation';

    export default {
        components: {AppNavigation}
    }
</script>