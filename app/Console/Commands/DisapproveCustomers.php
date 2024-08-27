<?php

namespace App\Console\Commands;

use App\Models\Customer;
use Illuminate\Console\Command;

class DisapproveCustomers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'disapprove:customers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'disapprove a customer after 6 month of registration';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $date = date('Y-m-d', strtotime(date("Y-m-d") . ' -182 days'));

        $customers = Customer::with([
            'user' => function ($query) {
                $query->select('id', 'full_name');
            },
            'branch','verification', 'address', 'workGuarantor', 'personalGuarantor', 'document', 'processingFee'
        ])->where('date_of_registration','<=',$date);

        return $customers;
    }
}
