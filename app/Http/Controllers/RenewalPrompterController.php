<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Filters\ContactCustomerFilter;
use App\Http\Filters\NewOrderFilter;
use App\OrderStatus;
use App\RenewalPrompter;
use App\Repositories\CustomerRepository;
use App\Repositories\NewOrderRepository;
use App\Repositories\RenewalPrompterRepository;

class RenewalPrompterController extends Controller
{
    //
    private $newOrderRepository;
    private $customerRepository;
    private $renewalPrompterRepository;

    public function __construct(NewOrderRepository $newOrderRepository, CustomerRepository $customerRepository, RenewalPrompterRepository $renewalPrompterRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
        $this->customerRepository = $customerRepository;
        $this->renewalPrompterRepository = $renewalPrompterRepository;
    }
    //
    public function index(ContactCustomerFilter $contactCustomerFilter)
    {
        //TODO
        //1. Create table  for renewal_status 
        //2. Create relationship between renewal status and orders
        //3. fetch all orders 
        //4. get count of all status update 
        $customerQuery = Customer::query();
        //   dd($customerQuery);
        $numberCustomersWithCompletedPayment =  $customerQuery->whereHas('new_orders', function ($query) {
            $query->where('status_id', OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id);
        })->count();
        return $numberCustomersWithCompletedPayment;
    }

    public function store(Request $request)
    {
        $data = [
            'renewal_prompter_status_id' => $request->renewal_prompter_status_id,
            'customer_id' => $request->customer_id,
            'feedback' => $request->feedback,
        ];
        $data =    $this->renewalPrompterRepository->store($data);
        return $this->sendSuccess($data->toArray(), 'Renewal prompter created successfully');
    }

    public function update(Request $request)
    {
        $data = [
            'renewal_prompter_status_id' => $request->renewal_prompter_status_id,
            'customer_id' => $request->customer_id,
            'feedback' => $request->feedback,
        ];
        $data =    $this->renewalPrompterRepository->store($data);
        return $this->sendSuccess($data->toArray(), 'Renewal prompter created successfully');
    }
}
