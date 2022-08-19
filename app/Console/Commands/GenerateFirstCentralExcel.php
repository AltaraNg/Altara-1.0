<?php

namespace App\Console\Commands;

use App\Customer;
use App\NewOrder;
use Illuminate\Support\Facades\Date;
use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\FirstCentralCreditBureauExport;
use Carbon\Carbon;

class GenerateFirstCentralExcel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:credit-score';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate first central excel sheet';

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
        $start = now();
        $this->comment('Processing');
        // dd(public_path('exported_excel/processed'));
        $from = '2020-01-01';
        $to = '2020-01-15';

        $this->info('-----Generating Queries------');
        $customersQuery = Customer::query()->whereBetween('date_of_registration', [$from, $to])->has('new_orders')->orderBy('date_of_registration');
        $this->info('Generated Customer query');
        // $this->customersQuery = Customer::query()->whereRaw("Date(date_of_registration) >='" . date($from) . "' AND " . "Date(date_of_registration) <='" . date($to) . "'")->has('new_orders');
        // dd($this->customersQuery->toSql());
        $this->info('Getting customer ids.....');
        $customerIds = (clone $customersQuery)->select('id')->get()->pluck('id')->toArray();
        $this->info(count($customerIds) . ' customers will be populated into the excel sheet');
        $this->info('Getting order....');
        $orders = NewOrder::query()->whereIn('customer_id', $customerIds)->has('amortization')->with(['amortization', 'latestAmortizationNotPayed', 'latestAmortizationPayed', 'customer:id,first_name,last_name,civil_status']);
        $this->info($orders->count() . " orders about to be populated into the excel");
        $fileName = 'Credit Report for' . $from . "-" . $to . '.xlsx';
        $this->info('Population of Excel sheet started');
        try {
            $response =  Excel::store(new FirstCentralCreditBureauExport($customersQuery, $orders), $fileName, 'excel');
            $this->info('Population of Excel successful');
            chmod(public_path('exported_excel/processed/' . $fileName), 0775);
            $this->comment('Excel sheet generated: ' . $response);
        } catch (\Throwable $th) {
            $this->error($th->getMessage());
        }
        $timeInSeconds = $start->diffInSeconds(now());
        $timeInMinutes = $start->diffInMinutes(now());
        $this->comment("Processed in $timeInSeconds seconds");
        $this->comment("Processed in $timeInMinutes minutes");
    }
}
