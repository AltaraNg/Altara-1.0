<?php

namespace App\Http\Controllers;

use App\Http\Filters\ContactCustomerFilter;
use App\Http\Filters\ProspectActivityFilter;
use App\ProspectActivity;
use App\Repositories\ContactCustomerRepository;
use App\Repositories\ProspectActivityRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProspectActivityController extends Controller
{
    //
    private $contactCustomerRepo;
    private $prospectActivityRepo;
    public function __construct(ContactCustomerRepository $contactCustomerRepository, ProspectActivityRepository $prospectActivityRepository)
    {
        $this->contactCustomerRepo = $contactCustomerRepository;
        $this->prospectActivityRepo = $prospectActivityRepository;
    }
    public function index(ProspectActivityFilter $filter)
    {
        return $this->sendSuccess(['prospect_activities' => $this->prospectActivityRepo->getAll($filter) ], 'Prospect activities retrieved successfully');
    }

    public function show(ProspectActivity $prospect_activity)
    {
        $prospect_activity =  $prospect_activity->load('prospectActivityType');
        return $this->sendSuccess(['prospect_activity' => $prospect_activity], 'Prospect Activity fetched successfully');
    }
    public function inActiveProspects(ContactCustomerFilter $contactCustomerFilter)
    {
        $date = Carbon::now()->subDays(30)->format('Y-m-d');
        return ProspectActivity::rightJoin('contact_customers', 'prospect_activities.contact_customer_id', '=', 'contact_customers.id')
            ->whereDate('date', '<=', '2021-08-21')
            ->get();
        return \App\ContactCustomer::whereHas('customerStage',  function ($query) {
            $query->where('name', 'not like', '%Paid Downpayment%');
        })->whereNotIn('id', function ($query) use ($date) {
            $query->select('contact_customer_id')
                ->from('prospect_activities')
                ->whereDate('date', '<=', '2021-08-21');
        })->with('lastProspectActivity')->get();
        $prospects = $this->contactCustomerRepo->query($contactCustomerFilter);
        $additional = [
            'total' => $prospects->count(),
        ];
        if (request('rollUp')) {
            return $this->sendSuccess(["meta" => $additional], 'Notification count retrieved successfully');
        }
        return $this->sendSuccess(['prospects' => $prospects->paginate(10) ?? [], "meta" => $additional], 'Prospect customers and notification count retrieved successfully');
    }
}
