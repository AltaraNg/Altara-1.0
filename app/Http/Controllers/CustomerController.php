<?php

namespace App\Http\Controllers;

use App\Address;
use App\Branch;
use App\Customer;
use App\Document;
use App\PersonalGuarantor;
use App\ProcessingFee;
use App\State;
use App\Verification;
use App\WorkGuarantor;
use Illuminate\Http\Request;

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
        $states = State::all();
        $form = Customer::form();
        $branches = Branch::all();
        return response()->json([
            'form' => $form,
            'states' => $states,
            'branches' => $branches,
            'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id','role_id']),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'telephone' => 'unique:customers',
        ]);
        $customer = new Customer($request->all());
        $customer->days_of_work = implode(' ', $request['days_of_work']);
        $customer->save();
        (new Verification([
            'customer_id' => $customer->id,
            'passport' => 0,
            'id_card' => 0,
            'address' => 0,
            'work_guarantor' => 0,
            'personal_guarantor' => 0,
        ]))->save();
        (new Document([
            'customer_id' => $customer->id,
            'id_card_url' => '',
            'passport_url' => '',
        ]))->save();
        return response()->json([
            'registered' => true,
            'customer' => $this->show($customer->id)->original['customer'],
            'prepareForm' => $this->create()->original,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::with([
            'user' => function ($query) {
                $query->select('id', 'full_name', 'branch_id');
            },
            'branch', 'verification', 'address', 'workGuarantor', 'personalGuarantor', 'document', 'processingFee'
        ])->whereId($id)->first();
        if ($customer) {
            return response()->json([
                'customer' => $customer,
                'empty_address' => Address::form(),
                'empty_work_guarantor' => WorkGuarantor::form(),
                'empty_personal_guarantor' => PersonalGuarantor::form(),
                'empty_processing_fee' => ProcessingFee::form(),
                'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id','role_id']),
                'success' => true
            ]);
        }
        return response()->json([
            'message' => 'The Customer ID did not match any customer in our records!',
            'customer' => '',
        ], 422);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        unset($request['address']);
        unset($request['branch']);
        unset($request['document']);
        unset($request['personal_guarantor']);
        unset($request['processing_fee']);
        unset($request['user']);
        unset($request['verification']);
        unset($request['work_guarantor']);
        Customer::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
            'customer' => $this->show($id)->original['customer'],
            'prepareForm' => $this->create()->original,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function getData()
    {
        $model = Customer::select('id', 'first_name', 'last_name', 'employee_name', 'civil_status', 'telephone', 'date_of_registration')->searchPaginateAndOrder();
        $columns = Customer::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns,
        ]);
    }

}