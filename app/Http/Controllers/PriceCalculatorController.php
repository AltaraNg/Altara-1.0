<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Http\Requests\PriceCalculatorRequest;
use App\Imports\CalculatorImport;
use App\PriceCalculator;
use App\Repositories\PriceCalculatorRepository;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Request;
use Maatwebsite\Excel\Facades\Excel;

class PriceCalculatorController extends Controller
{

    private $priceCalRepo;

    public function __construct(PriceCalculatorRepository $priceCalculatorRepository)
    {
        $this->priceCalRepo = $priceCalculatorRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $result = PriceCalculator::all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PriceCalculatorRequest $request
     * @return Response
     */
    public function store(PriceCalculatorRequest $request)
    {
        $priceCalculator = $this->priceCalRepo->store($request->validated());

        return $this->sendSuccess($priceCalculator->toArray(), 'Price Calc Created Successfully');
    }

    /**
     * @param PriceCalculator $priceCalculator
     * @param PriceCalculatorRequest $request
     *
     * @return Response
     */
    public function update(PriceCalculator $priceCalculator, PriceCalculatorRequest $request)
    {
        $priceCalculator = $this->priceCalRepo->update($priceCalculator, $request->validated());

        return $this->sendSuccess($priceCalculator->toArray(), 'Price Calc updated successfully');
    }

    /**
     * @return Response
     */
    public function uploadCalculator()
    {
        Excel::import(new CalculatorImport(),Request::file('file'));

        return $this->sendSuccess([],'Calculator Uploaded successfully');
    }
}
