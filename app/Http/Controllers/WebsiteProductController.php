<?php

namespace App\Http\Controllers;

use App\Http\Filters\WebsiteProductFilter;
use App\Http\Requests\WebsiteProductRequest;
use App\Repositories\WebsiteProductRepository;
use App\WebsiteProduct;
use Illuminate\Http\Request;

class WebsiteProductController extends Controller
{

    private $productRepo;

    public function __construct(WebsiteProductRepository $productRepo)
    {
        $this->productRepo = $productRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(WebsiteProductFilter $filter)
    {
        $products = $this->productRepo->getAll($filter);

        return $this->sendSuccess($products->toArray(), 'Products retrieved successfully');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WebsiteProductRequest $request)
    {
        //
        $data = $request->validated();
        $product = $this->productRepo->store($data);

        return $this->sendSuccess($product->toArray(), 'Product Successfully Created');



    }

    /**
     * Display the specified resource.
     *
     * @param  \App\WebsiteProduct  $websiteProduct
     * @return \Illuminate\Http\Response
     */
    public function show(WebsiteProduct $websiteProduct)
    {
        //
        return $this->sendSuccess($websiteProduct->toArray(), 'Product Successfully fetched');


    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\WebsiteProduct  $websiteProduct
     * @return \Illuminate\Http\Response
     */
    public function update(WebsiteProductRequest $request, WebsiteProduct $websiteProduct)
    {
        //
        $product = $this->productRepo->update($websiteProduct, $request->validated());

        return $this->sendSuccess($product->toArray(), 'Product updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\WebsiteProduct  $websiteProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(WebsiteProduct $websiteProduct)
    {
        //
        $websiteProduct->delete();
        return $this->sendSuccess($websiteProduct->toArray(), 'Product deleted successfully');

    }
}
