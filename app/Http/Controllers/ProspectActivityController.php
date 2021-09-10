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
