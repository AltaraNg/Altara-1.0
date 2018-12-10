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
        $model = Customer::select('id', 'first_name', 'last_name', 'employee_name', 'civil_status', 'telephone', 'date_of_registration')->searchPaginateAndOrder();
        $columns = Customer::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
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
            'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id', 'role_id'])
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
        $this->validate($request, ['telephone' => 'unique:customers']);
        $customer = new Customer($request->all());
        $customer->days_of_work = implode(' ', $request['days_of_work']);
        $customer->save();
        $this->createCustomerDocument($customer->id);
        $this->createCustomerVerification($customer->id);
        return response()->json([
            'registered' => true,
            'prepareForm' => $this->create()->original,
            'customer' => $this->fetchCustomer($customer->id)
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
        $customer = $this->fetchCustomer($id);
        if ($customer) {
            $d = $customer->document;
            $v = $customer->verification;
            if (!isset($v) || !isset($d)) {
                if (!isset($d)) $this->createCustomerDocument($customer->id);
                if (!isset($v)) $this->createCustomerVerification($customer->id);
                $customer = $this->fetchCustomer($id);
            }
            return response()->json([
                'success' => true,
                'customer' => $customer,
                'empty_address' => Address::form(),
                'empty_processing_fee' => ProcessingFee::form(),
                'empty_work_guarantor' => WorkGuarantor::form(),
                'empty_personal_guarantor' => PersonalGuarantor::form(),
                'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id', 'role_id'])
            ]);
        }
        return response()->json([
            'customer' => '',
            'message' => 'The Customer ID did not match any customer in our records!'
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
        unset($request['user']);
        unset($request['branch']);
        unset($request['address']);
        unset($request['document']);
        unset($request['verification']);
        unset($request['work_guarantor']);
        unset($request['processing_fee']);
        unset($request['personal_guarantor']);
        Customer::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
            'prepareForm' => $this->create()->original,
            'customer' => $this->show($id)->original['customer']
        ]);
    }


    public function fetchCustomer($id)
    {
        return Customer::with([
            'user' => function ($query) {
                $query->select('id', 'full_name', 'branch_id');
            },
            'branch',
            'verification',
            'address',
            'workGuarantor',
            'personalGuarantor',
            'document',
            'processingFee'
        ])->whereId($id)->first();
    }

    static function createCustomerVerification($customerId)
    {
        (new Verification([
            'id_card' => 0,
            'address' => 0,
            'passport' => 0,
            'work_guarantor' => 0,
            'personal_guarantor' => 0,
            'customer_id' => $customerId
        ]))->save();
    }

    static function createCustomerDocument($customerId)
    {
        (new Document([
            'id_card_url' => '',
            'passport_url' => '',
            'customer_id' => $customerId
        ]))->save();
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
}