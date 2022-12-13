<?php

namespace App\Console\Commands;

use App\Customer;
use App\FigFinance;
use App\NewOrder;
use App\SalesCategory;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Illuminate\Console\Command;
use Symfony\Component\Console\Exception\InvalidOptionException;

class FigFinanceCommmand extends Command
{
    const START_DATE = '2021-01-01';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fig:finance ' . '{--date=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate platform_metrics table with stats';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    private $renewalSalesCategoryIds;
    public function __construct()
    {
        parent::__construct();
        // $this->renewalSalesCategoryIds = SalesCategory::query()->where('name', 'like', '%renewal%')->pluck('id')->toArray();
        $this->renewalSalesCategoryIds = [2, 3];
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $date =  $this->option('date');
        if (!$date) {
            $this->error("Please a provide a date option like --date='2021-01' i.e year-month");
            return;
        }
        $data = explode('-', $date);
        $year = $data[0];
        $month = $data[1];
        if (strlen($year) < 4 || strlen($month) < 2) {
            throw new InvalidOptionException("Please input a date and format of 2022-01 i.e year-month", 1);
        }

        $inputDate = CarbonImmutable::parse($date . '-01');


        $start_date = Carbon::parse(self::START_DATE);
        $end_date = $inputDate->endOfMonth();
        $startOfQ1 = $inputDate->month(1)->startOfQuarter();
        $endOfQ1 = $inputDate->month(1)->endOfQuarter();



        $startOfQ2 = $inputDate->month(4)->startOfQuarter();
        $endOfQ2 = $inputDate->month(4)->endOfQuarter();

        $startOfQ3 = $inputDate->month(7)->startOfQuarter();
        $endOfQ3 = $inputDate->month(7)->endOfQuarter();

        $startOfQ4 = $inputDate->month(10)->startOfQuarter();
        $endOfQ4 = $inputDate->month(10)->endOfQuarter();
        $quarterlyDates = [
            ['start' => $startOfQ1, 'end' => $endOfQ1],
            ['start' => $startOfQ2, 'end' => $endOfQ2],
            ['start' => $startOfQ3, 'end' => $endOfQ3],
            ['start' => $startOfQ4, 'end' => $endOfQ4]
        ];
        $this->info('Computing metrics');
        $numberOfMonths = $start_date->diffInMonths($end_date) + 1;
        $metrics = [];

        $metrics[] = [
            'key' => 'TRANSACTIONS_COUNT',
            'value' => NewOrder::query()->whereBetween('order_date', [$start_date, $end_date])->count() / $numberOfMonths,
            'date' => $end_date->toDateString(),
        ];
        $this->info('Computed transactions count');
        $metrics[] = [
            'key' => 'ACTIVE_USERS_COUNT', 'value' => Customer::query()->whereHas('new_orders', function ($query) use ($start_date, $end_date) {
                $query->whereBetween('order_date', [$start_date, $end_date]);
            })->count() / $numberOfMonths,
            'date' => $end_date->toDateString()
        ];
        $this->info('Computed Active users count');
        $metrics[] = [
            'key' => 'TOTAL_USERS_COUNT',
            'value' => Customer::query()->whereBetween('date_of_registration', [$start_date, $end_date])->count(),
            'date' => $end_date->toDateString()
        ];
        //TRANSACTIONS_QUARTERLY_GROWTH_RATE -- ENDS
        //TODO check if it is end of end of quarter
        foreach ($quarterlyDates as $key => $quarterlyDate) {
            if ($inputDate->endOfMonth()->toDateString() == $quarterlyDate['end']->toDateString()) {
                $metrics[] = $this->transactionsQuarterlyGrowth($quarterlyDate['start'], $quarterlyDate['end']);
                $metrics[] = $this->usersQuarterlyGrowth($quarterlyDate['start'], $quarterlyDate['end']);
                $metrics[] = $this->customersQuarterlyGrowth($quarterlyDate['start'], $quarterlyDate['end']);
                $metrics[] = $this->customersQuarterlyRetention($quarterlyDate['start'], $quarterlyDate['end']);
                $metrics[] = $this->customersQuarterlyChurn($quarterlyDate['start'], $quarterlyDate['end']);
                $this->info('Computed a quarterly data');
            }
        }
        $this->info('All metrics has been computed... Please wait for metrics to get stored');
        sleep(1);
        foreach ($metrics as $metric) {
            $this->info('Inserting metrics into database');
            FigFinance::query()->updateOrCreate(['date' => $metric['date'], 'key' => $metric['key']], ['value' => $metric['value']]);
            $this->info('Updating or inserting metrics into database');
        }

    }
    private function transactionsQuarterlyGrowth($startOfQ, $endOfQ)
    {
        return [
            'key' => 'TRANSACTIONS_QUARTERLY_GROWTH_RATE',
            'value' => NewOrder::query()->whereBetween('order_date', [$startOfQ, $endOfQ])->sum('product_price'),
            'date' => $endOfQ->toDateString()
        ];
    }
    private function usersQuarterlyGrowth($startOfQ, $endOfQ)
    {
        return [
            'key' => 'USERS_QUARTERLY_GROWTH_RATE',
            'value' => Customer::query()->whereBetween('date_of_registration', [$startOfQ, $endOfQ])->count(),
            'date' => $endOfQ->toDateString()
        ];
    }
    private function customersQuarterlyGrowth($startOfQ, $endOfQ)
    {
        return [
            'key' => 'CUSTOMERS_QUARTERLY_GROWTH_RATE',
            'value' => Customer::query()->whereBetween('date_of_registration', [$startOfQ, $endOfQ])->has('new_orders')->count(),
            'date' => $endOfQ->toDateString()
        ];
    }

    private function customersQuarterlyRetention($startOfQ, $endOfQ)
    {
        //renewal orders
        return [
            'key' => 'CUSTOMERS_QUARTERLY_RETENTION_RATE',
            'value' => Customer::query()->whereHas('new_orders', function ($query) use ($startOfQ, $endOfQ) {
                $query->whereIn('sales_category_id', $this->renewalSalesCategoryIds)->whereBetween('order_date', [$startOfQ, $endOfQ]);
            })->whereHas('latestAmortizationPayed', function ($query) {
                $query->whereBetween('expected_payment_date', [Carbon::now()->subMonths(6)->toDateString(), Carbon::now()->toDateString()]);
            })->count(),
            'date' => $endOfQ->toDateString()
        ];
    }

    private function customersQuarterlyChurn($startOfQ, $endOfQ)
    {
        //jan to march, finish repayment 6 months earlier
        //do you have renewal sale within previous 6 month
        return [
            'key' => 'CUSTOMERS_QUARTERLY_CHURN_RATE',
            'value' => Customer::query()->whereHas('new_orders', function ($query) use ($startOfQ, $endOfQ) {
                $query->whereIn('sales_category_id', $this->renewalSalesCategoryIds)->whereBetween('order_date', [$startOfQ, $endOfQ]);
            })->whereHas('latestAmortizationPayed', function ($query) {
                $query->whereNotBetween('expected_payment_date', [Carbon::now()->subMonths(6)->toDateString(), Carbon::now()->toDateString()]);
            })->count(),
            'date' => $endOfQ->toDateString()
        ];
    }
}
