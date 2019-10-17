<?php

namespace App\Console\Commands;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;

use Illuminate\Console\Command;

class altaraPayX extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'repayment:day';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get Montly installing from customers using Paystack API ';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function getDailydata(){

        $daily_data = DB::table('paystack_auth_code')
        ->join('orders', 'orders.id','paystack_auth_code.order_id')
        ->join('repayment_formal', 'repayment_formal.repayment_id','orders.id')
        ->join('customers', 'customers.id','orders.customer_id')
        ->where('repayment_formal.date_of_next_payment','=', date('Y-m-d'))
        ->select('paystack_auth_code.*', 'customers.email', 'orders.customer_id', 'orders.repayment_amount', 'repayment_formal.date_of_next_payment')
        ->get();
        return $daily_data;
    }

    public function callApiData($data, $auth_code, $email, $amount, $ref)
    {
        $subaccount = 'ACCT_88vzjvjeskbfe39';
        
        $result = array();
        // Pass the customer's authorisation code, email and amount
        $postdata =  array( 'authorization_code' => $auth_code,'email' => $email, 'amount' => $amount,"reference" => $ref, 'subaccount'=> $subaccount);
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,"https://api.paystack.co/transaction/charge_authorization");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($postdata));  //Post Fields
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $headers = [
          'Authorization: Bearer sk_live_b2b0dc2e326f9d38e9d41ea52ef1517171d72637',
          'Content-Type: application/json',
        ];
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
        $request = curl_exec ($ch);
        
        curl_close ($ch);
        if ($request) {
          $result = json_decode($request, true);
        }
               if ($result['data']['status']== 'success'){
            // $this->successUpdate($data);
            print_r($result['data']['status']);
                }
                else{
                    // $this->failedUpdate($data);
                    print_r($result['data']['status']);
                    print_r($result['data']['gateway_response']);
                }
        }
        // ACCT_88vzjvjeskbfe39

    //     if ($result->status == true){
    //         $this->successUpdate($data);
    //     }
    //     else{
    //         $this->failedUpdate($data);
    //     }
    //   return $result;
    // return response()->json([
    //     'response' => $result
    // ]);
      


    public function successUpdate($value){
  
        // $headers = [
        //     'Authorization' => 'Bearer ' . $token,  
        //     'Content-Type'  => 'application/json',
        // ];
        $client = new Client();
        $res = $client->request('POST', 'http://localhost/AltaraCredit/altara_api/api.php?action=repayment_successful', [
            'form_params' => [
                'repayment'=> $value->repayment_amount,
                'order_id' => $value->order_id
            ],
            // 'headers' => $headers
        ]);

        
        print_r($res);
        // echo $res->getStatusCode();
        // // 200
        // echo $res->getHeader('content-type');
        // // 'application/json; charset=utf8'
        // echo $res->getBody();
        // // {"type":"User"...'
    }

    public function failedUpdate(){
          
        $headers = [
            'Authorization' => 'Bearer ' . $token,  
            'Content-Type'  => 'application/json',
        ];
        $client = new Client();
        $res = $client->request('POST', 'https://api.paystack.co/transaction/charge_authorization', [
            'form_params' => [
                'authoriation_code'=> $auth_code,
                'email' => $email,
                'amount' => $amount,
            ],
            'headers' => $headers
        ]);
        echo $res->getStatusCode();
        // 200
        echo $res->getHeader('content-type');
        // 'application/json; charset=utf8'
        echo $res->getBody();
        // {"type":"User"...'
    }


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach($this->getDailydata() as $value){
            $this->callApiData($value, $value->auth_code, $value->email, (int)(strval($value->repayment_amount)."00") , rand(1, 10000000));
        }
        //
    }
}
