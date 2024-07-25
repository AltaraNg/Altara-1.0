<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use App\Models\Customer;
use App\Models\NewOrder;
use App\Models\Tenant;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class ClientDashboardController extends Controller
{
    public function dashboard()
    {
        $tenant = Tenant::query()->where('id', Auth::user()->tenant_id)->first();
        if (!$tenant) {
            return $this->sendError("Invalid user", 400, [], 400);
        }

        $account_number = BankAccount::query()->where('tenant_id', $tenant->id)->first()->account_number ?? 'PENDING';

//        $tenantCustomersIds = Cache::remember('tenantCustomersIds-' . $tenant->id, 1800, function () use ($tenant) {
//            return Customer::query()->where('tenant_id', $tenant->id)->pluck('id')->toArray();
//        });



        $totalAmountOwed = NewOrder::query()
//            ->whereIn('customer_id', $tenantCustomersIds)
            ->where('tenant_id', $tenant->id)
            ->join('amortizations', 'new_orders.id', '=', 'amortizations.new_order_id')
            ->select(DB::raw('SUM(amortizations.expected_amount - amortizations.actual_amount) as total_owed'))
            ->value('total_owed');

        $totalAmountCollected = NewOrder::query()
//            ->whereIn('customer_id', $tenantCustomersIds)
            ->where('tenant_id', $tenant->id)
            ->join('amortizations', 'new_orders.id', '=', 'amortizations.new_order_id')
            ->select(DB::raw('SUM(amortizations.actual_amount) as total_collected'))
            ->value('total_collected');

        $countOfCustomers = Customer::query()->where('tenant_id', $tenant->id)->count('id');

        $countOfOrders = NewOrder::query()->where('tenant_id', $tenant->id)->count('id');


        return $this->sendSuccess([
            'totalAmountOwed' => $totalAmountOwed,
            'totalAmountCollected' => $totalAmountCollected,
            'account_number' => $account_number,
            'countOfCustomers' => $countOfCustomers,
            'countOfOrders' => $countOfOrders,
        ]);
    }
}
