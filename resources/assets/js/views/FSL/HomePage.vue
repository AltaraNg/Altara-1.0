<template>
    <transition name="fade">
        <div>
            <div class="col-md-4 float-left product py-md-3 pt-md-0 pt-2 pb-3 px-md-3 px-1">
                <div class="card my-0 px-3 py-2">
                    <div class="card-body">
                        <h5 class="card-title mt-0">Products Inventory</h5>
                        <p class="card-text">For products inventory and management.</p>
                        <router-link to="/inventory" class="btn bg-default">View Inventory</router-link>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {}
</script>