<?php

namespace App\Http\Controllers;

use App\Http\Filters\CustomerFilter;
use App\Repositories\CustomerRepository;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;

class ClientCustomerController extends Controller
{
    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    public function index(CustomerFilter $customerFilter)
    {
        $user = auth()->user();
        $customers = $this->customerRepository->queryModel($customerFilter)
            ->where('tenant_id', $user->tenant_id)
            ->latest()->paginate(\request('per_page') ?? 20);
        return $this->sendSuccess(['customers' => $customers], 'Orders retrieved successfully');
    }
}
