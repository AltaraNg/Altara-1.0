<?php

namespace App\Http\Controllers;

use App\Models\ContactCustomer;
use App\Notifications\ContactCustomerNotification;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class CustomerContactNotificationController extends Controller
{

    /**
     * Persist Renewal List Orders that are treated
     * @param ContactCustomer $customer
     * @return Response
     * @throws ValidationException
     */
    public function store(ContactCustomer $customer)
    {
        $data = $this->validate(request(), [
            'feedback' => 'required|string'
        ]);
        $customer->notify(new ContactCustomerNotification(array_merge($data, ['date' => Carbon::now()])));

        return $this->sendSuccess([], 'Notification saved successfully');
    }
}
