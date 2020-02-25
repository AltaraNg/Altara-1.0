<?php

namespace App\Repositories;

use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\Order;
use App\RenewalList;
use Carbon\Carbon;

class RenewalListRepository extends Repository
{
    use OrderObject, ExtractRequestObject;

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return RenewalList::class;
    }

    public function store(array $data)
    {
        $order = Order::find(request('order_id'));
        $response = $order->renewal()->create([
            'feedback' => $data['feedback'],
            'status' => $data['status']
        ]);

        if (isset($data['callback_date']) && isset($data['callback_time'])) {
            $response->callback()->create([
                'callback_date' => $data['callback_date'],
                'callback_time' => $data['callback_time']
            ]);
        }
        return $response;
    }

    public function getListByType(string $status)
    {
        $requestObject = $this->extractRequestObject(request());
        $requestObject['branchId'] = request('branch_id');
        $orders = Order::whereIn('id', function ($query) use ($status) {
            $query->select('order_id')
                ->from('renewal_lists')
                ->where('status', $status);
        })
            ->dateFilter('order_date', $requestObject)
            ->orderWithOtherTables($requestObject)
            ->getOrPaginate($requestObject);

        return $this->mutate($orders);
    }

    public function mutate($orders)
    {
        $orders->map(function ($order) {
            $order['renewal'] = $order->renewal->getRenewalData();
            return $order;
        });
        return $orders;
    }

    public function getList()
    {
        $requestObject = $this->extractRequestObject(request());
        $array1 = $this->generateTwoRepaymentList('repayment_formal', '4th_pay', '5th_pay');
        $array2 = $this->generateTwoRepaymentList('repayment_informal', '10th_pay', '11th_pay');
        $array2 = $array1->merge($array2);
        $array2->dateFilter('order_date', $requestObject)
            ->orderWithOtherTables($requestObject)
            ->getOrPaginate($requestObject);
//        dump($array1);
        dump('llllllllll************************111111111111111111111111111111111');
        dump($array2);
        dd('llllllllll');
    }

    public function generateTwoRepaymentList(string $payment_type, string $from, string $to)
    {
        $requestObject = $this->extractRequestObject(request());
//        $requestObject['branchId'] = request('branch_id');
        $order = Order::whereIn('id', function ($query) use ($payment_type, $from, $to){
            $query->select('repayment_id')
                ->from($payment_type)
                ->where('date_of_next_payment', Carbon::today())
                ->where($from, '>', 0)
                ->where(function ($query) use ($to){
                    $query->where($to, '=', 0)
                        ->orWhere($to, 'null')
                        ->orWhereNull($to);
                });
        });
//            ->dateFilter('order_date', $requestObject)
//            ->orderWithOtherTables($requestObject)
//            ->getOrPaginate($requestObject);

        return $order;
    }

}
