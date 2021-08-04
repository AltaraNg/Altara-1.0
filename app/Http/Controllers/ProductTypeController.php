<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Repositories\ProductTypeRepository;

class ProductTypeController extends Controller
{

    private $productType;

    public function  __construct(ProductTypeRepository $productTypeRepository)
    {
        $this->productType = $productTypeRepository;
    }

    public function index()
    {
        $result = $this->productType->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
