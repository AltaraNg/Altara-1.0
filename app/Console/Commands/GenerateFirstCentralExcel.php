<?php

namespace App\Console\Commands;

use App\Customer;
use App\NewOrder;
use Illuminate\Support\Facades\Date;
use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\FirstCentralCreditBureauExport;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

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
        $from = '2021-09-01';
        $to = '2023-12-30';

        $this->info('-----Generating Data From: ' . $from . ' ---To: ' . $to);

        $this->info('Getting order....');
        $orders = NewOrder::query()
            ->orderBy('customer_id')
            // ->whereBetween('order_date', [$from, $to])
            // ->whereIn('customer_id', $customerIds)
            ->has('amortization')
            ->with(['amortization', 'latestAmortizationNotPayed', 'latestAmortizationPayed', 'customer:id,first_name,last_name,civil_status'])
            ->get();
        $customers = $orders->pluck('customer')->unique('id');


        $this->info('Generated Customer query');

        $this->info('Getting customer ids.....');
        $customerIds = $customers->pluck('id')->toArray();
        $customersQuery = Customer::query()->whereIn('id', $customerIds)->orderBy('id');
        $this->info(count($customerIds) . ' customers will be populated into the excel sheet');


        $this->info($orders->count() . " orders about to be populated into the excel");
        $fileName = 'Credit Report for ' . $from . "-" . $to . '.xlsx';
        $this->info('Population of Excel sheet started');

        try {
            $response =  Excel::store(new FirstCentralCreditBureauExport($customersQuery, $orders), $fileName, 'excel');
            $this->info('Population of Excel successful');
            chmod(public_path('exported_excel/processed/' . $fileName), 0775);
            $this->comment('Excel sheet generated: ' . $response);

            $this->info('Upload of Excel To S3');
            $s3 = Storage::disk('s3');
            $pathToFile = 'firstcentral/report/' . $fileName;
            $resp = $s3->put($pathToFile, file_get_contents(public_path('exported_excel/processed/' . $fileName)), 'public');
            if (!$resp) {
                $this->error('Upload of Excel To S3 Failed');
            }else{
                $this->info($s3->url($pathToFile));
                $this->error('Upload of Excel To S3 Successful');
            }
            
            
        } catch (\Throwable $th) {
            $this->error($th->getMessage());
        }
        $timeInSeconds = $start->diffInSeconds(now());
        $timeInMinutes = $start->diffInMinutes(now());
        $this->comment("Processed in $timeInSeconds seconds");
        $this->comment("Processed in $timeInMinutes minutes");
    }
}
