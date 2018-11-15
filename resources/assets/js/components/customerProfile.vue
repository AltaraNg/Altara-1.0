<template>
    <div class="customer-profile card position-relative">
            <div class="design"></div>
            <div class="col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left">
                <div class="pt-md-3 pt-sm-2 pt-1">
                    <div class="justify-content-center d-flex position-relative z-1">
                        <span class="img-border">
                            <img v-if="customer.document.passport_url"
                                 :src="'https://s3.eu-west-2.amazonaws.com/altara-one/'+customer.document.passport_url"
                                 class="profile-picture rounded-circle" alt="customer profile pic">
                            <i v-else class="no-image fas fa-user-alt"></i>
                        </span>
                    </div>
                    <div class="justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2">
                        <span class="w-50">
                            <div class="text-right px-4 py-3 text-light text-muted m-0">
                                Status<i class="ml-3 fas fa-briefcase"></i>
                            </div>
                            <div class="data text-right px-4 py-3 m-0">{{customer.employment_status | capitalize}}</div>
                        </span>
                        <span class="separator"></span>
                        <span class="w-50">
                            <div class="px-4 py-3 text-muted text-light m-0">
                                <i class="mr-3 fas fa-transgender"></i>Gender
                            </div>
                            <div class="data px-4 py-3 m-0">{{customer.gender | capitalize}}</div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left">
                <div class="pt-md-4 pt-0 clearfix">
                    <div class="float-left p-0 m-0 col-md-4 col-sm-6 small-center">
                        <h4 class="mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3">
                            <i class="mr-3 far fa-user-circle"></i>
                            <strong>{{(customer.first_name + ' '+ customer.last_name) | capitalize}}</strong>
                        </h4>
                    </div>
                    <div class="float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center">
                        <h4 class="mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted">
                            <strong>Customer ID: {{customer.id}}</strong>
                        </h4>
                    </div>
                    <div class="float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center">
                        <span v-if="approved" class="status mt-md-5 my-sm-2 mt-0 approved shadow-sm">
                            APPROVED<i class="ml-3 fas fa-check"></i>
                        </span>
                        <span v-else class="status mt-md-5 my-sm-2 mt-0 not-approved shadow-sm">
                            NOT APPROVED<i class="ml-3 fas fa-times"></i>
                        </span>
                    </div>
                </div>
                <div class="pt-4">
                    <table class="table">
                        <tbody>
                        <tr>
                            <th class="text-muted"><i class="mr-3 fas fa-mobile-alt"></i>Phone Number</th>
                            <td>{{customer.telephone}}</td>
                        </tr>
                        <tr>
                            <th class="text-muted"><i class="mr-3 fas fa-map-marker-alt"></i>Address</th>
                            <td>{{customer.add_houseno + ', ' + customer.add_street + ', ' + customer.area_address +
                                ', ' + customer.city + ', ' + customer.state + ', ' | capitalize }}</td>
                        </tr>
                        <tr>
                            <th class="text-muted"><i class="mr-3 fas fa-gift"></i>Registered On</th>
                            <td>{{customer.date_of_registration}}</td>
                        </tr>
                        <tr>
                            <th class="text-muted"><i class="mr-3 far fa-user-circle"></i>Registered By</th>
                            <td>{{customer.user.full_name | capitalize}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        props: ['customer'],
        computed: {
            approved() {
                if (this.customer.verification.address === 1 &&
                    this.customer.verification.id_card === 1 &&
                    this.customer.verification.passport === 1 &&
                    this.customer.verification.processing_fee === 1 &&
                    this.customer.verification.work_guarantor === 1 &&
                    this.customer.verification.personal_guarantor === 1) {
                    return true
                } else return false;
                /*This component is the customer profile proper. for optimal result.
                * The data passed to this should be a response
                * from the CustomerController@show
                * this method is used to check the approval
                * status for any customer details
                * supplied to it.
                * NB all the params above must be
                * 1 for a customer t be approved*/
            }
        }
    }
</script>