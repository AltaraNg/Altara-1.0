<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->except('');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();

        $form = Customer::form();

        $form['employee_name'] = $user->first_name.' '.$user->last_name;

        $form['employee_ID'] = $user->staff_id;

        return response()->json([

            'form' => $form,

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*$this->validate($request, [
            'employee_name' => 'required',
            'employee_ID' => 'required',
            'Date_of_Registration' => 'required',
            'office_branch' => 'required',
            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'add_nbstop' => 'required',
            'add_street' => 'required',
            'area_address' => 'required',
            'add_houseno' => 'required',
            'add_addinfo_description' => 'required',
            'city' => 'required',
            'state' => 'required',
            'telephone' => 'required',
            'email' => 'required|email',
            'gender' => 'required',
            'date_of_birth' => 'required',
            'civil_status' => 'required',
            'year_together' => 'required|integer',
            'type_of_home' => 'required',
            'no_of_rooms' => 'required',
            'duration_of_residence' => 'required|integer',
            'people_in_household' => 'required|integer',
            'number_of_work' => 'required|integer',
            'depend_on_you' => 'required|integer',
            'number_of_children' => 'required|integer',
            'level_of_education' => 'required',
            'visit_hour_from' => 'required',
            'visit_hour_to' => 'required',
            'loan_from_institution' => 'required',
            'employment_status' => 'required',
            'working_individual_Phone_number' => 'required',
            'name_of_company_or_business' => 'required',
            'cadd_nbstop' => 'required',
            'cadd_addinfo' => 'required',
            'company_city' => 'required',
            'company_state' => 'required',
            'company_telno' => 'required',
            'receive_income_means' => 'required',
            'post_in_company' => 'required',
            'days_of_work' => 'required|array',
            'years_of_existence_or_work_duration' => 'required',
            'comp_street_name' => 'required',
            'comp_house_no' => 'required',
            'comp_area' => 'required',
            'current_sal_or_business_income' => 'required',
            'payment_period' => 'required',
            'cvisit_hour_from' => 'required',
            'cvisit_hour_to' => 'required',
            'nextofkin_first_name' => 'required',
            'nextofkin_middle_name' => 'required',
            'nextofkin_last_name' => 'required',
            'nextofkin_relationship' => 'required',
            'nextofkin_gender' => 'required',
            'nextofkin_telno' => 'required',
            'nextofkin_work_duration' => 'required',
            'work_guarantor_first_name' => 'required',
            'work_guarantor_middle_name' => 'required',
            'work_guarantor_last_name' => 'required',
            'work_guarantor_relationship' => 'required',
            'guaadd_nbstop' => 'required',
            'guaadd_street' => 'required',
            'guaadd_houseno' => 'required',
            'guaadd_addinfo' => 'required',
            'gua_area' => 'required',
            'work_guarantor_city' => 'required',
            'work_guarantor_state' => 'required',
            'work_guarantor_gender' => 'required',
            'work_guarantor_telno' => 'required',
            'work_guarantor_work_duration' => 'required',
            'personal_guarantor_first_name' => 'required',
            'personal_guarantor_middle_name' => 'required',
            'personal_guarantor_last_name' => 'required',
            'personal_guarantor_relationship' => 'required',
            'personal_guarantor_city' => 'required',
            'personal_guarantor_state' => 'required',
            'pguaadd_nbstop' => 'required',
            'pguaadd_street' => 'required',
            'pguaadd_houseno' => 'required',
            'pguaadd_addinfo' => 'required',
            'pgua_area' => 'required',
            'personal_guarantor_gender' => 'required',
            'personal_guarantor_telno' => 'required',
            'personal_guarantor_work_duration' => 'required',
            'what_product_do_you_need' => 'required',
            'what_do_you_need_it_for' => 'required',
        ]);*/

        $customer = new Customer($request->all());

        $customer->days_of_work = implode(' ',$request['days_of_work']);

        $customer->save();

        return response()->json([

            'registered' => true,

        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
