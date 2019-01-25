<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="index">
            <div class="card">
                <ul class="nav nav-tabs justify-content-center bg-default"><h6>Manage Branches</h6></ul>
                <data-viewer source="/api/branch" title="Branch(s)" appModel="branch"/>
            </div>
        </div>
    </transition>
</template>
<script>
    import DataViewer from '../../../components/DataViewer';

    export default {
        components: {DataViewer},
    }
</script>
