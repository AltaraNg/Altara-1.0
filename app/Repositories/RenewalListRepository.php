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
    private const BRANCH_ID = 'branch_id';

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
        $response = $order->renewal()->create($this->getData(['feedback', 'status'], $data));

        if ($this->getRequestType()) {
            $response->callback()->create($this->getData(['callback_date', 'callback_time'], $data));
        }
        return $response;
    }

    public function update($model, $data)
    {
        parent::update($model, $this->getData(['feedback', 'status'], $data));

        if ($this->getRequestType()) {
            parent::updateOrCreate($model->callback(), ['renewal_list_id' => $model->id], $this->getData(['callback_date', 'callback_time'], $data));
        }
        return $model;
    }

    public function getListByType(string $status)
    {
        $requestObject = $this->extractRequestObject(request());
        $requestObject['branchId'] = request(self::BRANCH_ID);
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

    public function generateTwoRepaymentList()
    {
        $requestObject = $this->extractRequestObject(request());
        $requestObject['branchId'] = request(self::BRANCH_ID);
        $order = Order::whereIn('id', function ($query) {
            $this->repaymentQuery($query, 'repayment_formal', '4th_pay', '5th_pay');
        })
            ->orWhereIn('id', function ($query) {
                $this->repaymentQuery($query, 'repayment_informal', '10th_pay', '11th_pay');
            })
            ->dateFilter('order_date', $requestObject)
            ->orderWithOtherTables($requestObject)
            ->getOrPaginate($requestObject);

        return $order;
    }

    public function repaymentQuery($query, $payment_type, $from, $to)
    {
        return $query->select('repayment_id')
            ->from($payment_type)
//            ->where('date_of_next_payment', Carbon::today())
            ->where($from, '>', 0)
            ->where(function ($query) use ($to) {
                $query->where($to, '=', 0)
                    ->orWhere($to, 'null')
                    ->orWhereNull($to);
            });
    }

    public function getData(array $keys, $data)
    {
        $response = [];
        foreach ($keys as $key) {
            $response[$key] = $data[$key] ?? '';
        }

        return $response;
    }

    public function getRequestType()
    {
        return request('status') == 'callback';
    }

}
