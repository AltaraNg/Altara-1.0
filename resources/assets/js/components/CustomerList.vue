<template>
    <transition name="fade">
        <div class="px-md-4 px-2">
            <app-navigation :pageTitle="'General Customer List'" :pageTitleSmall="'Customers'"
                            :previous="{ path: $routerHistory.previous().path }"
                            :forward="{ path: $routerHistory.next().path }"/>
            <div class="float-left w-100 pt-md-3 pt-2 clearfix" id="index">
                <div class="card">
                    <ul class="nav nav-tabs justify-content-center bg-default"><h6>Customer List</h6></ul>
                    <data-viewer source="/api/customer" title="Customer Data" appModel="customer"/>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import DataViewer from './DataViewer';
    import AppNavigation from './AppNavigation';

    export default {
        components: {DataViewer, AppNavigation}
    }
</script>