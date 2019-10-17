<?php

namespace App\Http\Controllers;

use App\AltaraPayReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;


class AltaraPayReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $reports = DB::table('altara_pay_reports')
        // ->join('branches', 'branches.id','altara_pay_reports.branch_id') 
        // ->join('users', 'users.id', 'altara_pay_reports.user_id')
        // ->select('branches.name', 'altara_pay_reports.date', 'users.staff_id', 'altara_pay_reports.interest', 'altara_pay_reports.check')
        // ->get();
        // //
        // return response()->json([
        //     'reports' => $reports
        // ]);

        $daily_data = DB::table('paystack_auth_code')
        ->join('orders', 'orders.id','paystack_auth_code.order_id')
        ->join('repayment_formal', 'repayment_formal.repayment_id','orders.id')
        ->join('customers', 'customers.id','orders.customer_id')
        ->where('repayment_formal.date_of_next_payment','=', date('Y-m-d'))
        ->select('paystack_auth_code.*', 'customers.email', 'orders.customer_id', 'orders.repayment_amount', 'repayment_formal.date_of_next_payment')
        ->get();

        return response()->json([
            'data' => $daily_data
        ]);

        // $token = 'sk_test_bb1ea0ac61e6899e972d53bd530bed6aa6e325ee';
        // $headers = [
        //     'Authorization' => 'Bearer ' . $token,  
        //     'Content-Type'  => 'application/json',
        // ];
        // $client = new Client();
        // $res = $client->request('POST', 'https://api.paystack.co/transaction/charge_authorization', [
        //     'form_params' => [
        //         'authoriation_code'=> 'AUTH_tg8z84zfo3',
        //         'email' => 'poluyege3650@gmail.com',
        //         'amount' => 100000,
        //         'subaccount'=> 'ACCT_vnf00ykvd809ccc'
        //     ],
        //     'headers' => $headers
        // ]);
        // echo $res->getStatusCode();
        // // 200
        // echo $res->getHeader('content-type');
        // // 'application/json; charset=utf8'
        // echo $res->getBody();
        // // {"type":"User"...'


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
      $form = AltaraPayReport::form();
      /** return the form, states, and banks*/
      return response()->json([
         'form' => $form
      ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $request->validate(['name' => 'required|unique:brands']);
        $report = new AltaraPayReport($request->all());
 
        $report->save();
 
 
        return response()->json([
            'saved' => true,
            'message' => 'Report Submitted Created!',
            'form' => AltaraPayReport::form(),
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'Report Submitted Created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function show(AltaraPayReport $altaraPayReport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function edit(AltaraPayReport $altaraPayReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AltaraPayReport $altaraPayReport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function destroy(AltaraPayReport $altaraPayReport)
    {
        //
    }
}
