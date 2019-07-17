<template>
    <div class="clearfix pt-md-3 pt-2" id="customerRegister">
        <verification :action="'update'" @update="updateCustomer" v-if="mode === 'update'"/>
        <div class="card" v-if="newCustomer.id && mode === 'update' || mode === 'register'">
            <ul class="nav nav-tabs justify-content-center bg-default">
                <h6>{{mode | capitalize}} Customer</h6>
            </ul>
            <div class="card-body pl-4 pr-4 clearfix">
                <form @submit.prevent="register">
                    <!--form section for register starts here-->
                    <div v-if="mode === 'register'">

                        <h5>Occupation</h5>

                        <div class="form-group col-md-12 px-md-12 px-1">
                            <label>Select Occupation</label> <br>
                            <span   v-for="occupation in occupations" v-bind:class="{ active: isActive }"  class="badge badge-primary"  @click="check(occupation.id)">{{occupation.jobType}}</span> &nbsp;
                         <hr>
                          <span v-if="isClick" v-for=" name in occName" class="badge badge-default">{{name}}</span> &nbsp;
<!--                            
                            <small v-if="errors.first('emp_name')">
                                {{errors.first('emp_name')}}
                            </small> -->
                        </div>
                        <h5>Employee Details</h5>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Employee Name</label>
                            <input class="form-control" data-vv-name="employee name" disabled
                                   name="emp_name" placeholder="Enter Employee name here" type="text"
                                   v-model="newCustomer.employee_name" v-validate="'required|max:50'">
                            <small v-if="errors.first('emp_name')">
                                {{errors.first('emp_name')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Employee ID (Staff ID)</label>
                            <input class="form-control" data-vv-as="employee phone number" disabled
                                   name="employee_id" placeholder="Enter Employee number here" type="text"
                                   v-model="newCustomer.employee_id" v-validate="'required'">
                            <small v-if="errors.first('employee_id')">
                                {{errors.first('employee_id')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Date</label>
                            <input class="form-control" data-vv-as="Date of Registration" disabled
                                   name="date_of_registration" type="date" v-model="newCustomer.date_of_registration"
                                   v-validate="'required'">
                            <small v-if="errors.first('date_of_registration')">
                                {{errors.first('date_of_registration')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Customer Personal Details</h5>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>First Name</label>
                            <input class="form-control" data-vv-as="first name" name="first_name"
                                   placeholder="Enter First name here.." type="text" v-model="newCustomer.first_name"
                                   v-validate="'required|max:25'">
                            <small v-if="errors.first('first_name')">
                                {{errors.first('first_name')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Middle Name</label>
                            <input class="form-control" placeholder="Enter Middle name here.." type="text"
                                   v-model="newCustomer.middle_name">
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Last Name</label>
                            <input class="form-control" data-vv-as="last name" name="last_name"
                                   placeholder="Enter Last name here.." type="text" v-model="newCustomer.last_name"
                                   v-validate="'required|max:25'">
                            <small v-if="errors.first('last_name')">
                                {{errors.first('last_name')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label class="w-100 float-left">Gender</label>
                            <div class="radio p-0 col-md-6 col-6 float-left" v-for="sex in gender">
                                <input :id="sex" :value="sex" name="gender" type="radio" v-model="newCustomer.gender"
                                       v-validate="'required'">
                                <label :for="sex">{{sex}}</label>
                            </div>
                            <small v-if="errors.first('gender')">
                                {{errors.first('gender')}}
                            </small>
                        </div>

                        <div class="form-group col-md-8 px-md-3 px-1 float-left">
                            <label>Phone Number</label>
                            <input class="form-control" name="telephone" placeholder="Enter Phone number here.."
                                   type="tel" v-model="newCustomer.telephone"
                                   v-validate="'required|numeric|max:11|min:11'">
                            <small v-if="errors.first('telephone')">{{errors.first('telephone')}}</small>
                            <small v-if="error.telephone">{{error.telephone[0]}}</small>
                        </div>
                        <div class="spaceAfter"></div>
                    </div>
                    <!--form section for register stops here-->

                    <!--form section for register and update starts here-->
                    <div v-if="mode === 'register' || $store.getters.auth('DVAAccess')">
                        <h5>Address</h5>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Street Name</label>
                            <input class="form-control" data-vv-as="street name" name="street_name"
                                   placeholder="Enter street name here.." type="text"
                                   v-model="newCustomer.add_street" v-validate="'required|max:25'">
                            <small v-if="errors.first('street_name')">
                                {{errors.first('street_name')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>House Number</label>
                            <input class="form-control" data-vv-as="house number" name="house_number"
                                   placeholder="Enter House number here.." type="text"
                                   v-model="newCustomer.add_houseno" v-validate="'required'">
                            <small v-if="errors.first('house_number')">
                                {{errors.first('house_number')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Nearest Bus Stop</label>
                            <input class="form-control" data-vv-as="nearest bus stop" name="nearest_bus_stop"
                                   placeholder="Enter nearest bus stop here.." type="text"
                                   v-model="newCustomer.add_nbstop" v-validate="'required'">
                            <small v-if="errors.first('nearest_bus_stop')">
                                {{errors.first('nearest_bus_stop')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Area</label>
                            <input class="form-control" name="area" placeholder="Enter area here.."
                                   type="text" v-model="newCustomer.area_address" v-validate="'required|max:25'">
                            <small v-if="errors.first('area')">
                                {{errors.first('area')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>City</label>
                            <input class="form-control" name="city" placeholder="Enter city here.."
                                   type="text" v-model="newCustomer.city" v-validate="'required|max:25'">
                            <small v-if="errors.first('city')">
                                {{errors.first('city')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>State</label>
                            <select class="custom-select w-100" data-vv-validate-on="blur" name="state"
                                    v-model="newCustomer.state"
                                    v-validate="'required'">
                                <option value="">select state</option>
                                <option v-bind:value="state.name" v-for="state in states">{{state.name}}</option>
                            </select>
                            <small v-if="errors.first('state')">{{errors.first('state')}}</small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-12 px-md-3 px-1 float-left">
                            <label>Describe Location</label>
                            <textarea class="form-control col-sm-12" placeholder="Describe the Location"
                                      rows="1" v-model="newCustomer.add_addinfo_description"></textarea>
                        </div>

                        <div class="spaceAfter"></div>
                    </div>
                    <!--form section for register and update stops here-->

                    <!--form section for register starts here-->
                    <div v-if="mode === 'register'">


                        <h5>Others</h5>

                        <div class="form-group col-md-2 px-md-3 px-1 float-left">
                            <label>Date of Birth</label>
                            <input class="form-control" data-vv-as="date of birth" name="date_of_birth"
                                   type="date" v-model="newCustomer.date_of_birth" v-validate="'required'">
                            <small v-if="errors.first('date_of_birth')">
                                {{errors.first('date_of_birth')}}
                            </small>
                        </div>

                        <div class="form-group col-md-8 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Civil Status</label>
                            <div class="radio pl-1 pr-3 float-left" v-for="status in civilStatus">
                                <input :id="status" :value="status" data-vv-as="civil status" name="civil_status"
                                       type="radio" v-model="newCustomer.civil_status" v-validate="'required'">
                                <label :for="status">{{status}}</label>
                            </div>
                            <small v-if="errors.first('civil_status')">
                                {{errors.first('civil_status')}}
                            </small>
                        </div>

                        <div class="form-group col-md-2 px-md-3 px-1 float-left"
                             v-if="!(newCustomer.civil_status === 'single')">
                            <label>Years together</label>
                            <input class="form-control" data-vv-as="years together" name="years_together"
                                   placeholder="years together.." type="number"
                                   v-model="newCustomer.year_together" v-validate="'required|numeric|max:2'">
                            <small v-if="errors.first('years_together')">
                                {{errors.first('years_together')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Household Details</h5>

                        <div class="form-group col-md-5 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Type of Home</label>
                            <div class="radio pl-1 pr-3 float-left" v-for="typeOfHome in typesOfHome">
                                <input :id="typeOfHome" :value="typeOfHome" data-vv-as="type of home"
                                       name="typeOfHome"
                                       type="radio" v-model="newCustomer.type_of_home" v-validate="'required'">
                                <label :for="typeOfHome">{{typeOfHome}}</label>
                            </div>
                            <small v-if="errors.first('typeOfHome')">
                                {{errors.first('typeOfHome')}}
                            </small>
                        </div>

                        <div class="form-group col-md-5 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Number of Rooms</label>
                            <div class="radio pl-1 pr-3 float-left" v-for="noOfRoom in noOfRooms">
                                <input :id="noOfRoom" :value="noOfRoom" data-vv-as="number of rooms" name="noOfRoom"
                                       type="radio" v-model="newCustomer.no_of_rooms" v-validate="'required'">
                                <label :for="noOfRoom">{{noOfRoom}}</label>
                            </div>
                            <small v-if="errors.first('noOfRoom')">
                                {{errors.first('noOfRoom')}}
                            </small>
                        </div>

                        <div class="form-group col-md-2 px-md-3 px-1 float-left">
                            <label>Duration of Residence</label>
                            <input class="form-control" data-vv-as="duration of residence" name="duration_of_residence"
                                   placeholder="Duration of residence.." type="number"
                                   v-model="newCustomer.duration_of_residence" v-validate="'required|numeric|max:2'">
                            <small v-if="errors.first('duration_of_residence')">
                                {{errors.first('duration_of_residence')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-6 px-md-3 px-1 float-left">
                            <label>How many people live in your household?</label>
                            <input class="form-control" data-vv-as="number in household" name="number_in_household"
                                   placeholder="Enter number here.." type="number"
                                   v-model="newCustomer.people_in_household"
                                   v-validate="'required|numeric|max:2'">
                            <small v-if="errors.first('number_in_household')">
                                {{errors.first('number_in_household')}}
                            </small>
                        </div>

                        <div class="form-group col-md-6 px-md-3 px-1 float-left">
                            <label>How many work?</label>
                            <input class="form-control" data-vv-as="how many work" name="how_many_work"
                                   placeholder="Enter number here.." type="number"
                                   v-model="newCustomer.number_of_work" v-validate="'required|numeric|max:2'">
                            <small v-if="errors.first('how_many_work')">
                                {{errors.first('how_many_work')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-6 px-md-3 px-1 float-left">
                            <label>How many people depend on you?</label>
                            <input class="form-control" data-vv-as="no depend on you" name="no_depend_on_you"
                                   placeholder="Enter number here.." type="number"
                                   v-model="newCustomer.depend_on_you" v-validate="'required|numeric|max:2'">
                            <small v-if="errors.first('no_depend_on_you')">
                                {{errors.first('no_depend_on_you')}}
                            </small>
                        </div>

                        <div class="form-group col-md-6 px-md-3 px-1 float-left">
                            <label>Number of Children</label>
                            <input class="form-control" data-vv-as="number of children" name="number_of_children"
                                   placeholder="Enter number here.." type="number"
                                   v-model="newCustomer.number_of_children" v-validate="'required|numeric|max:2'">
                            <small v-if="errors.first('number_of_children')">
                                {{errors.first('number_of_children')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Education Details</h5>

                        <div class="form-group col-md-12 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Highest Level of Education</label>
                            <div class="radio pl-1 pr-3 float-left" v-for="highestLevel in highestLevelOfEdu">
                                <input :id="highestLevel" :value="highestLevel" data-vv-as="highest level of education"
                                       name="highestLevel" type="radio" v-model="newCustomer.level_of_education"
                                       v-validate="'required'">
                                <label :for="highestLevel">{{highestLevel}}</label>
                            </div>
                            <small v-if="errors.first('highestLevel')">
                                {{errors.first('highestLevel')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Time Available for Visit</h5>

                        <div class="form-group col-md-6 float-left">
                            <label>From</label>
                            <input class="form-control" data-vv-as="time from" name="time_from"
                                   type="time" v-model="newCustomer.visit_hour_from" v-validate="'required'">
                            <small v-if="errors.first('time_from')">
                                {{errors.first('time_from')}}
                            </small>
                        </div>

                        <div class="form-group col-md-6 float-left">
                            <label>To:</label>
                            <input class="form-control" data-vv-as="time to" name="time_to"
                                   type="time" v-model="newCustomer.visit_hour_to" v-validate="'required'">
                            <small v-if="errors.first('time_to')">
                                {{errors.first('time_to')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Additional Information</h5>

                        <div class="form-group col-md-3 col-6 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Loan From other Institutions</label>
                            <div class="radio pl-1 pr-3 float-left">
                                <input data-vv-as="loan from other" id="loanYes" name="otherLoan"
                                       type="radio" v-model="newCustomer.loan_from_institution" v-validate="'required'"
                                       value="yes">
                                <label for="loanYes">Yes</label>
                            </div>
                            <div class="radio pl-1 pr-3 float-left">
                                <input id="loanNo" name="otherLoan" type="radio"
                                       v-model="newCustomer.loan_from_institution" value="no">
                                <label for="loanNo">No</label>
                            </div>
                            <small v-if="errors.first('otherLoan')">
                                {{errors.first('otherLoan')}}
                            </small>
                        </div>

                        <transition name="fade">
                        <span v-if="(newCustomer.loan_from_institution === 'yes')">
                            <div class="form-group col-md-3 col-6 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Did you pay back?</label>
                                <div class="radio pl-1 pr-3 float-left">
                                    <input data-vv-as="did you pay back" id="payBackYes"
                                           name="payBack"
                                           type="radio" v-model="newCustomer.did_you_pay_back" v-validate="'required'"
                                           value="yes">
                                    <label for="payBackYes">Yes</label>
                                </div>
                                <div class="radio pl-1 pr-3 float-left">
                                    <input id="payBackNo" name="payBack"
                                           type="radio"
                                           v-model="newCustomer.did_you_pay_back" value="no">
                                    <label for="payBackNo">No</label>
                                </div>
                                <small v-if="errors.first('payBack')">
                                    {{errors.first('payBack')}}
                                </small>
                            </div>

                            <div class="form-group col-md-3 col-12 px-md-3 px-1 float-left">
                                <label>Loan amount</label>
                                <input class="form-control" placeholder="Enter amount here.." type="number"
                                       v-model="newCustomer.loan_amount">
                            </div>
                        </span>
                        </transition>

                        <div class="form-group col-md-3 col-12 px-md-3 px-1 float-left">
                            <label>Email Address</label>
                            <input class="form-control" placeholder="Enter email here" type="email"
                                   v-model="newCustomer.email">
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Work Details</h5>

                        <div class="form-group col-md-12 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Employment Status</label>
                            <div class="radio pl-1 pr-3 float-left" v-for="status in employmentStatus">
                                <input :id="status" :value="status" data-vv-as="employment status" name="status"
                                       type="radio" v-model="newCustomer.employment_status" v-validate="'required'">
                                <label :for="status">{{status}}</label>
                            </div>
                            <small v-if="errors.first('status')">
                                {{errors.first('status')}}
                            </small>
                        </div>

                        <transition name="fade">
                            <div v-if="newCustomer.employment_status === 'formal'">
                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Phone number of working/business individual in household</label>
                                    <input class="form-control" data-vv-as="office phone"
                                           name="office_phone"
                                           placeholder="Enter Phone Number here"
                                           type="tel"
                                           v-model="newCustomer.working_individual_Phone_number"
                                           v-validate="'required|numeric|max:11|min:11'">
                                    <small v-if="errors.first('office_phone')">
                                        {{errors.first('office_phone')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Name of the company</label>
                                    <input class="form-control" data-vv-as="name of firm"
                                           name="name_of_firm"
                                           placeholder="Enter name of company here" type="text"
                                           v-model="newCustomer.name_of_company_or_business"
                                           v-validate="'required|max:100'">
                                    <small v-if="errors.first('name_of_firm')">
                                        {{errors.first('name_of_firm')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Current Salary</label>
                                    <input class="form-control" data-vv-as="current salary"
                                           name="current_salary" placeholder="Current Salary or Monthly income"
                                           type="number" v-model="newCustomer.current_sal_or_business_income"
                                           v-validate="'required'">
                                    <small v-if="errors.first('current_salary')">
                                        {{errors.first('current_salary')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Position/post in the company</label>
                                    <input class="form-control" placeholder="Enter position/post here" type="text"
                                           v-model="newCustomer.post_in_company">
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label class="w-100 float-left pl-1">How do you receive salary?</label>
                                    <div class="radio pl-1 pr-3 float-left" v-for="means in receiveIncomeMeans">
                                        <input :id="means" :value="means" data-vv-as="income means"
                                               name="means" type="radio" v-model="newCustomer.receive_income_means"
                                               v-validate="'required'">
                                        <label :for="means">{{means}}</label>
                                    </div>
                                    <small v-if="errors.first('means')">
                                        {{errors.first('means')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label class="w-100 float-left pl-1">Payment Period</label>
                                    <div class="radio pl-1 pr-3 float-left" v-for="period in paymentPeriod">
                                        <input :id="period"
                                               :value="period"
                                               data-vv-as="payment period"
                                               name="period"
                                               type="radio"
                                               v-model="newCustomer.payment_period"
                                               v-validate="'required'">
                                        <label :for="period">{{period}}</label>
                                    </div>
                                    <small v-if="errors.first('period')">
                                        {{errors.first('period')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-3 px-md-3 px-1 float-left">
                                    <label>Duration in Current work</label>
                                    <select class="custom-select w-100"
                                            data-vv-as="work duration"
                                            data-vv-validate-on="blur"
                                            name="work_duration"
                                            v-model="newCustomer.years_of_existence_or_work_duration"
                                            v-validate="'required'">
                                        <option value="">select duration</option>
                                        <option :value="duration" v-for="duration in durations">{{duration}}</option>
                                    </select>
                                    <small v-if="errors.first('work_duration')">
                                        {{errors.first('work_duration')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-9 px-md-3 px-1 float-left">
                                    <label class="w-100 float-left">Days of Work</label>
                                    <div class="checkbox float-left pr-3" v-for="day in weekdays">
                                        <input :id="day" :value="day" data-vv-as="days of work" name="days_of_work"
                                               type="checkbox" v-model="newCustomer.days_of_work"
                                               v-validate="'required'">
                                        <label :for="day">{{day}}</label>
                                    </div>
                                    <small v-if="errors.first('days_of_work')">
                                        {{errors.first('days_of_work')}}
                                    </small>
                                </div>

                                <div class="spaceAfter"></div>
                                <h5>Address of Office</h5>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Street Name</label>
                                    <input class="form-control" data-vv-as="office street name"
                                           name="office_street_name"
                                           placeholder="Enter Street name here" type="text"
                                           v-model="newCustomer.comp_street_name"
                                           v-validate="'required|max:50'">
                                    <small v-if="errors.first('office_street_name')">
                                        {{errors.first('office_street_name')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Office Building Number</label>
                                    <input class="form-control" data-vv-as="office building number"
                                           name="office_building_number"
                                           placeholder="Enter Building Number" type="text"
                                           v-model="newCustomer.comp_house_no"
                                           v-validate="'required|max:50'">
                                    <small v-if="errors.first('office_building_number')">
                                        {{errors.first('office_building_number')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Nearest Bus Stop</label>
                                    <input class="form-control" data-vv-as="office nearest bus stop"
                                           name="office_nearest_bus_stop"
                                           placeholder="Enter nearest bus stop" type="text"
                                           v-model="newCustomer.cadd_nbstop"
                                           v-validate="'required|max:50'">
                                    <small v-if="errors.first('office_nearest_bus_stop')">
                                        {{errors.first('office_nearest_bus_stop')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Area</label>
                                    <input class="form-control" data-vv-as="company area" name="company_area"
                                           placeholder="Enter area" type="text" v-model="newCustomer.comp_area"
                                           v-validate="'required|max:50'">
                                    <small v-if="errors.first('company_area')">
                                        {{errors.first('company_area')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>City</label>
                                    <input class="form-control" data-vv-as="company city" name="company_city"
                                           placeholder="Enter city" type="text" v-model="newCustomer.company_city"
                                           v-validate="'required|max:50'">
                                    <small v-if="errors.first('company_city')">
                                        {{errors.first('company_city')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>State</label>
                                    <select class="custom-select w-100" data-vv-as="company state"
                                            data-vv-validate-on="blur" name="company_state"
                                            v-model="newCustomer.company_state"
                                            v-validate="'required'">
                                        <option value="">select state</option>
                                        <option :value="state.name" v-for="state in states">{{state.name}}</option>
                                    </select>
                                    <small v-if="errors.first('company_state')">
                                        {{errors.first('company_state')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Phone Number</label>
                                    <input class="form-control" data-vv-as="company phone number"
                                           name="company_phone_number"
                                           placeholder="Enter city" type="tel"
                                           v-model="newCustomer.company_telno"
                                           v-validate="'required|numeric|max:11|min:11'">
                                    <small v-if="errors.first('company_phone_number')">
                                        {{errors.first('company_phone_number')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Time Available for Visit: From</label>
                                    <input class="form-control" data-vv-as="available from" name="available_from"
                                           type="time" v-model="newCustomer.cvisit_hour_from" v-validate="'required'">
                                    <small v-if="errors.first('available_from')">
                                        {{errors.first('available_from')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>To</label>
                                    <input class="form-control" data-vv-as="available to" name="available_to"
                                           type="time" v-model="newCustomer.cvisit_hour_to" v-validate="'required'">
                                    <small v-if="errors.first('available_to')">
                                        {{errors.first('available_to')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-12 px-md-3 px-1 float-left">
                                    <label>Describe Location</label>
                                    <textarea class="form-control col-sm-12" placeholder="Describe the Location"
                                              rows="1" v-model="newCustomer.cadd_addinfo"></textarea>
                                </div>

                            </div>

                            <div v-else-if="newCustomer.employment_status === 'informal(business)'">

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Phone number of working/business individual in household</label>
                                    <input class="form-control" data-vv-as="office phone"
                                           name="office_phone"
                                           placeholder="Enter Phone Number here"
                                           type="tel"
                                           v-model="newCustomer.working_individual_Phone_number"
                                           v-validate="'required|numeric|max:11|min:11'">
                                    <small v-if="errors.first('office_phone')">
                                        {{errors.first('office_phone')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Name of the Business</label>
                                    <input class="form-control" data-vv-as="name of firm"
                                           name="name_of_firm"
                                           placeholder="Enter name of company here" type="text"
                                           v-model="newCustomer.name_of_company_or_business"
                                           v-validate="'required|max:100'">
                                    <small v-if="errors.first('name_of_firm')">
                                        {{errors.first('name_of_firm')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Name of Market</label>
                                    <input class="form-control" data-vv-as="name of market" name="market_name"
                                           placeholder="name of market" type="text"
                                           v-model="newCustomer.market_name" v-validate="'required'">
                                    <small v-if="errors.first('market_name')">
                                        {{errors.first('market_name')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Monthly Businesss income</label>
                                    <input class="form-control" data-vv-as="current salary"
                                           name="current_salary" placeholder="Current Salary or Monthly income"
                                           type="number" v-model="newCustomer.current_sal_or_business_income"
                                           v-validate="'required|numeric'">
                                    <small v-if="errors.first('current_salary')">
                                        {{errors.first('current_salary')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Monthly Gains</label>
                                    <input class="form-control" data-vv-as="monthly gains"
                                           name="monthly_gains" placeholder="monthly gains"
                                           type="number" v-model="newCustomer.monthly_gains"
                                           v-validate="'required|numeric'">
                                    <small v-if="errors.first('monthly_gains')">
                                        {{errors.first('monthly_gains')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                    <label>Years of Existence</label>
                                    <select class="custom-select w-100"
                                            data-vv-as="years of existence"
                                            data-vv-validate-on="blur"
                                            name="work_duration"
                                            v-model="newCustomer.years_of_existence_or_work_duration"
                                            v-validate="'required'">
                                        <option value="">select duration</option>
                                        <option :value="duration" v-for="duration in durations">{{duration}}</option>
                                    </select>
                                    <small v-if="errors.first('work_duration')">
                                        {{errors.first('work_duration')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-3 col-6 px-md-3 px-1 float-left">
                                    <label class="w-100 float-left pl-1">Dou you have a bank account?</label>
                                    <div class="radio pl-1 pr-3 float-left">
                                        <input data-vv-as="bank account" id="bank_account_yes" name="bank_account"
                                               type="radio" v-model="newCustomer.bank_account" v-validate="'required'"
                                               value="Yes">
                                        <label for="bank_account_yes">Yes</label>
                                    </div>
                                    <div class="radio pl-1 pr-3 float-left">
                                        <input id="bank_account_no" name="bank_account" type="radio"
                                               v-model="newCustomer.bank_account"
                                               value="No">
                                        <label for="bank_account_no">No</label>
                                    </div>
                                    <small v-if="errors.first('bank_account')">
                                        {{errors.first('bank_account')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-9 px-md-3 px-1 float-left">
                                    <label class="w-100 float-left">Days of Work</label>
                                    <div class="checkbox float-left pr-3" v-for="day in weekdays">
                                        <input :id="day" :value="day" data-vv-as="days of work" name="days_of_work"
                                               type="checkbox" v-model="newCustomer.days_of_work"
                                               v-validate="'required'">
                                        <label :for="day">{{day}}</label>
                                    </div>
                                    <small v-if="errors.first('days_of_work')">
                                        {{errors.first('days_of_work')}}
                                    </small>
                                </div>

                                <div class="spaceAfter"></div>
                                <h5>Address of Business</h5>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Street Name</label>
                                    <input class="form-control" data-vv-as="office street name"
                                           name="office_street_name"
                                           placeholder="Enter Street name here" type="text"
                                           v-model="newCustomer.comp_street_name" v-validate="'required|max:50'">
                                    <small v-if="errors.first('office_street_name')">
                                        {{errors.first('office_street_name')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Shop Number</label>
                                    <input class="form-control" data-vv-as="office building number"
                                           name="office_building_number"
                                           placeholder="Enter Building Number" type="text"
                                           v-model="newCustomer.comp_house_no" v-validate="'required|max:50'">
                                    <small v-if="errors.first('office_building_number')">
                                        {{errors.first('office_building_number')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Nearest Bus Stop</label>
                                    <input class="form-control" data-vv-as="office nearest bus stop"
                                           name="office_nearest_bus_stop"
                                           placeholder="Enter nearest bus stop" type="text"
                                           v-model="newCustomer.cadd_nbstop" v-validate="'required|max:50'">
                                    <small v-if="errors.first('office_nearest_bus_stop')">
                                        {{errors.first('office_nearest_bus_stop')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Area</label>
                                    <input class="form-control" data-vv-as="company area" name="company_area"
                                           placeholder="Enter area" type="text" v-model="newCustomer.comp_area"
                                           v-validate="'required|max:50'">
                                    <small v-if="errors.first('company_area')">
                                        {{errors.first('company_area')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>City</label>
                                    <input class="form-control" data-vv-as="company city" name="company_city"
                                           placeholder="Enter city" type="text" v-model="newCustomer.company_city"
                                           v-validate="'required|max:50'">
                                    <small v-if="errors.first('company_city')">
                                        {{errors.first('company_city')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>State</label>
                                    <select class="custom-select w-100" data-vv-as="company state"
                                            data-vv-validate-on="blur" name="company_state"
                                            v-model="newCustomer.company_state"
                                            v-validate="'required'">
                                        <option value="">select state</option>
                                        <option :value="state.name" v-for="state in states">{{state.name}}</option>
                                    </select>
                                    <small v-if="errors.first('company_state')">
                                        {{errors.first('company_state')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Phone Number</label>
                                    <input class="form-control" data-vv-as="company phone number"
                                           name="company_phone_number"
                                           placeholder="Enter city" type="tel"
                                           v-model="newCustomer.company_telno"
                                           v-validate="'required|numeric|max:11|min:11'">
                                    <small v-if="errors.first('company_phone_number')">
                                        {{errors.first('company_phone_number')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>Time Available for Visit: From</label>
                                    <input class="form-control" data-vv-as="available from" name="available_from"
                                           type="time" v-model="newCustomer.cvisit_hour_from" v-validate="'required'">
                                    <small v-if="errors.first('available_from')">
                                        {{errors.first('available_from')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                    <label>To</label>
                                    <input class="form-control" data-vv-as="available to" name="available_to"
                                           type="time" v-model="newCustomer.cvisit_hour_to" v-validate="'required'">
                                    <small v-if="errors.first('available_to')">
                                        {{errors.first('available_to')}}
                                    </small>
                                </div>

                                <div class="spaceBetween"></div>

                                <div class="form-group col-md-12 px-md-3 px-1 float-left">
                                    <label>Describe Location</label>
                                    <textarea class="form-control col-sm-12" placeholder="Describe the Location"
                                              rows="1" v-model="newCustomer.cadd_addinfo"></textarea>
                                </div>

                            </div>
                            <div v-else></div>
                        </transition>

                        <div class="spaceAfter"></div>
                        <h5>Next of Kin</h5>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>First Name</label>
                            <input class="form-control" data-vv-as="next of kin first name" name="NOK_first_name"
                                   placeholder="Enter first name" type="text"
                                   v-model="newCustomer.nextofkin_first_name" v-validate="'required|max:25'">
                            <small v-if="errors.first('NOK_first_name')">
                                {{errors.first('NOK_first_name')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Middle Name</label>
                            <input class="form-control" placeholder="Enter middle name" type="text"
                                   v-model="newCustomer.nextofkin_middle_name">
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Last Name</label>
                            <input class="form-control" data-vv-as="next of kin last name" name="NOK_last_name"
                                   placeholder="Enter last name" type="text"
                                   v-model="newCustomer.nextofkin_last_name" v-validate="'required|max:25'">
                            <small v-if="errors.first('NOK_last_name')">
                                {{errors.first('NOK_last_name')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Gender</label>
                            <div class="radio p-0 col-md-6 col-6 float-left" v-for="sex in gender">
                                <input :id="'nok'+sex" :value="sex" data-vv-as="next of kin gender"
                                       name="nokgender" type="radio" v-model="newCustomer.nextofkin_gender"
                                       v-validate="'required'">
                                <label :for="'nok'+sex">{{sex}}</label>
                            </div>
                            <small v-if="errors.first('nokgender')">
                                {{errors.first('nokgender')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Phone Number</label>
                            <input class="form-control" data-vv-as="next of kin phone number" name="NOK_phone_number"
                                   placeholder="Enter phone number" type="tel"
                                   v-model="newCustomer.nextofkin_telno" v-validate="'required|numeric|max:11|min:11'">
                            <small v-if="errors.first('NOK_phone_number')">
                                {{errors.first('NOK_phone_number')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Duration in Current work</label>
                            <select class="custom-select w-100" data-vv-as="next of kin duration of work"
                                    data-vv-validate-on="blur" name="NOK_work_duration"
                                    v-model="newCustomer.nextofkin_work_duration"
                                    v-validate="'required'">
                                <option value="">select duration</option>
                                <option :value="duration" v-for="duration in durations">{{duration}}</option>
                            </select>
                            <small v-if="errors.first('NOK_work_duration')">
                                {{errors.first('NOK_work_duration')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-12 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Relationship</label>
                            <div class="radio p-0 col-md-2 col-4 float-left" v-for="rela in relationships">
                                <input :id="rela" :value="rela" data-vv-as="next of kin relationship"
                                       name="relationship" type="radio" v-model="newCustomer.nextofkin_relationship"
                                       v-validate="'required'">
                                <label :for="rela">{{rela}}</label>
                            </div>
                            <small v-if="errors.first('relationship')">
                                {{errors.first('relationship')}}
                            </small>
                        </div>

                    </div>
                    <!--form section for register stops here-->

                    <!--form section for register and update starts here-->
                    <div class="spaceAfter"></div>
                    <h5>
                        <input class="form-check-input ml-1 mr-2" type="checkbox" v-model="fillWorkGuarantor"
                               value="true">Work Guarantor Personal Info
                    </h5>
                    <div v-if="fillWorkGuarantor">
                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>First Name</label>
                            <input class="form-control" data-vv-as="work guarantors first name" name="WG_first_name"
                                   placeholder="Enter first name" type="text"
                                   v-model="newCustomer.work_guarantor_first_name" v-validate="'required|max:25'">
                            <small v-if="errors.first('WG_first_name')">
                                {{errors.first('WG_first_name')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Middle Name</label>
                            <input class="form-control" placeholder="Enter middle name" type="text"
                                   v-model="newCustomer.work_guarantor_middle_name">
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Last Name</label>
                            <input class="form-control" data-vv-as="work guarantors last name" name="WG_last_name"
                                   placeholder="Enter last name" type="text"
                                   v-model="newCustomer.work_guarantor_last_name" v-validate="'required|max:25'">
                            <small v-if="errors.first('WG_last_name')">
                                {{errors.first('WG_last_name')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-9 col-sm-12 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Relationship</label>
                            <div class="radio p-0 col-md-3 col-6 float-left" v-for="rela in relationshipWG">
                                <input :id="rela+'wg'" :value="rela"
                                       data-vv-as="work guarantor relationship" name="relationshipwg" type="radio"
                                       v-model="newCustomer.work_guarantor_relationship"
                                       v-validate="'required'">
                                <label :for="rela+'wg'">{{rela}}</label>
                            </div>
                            <small v-if="errors.first('relationshipwg')">
                                {{errors.first('relationshipwg')}}
                            </small>
                        </div>

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Gender</label>
                            <div class="radio p-0 col-6 float-left" v-for="sex in gender">
                                <input :id="'gua'+sex" :value="sex" data-vv-as="work guanrantor gender"
                                       name="wggender" type="radio" v-model="newCustomer.work_guarantor_gender"
                                       v-validate="'required'">
                                <label :for="'gua'+sex">{{sex}}</label>
                            </div>
                            <small v-if="errors.first('wggender')">
                                {{errors.first('wggender')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Work Guarantor office Details</h5>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Street Name</label>
                            <input class="form-control" data-vv-as="work guarantor street"
                                   name="work_guarantor_street_name"
                                   placeholder="Enter Street name here" type="text"
                                   v-model="newCustomer.guaadd_street" v-validate="'required|max:25'">
                            <small v-if="errors.first('work_guarantor_street_name')">
                                {{errors.first('work_guarantor_street_name')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Office Building Number</label>
                            <input class="form-control" data-vv-as="work guarantor office building"
                                   name="work_guarantor_office_building"
                                   placeholder="Enter Building Number" type="text"
                                   v-model="newCustomer.guaadd_houseno" v-validate="'required|max:25'">
                            <small class="text-muted"
                                   v-if="errors.first('work_guarantor_office_building')">
                                {{errors.first('work_guarantor_office_building')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Nearest Bus Stop</label>
                            <input class="form-control" data-vv-as="work guarantor bus stop"
                                   name="work_guarantor_bus_stop"
                                   placeholder="Enter nearest bus stop" type="text"
                                   v-model="newCustomer.guaadd_nbstop" v-validate="'required|max:25'">
                            <small v-if="errors.first('work_guarantor_bus_stop')">
                                {{errors.first('work_guarantor_bus_stop')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Area</label>
                            <input class="form-control" data-vv-as="work guarantor area" name="work_guarantor_area"
                                   placeholder="Enter area" type="text"
                                   v-model="newCustomer.gua_area" v-validate="'required|max:25'">
                            <small v-if="errors.first('work_guarantor_area')">
                                {{errors.first('work_guarantor_area')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>City</label>
                            <input class="form-control" data-vv-as="work guarantor city" name="work_guarantor_city"
                                   placeholder="Enter city" type="text"
                                   v-model="newCustomer.work_guarantor_city" v-validate="'required|max:25'">
                            <small v-if="errors.first('work_guarantor_city')">
                                {{errors.first('work_guarantor_city')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>State</label>
                            <select class="custom-select w-100" data-vv-as="work guarantor state"
                                    data-vv-validate-on="blur" name="work_guarantor_state"
                                    v-model="newCustomer.work_guarantor_state"
                                    v-validate="'required'">
                                <option value="">select state</option>
                                <option :value="state.name" v-for="state in states">{{state.name}}</option>
                            </select>
                            <small v-if="errors.first('work_guarantor_state')">
                                {{errors.first('work_guarantor_state')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Phone Number</label>
                            <input class="form-control" data-vv-as="work guarantor phone" name="work_guarantor_phone"
                                   placeholder="Enter city" type="tel"
                                   v-model="newCustomer.work_guarantor_telno"
                                   v-validate="'required|numeric|max:11|min:11'">
                            <small v-if="errors.first('work_guarantor_phone')">
                                {{errors.first('work_guarantor_phone')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Duration in Current work</label>
                            <select class="custom-select w-100" data-vv-as="work guarantor work duration"
                                    data-vv-validate-on="blur" name="work_guarantor_work_duration"
                                    v-model="newCustomer.work_guarantor_work_duration"
                                    v-validate="'required'">
                                <option value="">select duration</option>
                                <option :value="duration" v-for="duration in durations">{{duration}}</option>
                            </select>
                            <small v-if="errors.first('work_guarantor_work_duration')">
                                {{errors.first('work_guarantor_work_duration')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Describe Location</label>
                            <textarea class="form-control col-sm-12" placeholder="Describe the Location" rows="1"
                                      v-model="newCustomer.guaadd_addinfo"></textarea>
                        </div>

                        <div class="spaceAfter"></div>
                    </div>

                    <h5>
                        <input class="form-check-input ml-1 mr-2" type="checkbox" v-model="fillPersonalGuarantor"
                               value="true">
                        Personal Guarantor Personal Info
                    </h5>
                    <div v-if="fillPersonalGuarantor">
                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>First Name</label>
                            <input class="form-control" data-vv-as="first name"
                                   name="PG_first_name" placeholder="Enter first name" type="text"
                                   v-model="newCustomer.personal_guarantor_first_name" v-validate="'required|max:25'">
                            <small v-if="errors.first('PG_first_name')">
                                {{errors.first('PG_first_name')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Middle Name</label>
                            <input class="form-control" placeholder="Enter middle name"
                                   type="text"
                                   v-model="newCustomer.personal_guarantor_middle_name">
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Last Name</label>
                            <input class="form-control" data-vv-as="last name"
                                   name="PG_last_name" placeholder="Enter last name" type="text"
                                   v-model="newCustomer.personal_guarantor_last_name" v-validate="'required|max:25'">
                            <small v-if="errors.first('PG_last_name')">
                                {{errors.first('PG_last_name')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-9 col-sm-12 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Relationship</label>
                            <div class="radio p-0 col-md-3 col-6 float-left" v-for="rela in relationshipPG">
                                <input :id="rela+'pg'" :value="rela"
                                       data-vv-as="personal guarantor relationship" name="relationshippg" type="radio"
                                       v-model="newCustomer.personal_guarantor_relationship"
                                       v-validate="'required'">
                                <label :for="rela+'pg'">{{rela}}</label>
                            </div>
                            <small v-if="errors.first('relationshippg')">
                                {{errors.first('relationshippg')}}
                            </small>
                        </div>

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Gender</label>
                            <div class="radio p-0 col-md-6 col-6 float-left" v-for="sex in gender">
                                <input :id="'pg'+sex" :value="sex" data-vv-as="personal guarantor gender"
                                       name="pggender" type="radio" v-model="newCustomer.personal_guarantor_gender"
                                       v-validate="'required'">
                                <label :for="'pg'+sex">{{sex}}</label>
                            </div>
                            <small v-if="errors.first('pggender')">
                                {{errors.first('pggender')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>
                        <h5>Personal Guarantor office Details</h5>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Street Name</label>
                            <input class="form-control" data-vv-as="street number" name="pguaadd_street"
                                   placeholder="Enter Street name here" type="text"
                                   v-model="newCustomer.pguaadd_street" v-validate="'required|max:25'">
                            <small v-if="errors.first('pguaadd_street')">
                                {{errors.first('pguaadd_street')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Office Building Number</label>
                            <input class="form-control" data-vv-as="office building address" name="pguaadd_houseno"
                                   placeholder="Enter Building Number" type="text"
                                   v-model="newCustomer.pguaadd_houseno" v-validate="'required|max:25'">
                            <small v-if="errors.first('pguaadd_houseno')">
                                {{errors.first('pguaadd_houseno')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Nearest Bus Stop</label>
                            <input class="form-control" data-vv-as="per. guarantor nearest stop" name="pguaadd_nbstop"
                                   placeholder="Enter nearest bus stop" type="text"
                                   v-model="newCustomer.pguaadd_nbstop" v-validate="'required|max:25'">
                            <small v-if="errors.first('pguaadd_nbstop')">
                                {{errors.first('pguaadd_nbstop')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Area</label>
                            <input class="form-control" data-vv-as="personal guarantor area" name="pgua_area"
                                   placeholder="Enter area" type="text"
                                   v-model="newCustomer.pgua_area" v-validate="'required|max:25'">
                            <small v-if="errors.first('pgua_area')">
                                {{errors.first('pgua_area')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>City</label>
                            <input class="form-control" data-vv-as="personal guarantor city"
                                   name="personal_guarantor_city"
                                   placeholder="Enter city" type="text"
                                   v-model="newCustomer.personal_guarantor_city" v-validate="'required|max:25'">
                            <small v-if="errors.first('personal_guarantor_city')">
                                {{errors.first('personal_guarantor_city')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>State</label>
                            <select class="custom-select w-100" data-vv-as="personal guarantor state"
                                    data-vv-validate-on="blur" name="personal_guarantor_state"
                                    v-model="newCustomer.personal_guarantor_state"
                                    v-validate="'required'">
                                <option value="">select state</option>
                                <option :value="state.name" v-for="state in states">{{state.name}}</option>
                            </select>
                            <small v-if="errors.first('personal_guarantor_state')">
                                {{errors.first('personal_guarantor_state')}}
                            </small>
                        </div>

                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Phone Number</label>
                            <input class="form-control" data-vv-as="per. guarantor phone"
                                   name="personal_guarantor_telno"
                                   placeholder="Enter city" type="tel"
                                   v-model="newCustomer.personal_guarantor_telno"
                                   v-validate="'required|numeric|max:11|min:11'">
                            <small v-if="errors.first('personal_guarantor_telno')">
                                {{errors.first('personal_guarantor_telno')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Duration in Current work</label>
                            <select class="custom-select w-100"
                                    data-vv-as="personal guarantor work duration"
                                    data-vv-validate-on="blur" name="personal_guarantor_work_duration"
                                    v-model="newCustomer.personal_guarantor_work_duration"
                                    v-validate="'required'">
                                <option value="">select duration</option>
                                <option :value="duration" v-for="duration in durations">{{duration}}</option>
                            </select>
                            <small class="text-muted"
                                   v-if="errors.first('personal_guarantor_work_duration')">
                                {{errors.first('personal_guarantor_work_duration')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Describe Location</label>
                            <textarea class="form-control col-sm-12" placeholder="Describe the Location" rows="1"
                                      v-model="newCustomer.pguaadd_addinfo"></textarea>
                        </div>

                        <div class="spaceAfter"></div>
                    </div>

                    <div v-if="mode === 'register'">
                        <h5>Other Questions</h5>
                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>What product do you need?</label>
                            <input class="form-control" data-vv-as="what product do you need"
                                   name="what_product_do_you_need"
                                   placeholder="Enter Product name" type="text"
                                   v-model="newCustomer.what_product_do_you_need"
                                   v-validate="'required|max:25'">
                            <small v-if="errors.first('what_product_do_you_need')">
                                {{errors.first('what_product_do_you_need')}}
                            </small>
                        </div>

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>What do you need it for?</label>
                            <input class="form-control" data-vv-as="what do you need it for"
                                   name="what_do_you_need_it_for"
                                   placeholder="Enter Reason.." type="text"
                                   v-model="newCustomer.what_do_you_need_it_for" v-validate="'required|max:25'">
                            <small v-if="errors.first('what_do_you_need_it_for')">
                                {{errors.first('what_do_you_need_it_for')}}
                            </small>
                        </div>


                        <!-- <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label class="w-100 float-left pl-1">Category</label>
                            <div class="radio p-0 col-6 float-left">
                                <input :value="true" id="lifestyle" type="radio" v-model="isLifestyle">
                                <label for="lifestyle">lifestyle</label>
                            </div>
                            <div class="radio p-0 col-6 float-left">
                                <input :value="false" id="appliance" type="radio" v-model="isLifestyle">
                                <label for="appliance">appliance</label>
                            </div>
                        </div> -->

                        <!-- <div class="spaceBetween"></div> -->

                        <div class="form-group col-md-4 px-md-3 px-1 float-left">
                            <label>Office Branch</label>
                            <select class="custom-select w-100" data-vv-as="office branch"
                                    data-vv-validate-on="blur" disabled name="branch_id"
                                    v-model="newCustomer.branch_id"
                                    v-validate="'required'">
                                <option value="">select office branch</option>
                                <option :value="branch.id" v-for="branch in branches">{{branch.name}}</option>
                            </select>
                            <small v-if="errors.first('branch_id')">
                                {{errors.first('branch_id')}}
                            </small>
                        </div>

                    </div>
                    <!--form section for register and update ends here-->

                    <hr class="style-two">
                    <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right">
                        <button :disabled="$isProcessing" class="btn btn-block btn-lg bg-default" type="submit">
                            {{mode | capitalize}} Customer <i class="far fa-paper-plane ml-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

    import SMS,{Message} from '../../utilities/sms';
    import {log} from '../../utilities/log';
    import Flash from '../../utilities/flash';
    import {get, post} from '../../utilities/api';
    import Verification from '../DVA/verification/verification'

    export default {
        components: {Verification},
        data() {
            return {
                occupations: [
  {
    id: 1,
    jobType: "Trader",
    category: "formal",
    names: [
      "Food",
      "Drinks",
      "Homeware",
      "Clothing",
      "Miscellaneous"
    ]
  },
  {
    id: 2,
    jobType: "Driver",
    category: "formal",
    names: [
      "Keke Napep",
      "Taxi",
      "Motorbike",
      "Bus driver",
      "Private"
    ]
  },
  {
    id: 3,
    jobType: "Banker",
    category: "formal",
    names: [
      "Teller",
      "Financial Analyst",
      "Loan Officer",
      "Operation",
      "Risk Specialist",
      "Security & Fraud Specialist"
    ]
  },
  {
    id: 4,
    jobType: "Elementary workers",
    category: "formal",
    names: [
      "Mining worker",
      "Construction worker",
      "Manufacturing laborer"
    ]
  },
  {
    id: 5,
    jobType: "Maintenance Worker",
    category: "formal",
    names: [
      "Cleaner",
      "Electrician",
      "Plumber",
      "Carpenter",
      "Welder",
      "Painter",
      "Vulcanizer",
      "Security Guard"
    ]
  },
  {
    id: 6,
    jobType: "Farming",
    category: "formal",
    names: [
      "Livestock farmer",
      "Crop farmer"
    ]
  },
  {
    id: 7,
    jobType: "Civil Servant",
    category: "formal",
    names: [
    ]
  },
  {
    id: 8,
    jobType: "Sales & Services",
    category: "formal",
    names: [
      "Car-wash",
      "Laundry",
      "Sales Assistant",
      "Cook",
      "Hairdresser/Barber",
      "Cashier",
      "Waiter",
      "Hotel Assistant",
      "Receptionist"
    ]
  },
  {
    id: 9,
    jobType: "Technical Professionals",
    category: "formal",
    names: [
      "Teacher",
      "Doctor",
      "Lawyer",
      "Nurse",
      "Pharmacist",
      "Journalist",
      "Engineer",
      "Civic",
      "Electrical",
      "Chemical",
      "Mechanical",
      "I.T.",
    ]
  },
  {
    id: 10,
    jobType: "Pastor",
    category: "formal",
    names: [
    ]
  },
  {
    id: 11,
    jobType: "Entertainment",
    category: "formal",
    names: ["Actor/Actress",
      "Event Planner",
      "Musician",
      "Producer",
      "Tailor/Fashion Designer",
    ]
  },
  {
    id: 12,
    jobType: "Other",
    category: "",
    names: [
    ]
  },
]
,
                mode: this.$route.meta.mode,
                user: {},
                error: {},
                states: {},
                branches: {},
                newCustomer: {},
                fillWorkGuarantor: false,
                gender: ['male', 'female'],
                fillPersonalGuarantor: false,
                typesOfHome: ['family', 'owned', 'rented'],
                paymentPeriod: ['daily', 'weekly', 'monthly'],
                receiveIncomeMeans: ['bank deposit', 'cheque', 'cash'],
                noOfRooms: ['one room', 'two room', 'more than Two room'],
                employmentStatus: ['formal', 'informal(business)', 'unemployed'],
                relationshipPG: ['friend', 'family', 'co-worker', 'employee', 'other'],
                civilStatus: ['single', 'married', 'divorced', 'widow', 'live together'],
                relationshipWG: ['supervisor', 'neighbouring worker', 'co-worker', 'employee'],
                weekdays: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
                highestLevelOfEdu: ['no studies', 'secondary', 'polytechnic', 'primary', 'university', 'masters'],
                durations: [
                    'less than 1 year', '1 year', '2 years', '3 years', 'between 4 - 9 years', 'more than 10 years', 'more than 20 years'],
                relationships: [
                    'spouse', 'mother', 'sibling', 'uncle', 'nephew', 'in-law', 'friend', 'child',
                    'father', 'grandparent', 'cousin', 'caretaker', 'grandchild'],

                isLifestyle: false,
                isClick:false,
                occName:[],
                isActive:false
            }
        },
        methods: {
            register() {
                this.$validator.validateAll().then(async result => {
                    if (result) {
                        if (this.newCustomer.employment_status === 'unemployed') {
                            Flash.setError('you can only register customer from formal and informal sectors at the moment!');
                            return this.$scrollToTop();
                        }
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            if (this.mode === 'update') {
                                let acc = this.$editAccess(this.user, this.newCustomer);
                                if (!acc) return this.$networkErr('edit');
                            }
                            await post(`/api/customer${this.mode === 'update' ? '/' + this.newCustomer.id : ''}`, this.newCustomer)
                                .then(({data}) => {
                                    let {first_name: FN, last_name: LN, id, branch, telephone: tel} = data.customer;
                                    Flash.setSuccess(`Customer ${this.mode}d successful! Customer ID is: ${id}`, 30000);
                                    log(`${this.mode}dCustomer`, `Customer ID :${id}`);
                                    if (this.mode === 'register') {
                                        let body = `Dear ${FN} ${LN}, Welcome to Altara Credit Limited,` +
                                            ` You are hereby invited to our showroom at ${branch.description} to` +
                                            ` learn more about our offerings. Pick up products now and pay later.` +
                                            ` We look forward to seeing you. For more info contact:` +
                                            `${branch.phone_yoruba}. Your customer id is: ${id}`;
                                        (new Message(body, tel)).send(r =>
                                            r.status === 200 && this.prepareForm(data.prepareForm));
                                    }
                                }).catch(e => {
                                    e = e.response;
                                    if (e.status === 422) this.error = e.data.errors ? e.data.errors : e.data;
                                    Flash.setError(e.status === 422 ? 'unique field' : e.message, 10000);
                                });
                            this.$scrollToTop();
                            this.$LIPS(false)
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },
            check(id){
                console.log(id);
                    this.occupations.forEach(element => {
                        if (element.id === id){
                            this.occName = element.names;
                            this.isClick = true
                            
                        }
                    });
            },
            prepareForm(data) {
                this.states = data.states;
                this.branches = data.branches;
                this.newCustomer = data.form;
                this.user = data.user;
            },
            updateCustomer(customer) {
                if (this.mode === 'update') [this.fillWorkGuarantor, this.fillPersonalGuarantor] = [true, true];
                this.newCustomer = customer;
            }
        },
        created() {
            get('/api/customer/create').then(({data}) => this.prepareForm(data));
            /*on create of the component fetch the data required to prepare the form
            * states, branches and the currently logged in dsa details*/
        },
    }
</script>