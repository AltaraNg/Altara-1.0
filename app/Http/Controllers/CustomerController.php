<?php

namespace App\Http\Controllers;

use App\Address;
use App\Branch;
use App\ContactCustomer;
use App\Customer;
use App\CustomerStage;
use App\Document;
use App\Events\CustomerCreatedEvent;
use App\Events\CustomerStageUpdatedEvent;
use App\Http\Filters\ContactCustomerFilter;
use App\PersonalGuarantor;
use App\ProcessingFee;
use App\Repositories\ContactCustomerRepository;
use App\State;
use App\Verification;
use App\WorkGuarantor;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        /** gets list of customers(paginated), searchPaginateAndOrder is a custom
         * query scope used by all the models that use data viewer trait
         * in this application */
        $model = Customer::select('id', 'first_name', 'last_name', 'employee_name', 'branch_id', 'date_of_registration', 'telephone')
            ->with('verification')
            ->searchPaginateAndOrder();
        /** the columns used to render the data viewer for customers list*/
        $columns = Customer::$columns;
        /** return the columns and the paginated list*/
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    public function create()
    {
        /** fetch list of all states*/
        $states = State::all();
        /** fetch the customer object form */
        $form = Customer::form();
        /** fetch list of all branches*/
        $branches = Branch::all();
        /** return the form, states, branches and the currently logged in user*/
        return response()->json([
            'form' => $form,
            'states' => $states,
            'branches' => $branches,
            'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id', 'role_id'])
        ]);
    }

    public function store(Request $request)
    {
        /** 1. validate the customer's phone number */
        $this->validate($request, [
            'telephone' => 'required|string|unique:customers,telephone',
            'email' => 'required|string|email|unique:customers,email',
            'reg_id' => 'sometimes|exists:contact_customers,reg_id',
        ]);

        /** 2. Create a new customer instance */
        $customer = new Customer($request->all());

        /** 3. Add other key value pairs */
        $customer->days_of_work = implode(' ', $request['days_of_work']);

        /** 4. save the customer to db */
        $customer->save();

        /** 5. create a record for the new customer in the documents table */
        $this->createCustomerDocument($customer->id);

        /** 6. create a record for the customer in the verifications table */
        $this->createCustomerVerification($customer->id);

        /** Upgrade customer stage if reg_id is supplied */
        if ($request->has('reg_id')) {
            event(new CustomerCreatedEvent($request->reg_id));
        }

        /** 7. return the registered flag, a new customer object form and the just created customer*/
        return response()->json([
            'registered' => true,
            'prepareForm' => $this->create()->original,
            'customer' => $this->fetchCustomer($customer->id)
        ]);
    }

    public function show($id)
    {
        /** 1. fetch customer*/
        $customer = $this->fetchCustomer($id);
        if ($customer) {
            /** 2. Check if the customer is linked to a branch(NB:: this is as a result of the new field branch_id
             * in the customers table during the migration to this new portal) hence most
             * of the old records dont have branch_id */
            if (!isset($customer->branch)) {
                /** 2 if the branch is not set (ie its an old record)*/
                /** 2.a set the branch id of the customer to the branch of the DSA that registered the customer*/
                $customer->branch_id = $customer->user->branch_id;
                /** 2.b. update the record */
                $customer->save();
                /** 2.c. Refresh the customer*/
                $customer->refresh();
            }
            /** 3. Check if the customer exist*/

            /** 3.a. If customer exist*/
            $d = $customer->document;
            $v = $customer->verification;
            /** 3.b. check if the customer has a verification and document record attached to him*/
            if (!isset($v) || !isset($d)) {
                /** 3.b.i if the customer doesnt have verification or(and) documentation record attached to him/her,
                 * create a document record for him,
                 * create a verification record for him */
                if (!isset($d)) $this->createCustomerDocument($customer->id);
                if (!isset($v)) $this->createCustomerVerification($customer->id);
                /** fetch the customer again with the updated records*/
                $customer = $this->fetchCustomer($id);
            }
            /** return the customer's details, a success flag, an empty address form form(and other empty forms)
             * and currently logged in  user */
            return response()->json([
                'success' => true,
                'customer' => $customer,
                'empty_address' => Address::form(),
                'empty_processing_fee' => ProcessingFee::form(),
                'empty_work_guarantor' => WorkGuarantor::form(),
                'empty_personal_guarantor' => PersonalGuarantor::form(),
                'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id', 'role_id'])
            ]);
        } else {
            /** 3.b. if customer doesnt exist return response with error code 422*/
            return response()->json([
                'customer' => '',
                'message' => 'The Customer ID did not match any customer in our records!'
            ], 422);
        }
    }

    public function update(Request $request, $id)
    {
        /** 1. Strip all the eager loaded model attached
         * to the $request(customer model) received */
        $this->validate($request, [
            'telephone' => 'sometimes|required|string|unique:customers,telephone,' . $id,
            'email' => 'sometimes|required|string|email|unique:customers,email,' . $id

        ]);

        unset($request['user']);
        unset($request['branch']);
        unset($request['address']);
        unset($request['document']);
        unset($request['verification']);
        unset($request['work_guarantor']);
        unset($request['processing_fee']);
        unset($request['personal_guarantor']);
        /** 2. Update the customer*/
        Customer::whereId($id)->update($request->all());
        /** return the update flag, prepare form
         * for a new registration and the
         * just updated customer */
        return response()->json([
            'updated' => true,
            'prepareForm' => $this->create()->original,
            'customer' => $this->show($id)->original['customer']
        ]);
    }

    public function fetchCustomer($id)
    {
        /** 1. Fetch customer with the linked details */
        $customer = Customer::with([
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
        /** 2. return the customer fetched*/
        return $customer;
    }

    static function createCustomerVerification($customerId)
    {
        /** Create a new instance of the verification model and
         * set values to the default preset values and save*/
        (new Verification([
            'id_card' => 0,
            'address' => 0,
            'passport' => 0,
            'work_guarantor' => 0,
            'guarantor_id' => 0,
            'proof_of_income' => 0,
            'personal_guarantor' => 0,
            'customer_id' => $customerId
        ]))->save();
    }

    static function createCustomerDocument($customerId)
    {
        /** Create a new instance of the documentation model and
         * set values to the default preset values and save*/
        (new Document([
            'id_card_url' => '',
            'passport_url' => '',
            'guarantor_id_url' => '',
            'proof_of_income_url' => '',
            'customer_id' => $customerId
        ]))->save();
    }

    public function customerLookup($id)
    {
        $customer = Customer::where('id', $id)->with(['document', 'verification', 'branch', 'new_orders', 'orders' => function ($query) {
            return $query->with([
                'repayment', 'repaymentFormal', 'repaymentInformal', 'status',
                'storeProduct', 'discount', 'salesCategory', 'salesType',
                'floorAgent' => function ($q) {
                    return $q->select('id', 'staff_id', 'full_name');
                }
            ]);
        }])->get();

        return response()->json([
            'customer' => $customer,
            'user' => auth('api')->user()->only(['branch_id'])
        ]);
    }

    public function autocompleteSearch(Request $request)
    {
        if (!isset($request->searchableFields)) {
            return response()->json(['message' => 'nothing to search.'], 400);
        }

        $searchColumns = array_keys($request->searchableFields);
        $searchValues = array_values($request->searchableFields);

        try {
            if (in_array('middle_name', $searchColumns)) {
                $customers = DB::select(DB::raw("SELECT id,
                    CONCAT(
                        COALESCE(`first_name`,''),' ',
                        COALESCE(`middle_name`,''),' ',
                        COALESCE(`last_name`,'')
                    ) AS 'full_name' FROM `customers` where (
                        ($searchColumns[0] LIKE '$searchValues[0]') ||
                        ($searchColumns[1] LIKE '$searchValues[1]') ||
                        ($searchColumns[2] LIKE '$searchValues[2]')
                    ) || (
                        ($searchColumns[0] LIKE '%%$searchValues[0]') ||
                        ($searchColumns[1] LIKE '%%$searchValues[1]') ||
                        ($searchColumns[2] LIKE '%%$searchValues[2]')
                    ) || (
                        ($searchColumns[0] LIKE '%%$searchValues[0]%%') ||
                        ($searchColumns[1] LIKE '%%$searchValues[1]%%') ||
                        ($searchColumns[2] LIKE '%%$searchValues[2]%%')
                    ) LIMIT 20"
                ));
            } else {
                $customers = Customer::autocompleteSearch($request)->get();
            }
        } catch (QueryException $exception) {
            return response()->json(['message' => 'bad request. Try again later.'], 400);
        }
        /*TODO cleanup*/


        return response()->json(['customers' => $customers]);
    }

    public static function getSelectColumns($searchColumns)
    {
        /**
         * Searching with phone numbers displays : phone_no & full name
         * Searching with customer id displays : customer id & full name
         * Searching with full name displays : full name
         *
         * */
        $columns = ['id', 'first_name', 'last_name'];
        in_array('telephone', $searchColumns) && array_push($columns, 'telephone');
        in_array('middle_name', $searchColumns) && array_push($columns, 'middle_name');
        return $columns;
    }

}
