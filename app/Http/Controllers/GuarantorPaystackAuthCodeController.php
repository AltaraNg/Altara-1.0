<?php

namespace App\Http\Controllers;

use App\Http\Requests\GuarantorPaystackRequest;
use App\Repositories\GuarantorPaystackRepo;

class GuarantorPaystackAuthCodeController extends Controller
{
    //

    private $guarantorRepo;

    public function __construct(GuarantorPaystackRepo $guarantorPaystackRepo)
    {
        $this->guarantorRepo = $guarantorPaystackRepo;
    }

    public function index()
    {
        $guarantors = $this->guarantorRepo->all();

        return $this->sendSuccess($guarantors->toArray(), 'guarantors retrieved successfully');
    }

    public function store(GuarantorPaystackRequest $request)
    {
        $data = array_merge($request->validated(),
            []);

        $inv = $this->guarantorRepo->store($data);

        return $this->sendSuccess($inv->toArray(), 'Guarantor Paystack Authcode Successfully Stored');
    }

}
