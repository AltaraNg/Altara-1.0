<?php

namespace App\Http\Controllers;

use App\Exports\CustomersExport;
use App\Exports\NewOrdersExport;
use App\Exports\UsersExport;
use App\Http\Filters\NewOrderFilter;
use App\Repositories\NewOrderRepository;
use App\Services\NewOrdersReportService;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    public function generateReport(Request $request)
    {
        switch ($request->type) {
            case "sales_report":
                return Excel::download(new UsersExport($request), 'report.xlsx');
            default:
                return null;
        }
    }

    public function getRegistrationReport(Request $request)
    {
        return Excel::download(new CustomersExport($request), 'report.xlsx');
    }

    public function getNewOrdersReport(NewOrderRepository $newOrderRepository,NewOrderFilter $filter, NewOrdersReportService $newOrdersReportService)
    {
        $newOrdersQuery = $newOrderRepository->query($filter)->latest();
        $additional = $newOrdersReportService->generateMetaData($newOrdersQuery);
        // dd(gettype($additional['groupedDataByBranch']));
        return Excel::download(new NewOrdersExport($additional['groupedDataByBranch']), 'OrdersReport.csv');
    }
}
