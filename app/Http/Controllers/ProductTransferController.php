<?php

namespace App\Http\Controllers;

use App\Events\ProductTransferEvent;
use App\Http\Filters\ProductTransferFilter;
use App\Http\Requests\ProductTransferRequest;
use App\Models\Inventory;
use App\Models\ProductTransfer;
use App\Repositories\ProductTransferRepository;
use Illuminate\Http\Response;

class ProductTransferController extends Controller
{
    private $productTransferRepo;

    public function __construct(ProductTransferRepository $productTransferRepository)
    {
        $this->productTransferRepo = $productTransferRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param ProductTransferFilter $filter
     * @return Response
     */
    public function index(ProductTransferFilter $filter)
    {
        $productTransfer = $this->productTransferRepo->getAll($filter);

        return $this->sendSuccess($productTransfer->toArray(), 'Product Transfers retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductTransferRequest $request
     * @return Response
     */
    public function store(ProductTransferRequest $request)
    {
        $inv = Inventory::find($request->validated()['inventory_id']);
        $data = array_merge($request->validated(), ['user_id' => auth()->user()->id, 'from_id' => $inv->branch_id]);
        $productTransfer = $this->productTransferRepo->store($data);
        event(new ProductTransferEvent($data));

        return $this->sendSuccess($productTransfer->toArray(), 'Product Transfer Successfully Created');
    }

    /**
     * @param ProductTransfer $productTransfer
     * @param ProductTransferRequest $request
     *
     * @return Response
     */
    public function update(ProductTransfer $productTransfer, ProductTransferRequest $request)
    {
        $validated = $request->validated();
        unset($validated['current']);
        $data = array_merge($validated, ['user_id' => auth()->user()->id]);
        $productTransfer = $this->productTransferRepo->update($productTransfer, $data);
        if ($request['current']){
            event(new ProductTransferEvent($productTransfer));
        }
        return $this->sendSuccess($productTransfer->toArray(), 'Product Transfer updated successfully');
    }
}
