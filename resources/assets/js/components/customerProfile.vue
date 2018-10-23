<template>
    <div class="px-3">
        <div class="card position-relative">
            <div class="design"></div>
            <div class="col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left">
                <div class="pt-md-3 pt-sm-2 pt-1">
                    <div class="justify-content-center d-flex position-relative z-1">
                        <span class="img-border">
                            <img v-if="customer.document.passport_url" :src="'/images/'+customer.document.passport_url"
                                 class="profile-picture rounded-circle"
                                 alt="customer profile pic">
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
                        <span v-if="approved" class="status mt-md-5 my-sm-2 mt-0 approved shadow-sm ">
                            APPROVED<i class="ml-3 fas fa-check"></i>
                        </span>
                        <span v-if="!approved" class="status mt-md-5 my-sm-2 mt-0 not-approved shadow-sm">
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
                            <th class="text-muted"><i class="mr-3 fas fa-gift"></i>Member since</th>
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
                if (this.customer.verification.id_card === 1 &&
                    this.customer.verification.passport === 1 &&
                    this.customer.verification.address_status === 1 &&
                    this.customer.verification.work_guarantor_status === 1 &&
                    this.customer.verification.personal_guarantor_status === 1) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>
<style scoped>
    th {
        width       : auto;
        font-weight : normal;
    }

    td, .data {
        font-size   : 1.5rem;
        font-weight : 500;
    }

    .status {
        padding       : 1.2rem 3rem;
        float         : left;
        color         : white;
        border-radius : .5rem;
        box-shadow    : 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);
        font-weight   : 700;
        font-size     : 1.3rem;
    }

    .status.approved {
        background-color : rgb(0, 163, 104);
    }

    .status.not-approved {
        background-color : rgb(200, 22, 24);
    }

    .design {
        position   : absolute;
        top        : 13rem;
        bottom     : 0;
        left       : 0;
        width      : 101%;
        height     : calc(100% - 8.1rem);
        z-index    : 0;
        background : linear-gradient(45deg, #dedede 0%, #ffffff 100%);
    }

    .profile-picture, .no-image {
        height     : 16rem;
        width      : 16rem;
        box-shadow : 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);
    }

    .no-image {
        background-color : #e3e3e3;
        border-radius    : 50%;
        line-height      : 16rem;
        text-align       : center;
        font-size        : 8rem;
        color            : rgba(0, 0, 0, 0.15);
    }

    .z-1 {
        z-index : 1;
    }

    .img-border {
        padding          : 1.1rem;
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

    @media (max-width : 600px) {
        .design {
            background : linear-gradient(180deg, #dedede 0%, #ffffff 100%);
        }

        .separator[data-v-3b07ec64] {
            top : -11%;
        }

        .small-center {
            text-align : center;
        }

        th {
            width : 35%;
        }

        tbody {
            padding : 1rem 1rem 0;
            float   : left;
        }
    }
</style>