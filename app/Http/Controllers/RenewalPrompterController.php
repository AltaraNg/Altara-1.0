<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Filters\BaseFilter;
use App\Http\Filters\NewOrderFilter;
use App\Http\Filters\RenewalPrompterFilter;
use App\Notifications\RenewalNotification;
use App\Repositories\NewOrderRepository;
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
  public function index(RenewalPrompterFilter $renewalPrompterFilter)
  {

    $renewalPrompterQuery =     $this->renewalPrompterRepository->renewalQuery($renewalPrompterFilter);
    $contacted = $this->getNumberOfContacted(clone $renewalPrompterQuery);
    $interested =  $this->getNumberOfInterested(clone $renewalPrompterQuery);
    $purchased_renewed = $this->getNumberOfRenewed(clone $renewalPrompterQuery);
    $additional  = [
      'total' => $renewalPrompterQuery->count(),
      'contacted' => $contacted,
      'interested' => $interested,
      'purchased_renewed' => $purchased_renewed
    ];
    return $this->sendSuccess(['renewal_prompter' => $renewalPrompterQuery->paginate(10) ?? [], "meta" => $additional], 'Renewal Prompter and stats count retrieved successfully');

    //TODO
    //1. Create table  for renewal_status 
    //2. Create relationship between renewal status and prompters
    //3. fetch all prompters 
    //4. get count of all prompter_statuses
    //5.Send result
    //6. Refactore controller to use  
  }

  private  function getNumberOfContacted($renewalPrompterQuery)
  {
    return $renewalPrompterQuery->whereHas('renewalPrompterStatus', function ($query) {
      $query->where('name', 'contacted');
    })->count();
  }
  private  function getNumberOfInterested($renewalPrompterQuery)
  {
    return $renewalPrompterQuery->whereHas('renewalPrompterStatus', function ($query) {
      $query->where('name', 'interested');
    })->count();
  }
  private  function getNumberOfRenewed($renewalPrompterQuery)
  {
    return  $renewalPrompterQuery->whereHas('renewalPrompterStatus', function ($query) {
      $query->where('name', 'purchased/renewed');
    })->count();
  }

  public function store(Request $request)
  {
   $renewal_prompter = $this->renewalPrompterRepository->store([
      'renewal_prompter_status_id' => $request->renewal_prompter_status_id,
      'customer_id' => $request->customer_id,
      'feedback' => $request->feedback,
    ]);
    return $this->sendSuccess(['renewal_prompter' => $renewal_prompter], 'Renewal Prompter  created successfully');
  }
  public function updated(Request $request, RenewalNotification $renewal_prompter)
  {
   $renewal_prompter = $this->renewalPrompterRepository->update($renewal_prompter, [
      'renewal_prompter_status_id' => $request->renewal_prompter_status_id,
      'feedback' => $request->feedback,
    ]);
    return $this->sendSuccess(['renewal_prompter' => $renewal_prompter], 'Renewal Prompter  created successfully');
  }
}
