<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\Models\BusinessType;
use App\Models\OrderType;
use App\Models\User;
use App\Repositories\NewOrderRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

class ClientOrderController extends Controller
{

    public function __construct(
        NewOrderRepository $newOrderRepository,
    ) {
        $this->newOrderRepository = $newOrderRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @param NewOrderFilter $newOrderFilter
     * @return Response
     */
    public function index(NewOrderFilter $newOrderFilter)
    {
        $user = auth()->user();

        $business_type = Cache::rememberForever('business_type_collection', function () {
            return BusinessType::query()->where('name', 'Collection')->first();
        });

        $order_type = Cache::rememberForever('order_type_collection', function () {
            return OrderType::query()->where('name', 'Collection')->first();
        });


        $user = User::query()->where('id', $user->id)->first();

        $orders = $this->newOrderRepository->queryModel($newOrderFilter)
            ->where('business_type_id', $business_type->id)
            ->where('order_type_id', $order_type->id)
            ->where('owner_id', $user->id)
            ->latest()
            ->paginate(\request('per_page') ?? 20);
        return $this->sendSuccess(['orders' => $orders], 'Orders retrieved successfully');
    }
}
