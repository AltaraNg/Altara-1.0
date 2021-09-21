<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\ProspectActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Filters\ContactCustomerFilter;
use App\Http\Filters\ProspectActivityFilter;
use App\Repositories\ContactCustomerRepository;
use App\Repositories\ProspectActivityRepository;
use ProspectActivityService;

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
        return $this->sendSuccess(['prospect_activities' => $this->prospectActivityRepo->getAll($filter)], 'Prospect activities retrieved successfully');
    }

    public function show(ProspectActivity $prospect_activity)
    {
        $prospect_activity =  $prospect_activity->load('prospectActivityType');
        return $this->sendSuccess(['prospect_activity' => $prospect_activity], 'Prospect Activity fetched successfully');
    }
    public function inActiveProspects(ContactCustomerFilter $contactCustomerFilter, ProspectActivityService $prospectActivityService)
    {
        $prospectsQuery =  $this->contactCustomerRepo->query($contactCustomerFilter);
        $prospectsQueryClone = clone  $this->contactCustomerRepo->query($contactCustomerFilter);
        $statsForStages = $prospectActivityService->generateStageStats($prospectsQueryClone);
        $additional = [
            'total' => $prospectsQuery->count(),
            'statsForStages' => $statsForStages,
        ];
        if (request('rollUp')) {
            return $this->sendSuccess(["meta" => $additional], 'Notification count retrieved successfully');
        }
        return $this->sendSuccess(['prospects' => $prospectsQuery->paginate(10) ?? [], "meta" => $additional], 'Prospect customers and notification count retrieved successfully');
    }
}
