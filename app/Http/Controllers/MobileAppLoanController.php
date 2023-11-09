<?php

namespace App\Http\Controllers;

use App\Events\MobileAppActivityEvent;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Services\MessageService;
use App\Services\CreditCheckService;
use App\Http\Requests\AppLoanRequest;
use App\Services\AmmortizationService;
use App\Repositories\NewOrderRepository;
use App\Models\CreditCheckerVerification;
use App\Models\Customer;
use App\Models\MobileAppActivity;
use App\Models\NewOrder;
use App\Models\OrderType;
use App\Models\PaymentMethod;
use App\Models\SalesCategory;
use App\Notifications\CustomerLoanApprovalNotification;
use App\Notifications\CustomerLoanConfirmationNotification;
use App\Services\CreditCheckerVerificationService;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class MobileAppLoanController extends Controller
{
    private CreditCheckerVerificationService $creditCheckerVerificationService;
    private NewOrderRepository $newOrderRepository;
    private  MessageService $messageService;
    private  AmmortizationService $amortizationService;
    public function __construct(
        CreditCheckerVerificationService $creditCheckerVerificationService,
        NewOrderRepository $newOrderRepository,
        MessageService $messageService,
        AmmortizationService $amortizationService
    ) {
        $this->creditCheckerVerificationService = $creditCheckerVerificationService;
        $this->newOrderRepository = $newOrderRepository;
        $this->messageService = $messageService;
        $this->amortizationService = $amortizationService;
    }

    public function createLoan(AppLoanRequest $request)
    {
        $creditCheckerVerification = CreditCheckerVerification::query()
            ->with(['product', 'repaymentCycle', 'downPaymentRate', 'repaymentDuration', 'businessType'])
            ->where('id', $request->input('credit_checker_verification_id'))
            ->where('bnpl_vendor_product_id', '=', null)
            ->first();
        if ($creditCheckerVerification == null) {
            return $this->sendError('Invalid Credit check verification ID supplied', 404, [], 404);
        }
        $repayment = $request->input('repayment');
        $down_payment = $request->input('down_payment');
        $product_price = $request->input('product_price');
        $fixed_repayment = $request->input('fixed_repayment', false);
        $data = $this->orderData($creditCheckerVerification, $repayment, $down_payment, $product_price, $fixed_repayment);
        $loan = $this->newOrderRepository->store($data);
        event(
            new MobileAppActivityEvent(
                MobileAppActivity::query()->where('slug', 'make_downpaymnt')->first(),
                $creditCheckerVerification->customer,
                [
                    'credit_check' => $creditCheckerVerification->load(['product', 'repaymentDuration', 'repaymentCycle', 'downPaymentRate', 'businessType', 'documents']),
                    'loan' => $loan,
                    
                ]
            )
        );
        return $this->sendSuccess(['loan' => $loan], 'Loan created');
    }

    public function previewAmortization(AppLoanRequest $request)
    {
        $creditCheckerVerification = CreditCheckerVerification::query()
            ->with(['product', 'repaymentCycle', 'downPaymentRate', 'repaymentDuration', 'businessType'])
            ->where('id', $request->input('credit_checker_verification_id'))
            ->where('bnpl_vendor_product_id', '=', null)
            ->first();
        $repayment = $request->input('repayment');
        $down_payment = $request->input('down_payment');
        $product_price = $request->input('product_price');
        $fixed_repayment = $request->input('fixed_repayment', false);
        $data = $this->orderData($creditCheckerVerification, $repayment, $down_payment, $product_price, $fixed_repayment);
        $resp = $this->amortizationService->generatePreview($data);
        return $this->sendSuccess(['preview' => $resp], 'Amortization preview');
    }

    public function updateCreditCheckerVerificationStatus(Request $request, CreditCheckerVerification $creditCheckerVerification)
    {
        $this->validate($request, [
            'status' => ['required', 'string', Rule::in(CreditCheckerVerification::STATUSES)],
            'reason' => ['sometimes', 'string'],
        ]);
        if ($creditCheckerVerification->status == CreditCheckerVerification::FAILED) {
            return  $this->sendError('You are not allowed to change the status of a declined or failed credit check', 401);
        }

        $creditCheckerVerification =  $this->creditCheckerVerificationService->updateCreditCheckerVerificationStatus(
            $request->user()->id,
            $request->input('status'),
            $request->input('reason'),
            $creditCheckerVerification
        );
        if (env('SEND_CREDIT_CHECK_VERIFICATION') && $creditCheckerVerification->status == CreditCheckerVerification::PASSED) {
            $customer = $creditCheckerVerification->customer;
            $this->sendLoanConfirmationMessageToCustomer($customer);
            if ($customer->email) {

                $this->sendLoanConfirmationEmailToCustomer($creditCheckerVerification);
            }
        }
        return $this->sendSuccess([], 'Credit check status updated successfully');
    }
    public function allCreditCheckerVerification(Request $request)
    {
        $status = $request->query('status', CreditCheckerVerification::PENDING);
        $creditCheckerVerifications = $this->creditCheckerVerificationService->allCreditCheckerVerification('loan', $status);
        return $this->sendSuccess(['creditCheckerVerifications' => $creditCheckerVerifications], 'Data fetched successfully');
    }


    public function orderData(CreditCheckerVerification $creditCheckerVerification, float $repayment, float $down_payment, float $product_price, bool $fixed_repayment): array
    {
        // $businessType = BusinessType::query()->where('slug', 'ap_products')->first();
        $orderType = OrderType::query()->where('name', 'Altara Credit')->first();
        $paymentMethod = PaymentMethod::query()->where('name', 'direct-debit')->first();
        $saleCategory = SalesCategory::query()->first();
        $product = $creditCheckerVerification->product;

        return [
            "bnpl_vendor_product_id" => $product->id,
            'business_type_id' => $creditCheckerVerification->business_type_id,
            "customer_id" => $creditCheckerVerification->customer_id,
            "bank_id" => 1,
            "owner_id" => 1,
            "inventory_id" => 2,
            "payment_method_id" => $paymentMethod->id,
            "payment_gateway_id" => 1,
            "order_type_id" => $orderType->id,
            "sales_category_id" => $saleCategory->id,
            "repayment_cycle_id" => $creditCheckerVerification->repayment_cycle_id,
            "repayment_duration_id" => $creditCheckerVerification->repayment_duration_id,
            "repayment" => $repayment,
            "down_payment" => $down_payment,
            "down_payment_rate_id" => $creditCheckerVerification->down_payment_rate_id,
            "financed_by" => NewOrder::ALTARA_LOAN_APP,
            "product_price" => $product_price,
            "fixed_repayment" => $fixed_repayment,
            "cost_price" => $product->retail
        ];
    }


    private function sendLoanConfirmationMessageToCustomer(Customer $customer)
    {
        try {
            $isInProduction = App::environment() === 'production';
            $customerPhoneNumber =  $customer->telephone;
            //check if there is an authenticated user and app is not in production
            //if there is an authenticated user and is not in production
            // the authenticated user email receives the mail
            if (Auth::check() && !$isInProduction) {
                $customerPhoneNumber = auth()->user()->telephone ?  auth()->user()->telephone : null;
            }

            Log::info("Message about to be sent to customer if customer has a mail");
            if ($customerPhoneNumber) {
                $message = "Congrats! Your loan is approved. Please make downpayment through the app to receive funds. Thank you!";
                $this->messageService->sendMessage($customer->telephone, $message);
            }
        } catch (\Throwable $th) {
            Log::error($th);
        }
    }

    private function sendLoanConfirmationEmailToCustomer(CreditCheckerVerification $creditCheckerVerification)
    {
        try {
            $isInProduction = App::environment() === 'production';
            $customerEmail =  config('app.credit_checker_mail');
            //check if there is an authenticated user and app is not in production
            //if there is an authenticated user and is not in production
            // the authenticated user email receives the mail
            if (Auth::check() && !$isInProduction) {
                $customerEmail = auth()->user()->email ?  auth()->user()->email : null;
            }

            Log::info("Mail about to be sent to customer if customer has a mail");
            if ($customerEmail) {
                Notification::route('mail', $customerEmail)->notify(new CustomerLoanApprovalNotification($creditCheckerVerification->customer, $creditCheckerVerification->product, $creditCheckerVerification));
                Log::info("Mail is sent to Customer");
            }
        } catch (\Throwable $th) {
            Log::error($th);
        }
    }
}
