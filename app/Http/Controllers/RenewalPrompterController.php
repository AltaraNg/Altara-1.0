<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Filters\BaseFilter;
use App\Http\Filters\NewOrderFilter;
use App\Http\Filters\RenewalPrompterFilter;
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
  public function index(RenewalPrompterFilter $renewalPrompterFilter)
  {
    return $this->sendSuccess(['renewal_prompters' => $this->renewalPrompterRepository->getAll($renewalPrompterFilter)], 'Renewal prompters retrieved successfully');
  }

  public function store(Request $request)
  {
    //TODO
    //create a request class for this validation
    $this->validate($request, [
      'order_id' => ['required', 'exists:new_orders,id'],
      'renewal_prompter_status_id' => ['required', 'exists:renewal_prompter_statuses,id'],
      'feedback' => ['required', 'string'],
    ]);
    $renewal_prompter = $this->renewalPrompterRepository->store([
      'renewal_prompter_status_id' => $request->renewal_prompter_status_id,
      'order_id' => $request->order_id,
      'feedback' => $request->feedback,
    ]);
    return $this->sendSuccess(['renewal_prompter' => $renewal_prompter], 'Renewal Prompter created successfully');
  }

  public function completedOrders(RenewalPrompterService $renewalPrompterService, NewOrderFilter $newOrderFilter, RenewalPrompterFilter $renewalPrompterFilter)
  {
    $newOrderQuery = $this->newOrderRepository->reportQuery($newOrderFilter)->where('status_id', OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id);
    $renewalPrompterQuery =     $this->renewalPrompterRepository->renewalQuery($renewalPrompterFilter);
    $additional = $renewalPrompterService->generateMetaData($renewalPrompterQuery);
    return $this->sendSuccess(['completed_orders' => $newOrderQuery->paginate(10) ?? [], "meta" => $additional], 'Completed orders and renewal prompter stats retrieved successfully');
  }
  public function prompterStatuses()
  {
    return $this->sendSuccess(['prompter_statuses' => RenewalPrompterStatus::all()], 'renewal prompter status retrieved successfully');
  }
  // public function update(Request $request, RenewalNotification $renewal_prompter)
  // {
  //   $renewal_prompter = $this->renewalPrompterRepository->update($renewal_prompter, [
  //     'renewal_prompter_status_id' => $request->renewal_prompter_status_id,
  //     'feedback' => $request->feedback,
  //   ]);
  //   return $this->sendSuccess(['renewal_prompter' => $renewal_prompter], 'Renewal Prompter  updated successfully');
  // }
}
