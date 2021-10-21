<?php

namespace App\Http\Controllers;

use App\Http\Resources\JSONApiCollection;
use App\Http\Resources\JSONApiResource;
use App\Http\Resources\RenewalPrompterCollection;
use App\Http\Resources\RenewalPrompterResource;
use App\OrderStatus;
use App\RenewalPrompter;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\RenewalPrompterStatus;
use App\Http\Filters\BaseFilter;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Filters\NewOrderFilter;
use App\Repositories\NewOrderRepository;
use App\Services\RenewalPrompterService;
use App\Notifications\RenewalNotification;
use App\Http\Filters\RenewalPrompterFilter;
use App\Http\Requests\RenewalPrompterRequest;
use App\Repositories\RenewalPrompterRepository;

class RenewalPrompterController extends Controller
{
    //
    private $newOrderRepository;
    private $renewalPrompterRepository;

    public function __construct(NewOrderRepository $newOrderRepository, RenewalPrompterRepository $renewalPrompterRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
        $this->renewalPrompterRepository = $renewalPrompterRepository;
    }

    //
    public function index(RenewalPrompterService $renewalPrompterService, NewOrderFilter $newOrderFilter, RenewalPrompterFilter $renewalPrompterFilter)
    {
//        $renewalPromptersQuery = $this->newOrderRepository->reportQuery($newOrderFilter)->orWhereHas('amortization', function ($query) {
//                $query->select(DB::RAW("COUNT(*) as same_order_count from amortizations where new_orders.id = amortizations.new_order_id group by amortizations.new_order_id HAVING SUM(same_order_count/same_order_count) * 100 >= 80");
//        });
//        return $renewalPromptersQuery->toSql();

        $renewalPromptersQuery = $this->newOrderRepository->reportQuery($newOrderFilter);

        $renewalPrompterStatQuery = $this->renewalPrompterRepository->renewalQuery($renewalPrompterFilter);
        $additional = $renewalPrompterService->generateMetaData($renewalPrompterStatQuery, clone $renewalPromptersQuery);
        $additional['total'] = $renewalPromptersQuery->count();
        if (request('rollUp')) {
            return $this->sendSuccess(['renewal_prompters' => $renewalPromptersQuery->paginate(10) ?? [], "meta" => $additional], 'Completed orders and renewal prompter stats retrieved successfully');
        }
        return $this->sendSuccess(['renewal_prompters' => $renewalPromptersQuery->paginate(10) ?? []], 'Completed orders and renewal prompter stats retrieved successfully');
    }

    public function store(RenewalPrompterRequest $request): Response
    {
        $user = auth('api')->user();
        $renewal_prompter = $this->renewalPrompterRepository->store([
            'order_id' => $request->order_id,
            'renewal_prompter_status_id' => $request->renewal_prompter_status_id,
            'promise_date' => $request->promised_date,
            'branch_id' => $user->branch_id,
            'user_id' => $user->id,
            'feedback' => $request->feedback,
        ]);

        return $this->sendSuccess(['renewal_prompter' => new JSONApiResource($renewal_prompter)], 'Renewal Prompter created successfully');
    }

    public function show(RenewalPrompterFilter $renewalPrompterFilter): Response
    {
        $renewalPromptersQuery = $this->renewalPrompterRepository->getAll($renewalPrompterFilter);
        return $this->sendSuccess(['renewal_prompter_history' => new JSONApiCollection($renewalPromptersQuery)], 'renewal prompter history retrieved successfully');
    }

    public function prompterStatuses(): Response
    {
        return $this->sendSuccess(['prompter_statuses' => RenewalPrompterStatus::all()], 'renewal prompter status retrieved successfully');
    }

    public function statistics(RenewalPrompterFilter $renewalPrompterFilter): Response
    {
        $renewalPrompterStatQuery = $this->renewalPrompterRepository->renewalQuery($renewalPrompterFilter)->get();
        return $this->sendSuccess(['renewal_prompter_agents_stat' => $renewalPrompterStatQuery], 'renewal prompter agents statistics retrieved successfully');
    }
}
