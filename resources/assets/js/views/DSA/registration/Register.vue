<template>
    <div class="float-left w-100 pt-md-3 pt-2" id="customerRegister">
        <div class="card">
            <ul class="nav nav-tabs justify-content-center bg-default">
                <h6>Customer Registration</h6>
            </ul>
            <div class="card-body pl-4 pr-4 float-left">
                <form @submit.prevent="register">
                    <h5>Employee Details</h5>
                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Employee Name</label>
                        <input type="text" class="form-control" placeholder="Enter Employee name here"
                               v-model="newCustomer.employee_name" disabled name="emp_name"
                               data-vv-name="employee name" v-validate="'required|max:50'"
                               :class="{'is-invalid': errors.first('emp_name')}">
                        <small class="text-muted" v-if="errors.first('emp_name')">
                            {{errors.first('emp_name')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Employee ID(Staff ID)</label>
                        <input type="text" class="form-control" placeholder="Enter Employee number here"
                               v-model="newCustomer.employee_id" disabled v-validate="'required'"
                               name="employee_id" data-vv-as="employee phone number"
                               :class="{'is-invalid': errors.first('employee_id')}">
                        <small class="text-muted" v-if="errors.first('employee_id')">
                            {{errors.first('employee_id')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Date</label>
                        <input type="date" class="form-control" v-model="newCustomer.Date_of_Registration"
                               v-validate="'required|date_format:MM/DD/YYYY'" data-vv-as="Date of Registration"
                               name="Date_of_Registration"
                               :class="{'is-invalid': errors.first('Date_of_Registration')}">
                        <small class="text-muted" v-if="errors.first('Date_of_Registration')">
                            {{errors.first('Date_of_Registration')}}
                        </small>
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Customer Personal Details</h5>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="Enter First name here.."
                               v-model="newCustomer.first_name" name="first_name" data-vv-as="first name"
                               v-validate="'required|max:25'"
                               :class="{'is-invalid': errors.first('first_name')}">
                        <small class="text-muted" v-if="errors.first('first_name')">
                            {{errors.first('first_name')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Middle Name</label>
                        <input type="text" class="form-control" placeholder="Enter Middle name here.."
                               v-model="newCustomer.middle_name">
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Enter Last name here.."
                               v-model="newCustomer.last_name" v-validate="'required|max:25'" name="last_name"
                               data-vv-as="last name" :class="{'is-invalid': errors.first('last_name')}">
                        <small class="text-muted" v-if="errors.first('last_name')">
                            {{errors.first('last_name')}}
                        </small>
                    </div>

                    <div class="spaceBetween"></div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label class="w-100 float-left">Gender</label>
                        <div class="radio p-0 col-md-6 col-6 float-left" v-for="sex in gender">
                            <input v-model="newCustomer.gender" name="gender" type="radio" :id="sex" :value="sex"
                                   v-validate="'required'">
                            <label :for="sex">{{sex}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('gender')">
                            {{errors.first('gender')}}
                        </small>
                    </div>

                    <div class="form-group col-md-8 px-md-3 px-1 float-left">
                        <label>Phone Number</label>
                        <input v-model="newCustomer.telephone" type="tel" class="form-control"
                               placeholder="Enter Phone number here.." v-validate="'required|numeric|max:11|min:11'"
                               name="telephone" :class="{'is-invalid': errors.first('telephone')}">
                        <small class="text-muted" v-if="errors.first('telephone')">
                            {{errors.first('telephone')}}
                        </small>
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Address</h5>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Street Name</label>
                        <input v-model="newCustomer.add_street" type="text" class="form-control"
                               placeholder="Enter street name here.." v-validate="'required|max:25'"
                               name="street_name" data-vv-as="street name"
                               :class="{'is-invalid': errors.first('street_name')}">
                        <small class="text-muted" v-if="errors.first('street_name')">
                            {{errors.first('street_name')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>House Number</label>
                        <input v-model="newCustomer.add_houseno" type="text" class="form-control"
                               placeholder="Enter House number here.." v-validate="'required'"
                               data-vv-as="house number" name="house_number"
                               :class="{'is-invalid': errors.first('house_number')}">
                        <small class="text-muted" v-if="errors.first('house_number')">
                            {{errors.first('house_number')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Nearest Bus Stop</label>
                        <input v-model="newCustomer.add_nbstop" type="text" class="form-control"
                               placeholder="Enter nearest bus stop here.." v-validate="'required'"
                               name="nearest_bus_stop" data-vv-as="nearest bus stop"
                               :class="{'is-invalid': errors.first('nearest_bus_stop')}">
                        <small class="text-muted" v-if="errors.first('nearest_bus_stop')">
                            {{errors.first('nearest_bus_stop')}}
                        </small>
                    </div>

                    <div class="spaceBetween"></div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Area</label>
                        <input v-model="newCustomer.area_address" type="text" class="form-control"
                               placeholder="Enter area here.." v-validate="'required|max:25'" name="area"
                               :class="{'is-invalid': errors.first('area')}">
                        <small class="text-muted" v-if="errors.first('area')">
                            {{errors.first('area')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>City</label>
                        <input v-model="newCustomer.city" type="text" class="form-control"
                               placeholder="Enter city here.." v-validate="'required|max:25'" name="city"
                               :class="{'is-invalid': errors.first('city')}">
                        <small class="text-muted" v-if="errors.first('city')">
                            {{errors.first('city')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>State</label>
                        <select class="custom-select w-100" v-model="newCustomer.state"
                                v-validate="'required|max:20'" name="state"
                                :class="{'is-invalid': errors.first('state')}">
                            <option value="">select state</option>
                            <option :value="state.name" v-for="state in states">{{state.name}}</option>
                        </select>
                        <small class="text-muted" v-if="errors.first('state')">
                            {{errors.first('state')}}
                        </small>
                    </div>

                    <div class="spaceBetween"></div>

                    <div class="form-group col-md-12 px-md-3 px-1 float-left">
                        <label>Describe Location</label>
                        <textarea class="form-control col-sm-12"
                                  placeholder="Describe the Location"
                                  rows="1" v-model="newCustomer.add_addinfo_description"></textarea>
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Others</h5>

                    <div class="form-group col-md-2 px-md-3 px-1 float-left">
                        <label>Date of Birth</label>
                        <input v-model="newCustomer.date_of_birth" type="date" class="form-control"
                               v-validate="'required|date_format:MM/DD/YYYY'" name="date_of_birth"
                               data-vv-as="date of birth" :class="{'is-invalid': errors.first('date_of_birth')}">
                        <small class="text-muted" v-if="errors.first('date_of_birth')">
                            {{errors.first('date_of_birth')}}
                        </small>
                    </div>

                    <div class="form-group col-md-8 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Civil Status</label>
                        <div class="radio pl-1 pr-3 float-left" v-for="status in civilStatus">
                            <input v-model="newCustomer.civil_status" type="radio" name="civil_status" :id="status"
                                   :value="status" v-validate="'required'" data-vv-as="civil status">
                            <label :for="status">{{status}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('civil_status')">
                            {{errors.first('civil_status')}}
                        </small>
                    </div>

                    <div class="form-group col-md-2 px-md-3 px-1 float-left"
                         v-if="!(newCustomer.civil_status == 'Single')">
                        <label>Years together</label>
                        <input v-model="newCustomer.year_together" type="number" class="form-control"
                               placeholder="years together.." v-validate="'required|numeric|max:2'"
                               name="years_together" data-vv-as="years together"
                               :class="{'is-invalid': errors.first('years_together')}">
                        <small class="text-muted" v-if="errors.first('years_together')">
                            {{errors.first('years_together')}}
                        </small>
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Household Details</h5>

                    <div class="form-group col-md-5 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Type of Home</label>
                        <div class="radio pl-1 pr-3 float-left" v-for="typeOfHome in typesOfHome">
                            <input v-model="newCustomer.type_of_home" type="radio" name="typeOfHome" :id="typeOfHome"
                                   :value="typeOfHome" v-validate="'required'" data-vv-as="type of home">
                            <label :for="typeOfHome">{{typeOfHome}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('typeOfHome')">
                            {{errors.first('typeOfHome')}}
                        </small>
                    </div>

                    <div class="form-group col-md-5 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Number of Rooms</label>
                        <div class="radio pl-1 pr-3 float-left" v-for="noOfRoom in noOfRooms">
                            <input v-model="newCustomer.no_of_rooms" type="radio" name="noOfRoom" :id="noOfRoom"
                                   :value="noOfRoom" v-validate="'required'" data-vv-as="number of rooms">
                            <label :for="noOfRoom">{{noOfRoom}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('noOfRoom')">
                            {{errors.first('noOfRoom')}}
                        </small>
                    </div>

                    <div class="form-group col-md-2 px-md-3 px-1 float-left">
                        <label>Duration of Residence</label>
                        <input v-model="newCustomer.duration_of_residence" type="number" class="form-control"
                               placeholder="Duration of residence.." v-validate="'required|numeric|max:2'"
                               name="duration_of_residence" data-vv-as="duration of residence"
                               :class="{'is-invalid': errors.first('duration_of_residence')}">
                        <small class="text-muted" v-if="errors.first('duration_of_residence')">
                            {{errors.first('duration_of_residence')}}
                        </small>
                    </div>

                    <div class="spaceBetween"></div>

                    <div class="form-group col-md-6 px-md-3 px-1 float-left">
                        <label>How many people live in your household?</label>
                        <input v-model="newCustomer.people_in_household" type="number" class="form-control"
                               placeholder="Enter number here.." v-validate="'required|numeric|max:2'"
                               name="number_in_household"
                               data-vv-as="number in household"
                               :class="{'is-invalid': errors.first('number_in_household')}">
                        <small class="text-muted" v-if="errors.first('number_in_household')">
                            {{errors.first('number_in_household')}}
                        </small>
                    </div>

                    <div class="form-group col-md-6 px-md-3 px-1 float-left">
                        <label>How many work?</label>
                        <input v-model="newCustomer.number_of_work" type="number" class="form-control"
                               placeholder="Enter number here.." v-validate="'required|numeric|max:2'"
                               name="how_many_work"
                               data-vv-as="how many work" :class="{'is-invalid': errors.first('how_many_work')}">
                        <small class="text-muted" v-if="errors.first('how_many_work')">
                            {{errors.first('how_many_work')}}
                        </small>
                    </div>

                    <div class="form-group col-md-6 px-md-3 px-1 float-left">
                        <label>How many people depend on you?</label>
                        <input v-model="newCustomer.depend_on_you" type="number" class="form-control"
                               placeholder="Enter number here.." v-validate="'required|numeric|max:2'"
                               name="no_depend_on_you"
                               data-vv-as="no depend on you" :class="{'is-invalid': errors.first('no_depend_on_you')}">
                        <small class="text-muted" v-if="errors.first('no_depend_on_you')">
                            {{errors.first('no_depend_on_you')}}
                        </small>
                    </div>

                    <div class="form-group col-md-6 px-md-3 px-1 float-left">
                        <label>Number of Children</label>
                        <input v-model="newCustomer.number_of_children" type="number" class="form-control"
                               placeholder="Enter number here.." v-validate="'required|numeric|max:2'"
                               name="number_of_children"
                               data-vv-as="number of children"
                               :class="{'is-invalid': errors.first('number_of_children')}">
                        <small class="text-muted" v-if="errors.first('number_of_children')">
                            {{errors.first('number_of_children')}}
                        </small>
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Education Details</h5>

                    <div class="form-group col-md-12 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Highest Level of Education</label>
                        <div class="radio pl-1 pr-3 float-left" v-for="highestLevel in highestLevelOfEdu">
                            <input v-model="newCustomer.level_of_education" type="radio" name="highestLevel"
                                   :id="highestLevel" :value="highestLevel" v-validate="'required'"
                                   data-vv-as="highest level of education">
                            <label :for="highestLevel">{{highestLevel}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('highestLevel')">
                            {{errors.first('highestLevel')}}
                        </small>
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Time Available for Visit</h5>

                    <div class="form-group col-md-6 float-left">
                        <label>From</label>
                        <input v-model="newCustomer.visit_hour_from" type="time" class="form-control"
                               v-validate="'required'" name="time_from" data-vv-as="time from"
                               :class="{'is-invalid': errors.first('time_from')}">
                        <small class="text-muted" v-if="errors.first('time_from')">
                            {{errors.first('time_from')}}
                        </small>
                    </div>

                    <div class="form-group col-md-6 float-left">
                        <label>To:</label>
                        <input v-model="newCustomer.visit_hour_to" type="time" class="form-control"
                               v-validate="'required'" name="time_to" data-vv-as="time to"
                               :class="{'is-invalid': errors.first('time_to')}">
                        <small class="text-muted" v-if="errors.first('time_to')">
                            {{errors.first('time_to')}}
                        </small>
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Additional Information</h5>

                    <div class="form-group col-md-3 col-6 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Loan From other Institutions</label>
                        <div class="radio pl-1 pr-3 float-left">
                            <input v-model="newCustomer.loan_from_institution" type="radio" name="otherLoan"
                                   id="loanYes" value="Yes" v-validate="'required'" data-vv-as="loan from other">
                            <label for="loanYes">Yes</label>
                        </div>
                        <div class="radio pl-1 pr-3 float-left">
                            <input v-model="newCustomer.loan_from_institution" type="radio" name="otherLoan" id="loanNo"
                                   value="No">
                            <label for="loanNo">No</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('otherLoan')">
                            {{errors.first('otherLoan')}}
                        </small>
                    </div>

                    <transition name="fade">
                        <span v-if="(newCustomer.loan_from_institution === 'Yes')">
                            <div class="form-group col-md-3 col-6 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Did you pay back?</label>
                                <div class="radio pl-1 pr-3 float-left">
                                    <input v-model="newCustomer.did_you_pay_back" type="radio"
                                           name="payBack"
                                           id="payBackYes" value="Yes" v-validate="'required'"
                                           data-vv-as="did you pay back">
                                    <label for="payBackYes">Yes</label>
                                </div>
                                <div class="radio pl-1 pr-3 float-left">
                                    <input v-model="newCustomer.did_you_pay_back" type="radio"
                                           name="payBack"
                                           id="payBackNo" value="No">
                                    <label for="payBackNo">No</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('payBack')">
                                    {{errors.first('payBack')}}
                                </small>
                            </div>

                            <div class="form-group col-md-3 col-12 px-md-3 px-1 float-left">
                                <label>Loan amount</label>
                                <input v-model="newCustomer.loan_amount" type="number" class="form-control"
                                       placeholder="Enter amount here..">
                            </div>
                        </span>
                    </transition>

                    <div class="form-group col-md-3 col-12 px-md-3 px-1 float-left">
                        <label>Email Address</label>
                        <input v-model="newCustomer.email" type="email" class="form-control"
                               placeholder="Enter email here">
                    </div>

                    <div class="spaceAfter"></div>
                    <h5>Work Details</h5>

                    <div class="form-group col-md-12 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Employment Status</label>
                        <div class="radio pl-1 pr-3 float-left" v-for="status in employmentStatus">
                            <input v-model="newCustomer.employment_status" type="radio" name="status" :id="status"
                                   :value="status" v-validate="'required'" data-vv-as="employment status">
                            <label :for="status">{{status}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('status')">
                            {{errors.first('status')}}
                        </small>
                    </div>

                    <transition name="fade">

                        <div v-if="newCustomer.employment_status === 'Formal'">

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Phone number of working/business individual in household</label>
                                <input v-model="newCustomer.working_individual_Phone_number" type="tel"
                                       class="form-control"
                                       placeholder="Enter Phone Number here"
                                       v-validate="'required|numeric|max:11|min:11'"
                                       name="office_phone" data-vv-as="office phone"
                                       :class="{'is-invalid': errors.first('office_phone')}">
                                <small class="text-muted" v-if="errors.first('office_phone')">
                                    {{errors.first('office_phone')}}
                                </small>
                            </div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Name of the company</label>
                                <input v-model="newCustomer.name_of_company_or_business" type="text"
                                       class="form-control"
                                       placeholder="Enter name of company here" v-validate="'required|max:100'"
                                       name="name_of_firm" data-vv-as="name of firm"
                                       :class="{'is-invalid': errors.first('name_of_firm')}">
                                <small class="text-muted" v-if="errors.first('name_of_firm')">
                                    {{errors.first('name_of_firm')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Current Salary</label>
                                <input v-model="newCustomer.current_sal_or_business_income" type="number"
                                       class="form-control" placeholder="Current Salary or Monthly income"
                                       v-validate="'required'" name="current_salary"
                                       data-vv-as="current salary"
                                       :class="{'is-invalid': errors.first('current_salary')}">
                                <small class="text-muted" v-if="errors.first('current_salary')">
                                    {{errors.first('current_salary')}}
                                </small>
                            </div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Position/post in the company</label>
                                <input v-model="newCustomer.post_in_company" type="text" class="form-control"
                                       placeholder="Enter position/post here">
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">How do you receive salary?</label>
                                <div class="radio pl-1 pr-3 float-left" v-for="means in receiveIncomeMeans">
                                    <input v-model="newCustomer.receive_income_means" type="radio" name="means"
                                           :id="means"
                                           :value="means" v-validate="'required'"
                                           data-vv-as="income means"
                                           :class="{'is-invalid': errors.first('means')}">
                                    <label :for="means">{{means}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('means')">
                                    {{errors.first('means')}}
                                </small>
                            </div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Payment Period</label>
                                <div class="radio pl-1 pr-3 float-left" v-for="period in paymentPeriod">
                                    <input v-model="newCustomer.payment_period"
                                           type="radio"
                                           name="period"
                                           :id="period"
                                           :value="period"
                                           v-validate="'required'"
                                           data-vv-as="payment period">
                                    <label :for="period">{{period}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('period')">
                                    {{errors.first('period')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-3 px-md-3 px-1 float-left">
                                <label>Duration in Current work</label>
                                <select class="custom-select w-100"
                                        v-model="newCustomer.years_of_existence_or_work_duration"
                                        v-validate="'required'" name="work_duration" data-vv-as="work duration"
                                        :class="{'is-invalid': errors.first('work_duration')}">
                                    <option value="">select duration</option>
                                    <option :value="duration" v-for="duration in durations">{{duration}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('work_duration')">
                                    {{errors.first('work_duration')}}
                                </small>
                            </div>

                            <div class="form-group col-md-9 px-md-3 px-1 float-left">
                                <label class="w-100 float-left">Days of Work</label>
                                <div class="checkbox float-left pr-3" v-for="day in weekdays">
                                    <input :id="day" type="checkbox" :value="day" v-model="newCustomer.days_of_work"
                                           v-validate="'required'" name="days_of_work" data-vv-as="days of work">
                                    <label :for="day">{{day}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('days_of_work')">
                                    {{errors.first('days_of_work')}}
                                </small>
                            </div>

                            <div class="spaceAfter"></div>
                            <h5>Address of Office</h5>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Street Name</label>
                                <input v-model="newCustomer.comp_street_name" type="text" class="form-control"
                                       placeholder="Enter Street name here" v-validate="'required|max:50'"
                                       name="office_street_name"
                                       data-vv-as="office street name"
                                       :class="{'is-invalid': errors.first('office_street_name')}">
                                <small class="text-muted" v-if="errors.first('office_street_name')">
                                    {{errors.first('office_street_name')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Office Building Number</label>
                                <input v-model="newCustomer.comp_house_no" type="text" class="form-control"
                                       placeholder="Enter Building Number" v-validate="'required|max:50'"
                                       name="office_building_number"
                                       data-vv-as="office building number"
                                       :class="{'is-invalid': errors.first('office_building_number')}">
                                <small class="text-muted" v-if="errors.first('office_building_number')">
                                    {{errors.first('office_building_number')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Nearest Bus Stop</label>
                                <input v-model="newCustomer.cadd_nbstop" type="text" class="form-control"
                                       placeholder="Enter nearest bus stop" v-validate="'required|max:50'"
                                       name="office_nearest_bus_stop"
                                       data-vv-as="office nearest bus stop"
                                       :class="{'is-invalid': errors.first('office_nearest_bus_stop')}">
                                <small class="text-muted" v-if="errors.first('office_nearest_bus_stop')">
                                    {{errors.first('office_nearest_bus_stop')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Area</label>
                                <input v-model="newCustomer.comp_area" type="text" class="form-control"
                                       placeholder="Enter area" v-validate="'required|max:50'" name="company_area"
                                       data-vv-as="company area"
                                       :class="{'is-invalid': errors.first('company_area')}">
                                <small class="text-muted" v-if="errors.first('company_area')">
                                    {{errors.first('company_area')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>City</label>
                                <input v-model="newCustomer.company_city" type="text" class="form-control"
                                       placeholder="Enter city" v-validate="'required|max:50'" name="company_city"
                                       data-vv-as="company city"
                                       :class="{'is-invalid': errors.first('company_city')}">
                                <small class="text-muted" v-if="errors.first('company_city')">
                                    {{errors.first('company_city')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>State</label>
                                <select class="custom-select w-100" v-model="newCustomer.company_state"
                                        v-validate="'required|max:20'" name="company_state" data-vv-as="company state"
                                        :class="{'is-invalid': errors.first('company_state')}">
                                    <option value="">select state</option>
                                    <option :value="state.name" v-for="state in states">{{state.name}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('company_state')">
                                    {{errors.first('company_state')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Phone Number</label>
                                <input v-model="newCustomer.company_telno" type="tel" class="form-control"
                                       placeholder="Enter city" v-validate="'required|numeric|max:11|min:11'"
                                       name="company_phone_number"
                                       data-vv-as="company phone number"
                                       :class="{'is-invalid': errors.first('company_phone_number')}">
                                <small class="text-muted" v-if="errors.first('company_phone_number')">
                                    {{errors.first('company_phone_number')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Time Available for Visit: From</label>
                                <input v-model="newCustomer.cvisit_hour_from" type="time" class="form-control"
                                       v-validate="'required'" name="available_from" data-vv-as="available from"
                                       :class="{'is-invalid': errors.first('available_from')}">
                                <small class="text-muted" v-if="errors.first('available_from')">
                                    {{errors.first('available_from')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>To</label>
                                <input v-model="newCustomer.cvisit_hour_to" type="time" class="form-control"
                                       v-validate="'required'" name="available_to" data-vv-as="available to"
                                       :class="{'is-invalid': errors.first('available_to')}">
                                <small class="text-muted" v-if="errors.first('available_to')">
                                    {{errors.first('available_to')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-12 px-md-3 px-1 float-left">
                                <label>Describe Location</label>
                                <textarea class="form-control col-sm-12"
                                          placeholder="Describe the Location" rows="1"
                                          v-model="newCustomer.cadd_addinfo"></textarea>
                            </div>

                        </div>

                        <div v-else-if="newCustomer.employment_status === 'Informal(Business)'">

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Phone number of working/business individual in household</label>
                                <input v-model="newCustomer.working_individual_Phone_number" type="tel"
                                       class="form-control"
                                       placeholder="Enter Phone Number here"
                                       v-validate="'required|numeric|max:11|min:11'"
                                       name="office_phone" data-vv-as="office phone"
                                       :class="{'is-invalid': errors.first('office_phone')}">
                                <small class="text-muted" v-if="errors.first('office_phone')">
                                    {{errors.first('office_phone')}}
                                </small>
                            </div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Name of the Business</label>
                                <input v-model="newCustomer.name_of_company_or_business" type="text"
                                       class="form-control"
                                       placeholder="Enter name of company here" v-validate="'required|max:100'"
                                       name="name_of_firm" data-vv-as="name of firm"
                                       :class="{'is-invalid': errors.first('name_of_firm')}">
                                <small class="text-muted" v-if="errors.first('name_of_firm')">
                                    {{errors.first('name_of_firm')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Name of Market</label>
                                <input v-model="newCustomer.market_name" type="text" class="form-control"
                                       placeholder="name of market" v-validate="'required'"
                                       data-vv-as="name of market" name="market_name"
                                       :class="{'is-invalid': errors.first('market_name')}">
                                <small class="text-muted" v-if="errors.first('market_name')">
                                    {{errors.first('market_name')}}
                                </small>
                            </div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Monthly Businesss income</label>
                                <input v-model="newCustomer.current_sal_or_business_income" type="number"
                                       class="form-control" placeholder="Current Salary or Monthly income"
                                       v-validate="'required|numeric'" name="current_salary"
                                       data-vv-as="current salary"
                                       :class="{'is-invalid': errors.first('current_salary')}">
                                <small class="text-muted" v-if="errors.first('current_salary')">
                                    {{errors.first('current_salary')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Monthly Gains</label>
                                <input v-model="newCustomer.monthly_gains" type="number"
                                       class="form-control" placeholder="monthly gains"
                                       v-validate="'required|numeric'" name="monthly_gains"
                                       data-vv-as="monthly gains"
                                       :class="{'is-invalid': errors.first('monthly_gains')}">
                                <small class="text-muted" v-if="errors.first('monthly_gains')">
                                    {{errors.first('monthly_gains')}}
                                </small>
                            </div>

                            <div class="form-group col-md-6 px-md-3 px-1 float-left">
                                <label>Years of Existence</label>
                                <select class="custom-select w-100"
                                        v-model="newCustomer.years_of_existence_or_work_duration"
                                        v-validate="'required'" name="work_duration" data-vv-as="years of existence"
                                        :class="{'is-invalid': errors.first('work_duration')}">
                                    <option value="">select duration</option>
                                    <option :value="duration" v-for="duration in durations">{{duration}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('work_duration')">
                                    {{errors.first('work_duration')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-3 col-6 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Dou you have a bank account?</label>
                                <div class="radio pl-1 pr-3 float-left">
                                    <input v-model="newCustomer.bank_account" type="radio" name="bank_account"
                                           id="bank_account_yes" value="Yes" v-validate="'required'"
                                           data-vv-as="bank account">
                                    <label for="bank_account_yes">Yes</label>
                                </div>
                                <div class="radio pl-1 pr-3 float-left">
                                    <input v-model="newCustomer.bank_account" type="radio" name="bank_account"
                                           id="bank_account_no"
                                           value="No">
                                    <label for="bank_account_no">No</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('bank_account')">
                                    {{errors.first('bank_account')}}
                                </small>
                            </div>

                            <div class="form-group col-md-9 px-md-3 px-1 float-left">
                                <label class="w-100 float-left">Days of Work</label>
                                <div class="checkbox float-left pr-3" v-for="day in weekdays">
                                    <input :id="day" type="checkbox" :value="day" v-model="newCustomer.days_of_work"
                                           v-validate="'required'" name="days_of_work" data-vv-as="days of work">
                                    <label :for="day">{{day}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('days_of_work')">
                                    {{errors.first('days_of_work')}}
                                </small>
                            </div>

                            <div class="spaceAfter"></div>
                            <h5>Address of Business</h5>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Street Name</label>
                                <input v-model="newCustomer.comp_street_name" type="text" class="form-control"
                                       placeholder="Enter Street name here" v-validate="'required|max:50'"
                                       name="office_street_name"
                                       data-vv-as="office street name"
                                       :class="{'is-invalid': errors.first('office_street_name')}">
                                <small class="text-muted" v-if="errors.first('office_street_name')">
                                    {{errors.first('office_street_name')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Shop Number</label>
                                <input v-model="newCustomer.comp_house_no" type="text" class="form-control"
                                       placeholder="Enter Building Number" v-validate="'required|max:50'"
                                       name="office_building_number"
                                       data-vv-as="office building number"
                                       :class="{'is-invalid': errors.first('office_building_number')}">
                                <small class="text-muted" v-if="errors.first('office_building_number')">
                                    {{errors.first('office_building_number')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Nearest Bus Stop</label>
                                <input v-model="newCustomer.cadd_nbstop" type="text" class="form-control"
                                       placeholder="Enter nearest bus stop" v-validate="'required|max:50'"
                                       name="office_nearest_bus_stop"
                                       data-vv-as="office nearest bus stop"
                                       :class="{'is-invalid': errors.first('office_nearest_bus_stop')}">
                                <small class="text-muted" v-if="errors.first('office_nearest_bus_stop')">
                                    {{errors.first('office_nearest_bus_stop')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Area</label>
                                <input v-model="newCustomer.comp_area" type="text" class="form-control"
                                       placeholder="Enter area" v-validate="'required|max:50'" name="company_area"
                                       data-vv-as="company area" :class="{'is-invalid': errors.first('company_area')}">
                                <small class="text-muted" v-if="errors.first('company_area')">
                                    {{errors.first('company_area')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>City</label>
                                <input v-model="newCustomer.company_city" type="text" class="form-control"
                                       placeholder="Enter city" v-validate="'required|max:50'" name="company_city"
                                       data-vv-as="company city" :class="{'is-invalid': errors.first('company_city')}">
                                <small class="text-muted" v-if="errors.first('company_city')">
                                    {{errors.first('company_city')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>State</label>
                                <select class="custom-select w-100" v-model="newCustomer.company_state"
                                        v-validate="'required|max:20'" name="company_state" data-vv-as="company state"
                                        :class="{'is-invalid': errors.first('company_state')}">
                                    <option value="">select state</option>
                                    <option :value="state.name" v-for="state in states">{{state.name}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('company_state')">
                                    {{errors.first('company_state')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Phone Number</label>
                                <input v-model="newCustomer.company_telno" type="tel" class="form-control"
                                       placeholder="Enter city" v-validate="'required|numeric|max:11|min:11'"
                                       name="company_phone_number"
                                       data-vv-as="company phone number"
                                       :class="{'is-invalid': errors.first('company_phone_number')}">
                                <small class="text-muted" v-if="errors.first('company_phone_number')">
                                    {{errors.first('company_phone_number')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Time Available for Visit: From</label>
                                <input v-model="newCustomer.cvisit_hour_from" type="time" class="form-control"
                                       v-validate="'required'" name="available_from" data-vv-as="available from"
                                       :class="{'is-invalid': errors.first('available_from')}">
                                <small class="text-muted" v-if="errors.first('available_from')">
                                    {{errors.first('available_from')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>To</label>
                                <input v-model="newCustomer.cvisit_hour_to" type="time" class="form-control"
                                       v-validate="'required'" name="available_to" data-vv-as="available to"
                                       :class="{'is-invalid': errors.first('available_to')}">
                                <small class="text-muted" v-if="errors.first('available_to')">
                                    {{errors.first('available_to')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-12 px-md-3 px-1 float-left">
                                <label>Describe Location</label>
                                <textarea class="form-control col-sm-12" placeholder="Describe the Location" rows="1"
                                          v-model="newCustomer.cadd_addinfo"></textarea>
                            </div>

                        </div>
                        <div v-else></div>
                    </transition>

                    <div class="spaceAfter"></div>
                    <h5>Next of Kin</h5>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>First Name</label>
                        <input v-model="newCustomer.nextofkin_first_name" type="text" class="form-control"
                               placeholder="Enter first name" v-validate="'required|max:25'"
                               data-vv-as="next of kin first name"
                               name="NOK_first_name" :class="{'is-invalid': errors.first('NOK_first_name')}">
                        <small class="text-muted" v-if="errors.first('NOK_first_name')">
                            {{errors.first('NOK_first_name')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Middle Name</label>
                        <input v-model="newCustomer.nextofkin_middle_name" type="text" class="form-control"
                               placeholder="Enter middle name">
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Last Name</label>
                        <input v-model="newCustomer.nextofkin_last_name" type="text" class="form-control"
                               placeholder="Enter last name" v-validate="'required|max:25'"
                               data-vv-as="next of kin last name"
                               name="NOK_last_name" :class="{'is-invalid': errors.first('NOK_last_name')}">
                        <small class="text-muted" v-if="errors.first('NOK_last_name')">
                            {{errors.first('NOK_last_name')}}
                        </small>
                    </div>

                    <div class="spaceBetween"></div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Gender</label>
                        <div class="radio p-0 col-md-6 col-6 float-left" v-for="sex in gender">
                            <input v-model="newCustomer.nextofkin_gender" name="nokgender" type="radio"
                                   :id="'nok'+sex" :value="sex" v-validate="'required'" data-vv-as="next of kin gender">
                            <label :for="'nok'+sex">{{sex}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('nokgender')">
                            {{errors.first('nokgender')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Phone Number</label>
                        <input v-model="newCustomer.nextofkin_telno" type="tel" class="form-control"
                               placeholder="Enter phone number" v-validate="'required|numeric|max:11|min:11'"
                               data-vv-as="next of kin phone number" name="NOK_phone_number"
                               :class="{'is-invalid': errors.first('NOK_phone_number')}">
                        <small class="text-muted" v-if="errors.first('NOK_phone_number')">
                            {{errors.first('NOK_phone_number')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Duration in Current work</label>
                        <select class="custom-select w-100" v-model="newCustomer.nextofkin_work_duration"
                                v-validate="'required'" data-vv-as="next of kin duration of work"
                                name="NOK_work_duration" :class="{'is-invalid': errors.first('NOK_work_duration')}">
                            <option value="">select duration</option>
                            <option :value="duration" v-for="duration in durations">{{duration}}</option>
                        </select>
                        <small class="text-muted" v-if="errors.first('NOK_work_duration')">
                            {{errors.first('NOK_work_duration')}}
                        </small>
                    </div>

                    <div class="spaceBetween"></div>

                    <div class="form-group col-md-12 px-md-3 px-1 float-left">
                        <label class="w-100 float-left pl-1">Relationship</label>
                        <div class="radio p-0 col-md-2 col-4 float-left" v-for="rela in relationships">
                            <input v-model="newCustomer.nextofkin_relationship" type="radio" name="relationship"
                                   :id="rela" :value="rela" v-validate="'required'"
                                   data-vv-as="next of kin relationship">
                            <label :for="rela">{{rela}}</label>
                        </div>
                        <small class="text-muted" v-if="errors.first('relationship')">
                            {{errors.first('relationship')}}
                        </small>
                    </div>

                    <div class="spaceBetween"></div>
                    <h5>
                        <input class="form-check-input ml-1 mr-2" type="checkbox" value="true"
                               v-model="fillWorkGuarantor">
                        Work Guarantor Personal Info
                    </h5>

                    <transition name="fade">
                        <div v-if="fillWorkGuarantor">
                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>First Name</label>
                                <input v-model="newCustomer.work_guarantor_first_name" type="text" class="form-control"
                                       placeholder="Enter first name" v-validate="'required|max:25'"
                                       data-vv-as="work guarantors first name" name="WG_first_name"
                                       :class="{'is-invalid': errors.first('WG_first_name')}">
                                <small class="text-muted" v-if="errors.first('WG_first_name')">
                                    {{errors.first('WG_first_name')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Middle Name</label>
                                <input v-model="newCustomer.work_guarantor_middle_name" type="text" class="form-control"
                                       placeholder="Enter middle name">
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Last Name</label>
                                <input v-model="newCustomer.work_guarantor_last_name" type="text" class="form-control"
                                       placeholder="Enter last name" v-validate="'required|max:25'"
                                       data-vv-as="work guarantors last name" name="WG_last_name"
                                       :class="{'is-invalid': errors.first('WG_last_name')}">
                                <small class="text-muted" v-if="errors.first('WG_last_name')">
                                    {{errors.first('WG_last_name')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-9 col-sm-12 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Relationship</label>
                                <div class="radio p-0 col-md-3 col-6 float-left" v-for="rela in relationshipWG">
                                    <input v-model="newCustomer.work_guarantor_relationship" type="radio"
                                           name="relationshipwg" :id="rela+'wg'" :value="rela" v-validate="'required'"
                                           data-vv-as="work guarantor relationship">
                                    <label :for="rela+'wg'">{{rela}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('relationshipwg')">
                                    {{errors.first('relationshipwg')}}
                                </small>
                            </div>

                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Gender</label>
                                <div class="radio p-0 col-6 float-left" v-for="sex in gender">
                                    <input v-model="newCustomer.work_guarantor_gender" name="wggender" :value="sex"
                                           type="radio" :id="'gua'+sex" v-validate="'required'"
                                           data-vv-as="work guanrantor gender">
                                    <label :for="'gua'+sex">{{sex}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('wggender')">
                                    {{errors.first('wggender')}}
                                </small>
                            </div>

                            <div class="spaceAfter"></div>
                            <h5>Work Guarantor office Details</h5>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Street Name</label>
                                <input v-model="newCustomer.guaadd_street" type="text" class="form-control"
                                       placeholder="Enter Street name here" v-validate="'required|max:25'"
                                       data-vv-as="work guarantor street"
                                       name="work_guarantor_street_name"
                                       :class="{'is-invalid': errors.first('work_guarantor_street_name')}">
                                <small class="text-muted" v-if="errors.first('work_guarantor_street_name')">
                                    {{errors.first('work_guarantor_street_name')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Office Building Number</label>
                                <input v-model="newCustomer.guaadd_houseno" type="text" class="form-control"
                                       placeholder="Enter Building Number" v-validate="'required|max:25'"
                                       data-vv-as="work guarantor office building"
                                       name="work_guarantor_office_building"
                                       :class="{'is-invalid': errors.first('work_guarantor_office_building')}">
                                <small class="text-muted"
                                       v-if="errors.first('work_guarantor_office_building')">
                                    {{errors.first('work_guarantor_office_building')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Nearest Bus Stop</label>
                                <input v-model="newCustomer.guaadd_nbstop" type="text" class="form-control"
                                       placeholder="Enter nearest bus stop" v-validate="'required|max:25'"
                                       data-vv-as="work guarantor bus stop"
                                       name="work_guarantor_bus_stop"
                                       :class="{'is-invalid': errors.first('work_guarantor_bus_stop')}">
                                <small class="text-muted" v-if="errors.first('work_guarantor_bus_stop')">
                                    {{errors.first('work_guarantor_bus_stop')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Area</label>
                                <input v-model="newCustomer.gua_area" type="text" class="form-control"
                                       placeholder="Enter area" v-validate="'required|max:25'"
                                       data-vv-as="work guarantor area"
                                       name="work_guarantor_area"
                                       :class="{'is-invalid': errors.first('work_guarantor_area')}">
                                <small class="text-muted" v-if="errors.first('work_guarantor_area')">
                                    {{errors.first('work_guarantor_area')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>City</label>
                                <input v-model="newCustomer.work_guarantor_city" type="text" class="form-control"
                                       placeholder="Enter city" v-validate="'required|max:25'"
                                       data-vv-as="work guarantor city"
                                       name="work_guarantor_city"
                                       :class="{'is-invalid': errors.first('work_guarantor_city')}">
                                <small class="text-muted" v-if="errors.first('work_guarantor_city')">
                                    {{errors.first('work_guarantor_city')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>State</label>
                                <select class="custom-select w-100" v-model="newCustomer.work_guarantor_state"
                                        v-validate="'required|max:25'" data-vv-as="work guarantor state"
                                        name="work_guarantor_state"
                                        :class="{'is-invalid': errors.first('work_guarantor_state')}">
                                    <option value="">select state</option>
                                    <option :value="state.name" v-for="state in states">{{state.name}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('work_guarantor_state')">
                                    {{errors.first('work_guarantor_state')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Phone Number</label>
                                <input v-model="newCustomer.work_guarantor_telno" type="tel" class="form-control"
                                       placeholder="Enter city" v-validate="'required|numeric|max:11|min:11'"
                                       data-vv-as="work guarantor phone"
                                       name="work_guarantor_phone"
                                       :class="{'is-invalid': errors.first('work_guarantor_phone')}">
                                <small class="text-muted" v-if="errors.first('work_guarantor_phone')">
                                    {{errors.first('work_guarantor_phone')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Duration in Current work</label>
                                <select class="custom-select w-100" v-model="newCustomer.work_guarantor_work_duration"
                                        v-validate="'required'" data-vv-as="work guarantor work duration"
                                        name="work_guarantor_work_duration"
                                        :class="{'is-invalid': errors.first('work_guarantor_work_duration')}">
                                    <option value="">select duration</option>
                                    <option :value="duration" v-for="duration in durations">{{duration}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('work_guarantor_work_duration')">
                                    {{errors.first('work_guarantor_work_duration')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Describe Location</label>
                                <textarea class="form-control col-sm-12" placeholder="Describe the Location" rows="1"
                                          v-model="newCustomer.guaadd_addinfo"></textarea>
                            </div>

                            <div class="spaceBetween"></div>
                        </div>
                    </transition>


                    <h5>
                        <input class="form-check-input ml-1 mr-2" type="checkbox" value="true"
                               v-model="fillPersonalGuarantor">
                        Personal Guarantor Personal Info
                    </h5>

                    <transition name="fade">
                        <div v-if="fillPersonalGuarantor">
                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>First Name</label>
                                <input v-model="newCustomer.personal_guarantor_first_name" type="text"
                                       class="form-control"
                                       placeholder="Enter first name" v-validate="'required|max:25'"
                                       data-vv-as="first name"
                                       name="PG_first_name" :class="{'is-invalid': errors.first('PG_first_name')}">
                                <small class="text-muted" v-if="errors.first('PG_first_name')">
                                    {{errors.first('PG_first_name')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Middle Name</label>
                                <input v-model="newCustomer.personal_guarantor_middle_name" type="text"
                                       class="form-control"
                                       placeholder="Enter middle name">
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Last Name</label>
                                <input v-model="newCustomer.personal_guarantor_last_name" type="text"
                                       class="form-control"
                                       placeholder="Enter last name" v-validate="'required|max:25'"
                                       data-vv-as="last name"
                                       name="PG_last_name" :class="{'is-invalid': errors.first('PG_last_name')}">
                                <small class="text-muted" v-if="errors.first('PG_last_name')">
                                    {{errors.first('PG_last_name')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-9 col-sm-12 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Relationship</label>
                                <div class="radio p-0 col-md-3 col-6 float-left" v-for="rela in relationshipPG">
                                    <input v-model="newCustomer.personal_guarantor_relationship" type="radio"
                                           name="relationshippg" :id="rela+'pg'" :value="rela" v-validate="'required'"
                                           data-vv-as="personal guarantor relationship">
                                    <label :for="rela+'pg'">{{rela}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('relationshippg')">
                                    {{errors.first('relationshippg')}}
                                </small>
                            </div>

                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label class="w-100 float-left pl-1">Gender</label>
                                <div class="radio p-0 col-md-6 col-6 float-left" v-for="sex in gender">
                                    <input v-model="newCustomer.personal_guarantor_gender" name="pggender" :value="sex"
                                           type="radio" :id="'pg'+sex" v-validate="'required'"
                                           data-vv-as="personal guarantor gender">
                                    <label :for="'pg'+sex">{{sex}}</label>
                                </div>
                                <small class="text-muted" v-if="errors.first('pggender')">
                                    {{errors.first('pggender')}}
                                </small>
                            </div>

                            <div class="spaceAfter"></div>
                            <h5>Personal Guarantor office Details</h5>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Street Name</label>
                                <input v-model="newCustomer.pguaadd_street" type="text" class="form-control"
                                       placeholder="Enter Street name here" v-validate="'required|max:25'"
                                       data-vv-as="street number" name="pguaadd_street"
                                       :class="{'is-invalid': errors.first('pguaadd_street')}">
                                <small class="text-muted" v-if="errors.first('pguaadd_street')">
                                    {{errors.first('pguaadd_street')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Office Building Number</label>
                                <input v-model="newCustomer.pguaadd_houseno" type="text" class="form-control"
                                       placeholder="Enter Building Number" v-validate="'required|max:25'"
                                       data-vv-as="office building address" name="pguaadd_houseno"
                                       :class="{'is-invalid': errors.first('pguaadd_houseno')}">
                                <small class="text-muted" v-if="errors.first('pguaadd_houseno')">
                                    {{errors.first('pguaadd_houseno')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Nearest Bus Stop</label>
                                <input v-model="newCustomer.pguaadd_nbstop" type="text" class="form-control"
                                       placeholder="Enter nearest bus stop" v-validate="'required|max:25'"
                                       data-vv-as="per. guarantor nearest stop"
                                       name="pguaadd_nbstop" :class="{'is-invalid': errors.first('pguaadd_nbstop')}">
                                <small class="text-muted" v-if="errors.first('pguaadd_nbstop')">
                                    {{errors.first('pguaadd_nbstop')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Area</label>
                                <input v-model="newCustomer.pgua_area" type="text" class="form-control"
                                       placeholder="Enter area" v-validate="'required|max:25'"
                                       data-vv-as="personal guarantor area" name="pgua_area"
                                       :class="{'is-invalid': errors.first('pgua_area')}">
                                <small class="text-muted" v-if="errors.first('pgua_area')">
                                    {{errors.first('pgua_area')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>City</label>
                                <input v-model="newCustomer.personal_guarantor_city" type="text" class="form-control"
                                       placeholder="Enter city" v-validate="'required|max:25'"
                                       data-vv-as="personal guarantor city" name="personal_guarantor_city"
                                       :class="{'is-invalid': errors.first('personal_guarantor_city')}">
                                <small class="text-muted" v-if="errors.first('personal_guarantor_city')">
                                    {{errors.first('personal_guarantor_city')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>State</label>
                                <select class="custom-select w-100" v-model="newCustomer.personal_guarantor_state"
                                        v-validate="'required|max:25'" data-vv-as="personal guarantor state"
                                        name="personal_guarantor_state"
                                        :class="{'is-invalid': errors.first('personal_guarantor_state')}">
                                    <option value="">select state</option>
                                    <option :value="state.name" v-for="state in states">{{state.name}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('personal_guarantor_state')">
                                    {{errors.first('personal_guarantor_state')}}
                                </small>
                            </div>

                            <div class="spaceBetween"></div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Phone Number</label>
                                <input v-model="newCustomer.personal_guarantor_telno" type="tel" class="form-control"
                                       placeholder="Enter city" v-validate="'required|numeric|max:11|min:11'"
                                       data-vv-as="per. guarantor phone"
                                       name="personal_guarantor_telno"
                                       :class="{'is-invalid': errors.first('personal_guarantor_telno')}">
                                <small class="text-muted" v-if="errors.first('personal_guarantor_telno')">
                                    {{errors.first('personal_guarantor_telno')}}
                                </small>
                            </div>

                            <div class="form-group col-md-4 px-md-3 px-1 float-left">
                                <label>Duration in Current work</label>
                                <select class="custom-select w-100"
                                        v-model="newCustomer.personal_guarantor_work_duration"
                                        v-validate="'required'" data-vv-as="personal guarantor work duration"
                                        name="personal_guarantor_work_duration"
                                        :class="{'is-invalid': errors.first('personal_guarantor_work_duration')}">
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

                    </transition>


                    <h5>Other Questions</h5>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>What product do you need?</label>
                        <input v-model="newCustomer.what_product_do_you_need" type="text" class="form-control"
                               placeholder="Enter Product name" v-validate="'required|max:25'"
                               data-vv-as="what product do you need"
                               name="what_product_do_you_need" :class="{'is-invalid':
                               errors.first('what_product_do_you_need')}">
                        <small class="text-muted" v-if="errors.first('what_product_do_you_need')">
                            {{errors.first('what_product_do_you_need')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>What do you need it for?</label>
                        <input v-model="newCustomer.what_do_you_need_it_for" type="text" class="form-control"
                               placeholder="Enter Reason.." v-validate="'required|max:25'"
                               data-vv-as="what do you need it for" name="what_do_you_need_it_for"
                               :class="{'is-invalid': errors.first('what_do_you_need_it_for')}">
                        <small class="text-muted" v-if="errors.first('what_do_you_need_it_for')">
                            {{errors.first('what_do_you_need_it_for')}}
                        </small>
                    </div>

                    <div class="form-group col-md-4 px-md-3 px-1 float-left">
                        <label>Office Branch</label>
                        <select class="custom-select w-100" v-model="newCustomer.branch_id"
                                v-validate="'required|max:25'" data-vv-as="office branch" name="branch_id"
                                :class="{'is-invalid': errors.first('branch_id')}">
                            <option value="">select office branch</option>
                            <option :value="branch.id" v-for="branch in branches">{{branch.name}}</option>
                        </select>
                        <small class="text-muted" v-if="errors.first('branch_id')">
                            {{errors.first('branch_id')}}
                        </small>
                    </div>

                    <hr class="style-two">
                    <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right">
                        <button type="submit" class="btn btn-block btn-lg bg-default" :disabled="$isProcessing">
                            Register Customer <i class="far fa-paper-plane ml-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import {log} from '../../../helpers/log'
    import Flash from '../../../helpers/flash'
    import {get, post} from '../../../helpers/api'

    export default {
        data() {
            return {
                error: {},
                emptyForm: {},
                newCustomer: {},
                fillWorkGuarantor: false,
                fillPersonalGuarantor: false,
                gender: [
                    'Male', 'Female'
                ],
                noOfRooms: [
                    'One room', 'Two room', 'More than Two room'
                ],
                weekdays: [
                    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
                ],
                receiveIncomeMeans: [
                    'Bank Deposit',
                    'Cheque',
                    'Cash',
                ],
                paymentPeriod: [
                    'Daily',
                    'Weekly',
                    'Monthly',
                ],
                employmentStatus: [
                    'Formal',
                    'Informal(Business)',
                    'Unemployed',
                ],
                states: {},
                branches: {},
                highestLevelOfEdu: [
                    'No studies',
                    'Secondary',
                    'Polytechnic',
                    'Primary',
                    'University',
                    'Masters',
                ],
                civilStatus: [
                    'Single', 'Married', 'Divorced', 'Widow', 'Live Together'
                ],
                typesOfHome: [
                    'Family', 'Owned', 'Rented'
                ],
                relationshipWG: [
                    'Supervisor', 'Neighbouring worker', 'Co-worker', 'Employee'
                ],
                relationshipPG: [
                    'Friend', 'Family', 'Co-worker', 'Employee', 'Other'
                ],
                relationships: [
                    'Spouse', 'Mother', 'Sibling', 'Uncle', 'Nephew', 'In-law', 'Friend', 'Child', 'Father', 'Grandparent', 'Cousin', 'Caretaker', 'Grandchild'
                ],
                durations: [
                    'less than 1 year',
                    '1 year', '2 years',
                    '3 years',
                    'between 4 - 9 years',
                    'more than 10 years',
                    'more than 20 years'
                ],
            }
        },
        methods: {
            register() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.newCustomer.employment_status === 'Unemployed') {
                            Flash.setError('you can only register customer from formal and informal sectors at the moment!');
                            this.$scrollToTop();
                            return;
                        }
                        if(this.$network()){
                            this.$LIPS(true);
                            this.error = {};
                            post('/api/customer', this.newCustomer)
                                .then((res) => {
                                    if (res.data.registered) {
                                        Flash.setSuccess('Customer has been registered successfully!');
                                        log('createdNewCustomer : ', 'Customer ID : ' + String(res.data.id));
                                        this.$scrollToTop();
                                        this.resetForm();
                                    }
                                    this.$LIPS(false);
                                })
                                .catch((err) => {
                                    if (err.response.data.errors) this.error = err.response.data.errors;
                                    this.$LIPS(false);
                                });
                        }else{
                            this.$networkErr();
                        }
                    }
                    if (!result) {
                        this.$scrollToTop();
                        Flash.setError('Please Kindly make sure that all the fields in the form are filled correctly!');
                    }
                });
            },

            resetForm() {
                let newestCustomer = {};
                $.each(this.newCustomer, function (key, value) {
                    newestCustomer[key] = '';
                    if (($.type(value) === 'array')) newestCustomer[key] = [];
                });
                newestCustomer['employee_name'] = this.newCustomer.employee_name;
                newestCustomer['Date_of_Registration'] = this.newCustomer.Date_of_Registration;
                newestCustomer['employee_id'] = this.newCustomer.employee_id;
                this.newCustomer = newestCustomer;
            }
        },
        created() {
            get('/api/customer/create')
                .then((res) => {
                    this.states = res.data.states;
                    this.branches = res.data.branches;
                    this.newCustomer = res.data.form;
                    this.newCustomer.days_of_work = [];
                    this.newCustomer.Date_of_Registration = this.$getDate();
                });
        },
        beforeCreate() {
            if (!localStorage.getItem('api_token')) this.$router.push('/home');
        },
    }
</script>