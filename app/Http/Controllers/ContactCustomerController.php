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
        $contactsQuery = $this->contactRepo->query($filter);
        $contactsQueryClone = clone $contactsQuery;
        $summary = $contactsQueryClone->selectRaw('count(*) as total');

        $stages = CustomerStage::whereIn('name', ['Registered', 'Purchased', 'Affidavit'])->get();
        foreach ($stages as $stage)
        {
            $summary = $summary->selectRaw('count(case when customer_stage_id = '. $stage->id .' then  1 end) as ' . $stage->name);
        }
        $summary = $summary->first();

        $additional = [
            'contacted' => $summary->total,
            'registered' => $summary->Registered,
            'Purchased' => $summary->Purchased,
            'Affidavit' => $summary->Affidavit,
        ];

        return $this->sendSuccess([$contactsQuery->paginate((int)request('limit', 20)), "meta" => $additional], 'Contact retrieved successfully');
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

    public function show(ContactCustomer $customer_contact)
    {
        //
        return $this->sendSuccess($customer_contact->toArray(), 'Contact retrieved successfully');
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
