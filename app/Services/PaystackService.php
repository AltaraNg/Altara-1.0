<?php


namespace App\Services;


use App\Contracts\PaymentGatewayInterface;
use App\NewOrder;

class PaystackService implements PaymentGatewayInterface
{
    /**
     * @var NewOrder
     */
    private $order;

    /**
     * PaystackService constructor.
     * @param NewOrder $order
     */
    public function __construct(NewOrder $order)
    {
        $this->order = $order;
    }

    public function charge(){
            $url = "https://api.paystack.co/transaction/charge_authorization";
            $fields = [
                'authorization_code' => "AUTH_wb0gxvunvi"
        'email' => "nill@nill.com",
        'amount' => "100000"
      ];
      $fields_string = http_build_query($fields);
      //open connection
      $ch = curl_init();

      //set the url, number of POST vars, POST data
      curl_setopt($ch,CURLOPT_URL, $url);
      curl_setopt($ch,CURLOPT_POST, true);
      curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
      curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          "Authorization: Bearer SECRET_KEY",
          "Cache-Control: no-cache",
      ));

      //So that curl_exec returns the contents of the cURL; rather than echoing it
      curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

      //execute post
      $result = curl_exec($ch);
      echo $result;
    }

    private function getAuthCode() {

    }

    private function getAmount() {
        return $this->order->amortization()->first()->expected_ammount;
    }

    private function getEmail() {
        return $this->order->user->email;
    }
}
