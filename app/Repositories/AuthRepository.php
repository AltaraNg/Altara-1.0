<?php

namespace App\Repositories;

use App\Events\SendPasswordResetLinkEvent;
use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\Order;
use App\PasswordResets;
use App\RenewalList;
use App\RenewalStatus;
use App\User;
use Carbon\Carbon;

class AuthRepository extends Repository
{
    use OrderObject, ExtractRequestObject;

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return User::class;
    }

    public function sendResetLinkEmail($data)
    {
        $data['token'] = md5($data['email'] . '_' . time() . '_' . mt_rand(1, 1000000));
        $response = PasswordResets::updateOrCreate(['email' => $data['email']], $data);
        event(new SendPasswordResetLinkEvent($response));
        return $response;
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

}
