<?php

namespace App\Http\Controllers;

use App\Http\Filters\ContactCustomerFilter;
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

    public function index(ContactCustomerFilter $contactCustomerFilter)
    {
        // ->where('created_at', '=<', $date)
        $prospects = $this->contactCustomerRepo->query($contactCustomerFilter)->whereHas('lastProspectActivity', function ($query) {
            $query->orderby('created_at', 'desc')
                // ->where('created_at', '=<', Carbon::now()->subDays(30));
                ->where('user_id', auth()->id());
        })->with('lastProspectActivity')->get();
        $additional = [
            'total' => $prospects->count(),
        ];
        return $this->sendSuccess(['prospects' => $prospects, "meta" => $additional], 'Contact retrieved successfully');
    }
}
