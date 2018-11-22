<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs justify-content-center bg-default"><h6>Staff Registration</h6></ul>
                <div class="card-body pl-4 pr-4">
                    <utility-form action="register"/>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import UtilityForm from '../utility/form';

    export default {
        components:{
            UtilityForm
        },
    }
</script>