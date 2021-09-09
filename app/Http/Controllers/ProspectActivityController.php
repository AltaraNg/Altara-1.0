<?php

namespace App\Http\Controllers;

use App\Http\Filters\ContactCustomerFilter;
use App\Repositories\ContactCustomerRepository;
use Illuminate\Http\Request;

class ProspectActivityController extends Controller
{
    //
    private $contactCustomerRepo;
    public function __construct(ContactCustomerRepository $contactCustomerRepository)
    {
        $this->contactCustomerRepo = $contactCustomerRepository;
    }

    public function index(ContactCustomerFilter $contactCustomerFilter)
    {
        
    }
}
