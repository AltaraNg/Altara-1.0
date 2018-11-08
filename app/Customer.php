<?php

namespace App;
use App\Helper\DataViewer;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use DataViewer;

    protected $guarded = [];

    protected $hidden = [];

    public static $columns = [
        'id', 'first_name', 'last_name', 'employee_name', 'civil_status', 'telephone', 'date_of_registration'
    ];

    public static function form()
    {
        return [
            'employee_name' => '',
            'employee_id' => '',
            'date_of_registration' => '',
            'branch_id' => '',
            'first_name' => '',
            'middle_name' => '',
            'last_name' => '',
            'add_nbstop' => '',
            'add_street' => '',
            'area_address' => '',
            'add_houseno' => '',
            'add_addinfo_description' => '',
            'city' => '',
            'state' => '',
            'telephone' => '',
            'email' => '',
            'gender' => '',
            'date_of_birth' => '',
            'civil_status' => '',
            'year_together' => '',
            'type_of_home' => '',
            'no_of_rooms' => '',
            'duration_of_residence' => '',
            'people_in_household' => '',
            'number_of_work' => '',
            'depend_on_you' => '',
            'number_of_children' => '',
            'level_of_education' => '',
            'visit_hour_from' => '',
            'visit_hour_to' => '',
            'loan_from_institution' => '',
            'loan_amount' => '',
            'did_you_pay_back' => '',
            'employment_status' => '',
            'working_individual_Phone_number' => '',
            'name_of_company_or_business' => '',
            'cadd_nbstop' => '',
            'cadd_addinfo' => '',
            'company_city' => '',
            'company_state' => '',
            'company_telno' => '',
            'receive_income_means' => '',
            'post_in_company' => '',
            'days_of_work' => '',
            'market_name' => '',
            'monthly_gains' => '',
            'years_of_existence_or_work_duration' => '',
            'comp_street_name' => '',
            'comp_house_no' => '',
            'comp_area' => '',
            'current_sal_or_business_income' => '',
            'payment_period' => '',
            'cvisit_hour_from' => '',
            'cvisit_hour_to' => '',
            'nextofkin_first_name' => '',
            'nextofkin_middle_name' => '',
            'nextofkin_last_name' => '',
            'nextofkin_relationship' => '',
            'nextofkin_gender' => '',
            'nextofkin_telno' => '',
            'nextofkin_work_duration' => '',
            'work_guarantor_first_name' => '',
            'work_guarantor_middle_name' => '',
            'work_guarantor_last_name' => '',
            'work_guarantor_relationship' => '',
            'guaadd_nbstop' => '',
            'guaadd_street' => '',
            'guaadd_houseno' => '',
            'guaadd_addinfo' => '',
            'gua_area' => '',
            'work_guarantor_city' => '',
            'work_guarantor_state' => '',
            'work_guarantor_gender' => '',
            'work_guarantor_telno' => '',
            'work_guarantor_work_duration' => '',
            'personal_guarantor_first_name' => '',
            'personal_guarantor_middle_name' => '',
            'personal_guarantor_last_name' => '',
            'personal_guarantor_relationship' => '',
            'personal_guarantor_city' => '',
            'personal_guarantor_state' => '',
            'pguaadd_nbstop' => '',
            'pguaadd_street' => '',
            'pguaadd_houseno' => '',
            'pguaadd_addinfo' => '',
            'pgua_area' => '',
            'personal_guarantor_gender' => '',
            'personal_guarantor_telno' => '',
            'personal_guarantor_work_duration' => '',
            'what_product_do_you_need' => '',
            'what_do_you_need_it_for' => '',
        ];
    }

    //a customer is registers by a user i.e is attended to/or belongs to a user/employee : customer->user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //a customer can be verified once/has one verification : customer->verification
    public function verification()
    {
        return $this->hasOne(Verification::class);
    }

    //customer was attended to or registered on a branch : customer->branch
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    //a customer has a set os document(not more than one) : customer->document
    public function document()
    {
        return $this->hasOne(Document::class);
    }

    public function address()
    {
        return $this->hasOne(Address::class);
    }

    public function workGuarantor()
    {
        return $this->hasOne(WorkGuarantor::class);
    }

    public function personalGuarantor()
    {
        return $this->hasOne(PersonalGuarantor::class);
    }

    public function processingFee()
    {
        return $this->hasOne(ProcessingFee::class);
    }

}
