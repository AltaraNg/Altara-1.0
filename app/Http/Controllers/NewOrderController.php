<?php

namespace App\Http\Controllers;

use App\Http\Filters\DailySalesNewOrderFilter;
use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\NewOrderRequest;
use App\Models\NewOrder;
use App\Repositories\ContactCustomerRepository;
use App\Repositories\DirectDebitDataRepository;
use App\Repositories\NewOrderRepository;
use App\Repositories\PaystackAuthCodeRepository;
use App\Services\CreditCheckService;
use App\Services\DirectDebitService;
use App\Services\NewOrdersReportService;
use App\Services\RepaymentScheduleService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class NewOrderController extends Controller
{

    private $newOrderRepository;
    private $paystackAuthCodeRepository;
    private $directDebitDataRepository;
    private $contactRepository;

    public function __construct(
        NewOrderRepository $newOrderRepository,
        ContactCustomerRepository $contactRepository,
        PaystackAuthCodeRepository $paystackAuthCodeRepository,
        DirectDebitDataRepository $directDebitDataRepository
    ) {
        $this->newOrderRepository = $newOrderRepository;
        $this->contactRepository = $contactRepository;
        $this->paystackAuthCodeRepository = $paystackAuthCodeRepository;
        $this->directDebitDataRepository = $directDebitDataRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param NewOrderFilter $newOrderFilter
     * @return Response
     */
    public function index(NewOrderFilter $newOrderFilter)
    {
        $orders = $this->newOrderRepository->query($newOrderFilter);
        return $this->sendSuccess($orders->toArray(), 'Orders retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewOrderRequest $request
     * @return Response
     */
    public function store(NewOrderRequest $request)
    {

        $order = $this->newOrderRepository->store($request->validated());
        if ($request->authorization_code) {
            $data = ['order_id' => $order->order_number, 'auth_code' => $request->authorization_code];
            $this->paystackAuthCodeRepository->store($data);
            if ($request->has('account_number')) {
                CreditCheckService::accountNumberVerification(
                    $order->customer_id,
                    $order->id,
                    $request->input('account_number'),
                    $request->input('account_name'),
                    $request->input('bank_name')
                );
            }
        }
        if ($request->collection_verification_data) {
            $collection_verification_data = (object) $request->collection_verification_data;
            $this->directDebitDataRepository->store([
                'customer_id' => $order->customer_id,
                'order_id' => $order->order_number,
                'sal_sug_date_1' => $collection_verification_data->salary_day_1,
                'sal_sug_date_2' => $collection_verification_data->salary_day_2,
                'sal_sug_date_3' => $collection_verification_data->salary_day_3,
                'proof_of_salary_bank' =>  $collection_verification_data->proof_of_credit,
                'guarantor_signed' =>  $collection_verification_data->guarantor_signed,
                'address_visited' =>  $collection_verification_data->address_visited,
                'credit_report' =>  $collection_verification_data->credit_report_status,
                'credit_point' =>  $collection_verification_data->credit_point_status,
                'mode' => 0,
            ]);
        }
        if ($request->amortization_downpayment > 0) {
            $order = $order->refresh();
            $amortization = $order->amortization;
            $amount = $request->amortization_downpayment;
            $count = $amortization->count() - 1;
            while ($amount > 0 && $count < $amortization->count()) {
                $item = $amortization[$count];
                $amountToDeduct = $item->expected_amount;
                $actualAmount = 0;
                if ($amount >= $amountToDeduct) {
                    $actualAmount = $item->actual_amount + $amountToDeduct;
                    $amount = $amount - $amountToDeduct;
                } else if ($amount < $amountToDeduct) {
                    $actualAmount = $item->actual_amount + $amount;
                    $amount = 0;
                }
                if ($actualAmount > 0) {
                    $item->update([
                        'actual_payment_date' => Carbon::now(),
                        'actual_amount' => $actualAmount,
                        'user_id' => auth('api')->user()->id
                    ]);
                }
                $count--;
            }
        }
        return $this->sendSuccess($order->toArray(), 'Order Successfully Created');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewOrder $new_order
     * @param NewOrderRequest $request
     * @return Response
     */
    public function update(NewOrder $new_order, NewOrderRequest $request)
    {
        $order = $this->newOrderRepository->update($new_order, $request->validated());

        return $this->sendSuccess($order->toArray(), 'Order updated successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param NewOrder $new_order
     * @return Response
     */
    public function show(NewOrder $new_order)
    {
        return $this->sendSuccess($new_order->toArray(), 'Order retrieved successfully');
    }

    public function repossess(NewOrder $new_order)
    {

        $result = $this->newOrderRepository->repossess($new_order);
        return $this->sendSuccess($result, 'Order repossessed successfully');
    }

    public function report(NewOrderFilter $filter, NewOrdersReportService $newOrdersReportService, DailySalesNewOrderFilter $dailySalesNewOrderFilter)
    {
        $dailySalesNewOrdersQuery = $this->newOrderRepository->reportQuery($dailySalesNewOrderFilter);
        $newOrdersQuery = $this->newOrderRepository->reportQuery($filter)->latest('new_orders.created_at');
        $getTotalSalesPerDay = $newOrdersReportService->getTotalSalesPerDay($dailySalesNewOrdersQuery);
        $additional = $newOrdersReportService->generateMetaData($newOrdersQuery);
        $additional = $additional->put('totalSalesPerDay', $getTotalSalesPerDay);
        return $this->sendSuccess(["meta" => $additional], 'Orders retrieved successfully');
    }

    public function repaymentSchedule(NewOrderFilter $filter, RepaymentScheduleService $repaymentScheduleService)
    {
        $newOrdersQuery = $this->newOrderRepository->reportQuery($filter);
        $getTotalRepaymentExpected = $repaymentScheduleService->getTotalRepayment($newOrdersQuery);
        
        return $this->sendSuccess(["meta" => $getTotalRepaymentExpected], 'Orders retrieved successfully');
    }




    public function chargeCustomerOrder(Request $request, DirectDebitService $directDebitService)
    {
        $this->validate($request, [
            'amount' => ['required', 'integer', 'min:1'],
            'order_id' => ['required', 'integer'],
            'account' => ['required', 'integer']
        ]);
        $new_order = $this->newOrderRepository->getDirectDebitOrderWithUnpaidAmortization($request->order_id);
        //if order does not qualify to get debited through this method
        if ($new_order == null) {
            return $this->sendError('Order supplied can not be treated', 400, [], 400);
        }
        $response =  $directDebitService->handleCustomDebit($new_order, $request->amount, $request->account);
        if ($response['status'] == 'failed') {
            return $this->sendError($response['statusMessage'], 400, [], 400);
        }
        return $this->sendSuccess([], 'Customer debited successfully and amortization(s) has been updated');
    }
}
