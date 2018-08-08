<template>
    <transition name="fade">
        <div class="section-tabs" id="registration">
            <div class="col-md-8 ml-auto mr-auto">
                <div class="card">
                    <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                        <h6>Staff Registration</h6>
                    </ul>
                    <form   @submit.prevent="register">
                        <div class="card-body w-100 float-left">

                            <div class="Flo-Rel-FWid">



                                <div class="col-md-6 col-sm-12 float-left px-0 px-md-3">
                                    <label class="category">* First Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Enter first name"
                                               v-model="form.first_name" v-validate="'required|max:25|alpha'"
                                               name="first name">
                                        <span class="input-group-addon"><i class="fa fa-user-circle"></i></span>
                                    </div>
                                    <small class="error-control" v-if="errors.first('first name')">{{ errors.first('first name') }}
                                    </small>
                                    <!--<small class="error-control" v-if="error.first_name">{{error.first_name[0]}}</small>-->
                                </div>

                                <div class="col-md-6 col-sm-12 float-left px-0 px-md-3">
                                    <label class="category">* Last Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Enter last name"
                                               v-model="form.last_name" name="last name"
                                               v-validate="'required|max:25|alpha'">
                                        <span class="input-group-addon"><i class="fa fa-user-circle"></i></span>
                                    </div>
                                    <small class="error-control" v-if="errors.first('last name')">{{
                                        errors.first('last name') }}</small>
                                    <!--<small class="error-control" v-if="error.last_name">{{error.last_name[0]}}</small>-->

                                </div>

                            </div>

                            <div class="Flo-Rel-FWid">

                                <div class="col-md-6 col-sm-12 float-left px-0 px-md-3">
                                    <label class="category">* Email</label>
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="name@example.com"
                                               v-model="form.email" name="email" v-validate="'required|email'">
                                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                    </div>
                                    <small class="error-control" v-if="errors.first('email')">{{
                                        errors.first('email') }}</small>
                                    <!--<small class="error-control" v-if="error.email">{{error.email[0]}}</small>-->
                                </div>

                                <div class="col-md-6 col-sm-12 float-left px-0 px-md-3">
                                    <label class="category">* Staff ID Number</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="AC/C/013/18"
                                               v-model="form.staff_id" name="staff id" v-validate="'required'">
                                        <span class="input-group-addon"><i class="far fa-id-badge"></i></span>
                                    </div>
                                    <small class="error-control" v-if="errors.first('staff id')">{{
                                        errors.first('staff id') }}</small>
                                    <small class="error-control" v-if="error.staff_id">{{error.staff_id[0]}}</small>
                                </div>

                            </div>

                            <div class="Flo-Rel-FWid">

                                <div class="col-sm-12 float-left px-0 px-md-3">
                                    <label class="category">* Position</label>
                                    <div class="input-group">
                                        <select name="position"
                                                class="form-control"
                                                data-title="Single Select"
                                                data-menu-style="dropdown-blue"
                                                data-style="btn-default btn-outline" v-model="form.role_id"
                                                v-validate="'required'" data-vv-name="position">
                                            <option v-for="role in roles" :value="role.id">{{role.name}}</option>
                                        </select>
                                    </div>
                                    <small class="error-control" v-if="errors.first('position')">{{
                                        errors.first('position') }}</small>
                                    <!--<small class="error-control" v-if="error.role_id">{{error.role_id[0]}}</small>-->
                                </div>

                            </div>

                            <div class="Flo-Rel-FWid">

                                <div class="col-md-6 col-sm-12 float-left px-0 px-md-3">
                                    <label class="category">* Password</label>
                                    <div class="input-group">
                                        <input placeholder="Enter password" type="password" class="form-control"
                                               v-model="form.password" v-validate="'required|confirmed:pw_confirm'"
                                               name="password">
                                        <span class="input-group-addon"><i class="fas fa-key"></i></span>
                                    </div>
                                    <small class="error-control" v-if="errors.first('password')">{{
                                        errors.first('password') }}</small>
                                    <!--<small class="error-control" v-if="error.password">{{error.password[0]}}</small>-->
                                </div>

                                <div class="col-md-6 col-sm-12 float-left px-0 px-md-3">
                                    <label class="category">* Confirm Password</label>
                                    <div class="input-group">
                                        <input placeholder="re-enter password" type="password" class="form-control"
                                               v-model="form.password_confirmation" ref="pw_confirm" name="pw_confirm">
                                        <span class="input-group-addon"><i class="fas fa-key"></i></span>
                                    </div>
                                </div>

                            </div>

                            <div class="Flo-Rel-FWid">

                                <div class="col-sm-12 mt-2 mb-3 float-left px-0 px-md-3">
                                    <button :disabled="isProcessing" class="btn btn-block btn-lg btn-primary" data-background-color="orange" type="submit">
                                        Register! &nbsp; <i class="far fa-paper-plane"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Flash from '../../helpers/flash';
    import { post } from '../../helpers/api';
    export default{
        data() {
            return {
                roles:[
                    {id:1,name:'President'},
                    {id:2,name:'General Manager'},
                    {id:3,name:'Software Engineering Lead'},
                    {id:4,name:'Product Manager'},
                    {id:5,name:'Peoples Operation Lead'},
                    {id:6,name:'Collections Lead'},
                    {id:7,name:'Shop Operation Lead'},
                    {id:8,name:'Operation Lead'},
                    {id:9,name:'Software Developer'},
                    {id:10,name:'Direct Sales Lead'},
                    {id:11,name:'Direct Sales Agent'},
                    {id:12,name:'Shop Floor Assistant'},
                    {id:13,name:'Document Verification Agent'},
                    {id:14,name:'Document Collections Agent'},
                ],
                form: {
                    email:'',
                    role_id:'',
                    staff_id:'',
                    password: '',
                    last_name: '',
                    first_name: '',
                    password_confirmation: ''
                },
                error: {},
                isProcessing: false
            }
        },
        methods: {
            register() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        //validated
                        this.isProcessing = true;
                        this.error = {};
                        console.log(this.form);
                        post('api/register', this.form)
                            .then((res) => {
                                if(res.data.registered) {
                                    Flash.setSuccess('Congratulations! You have successfully registered.');
                                    this.$router.push('/login');
                                }
                                this.isProcessing = false;
                            })
                        .catch((err) => {
                            if(err.response.status === 422) {
                                this.error = err.response.data;
                                if(err.response.data.errors){
                                    this.error = err.response.data.errors;
                                }
                                console.log(this.error );
                            }
                            this.isProcessing = false;
                        })
                    }
                    if(!result){
                        //not validated
                        console.log('Kindly fill all the fields in the form!');
                    }
                });

            }
        },
        beforeCreate(){
            if(localStorage.getItem('api_token'))this.$router.push('/home');
        }
    }
</script>
