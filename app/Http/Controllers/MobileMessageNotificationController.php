<?php

namespace App\Http\Controllers;

use App\Notifications\CustomerMobileMessageNotification;
use App\Repositories\CustomerRepository;
use App\Services\MessageService;
use Illuminate\Http\Request;

class MobileMessageNotificationController extends Controller
{
    private $customerRepository;
    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    public function store(Request $request)
    {
        $request->validate([
            'customer_id' => ['required', 'integer', 'exists:customers,id'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string']
        ]);
        $customer = $this->customerRepository->getCustomer($request->customer_id);
        if (!$customer) {
            $this->sendError('Invalid customer ID supplied', 400);
        }
        $message = $request->message;
        $customer->notify(new CustomerMobileMessageNotification($message, $request->subject));
        return  $this->sendSuccess([], 'Customer has been successfully notified');
    }
}
