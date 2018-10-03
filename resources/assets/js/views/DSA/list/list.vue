<template>
    <transition name="fade">
        <div class="float-left w-100 pt-md-3 pt-2" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center bg-default">
                    <h6>Report Generation</h6>
                </ul>
                <data-viewer source="/api/customer" title="Customer Data"/>
            </div>
        </div>
    </transition>
</template>
<script>
    import DataViewer from '../../../components/DataViewer';
    export default{
        components: {DataViewer}
    }
</script>