<?php

namespace App\Http\Controllers;

use App\CustomerStage;
use App\Events\CustomerStageUpdatedEvent;
use App\Http\Filters\ContactCustomerFilter;
use App\Http\Filters\DailySalesNewOrderFilter;
use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\NewOrderRequest;
use App\NewOrder;
use App\Repositories\ContactCustomerRepository;
use App\Repositories\DirectDebitDataRepository;
use App\Repositories\NewOrderRepository;
use App\Repositories\PaystackAuthCodeRepository;
use App\Services\NewOrdersReportService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\This;
use Symfony\Component\VarDumper\Cloner\Data;

class NewOrderController extends Controller
{

    private $newOrderRepository;
    private $paystackAuthCodeRepository;
    private $directDebitDataRepository;

    public function __construct(
        NewOrderRepository $newOrderRepository,
        ContactCustomerRepository $contactRepository,
        PaystackAuthCodeRepository $paystackAuthCodeRepository,
        DirectDebitDataRepository $directDebitDataRepository
    ) {
        $this->newOrderRepository = $newOrderRepository;
        $this->contactRepo = $contactRepository;
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
}
