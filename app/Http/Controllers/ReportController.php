<?php

namespace App\Http\Controllers;

use App\Exports\CustomersExport;
use App\Exports\UsersExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
   public function generateReport(Request $request)
   {
      return Excel::download(new UsersExport($request), 'report.xlsx');
   }

   public function getRegistrationReport(Request $request)
   {
      return Excel::download(new CustomersExport($request), 'report.xlsx');
   }
}
