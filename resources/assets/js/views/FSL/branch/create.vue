<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="employeeEdit">
            <div class="card">
                <ul class="nav nav-tabs justify-content-center bg-default"><h6>Create Branch</h6></ul>
                <div class="card-body pl-4 pr-4">
                    <branch-form action="create"/>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import BranchForm from '../utility/branchForm';

    export default {
        components: {BranchForm},
    }
</script>