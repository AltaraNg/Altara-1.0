<?php
namespace App\Services;

use Illuminate\Support\Facades\DB;

class ProspectActivityService
{
    public function __construct()
    {
    }

    public function generateStageStats($prospectActivityQuery)
    {
        return  $prospectActivityQuery->join('customer_stages', 'contact_customers.customer_stage_id', '=', 'customer_stages.id')
            ->select(
                'customer_stages.id as stage_id',
                'customer_stages.name as stage',
                DB::raw("count(*) as count")
            )->groupBy('contact_customers.customer_stage_id')->get()->map(function ($data) {
                return [
                    'stage_name' => $data->stage,
                    'stage_count' => $data->count,
                ];
            });
    }
}
