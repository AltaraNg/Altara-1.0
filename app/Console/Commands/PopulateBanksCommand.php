<?php

namespace App\Console\Commands;

use App\Models\Bank;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class PopulateBanksCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:populate-banks-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate banks data';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $response = Http::withUrlParameters([
            'endpoint' => config('paystack.paymentUrl'),
        ])->withHeaders(["Authorization" => "Bearer " . config('paystack.secretKey')])
            ->get('{+endpoint}/bank?country=nigeria');
        $banks = Bank::all();
        foreach ($response->json('data') as $bank) {
            $bank = Bank::query()->updateOrCreate(
                [
                    'name' => $bank['name'],
                ],
                [
                    'code' => $bank['code'],
                ]
            );
            $this->info("Created bank {$bank->name}");
        }
        return Command::SUCCESS;
    }
}
