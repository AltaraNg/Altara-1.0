<?php

namespace App\Repositories;

use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\Order;
use App\RenewalList;
use App\RenewalStatus;
use Carbon\Carbon;

class RenewalListRepository extends Repository
{
    use OrderObject, ExtractRequestObject;
    private const BRANCH_ID = 'branch_id';
    private const CALLBACK = 'callback';

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
        $order = Order::findOrFail(request('order_id'));
        $response = $order->renewal()->create($this->getData(['feedback', 'status_id'], $data));

        if ($this->isCallback()) {
            $response->callback()->create($this->getData(['callback_date', 'callback_time'], $data));
        }
        return $response;
    }

    public function update($model, $data)
    {
        parent::update($model, $this->getData(['feedback', 'status_id'], $data));

        if ($this->isCallback()) {
            parent::updateOrCreate($model->callback(), ['renewal_list_id' => $model->id], $this->getData(['callback_date', 'callback_time'], $data));
        }else {
            parent::delete($model->callback());
        }
        return $model;
    }

    public function getListByType(int $status)
    {
        $requestObject = $this->extractRequestObject(request());
        $requestObject['branchId'] = request(self::BRANCH_ID);
        $orders = Order::whereIn('id', function ($query) use ($status) {
            $query->select('order_id')
                ->from('renewal_lists')
                ->where('status_id', $status);
            if (RenewalStatus::findOrFail($status)->status == self::CALLBACK){
                $query->whereIn('id', function ($query) {
                    $query->select('renewal_list_id')
                        ->from('callbacks')
                        ->where('callback_date', Carbon::today());
                });
            }

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
        $requestObject['dateFrom'] = Carbon::now()->subMonth(request('month', 7));
        $requestObject['dateTo'] = Carbon::now();
        $order = Order::whereIn('id', function ($query) {
                $this->repaymentQuery($query, 'repayment_formal', '5th_pay', '6th_pay');
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
            ->where($from, '>', 0)
            ->where(function ($query) use ($to) {
                $query->where($to, '=', 0)
                    ->orWhere($to, 'null')
                    ->orWhereNull($to);
            })
            ->whereNotIn('repayment_id', function ($query){
                $query->select('order_id')
                    ->from('renewal_lists');
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

    public function isCallback()
    {
        return RenewalStatus::findOrFail(request('status_id'))->status == self::CALLBACK;
    }

}
