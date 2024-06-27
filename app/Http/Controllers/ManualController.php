<?php

namespace App\Http\Controllers;

use App\Exports\TempExport;
use App\Imports\TempImport;
use App\Models\PaystackAuthCode;
use Illuminate\Support\Facades\Artisan;
use Maatwebsite\Excel\Facades\Excel;

class ManualController extends Controller
{
    public function jobs()
    {
        Artisan::call('schedule:run');
        return $this->sendSuccess([], 'Jobs performed successfully');
    }

    public function getNoAuth()
    {
        $rows = Excel::toArray(new TempImport, \Illuminate\Support\Facades\Request::file('file'));
        $inactive = [];
        foreach ($rows[0] as $row) {
            if($row && isset($row['reciept_number'])) {
                $result = PaystackAuthCode::where('order_id', $row['reciept_number'])->get();
                if (!count($result)){
                    $inactive[] = [$row['reciept_number'], $row['customer_id'], $row['branch']];
                }
            }
        }
        $export = new TempExport($inactive);

        return Excel::download($export, 'AltaraNoAuth.xlsx');
    }
}
