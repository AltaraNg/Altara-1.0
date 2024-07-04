<?php

namespace App\Http\Controllers;

use App\Imports\TenantCustomersImport;
use App\Models\Tenant;
use App\Repositories\NewOrderRepository;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Validators\ValidationException;

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
           'client_id' => ['required','integer', 'exists:tenants,id'],
            'file' => ['required','file','mimes:xlsx','max:2048'],
        ]);

        /** @var Tenant $client */
        $client = Tenant::query()->where('id', $validatedData['client_id'])->first();

        try {
            $import = new TenantCustomersImport($client, auth()->user()->staff_id, $this->newOrderRepository);
            $import->onlySheets('Customers');
            Excel::import($import, $request->file('file'));
        }catch (ValidationException $exception){
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
            return $this->sendError('Invalid import data', 412, $errorMessages, 412);
        }


//      Excel::queueImport(new UsersImport, 'users.xlsx');
        return $this->sendSuccess([], 'Import process has been initiated');
    }
}
