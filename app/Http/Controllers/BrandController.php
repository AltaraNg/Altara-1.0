<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Http\Requests\BrandRequest;
use App\Repositories\BrandRepository;
use Illuminate\Http\Response;

class BrandController extends Controller
{
    private $brandRepository;

    public function __construct(BrandRepository $brandRepository)
    {
        $this->brandRepository = $brandRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $orders = $this->brandRepository->all();

        return $this->sendSuccess($orders->toArray(), 'Brands retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BrandRequest $request
     * @return Response
     */
    public function store(BrandRequest $request)
    {
        $brand = $this->brandRepository->store($request->validated());

        return $this->sendSuccess($brand->toArray(), 'Brand Successfully Created');
    }

    /**
     * Display the specified resource.
     *
     * @param Brand $brand
     * @return Response
     */
    public function show(Brand $brand)
    {
        return $this->sendSuccess($brand->toArray(), 'Brand retrieved successfully');
    }

    /**
     * @param Brand $brand
     * @param BrandRequest $request
     *
     * @return Response
     */
    public function update(Brand $brand, BrandRequest $request)
    {
        $brand = $this->brandRepository->update($brand, $request->validated());

        return $this->sendSuccess($brand->toArray(), 'Brand updated successfully');
    }


    /**
     * @param Brand $brand
     * @return Response
     * @throws \Exception
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();

        return $this->sendSuccess([],'Brand deleted successfully');
    }

    /**
     * @param Brand $brand
     * @param BrandRequest $request
     * @return Response
     */
    public function manageCategories(Brand $brand, BrandRequest $request)
    {
        $brand->categories()->sync($request->validated()['categories']);

        return $this->sendSuccess([],'Brand Categories Updated successfully');
    }
}
