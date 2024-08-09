<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Imports\TenantCustomersImport;
use App\Jobs\ProcessClientCustomerJob;
use App\Models\ClientCustomerCollection;
use App\Models\Tenant;
use App\Repositories\NewOrderRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Validators\ValidationException;
use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;
use PhpOffice\PhpSpreadsheet\Reader\Csv;

class ProcessClientCustomerController extends Controller
{
    public NewOrderRepository $newOrderRepository;

    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'client_id' => ['required', 'integer', 'exists:tenants,id'],
            'file' => ['required', 'file', 'mimes:xlsx', 'max:2048'],
        ]);

        $isValidation = $request->input('is_validation', true);

        /** @var Tenant $client */
        $client = Tenant::query()->where('id', $validatedData['client_id'])->first();

        try {
            if (!$this->checkCustomerSheetExists($request->file('file'), 'Customers')) {
                return $this->sendError("Invalid excel data, please make sure  the first sheet name is 'Customers'", 400, [], 400);
            }

            if ($isValidation) {
                $import = new TenantCustomersImport($client, auth()->user()->staff_id, $isValidation);
                $import =  $import->onlySheets('Customers');
                Excel::import($import, $request->file('file'));
            } else {
                $import = new TenantCustomersImport($client, auth()->user()->staff_id, true);
                $import =  $import->onlySheets('Customers');
                Excel::import($import, $request->file('file'));

                $filename = 'collections' . '/' . $client->slug . '/' . Str::slug($client->slug) . '-' . Carbon::now()->toDateTimeString();
                $s3 = Storage::disk('s3');
                $response = $s3->put($filename, file_get_contents($request->file('file')), 'public');
                if (!$response) {
                    return $this->sendError('File upload failed please try again later', 400, [], 400);
                }
                $clientCustomerCollection = ClientCustomerCollection::query()->create([
                    'tenant_id' => $client->id,
                    'uploaded_file_url' => $filename,
                    'uploaded_by_id' => auth()->id(),
                ]);
                ProcessClientCustomerJob::dispatch($clientCustomerCollection->id, $client->id, auth()->user()->staff_id);
            }
        } catch (ValidationException $exception) {
            $failures = $exception->failures();
            $errorMessages = [];
            foreach ($failures as $failure) {
                $row = $failure->row();
                $attribute = $failure->attribute();
                $errors = $failure->errors();
                foreach ($errors as $error) {
                    $errorMessages[] = "Row $row: $error (Field: $attribute):";
                }
            }
            return $this->sendError('Invalid import data', 412, array_slice($errorMessages, 0, 20), 412);
        }
        $message = "File successfully validated";
        if (!$isValidation) {
            $message = "Import process has been initiated";
        }
        return $this->sendSuccess([], $message);
    }


    /**
     * @throws \Exception
     */
    private function getReader($filePath)
    {
        // Determine the file extension and choose the appropriate reader
        switch ($filePath->getClientOriginalExtension()) {
            case 'xlsx':
                return new Xlsx();
            case 'csv':
                return new Csv();
            default:
                throw new \Exception('Unsupported file type');
        }
    }

    /**
     * @throws Exception
     */
    public function checkCustomerSheetExists($filePath, $sheetName)
    {
        $reader = $this->getReader($filePath);

        // Load the spreadsheet
        $spreadsheet = $reader->load($filePath);

        // Get the sheet names
        $sheetNames = $spreadsheet->getSheetNames();


        // Check if the given sheet name exists in the sheet names
        return in_array($sheetName, $sheetNames);
    }
}
