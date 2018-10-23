<?php

namespace App\Exports;

use App\Customer;
use Maatwebsite\Excel\Concerns\FromCollection;

class UsersExport implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */

    private $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    public function collection()
    {
        $customers = Customer::with(['branch', 'user'])
            ->where([
                ['branch_id', $this->request['branch']['id']],
                ['date_of_Registration', '>=', $this->request['from']],
                ['date_of_Registration', '<=', $this->request['to']]
            ])->get();
        $final = [];
        $noOfUsers = 0;
        $grouped = $customers->groupBy('employee_id');
        $keys = ['Formal', 'Informal(Business)', 'Unemployed'];
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
        array_unshift($final, ['Staff ID', 'Full Name (DSA)', 'Total Sales', 'Total Sales ' . $keys[0], 'Total Sales ' . $keys[1], 'Total Sales ' . $keys[2]]);
        array_unshift($final, ['Branch : ' . $this->request['branch']['name'], 'Report Type : ' . $this->request['type'], 'Starting From : ' . $this->request['from'], ' To : ' . $this->request['to']]);
        return collect($final);

    }
}
