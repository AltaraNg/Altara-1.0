<?php

namespace App\Http\Controllers;

use App\ContactCustomer;
use App\CustomerStage;
use App\Helper\Helper;
use App\Http\Filters\ContactCustomerFilter;
use App\Http\Requests\ContactCustomerRequest;
use App\Repositories\ContactCustomerRepository;
use Illuminate\Http\Response;

class ContactCustomerController extends Controller
{
    private $contactRepo;

    public function __construct(ContactCustomerRepository $contactRepository)
    {
        $this->contactRepo = $contactRepository;
    }

    public function index(ContactCustomerFilter $filter)
    {
        $contacts = $this->contactRepo->query($filter);

        return $this->sendSuccess($contacts->toArray(), 'Contact retrieved successfully');
    }

    public function store(ContactCustomerRequest $request)
    {
        $data = array_merge($request->validated(),
            [
                'user_id' => auth()->user()->id,
                'reg_id' => Helper::generateSKU(6),
                'customer_stage_id' => CustomerStage::where('name', CustomerStage::CONTACTED)->first()->id,
                'branch_id' => auth()->user()->branch_id
            ]);
        $inv = $this->contactRepo->store($data);

        return $this->sendSuccess($inv->toArray(), 'Contact Successfully Created');
    }

    public function show(ContactCustomer $contactCustomer)
    {
        //
        return $this->sendSuccess($contactCustomer->toArray(), 'Contact retrieved successfully');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param ContactCustomer $customer_contact
     * @param ContactCustomerRequest $request
     * @return Response
     */
    public function update(ContactCustomer $customer_contact, ContactCustomerRequest $request)
    {
        $order = $this->contactRepo->update($customer_contact, $request->validated());

        return $this->sendSuccess($order->toArray(), 'Contact updated successfully');
    }
}
