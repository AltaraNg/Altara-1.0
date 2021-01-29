<?php

namespace App\Http\Controllers;

use App\SalesCategory;
use App\Repositories\SalesCategoryRepository;
use Illuminate\Http\Request;
use App\Helpers\ResponseHelper;


class SalesCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SalesCategory  $salesCategory
     * @return \Illuminate\Http\Response
     */
    public function show(SalesCategory $salesCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SalesCategory  $salesCategory
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SalesCategory $salesCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SalesCategory  $salesCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(SalesCategory $salesCategory)
    {
        //
    }
}
