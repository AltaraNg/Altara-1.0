<template>
    <transition name="fade">
        <div>
            <div class="col-md-4 col-sm-6 float-left product p-3">
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