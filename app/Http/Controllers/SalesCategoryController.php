<?php

namespace App\Http\Controllers;

use App\SalesCategory;
use App\Repositories\SalesCategoryRepository;
use Illuminate\Http\Request;
use App\Helper\ResponseHelper;
use App\Http\Requests\SalesCategoryRequest;
use Illuminate\Http\Response;

class SalesCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */

    private $salesCategory;

    public function __construct(SalesCategoryRepository $salesCategoryRepository)
    {
        $this->salesCategory = $salesCategoryRepository;
    }

    public function index()
    {
        $result = $this->salesCategory->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SalesCategory  $salesCategory
     * @return Response
     */
    public function show(SalesCategory $salesCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SalesCategory  $salesCategory
     * @return Response
     */
    public function edit(SalesCategory $salesCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SalesCategory  $salesCategory
     * @return Response
     */
    public function update(Request $request, SalesCategory $salesCategory)
    {
        //
    }

    public function getRoles(SalesCategory $salesCat)
    {
        $result = $this->salesCategory->fetchRoles($salesCat);
        return $this->sendSuccess($result, 'Users sent successfully');
    }

    public function manageRoles(SalesCategory $salesCat, SalesCategoryRequest $request)
    {
        $salesCat->roles()->sync($request->validated()['roles']);

        return $this->sendSuccess([], 'Roles Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\SalesCategory $salesCategory
     * @return void
     */
    public function destroy(SalesCategory $salesCategory)
    {
        //
    }
}
