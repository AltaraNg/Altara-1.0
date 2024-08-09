<?php

namespace App\Jobs;

use App\Imports\TenantCustomersImport;
use App\Models\ClientCustomerCollection;
use App\Models\Tenant;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Http\UploadedFile;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class ProcessClientCustomerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $clientCustomerCollection;
    public int $clientID;
    public string $staffID;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(int $clientCustomerCollection, int $clientID, string $staffID)
    {
        $this->clientCustomerCollection = $clientCustomerCollection;
        $this->clientID = $clientID;
        $this->staffID = $staffID;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $clientCustomerCollection = ClientCustomerCollection::query()->where('id', $this->clientCustomerCollection)->first();
        if (!$clientCustomerCollection) {
            return;
        }
        // Download the Excel file
        $response = Http::get(Storage::disk('s3')->url($clientCustomerCollection->uploaded_file_url));
        if ($response->successful()) {
            $path = 'app/temp';

            $temporaryFileName = 'temp_excel_' . uniqid() . '.xlsx';
            $temporaryFilePath = storage_path('app/temp/' . $temporaryFileName);

            Log::info($temporaryFileName);
            Log::info($temporaryFilePath);
            Storage::disk('local')->put('temp/' . $temporaryFileName, $response->body());

            try {
                chmod(storage_path('app/temp/' . $temporaryFileName), 0775);
                $client = Tenant::query()->where('id', $this->clientID)->first();
                $import = new TenantCustomersImport($client, $this->staffID, false, $this->clientCustomerCollection);
                $import->onlySheets('Customers');
                Excel::import($import, $temporaryFilePath);
            } catch (\Exception $e) {
                Log::error($e->getMessage());
            } finally {
                Storage::disk('local')->delete('temp/' . $temporaryFileName);
            }
        }

    }
}
