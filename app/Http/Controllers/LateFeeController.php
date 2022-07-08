<?php

namespace App\Http\Controllers;

use App\Events\LateFeeDebitEvent;
use App\Http\Filters\LateFeeFilter;
use App\LateFee;
use App\PaymentMethod;
use App\PaymentType;
use App\Repositories\LateFeeRepository;
use App\Services\PaymentService;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LateFeeController extends Controller
{
    //
    private $lateFeeRepo;
    public function __construct(LateFeeRepository $lateFeeRepository)
    {
        $this->lateFeeRepo = $lateFeeRepository;
    }

    public function index(LateFeeFilter $filter)
    {
        $lateFees = $this->lateFeeRepo->getAll($filter);

        return $this->sendSuccess($lateFees->toArray(), 'Late fees retrieved successfully');
    }

    public function update(LateFee $lateFee)
    {
        $today = Carbon::now()->toDateString();
        $lateFee->date_paid = $today;
        $lateFee->save();

        $data_for_log = [
            "amount" => $lateFee->amount,
            "customer_id" => $lateFee->new_orders->customer_id,
            "payment_type_id" => PaymentType::where('type', PaymentType::LATE_FEE)->first()->id,
            "payment_method_id" => PaymentMethod::where('name', 'direct-debit')->first()->id,
            "bank_id" => 6 //hardcoded to fcmb
        ];
        PaymentService::logPayment($data_for_log, $lateFee->new_orders);
        event(new LateFeeDebitEvent($lateFee));


        return $this->sendSuccess($lateFee->toArray(), 'Late fee updated successfully');
    }
}
