<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('');
    }

    public function generateReport(Request $request)
    {
        return Excel::download(new UsersExport($request), 'users.xlsx');
    }
}
