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
        ->join('new_products', 'new_products.product_id','orders.product_sku')
        // ->where('repayment_formal.date_of_next_payment','=', date('Y-m-d')) 
        ->where('repayment_formal.date_of_next_payment','=', '2019-12-31')
        // ->where('repayment_formal.repayment_id','=', 'LSBO00374')
        ->select('paystack_auth_code.*',
        'new_products.pc_pprice',
        'new_products.product_name',
         'customers.email',
         'customers.telephone',
         'customers.first_name',
         'customers.last_name',
         'customers.branch_id',
         'orders.customer_id', 
         'orders.repayment_amount', 
         'orders.order_date', 
         'repayment_formal.date_of_next_payment')
        ->get();

        return $daily_data;
    }

    public function callApiData($data)
    {
        
        $branch[] = (object) array('id' => 2, 'code' => 'ACCT_z6a4tsvupmoo0hz', 'bank_id' => 12);
        $branch[] = (object) array('id' => 4, 'code' => 'ACCT_93q2vycqxrg4nau', 'bank_id' => 17);
        $branch[] = (object) array('id' => 5, 'code' => 'ACCT_ahye96qmminhs36', 'bank_id' => 17);
        $branch[] = (object) array('id' => 6, 'code' => 'ACCT_88vzjvjeskbfe39', 'bank_id' => 17);
        $branch[] = (object) array('id' => 8, 'code' => 'ACCT_8p45z039s2inwwe', 'bank_id' => 17);
        $branch[] = (object) array('id' => 9, 'code' => 'ACCT_88vzjvjeskbfe39', 'bank_id' => 17);
        $branch[] = (object) array('id' => 11, 'code' => 'ACCT_w3ola5amahnl7mc','bank_id' => 17);
        $branch[] = (object) array('id' => 12, 'code' => 'ACCT_fmntykscho1l47g', 'bank_id' => 6);
        $branch[] = (object) array('id' => 13, 'code' => 'ACCT_fmntykscho1l47g', 'bank_id' => 6);
        $branch[] = (object) array('id' => 14, 'code' => 'ACCT_fmntykscho1l47g', 'bank_id' => 6);
        $branch[] = (object) array('id' => 15, 'code' => 'ACCT_93q2vycqxrg4nau', 'bank_id' => 17);
       
        foreach($branch as $value){
            if ($value->id == $data->branch_id){
                $subaccount = $value->code;
                $bank_id = $value->bank_id;
            }
        }
    
        $result = array();
        // Pass the customer's authorisation code, email and amount
        $data->order_id;
        $level = '3rd';
        $amount= (int)(strval($data->repayment_amount)."00");
        // $ref = $data->order_id . $level . $data->customer_id;
        $ref = $data->order_id . $data->customer_id . '10th';

        $postdata =  array( 
            'authorization_code' => $data->auth_code,
            'email' => $data->email, 
            'amount' => $amount,
            "reference" => $ref, 
            'subaccount'=> $subaccount);
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,"https://api.paystack.co/transaction/charge_authorization");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($postdata));  //Post Fields
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $headers = [
            // 'Authorization: Bearer sk_test_bb1ea0ac61e6899e972d53bd530bed6aa6e325ee',
          'Authorization: Bearer sk_live_b2b0dc2e326f9d38e9d41ea52ef1517171d72637',
          'Content-Type: application/json',
        ];
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $request = curl_exec ($ch);
        curl_close ($ch);

        if ($request) {
          $result = json_decode($request, true);
        //   print_r($result);
          if ($result['data']['status'] == 'success') {
            // $this->successUpdate($amount,$data->order_id,$level,$data->order_date,$bank_id);
            print_r($result['data']['status']);
                }
                else{
                    // $this->failedUpdate($data);
                    print_r($result['data']['status']);
                    print_r($result['data']['gateway_response']);
                }
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
      


    public function successUpdate($amount,$order_id,$level,$order_date,$bank_id){

        $client = new Client();
        $res = $client->request('POST', 'http://localhost/AltaraCredit/altara-api/api.php?action=repayment_successful', [
            'form_params' => [
                'repayment'=> $amount,
                'order_id' => $order_id,
                'level' => $level,
                'order_date' => $order_date,
                'bank_id' => $bank_id
            ],
        ]);
             
     $res = $res->getBody()->getContents();
    echo '<pre>';
    print_r($res);
    }

    public function sendNotification(){

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => "http://531dg.api.infobip.com/sms/2/text/single",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "{ \"from\":\"Altara Pay\", \"to\":\"2348109163881\", \"text\":\"Testing\" }",
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: Basic " . base64_encode(env('SMS_USERNAME') . ":" . env('SMS_PASSWORD')),
        "content-type: application/json"
    ),
    ));
    // "authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==",
    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
    echo "cURL Error #:" . $err;
    } else {
    echo $response;
    print_r($response);
    
            }
  }

    public function resultUpdate(){
        $client = new Client();
        $res = $client->request('POST', 'http://localhost/AltaraCredit/altara-api/api.php?action=dd_result', [
            'form_params' => [
                'order_id'=> 'APAP00632',
                'date_tried' => '2019-11-01',
                'next_date' => '2019-11-01',
                'level' => '3',
                'status' => 'success',
                'gateway' => 'Insufficient fund',
                'ref' => '987612356',
                'repayment' => 2356,
            ],
            // 'headers' => $headers
        ]);

        $res = $res->getBody()->getContents();
        echo '<pre>';
        print_r($res);
        
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
   
        // $result[] = (object) array('id' => 1, 'status' => 'success', 'repayment_amount'=> 5000,'order_id' => 'APAP00632', 'level' => 1);
        // $result[] = (object) array('id' => 2, 'status' => 'failed', 'repayment_amount'=> 5000,'order_id' => 'APAP00631', 'level' => 1);
        // foreach($result as $value){
        //     if ($value->status == 'success'){
        //         $this->successUpdate($value->id);
        //     }
            
        // }

        // $this->sendNotification();

        foreach($this->getDailydata() as $value){
            $this->callApiData($value);
        }
        
        

    }
}
