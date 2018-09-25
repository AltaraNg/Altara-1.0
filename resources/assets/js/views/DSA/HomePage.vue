<template>
    <div class="Flo-Rel-FWid">
        <div class="col-md-4 float-left product py-md-3 pt-md-0 pt-2 pb-3 px-md-3 px-1">
            <div class="card Flo-Rel-FWid my-0">
                <div class="card-body">
                    <h4 class="card-title mt-0">Customer Registration</h4>
                    <p class="card-text">For Registering new customers.</p>
                    <router-link to="customer/register" class="btn bg-default">Register New Customer</router-link>
                </div>
            </div>
        </div>
        <div class="col-md-4 float-left product py-md-3 pt-0 pb-3 px-md-3 px-1">
            <div class="card Flo-Rel-FWid my-0">
                <div class="card-body">
                    <h4 class="card-title mt-0">Sales Lead Reporting</h4>
                    <p class="card-text">For real time DSA reports.</p>
                    <router-link to="report" class="btn bg-default">Get Reports</router-link>
                </div>
            </div>
        </div>
        <div class="col-md-4 float-left product py-md-3 pt-0 pb-3 px-md-3 px-1">
            <div class="card Flo-Rel-FWid my-0">
                <div class="card-body">
                    <h4 class="card-title mt-0">Customer List</h4>
                    <p class="card-text">View all the registered customers.</p>
                    <button class="btn bg-default">View Customer List</button>
                </div>
            </div>
        </div>
        <div class="col-md-4 float-left product py-md-3 pt-0 pb-3 px-md-3 px-1">
            <div class="card Flo-Rel-FWid">
                <div class="card-body">
                    <h4 class="card-title mt-0">DSA Logs</h4>
                    <p class="card-text">DSA Register/Logs</p>
                    <button class="btn bg-default">Create a Log</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>