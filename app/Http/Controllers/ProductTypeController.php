<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Repositories\ProductTypeRepository;
use Illuminate\Http\Request;

class ProductTypeController extends Controller
{

    private $productType;

    public function  __construct(ProductTypeRepository $productTypeRepository)
    {
        $this->productType = $productTypeRepository;
    }

    public function index()
    {
        $result = $this->productType->getAll();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
    //
}
