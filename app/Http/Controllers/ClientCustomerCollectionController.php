<?php

namespace App\Http\Controllers;

use App\Http\Filters\ClientCustomerCollectionFilter;
use App\Models\ClientCustomerCollection;
use App\Repositories\ClientCustomerCollectionRepository;
use Illuminate\Http\Request;

class ClientCustomerCollectionController extends Controller
{

    public function __construct(private readonly ClientCustomerCollectionRepository $clientCustomerCollectionRepository)
    {
    }

    public function index(ClientCustomerCollectionFilter $filter)
    {
        $clientCustomerCollectionQuery = $this->clientCustomerCollectionRepository->queryModel($filter)->with(['client', 'uploadedBy:id,full_name,staff_id']);
        $clientCustomerCollections = $clientCustomerCollectionQuery->latest()->paginate(\request('per_page', 15));

        return $this->sendSuccess(['clientCustomerCollections' => $clientCustomerCollections], 'Uploaded client customer collections data');
    }
}
