<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('employee_name', 50);
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->string('employee_id', 30);
            $table->string('date_of_registration', 30);
            $table->unsignedInteger('branch_id')->index()->nullable();
            $table->string('first_name', 30);
            $table->string('middle_name', 30)->nullable();
            $table->string('last_name', 30);
            $table->string('add_nbstop', 100);
            $table->string('add_street', 100);
            $table->string('area_address', 255);
            //10
            $table->string('add_houseno', 50);
            $table->string('add_addinfo_description', 255)->nullable();
            $table->string('city', 30);
            $table->string('state', 50);
            $table->string('telephone', 30);
            $table->string('email', 100)->nullable();
            $table->string('gender', 10);
            $table->string('date_of_birth', 50);
            $table->string('civil_status', 50);
            $table->integer('year_together')->unsigned()->nullable();
            //50
            $table->string('type_of_home', 50);
            $table->string('no_of_rooms', 50);
            $table->integer('duration_of_residence')->unsigned();
            $table->integer('people_in_household')->unsigned();
            $table->integer('number_of_work')->unsigned();
            $table->integer('depend_on_you')->unsigned();
            $table->integer('number_of_children')->unsigned();
            $table->string('level_of_education', 50);
            $table->string('visit_hour_from', 50);
            $table->string('visit_hour_to', 50);
            //30
            $table->string('loan_from_institution', 10);
            $table->string('loan_amount', 50)->nullable();
            $table->string('did_you_pay_back', 10)->nullable();
            $table->string('employment_status', 50);
            $table->string('working_individual_Phone_number', 30)->nullable();
            $table->string('name_of_company_or_business', 50);
            $table->string('cadd_nbstop', 100);
            $table->string('cadd_addinfo', 255)->nullable();
            $table->string('company_city', 50);
            $table->string('company_state', 50);
            //40
            $table->string('company_telno', 30);
            //$table->string('type_of_company',50);
            $table->string('receive_income_means', 50)->nullable();
            $table->string('post_in_company', 255)->nullable();
            //$table->string('business_income',100);
            $table->string('days_of_work', 255);
            $table->string('market_name', 100)->nullable();
            $table->string('bank_account', 100)->nullable();
            $table->string('monthly_gains', 100)->nullable();
            $table->string('years_of_existence_or_work_duration', 100)->nullable();
            //50
            $table->string('comp_street_name', 100);
            $table->string('comp_house_no', 100);
            $table->string('comp_area', 50);
            $table->string('current_sal_or_business_income', 50);
            $table->string('payment_period', 50)->nullable();
            $table->string('cvisit_hour_from', 50);
            $table->string('cvisit_hour_to', 50);
            $table->string('nextofkin_first_name', 50);
            $table->string('nextofkin_middle_name', 50)->nullable();
            $table->string('nextofkin_last_name', 50);
            //60
            $table->string('nextofkin_relationship', 50);
            $table->string('nextofkin_gender', 50);
            $table->string('nextofkin_telno', 30);
            $table->string('nextofkin_work_duration', 50);


            $table->string('work_guarantor_first_name', 50)->nullable();
            $table->string('work_guarantor_middle_name', 50)->nullable();
            $table->string('work_guarantor_last_name', 50)->nullable();
            $table->string('work_guarantor_relationship', 50)->nullable();
            $table->string('guaadd_nbstop', 50)->nullable();
            $table->string('guaadd_street', 50)->nullable();
            //70
            $table->string('guaadd_houseno', 50)->nullable();
            $table->string('guaadd_addinfo', 50)->nullable();
            $table->string('gua_area', 50)->nullable();
            $table->string('work_guarantor_city', 50)->nullable();
            $table->string('work_guarantor_state', 50)->nullable();
            $table->string('work_guarantor_gender', 10)->nullable();
            $table->string('work_guarantor_telno', 30)->nullable();
            $table->string('work_guarantor_work_duration', 50)->nullable();
            $table->string('personal_guarantor_first_name', 50)->nullable();
            $table->string('personal_guarantor_middle_name', 50)->nullable();
            //80
            $table->string('personal_guarantor_last_name', 50)->nullable();
            $table->string('personal_guarantor_relationship', 50)->nullable();
            $table->string('personal_guarantor_city', 50)->nullable();
            $table->string('personal_guarantor_state', 50)->nullable();
            $table->string('pguaadd_nbstop', 100)->nullable();
            $table->string('pguaadd_street', 100)->nullable();
            $table->string('pguaadd_houseno', 100)->nullable();
            $table->string('pguaadd_addinfo', 255)->nullable();
            $table->string('pgua_area', 50)->nullable();
            $table->string('personal_guarantor_gender', 10)->nullable();
            //90
            $table->string('personal_guarantor_telno', 30)->nullable();
            $table->string('personal_guarantor_work_duration', 50)->nullable();


            $table->string('what_product_do_you_need', 255);
            $table->string('what_do_you_need_it_for', 255);
            $table->timestamps();
        });
        Schema::table('customers', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('branch_id')->references('id')->on('branches');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
