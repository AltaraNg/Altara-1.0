<?php

namespace App\Listeners;

use App\Amortization;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Http\Controllers\AmortizationController;
use Illuminate\Http\Request;
use App\Exceptions\AException;
use Carbon\Carbon;
use App\Repositories\AmortizationRepository;

class UpdateAmortizationListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    private $amortizationRepo;
    public function __construct(AmortizationRepository $amortizationRepo)
    {
        //
        $this->amortizationRepo = $amortizationRepo;
    }

    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     * @throws AException
     */
    public function handle($event)
    {
        //update amortization
        try {
            $amortization = Amortization::where('new_order_id', $event->newOrder['model_id'])
                ->where('actual_payment_date', null)->first();
            if ($amortization){
                $amortization->update([
                    'actual_payment_date' => Carbon::now(),
                    'actual_amount' => $event->newOrder['amount']
                ]);
            }
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }


    }
}
