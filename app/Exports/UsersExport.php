<?php

namespace App\Exports;

use App\Models\Customer;
use App\Models\Order;
use App\Models\User;
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
        /*$customers = Customer::with(['branch', 'user'])
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
        array_unshift($final, ['Branch : ' . $this->request['branch']['name'], 'Report Type : ' . $this->request['type'], 'Starting From : ' . $this->request['from'], ' To : ' . $this->request['to']]);*/


        /****************/
        $final = [];
        $noOfUsers = 0;
        $branchStaffIDs = [];
        $branch = $this->request['branch']['id'];
        $branchName = $this->request['branch']['name'];

        $employees = User::whereNull('date_of_exit')
            ->whereIn('role_id', [17, 18])
            ->where([['branch_id', '=', $branch]])
            ->select('id', 'full_name', 'staff_id')
            ->get();

        foreach ($employees as $employee) {
            array_push($branchStaffIDs, $employee['staff_id']);
        }

        $customers = Customer::whereIn('employee_id', $branchStaffIDs)
            ->where([
                ['branch_id', $branch],
                ['date_of_Registration', '>=', $this->request['from']],
                ['date_of_Registration', '<=', $this->request['to']]
            ])->get();

        $registerCount = $customers->groupBy('employee_id');


        $orders = Order::with(['customer' => function ($query) {
            return $query->select('id', 'branch_id', 'employee_id');
        }])->whereHas('customer', function ($query) use ($branch) {
            return $query->where('branch_id', $branch);
        })->where([
            ['order_date', '>=', $this->request['from']],
            ['order_date', '<=', $this->request['to']]
        ])->select('id', 'customer_id')->get();

        $salesCount = $orders->groupBy('customer.employee_id');

        foreach ($employees as $employee) {
            $id = $employee['staff_id'];
            $final[$noOfUsers]['ID'] = $id;
            $final[$noOfUsers]['Name'] = $employee['full_name'];
            $final[$noOfUsers]['TotalSales'] = isset($salesCount[$id]) ? $salesCount[$id]->count() : null;
            $final[$noOfUsers]['TotalRegisters'] = isset($registerCount[$id]) ? $registerCount[$id]->count() : null;
            $noOfUsers++;
        }

        array_unshift($final, ['Staff ID', 'Full Name (DSA)', 'Total Sales(Pickups)', 'Total Customer Registered']);
        array_unshift($final, ['Branch : ' . $branchName, 'Report Type : ' . $this->request['type'], 'Starting From : ' . $this->request['from'], ' To : ' . $this->request['to']]);


        return collect($final);

    }
}
