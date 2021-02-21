<?php


namespace App\Services;


use App\Amortization;
use App\Contracts\PaymentGatewayInterface;

class PaystackService implements PaymentGatewayInterface
{

    public function charge(Amortization $amortization){
            $url = config('app.paystack_charge_url');
            $fields = [
                'authorization_code' => $this->getAuthCode($amortization),
                'email' => $this->getEmail($amortization),
                'amount' => $this->getAmount($amortization)
            ];
            $fields_string = http_build_query($fields);

            //open connection
            $ch = curl_init();

          //set the url, number of POST vars, POST data
          curl_setopt($ch,CURLOPT_URL, $url);
          curl_setopt($ch,CURLOPT_POST, true);
          curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
          curl_setopt($ch, CURLOPT_HTTPHEADER, array(
              "Authorization: Bearer " . config('app.paystack_secret'),
              "Cache-Control: no-cache",
          ));

          //So that curl_exec returns the contents of the cURL; rather than echoing it
          curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

          //execute post
        return json_decode(curl_exec($ch));
    }

    private function getAuthCode($amortization) {
        return $amortization->new_orders->authCode->auth_code ?? '';
    }

    private function getAmount($amortization) {
        return $amortization->expected_amount * 100;
    }

    private function getEmail($amortization) {
        return $amortization->new_orders->customer->email;
    }
}
