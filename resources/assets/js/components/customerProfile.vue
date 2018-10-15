<template>
    <div class="px-3">
        <div class="card position-relative">
            <div class="design"></div>
            <div class="col-md-4 col-12 px-0 pb-4 pt-5 float-left">
                <div class="pt-3">
                    <div class="justify-content-center d-flex position-relative z-1">
                        <span class="img-border">
                            <img v-if="customer.document.passport_url" :src="'/images/'+customer.document.passport_url"
                                 class="profile-picture rounded-circle"
                                 alt="customer profile pic">
                            <i v-else class="no-image fas fa-user-alt"></i>
                        </span>
                    </div>
                    <div class="justify-content-center d-flex position-relative z-1 pt-4">
                        <span class="w-50">
                            <div class="text-right px-4 py-3 text-light text-muted m-0">Status</div>
                            <div class="data text-right px-4 py-3 m-0">{{customer.employment_status | capitalize}}</div>
                        </span>
                        <span class="separator"></span>
                        <span class="w-50">
                            <div class="px-4 py-3 text-muted text-light m-0">Gender</div>
                            <div class="data px-4 py-3 m-0">{{customer.gender | capitalize}}</div>
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-md-8 col-12 px-0 pb-4 pt-5 float-left">
                <div class="pt-4 clearfix">
                    <div class="float-left p-0 m-0 col-md-4">
                        <h3 class="pt-5">
                            <strong>{{(customer.first_name + ' '+ customer.last_name) | capitalize}}</strong>
                        </h3>
                    </div>
                    <div class="float-left p-0 m-0 col-md-4">
                        <h3 class="pt-5" style="color: rgba(0,0,0,0.5)">
                            <strong>Customer ID: {{customer.id}}</strong>
                        </h3>
                    </div>
                    <div class="float-left p-0 m-0 col-md-4">
                        <span v-if="approved" class="status approved shadow-sm ">APPROVED
                            <i class="ml-3 fas fa-check"></i></span>
                        <span v-if="!approved" class="status not-approved shadow-sm">NOT APPROVED
                            <i class="ml-3 fas fa-times"></i></span>
                    </div>
                </div>
                <div class="pt-5">
                    <table class="table">
                        <tbody>
                        <tr>
                            <th class="text-muted">Phone Number</th>
                            <td>{{customer.telephone}}</td>
                        </tr>
                        <tr>
                            <th class="text-muted">Address</th>
                            <td>
                                {{customer.add_houseno + ', ' +
                                customer.add_street + ', ' +
                                customer.area_address + ', ' +
                                customer.city + ', ' +
                                customer.state + ', ' | capitalize
                                }}
                            </td>
                        </tr>
                        <tr>
                            <th class="text-muted">Member since</th>
                            <td>{{customer.Date_of_Registration}}</td>
                        </tr>
                        <tr>
                            <th class="text-muted">Registered By</th>
                            <td>{{customer.user.full_name | capitalize}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: {
            customer: '',
        },
        methods: {},
        computed: {
            approved() {
                if(this.customer.verification.id_card === 1 &&
                    this.customer.verification.passport === 1 &&
                    this.customer.verification.address_status === 1 &&
                    this.customer.verification.work_guarantor_status === 1 &&
                    this.customer.verification.personal_guarantor_status === 1) { return true }else{ return false};
            }
        }
    }
</script>
<style>
    table {
        margin-top : 1.5rem;
    }

    th {
        width       : 20%;
        font-weight : normal;
    }

    td, .data {
        font-size   : 1.6rem;
        font-weight : 400;
    }

    .status {
        padding       : 1.5rem 4rem;
        float         : left;
        margin        : 2rem 4rem;
        color         : white;
        border-radius : .5rem;
        box-shadow    : 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
        font-weight   : 700;
        font-size     : 1.6rem;
    }

    .status.approved {
        background-color : rgb(0, 163, 104);
    }

    .status.not-approved {
        background-color : rgb(200, 22, 24);
    }

    .design {
        position   : absolute;
        top        : 15rem;
        bottom     : 0;
        left       : 0;
        width      : 101%;
        height     : calc(100% - 10.1rem);
        z-index    : 0;
        background : linear-gradient(45deg, #dedede 0%, #ffffff 100%);
    }

    .profile-picture {
        height     : 19rem;
        width      : 19rem;
        box-shadow : 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    }

    .z-1 {
        z-index : 1;
    }

    .img-border {
        padding          : 1.5rem;
        background-color : white;
        border-radius    : 50%;
    }

    .separator {
        position         : absolute;
        left             : 50%;
        height           : 70%;
        width            : 1px;
        background-color : rgba(0, 0, 0, 0.1);
        top              : 3%;
    }

    .no-image {
        height           : 19rem;
        width            : 19rem;
        background-color : #e3e3e3;
        border-radius    : 50%;
        line-height      : 19rem;
        text-align       : center;
        font-size        : 10rem;
        color            : rgba(0, 0, 0, 0.15);
    }
</style>