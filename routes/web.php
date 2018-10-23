<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\Customer;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/check', function () {
    //$data = User::find(1)->role;
    //$data = Role::find(10)->users;
    //$data = User::find(1)->branch;
    //$data = Branch::find(2)->users;
    //$data = Customer::find(1)->user;
    //$data = User::find(1)->customers;
    //$data = Customer::find(1)->branch;
    //$data = Branch::find(2)->customers;
    //$data = Branch::find(2)->state;
    //$data = State::find(30)->branches;
    //$data = User::find(1)->logs;
    //$data = Log::find(1)->user;
    //$data = Verification::find(1)->user;
    //$data = User::find(1)->verifications;
    //$data = Verification::find(1)->customer;
    //$data = Customer::find(1)->verification;
    //$data = User::find(1)->documents;
    //$data = Document::find(1)->user;
    //$data = Document::find(1)->customer;
    //$data = Customer::find(1)->document;
    //$data = User::find(1)->addresses;
    //$data = Address::find(17)->user;
    //$data = Address::find(17)->customer;
    //$data = Customer::find(1)->address;

    //$data = Customer::with(['branch','user','verification','address','document'])->where('id', '=','1')->first();

    //$dsa = [1, 2, 8, 9, 15, 17];

    //$data = DB::table('users')->whereIn('role_id', $dsa)->get();

    //$data = State::get();

    //$dataLength = $data->count();

    //$rand = rand(0, $dataLength-1);

    /*$data = Customer::with(['branch', 'user'])
        ->where([
            ['branch_id', 5],
            ['date_of_Registration', '>=', "2017-10-11"],
            ['date_of_Registration', '<=', "2019-10-31"],
        ])->get();

    //$ids = [];
    //$names = [];
    /*$Formal = [];
    $Informal = [];
    $Unemployed = [];*/
    //$total_sales = [];
    /*$group_user = $data->groupBy('employee_id');

    $final = [];

    $num = 0;

    foreach ($group_user as $key => $value)
    {

        $final[$num]['ID'] = $group_user[$key][0]['user']['staff_id'];

        $final[$num]['Name'] = $group_user[$key][0]['user']['full_name'];

        $final[$num]['TotalSales'] = $group_user[$key]->count();

        //array_push($total_sales, $group_user[$key]->count());
        //array_push($ids, $group_user[$key][0]['user']['staff_id']);
        //array_push($names, $group_user[$key][0]['user']['full_name']);

        $num ++;
    }

    //for ($i = 0; $i < count($ids); $i++) {
    for ($i = 0; $i < count($final); $i++) {

        //$status = $group_user[$ids[$i]]->groupBy('employment_status');
        $status = $group_user[$final[$i]['ID']]->groupBy('employment_status');

        foreach ($status as $key2 => $value2) {
            $newKey = $key2;
        }

        //if ($newKey = 'Formal') array_push($Formal, $status[$newKey]->count());
        if ($newKey = 'Formal') $final[$i]['Formal'] = $status[$newKey]->count();

        //if ($newKey = 'Unemployed') array_push($Unemployed, $status[$newKey]->count());
        if ($newKey = 'Unemployed') $final[$i]['Unemployed'] = $status[$newKey]->count();

        //if ($newKey = 'Informal(Business)') array_push($Informal, $status[$newKey]->count());
        if ($newKey = 'Informal(Business)') $final[$i]['Informal(Business)'] = $status[$newKey]->count();

    }

    $dataFinal = array(/*$ids, *//*$names, $total_sales,*/ /*$Informal, $Formal, $Unemployed, $final);

    //$dataFinal = (object)array($ids, $names, $total_sales, $Informal, $Formal, $Unemployed);

    //return $dataFinal;

    return Excel::download(new UsersExport(), 'export.xlsx');*/
});


Route::get('/check', function () {


    /*$data = Customer::with(['branch', 'user'])
        ->where([
            ['branch_id', '2'],
            ['date_of_Registration', '>=', '2018-10-01'],
            ['date_of_Registration', '<=', '2018-10-13']
        ])
        ->get();
    $group_user = $data->groupBy('employee_id');
    $final = [];
    $num = 0;
    foreach ($group_user as $key => $value) {
        $final[$num]['ID'] = $group_user[$key][0]['user']['staff_id'];
        $final[$num]['Name'] = $group_user[$key][0]['user']['full_name'];
        $final[$num]['TotalSales'] = $group_user[$key]->count();
        $num++;
    }
    for ($i = 0; $i < count($final); $i++) {
        $status = $group_user[$final[$i]['ID']]->groupBy('employment_status');
        foreach ($status as $key2 => $value2) {
            $newKey = $key2;
        }
        if ($newKey = 'Formal') $final[$i]['Formal'] = $status[$newKey]->count();
        if ($newKey = 'Unemployed') $final[$i]['Unemployed'] = $status[$newKey]->count();
        if ($newKey = 'Informal(Business)') $final[$i]['Informal(Business)'] = $status[$newKey]->count();
    }
    array_unshift($final,
        ['Staff ID', 'Full Name (DSA)', 'Total Sales', 'Total Sales (Formal)', 'Total Sales (Unemployed)', 'Total Sales (InFormal - Business)']);
    array_unshift($final,
        ['Branch : ', 'Report Type : ', 'Starting From : ', ' To : ']);*/


    /*$customers = Customer::with(['branch', 'user'])
        ->where([
            ['branch_id', '2'],
            ['date_of_Registration', '>=', '2018-10-01'],
            ['date_of_Registration', '<=', '2018-10-31']
        ])->get();
    $final = [];
    $noOfUsers = 0;
    $grouped = $customers->groupBy('employee_id');
    $keys = ['Unemployed', 'Formal', 'Informal(Business)'];
    foreach ($grouped as $user_id => $value) {
        $final[$noOfUsers]['ID'] = $grouped[$user_id][0]['user']['staff_id'];
        $final[$noOfUsers]['Name'] = $grouped[$user_id][0]['user']['full_name'];
        $final[$noOfUsers]['TotalSales'] = $grouped[$user_id]->count();
        $noOfUsers++;
    }
    for ($i = 0; $i < $noOfUsers; $i++) {
        $status = $grouped[$final[$i]['ID']]->groupBy('employment_status');
        for ($x = 0; $x < count($keys); $x++) {
            (isset($status[$keys[$x]])) ? $final[$i][$keys[$x]] = $status[$keys[$x]]->count() : $final[$i][$keys[$x]] = 0;
        }
    }
    array_unshift($final,
        ['Staff ID', 'Full Name (DSA)', 'Total Sales', 'Total Sales (Formal)', 'Total Sales (Unemployed)', 'Total Sales (InFormal - Business)']);
    array_unshift($final,
        ['Branch : ', 'Report Type : ', 'Starting From : ', ' To : ']);*/
    //return $final;






});