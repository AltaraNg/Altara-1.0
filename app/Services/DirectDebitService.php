<?php


namespace App\Services;


use App\BusinessType;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\NewOrder;
use App\Notifications\Models\SmsReminderModel;
use App\Notifications\SmsReminder;
use App\Notifications\SmsReminderSent;
use Carbon\Carbon;

class DirectDebitService
{
    /**
     * @var MailService
     */
    private $mailService;

    public function __construct(MailService $mailService)
    {
        $this->mailService = $mailService;
    }

    public function fetchOrders($days = 7, $date = null)
    {
        //get list of customers based on their repayment date
        $data = NewOrder::whereIn('id', function ($query) use ($days, $date) {
            $today = Carbon::parse($date) ?? Carbon::now();
            $query->select('new_order_id')
                ->from('amortizations')
                ->whereDate('expected_payment_date', $today)
                ->where('actual_payment_date', NULL);
        })
        ->where('business_type_id', BusinessType::where('name', BusinessType::ALTARA_PAY_PRODUCT)->first()->id)
        ->orWhere('business_type_id', BusinessType::where('name', BusinessType::ALTARA_PAY_CASH_LOAN)->first()->id);

        return $data->get();
    }

    public function handle($days, $date)
    {
        $orders = $this->fetchOrders($days, $date);

        $res = array();
        if (empty($orders)) {
            return 'No Customers are available';
        }
        foreach ($orders as $order) {
            # code...
            $message = strtr(Constants::$reminderMessages[$type], $order->toArray());
            $item = [
                'customer_id' => $order->customer_id,
                'customer_name' => $order->customer->full_name,
                'order_id' => $order->order_number,
                'message' => $message,
            ];

            try {
                $reminderObject = new SmsReminderModel($message, $type);
                $order->customer->notify(new SmsReminder($reminderObject));
                $res[] = array_merge($item, [
                    'status' => 'success',
                    'statusMessage' => 'Message sent Successfully'
                ]);

                $order->notify(new SmsReminderSent($reminderObject));
            } catch (\Exception $e) {
                LogHelper::error(strtr(Constants::FAILED_SMS, $order->toArray()), $e);
                $res[] = array_merge($item, [
                    'status' => 'failed',
                    'statusMessage' => $e->getMessage()
                ]);
            }

        }

        # send report mail
        $this->mailService->sendReportAsMail($days .'days sms reminder', $res,
            config('app.operations_email'), 'Sms Reminder Report',
            'SmsReminder', 'Sms Reminder report for ' . Carbon::parse($date)->toDateString());

        return $res;

    }
}
