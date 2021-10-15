<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Filters\BaseFilter;
use App\Http\Filters\NewOrderFilter;
use App\Http\Filters\RenewalPrompterFilter;
use App\Http\Requests\RenewalPrompterRequest;
use App\Notifications\RenewalNotification;
use App\OrderStatus;
use App\RenewalPrompterStatus;
use App\Repositories\NewOrderRepository;
use App\Repositories\RenewalPrompterRepository;
use App\Services\RenewalPrompterService;

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
    $renewalPromptersQuery = $this->newOrderRepository->reportQuery($newOrderFilter);
    $renewalPrompterStatQuery =     $this->renewalPrompterRepository->renewalQuery($renewalPrompterFilter);
    $additional = $renewalPrompterService->generateMetaData($renewalPrompterStatQuery);
    $additional['total'] = $renewalPromptersQuery->count();
    return $this->sendSuccess(['renewal_prompters' => $renewalPromptersQuery->paginate(10) ?? [], "meta" => $additional], 'Completed orders and renewal prompter stats retrieved successfully');
  }

  public function store(RenewalPrompterRequest $request)
  {
    $renewal_prompter = $this->renewalPrompterRepository->store($request->validated());
    return $this->sendSuccess(['renewal_prompter' => $renewal_prompter], 'Renewal Prompter created successfully');
  }


  public function prompterStatuses()
  {
    return $this->sendSuccess(['prompter_statuses' => RenewalPrompterStatus::all()], 'renewal prompter status retrieved successfully');
  }
}
