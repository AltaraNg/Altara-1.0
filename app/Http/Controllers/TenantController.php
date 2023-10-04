<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Illuminate\Http\Request;

class TenantController extends Controller
{
    public function index()
    {
        $tenants = Tenant::query()->all();
        return $this->sendSuccess(['tenants' => $tenants], 'Tenants Retrieved');
    }
}
