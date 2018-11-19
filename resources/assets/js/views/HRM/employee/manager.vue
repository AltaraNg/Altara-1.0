<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="employeeEdit">
            <div class="card">
                <ul class="nav nav-tabs justify-content-center bg-default"><h6>Staff Management</h6></ul>
                <data-viewer source="/api/user" title="User Data" appModel="user"/>
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