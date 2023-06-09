<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Notifications\CustomerNotification;
use Carbon\Carbon;

class CustomerNotificationController extends Controller
{

    /**
     * Persist Renewal List Orders that are treated
     * @param Customer $customer
     * @return Response
     * @throws ValidationException
     */
    public function store(Customer $customer)
    {
        $data = $this->validate(request(), [
            'message' => 'required|string'
        ]);
        $customer->notify(new CustomerNotification(array_merge($data, ['date' => Carbon::now()])));

        return $this->sendSuccess([], 'Notification saved successfully');
    }
}
