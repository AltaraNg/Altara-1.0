<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Exports\FirstCentralCreditBureauExport;
use App\NewOrder;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Maatwebsite\Excel\Facades\Excel;

class GenerateFirstCentralCustomerController extends Controller
{
    //

    public function index()
    {
        ini_set('max_execution_time', '300');
        $fileName = 'CreditReport_' . Date::now()->format('Y-m-d') . '.xlsx';
        return Excel::download(new FirstCentralCreditBureauExport(), $fileName);
    }
}
