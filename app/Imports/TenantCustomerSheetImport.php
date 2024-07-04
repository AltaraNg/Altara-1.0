<?php

namespace App\Imports;

use App\Models\BnplVendorProduct;
use App\Models\Branch;
use App\Models\BusinessType;
use App\Models\Customer;
use App\Models\DownPaymentRate;
use App\Models\Guarantor;
use App\Models\NewOrder;
use App\Models\OrderType;
use App\Models\PaymentMethod;
use App\Models\RepaymentCycle;
use App\Models\RepaymentDuration;
use App\Models\SalesCategory;
use App\Models\Tenant;
use App\Models\User;
use App\Repositories\NewOrderRepository;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules\RequiredIf;
use Maatwebsite\Excel\Concerns\RemembersRowNumber;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithColumnLimit;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithLimit;
use Maatwebsite\Excel\Concerns\WithValidation;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class TenantCustomerSheetImport implements ToCollection, WithValidation, SkipsEmptyRows, WithHeadings, WithHeadingRow, WithColumnLimit, WithLimit, WithChunkReading
{
    use RemembersRowNumber;

    public Tenant $tenant;
    public string $employee_id;
    public NewOrderRepository $newOrderRepository;

    public function __construct(Tenant $tenant, string $employee_id, NewOrderRepository $newOrderRepository)
    {
        $this->tenant = $tenant;
        $this->employee_id = $employee_id;
        $this->newOrderRepository = $newOrderRepository;
    }

    /**
     * @param Collection $collections
     */
    public function collection(Collection $collections)
    {
        try {

            $branches = Branch::all();
            $employee = User::query()->where('staff_id', $this->employee_id)->first();
            $orderType = OrderType::query()->firstOrCreate(['name' => 'Collection'], ['name' => 'Collection']);
            $paymentMethod = PaymentMethod::query()->where('name', 'direct-debit')->first();
            $saleCategory = SalesCategory::query()->where('name', 'Repossesion Sale')->first();
            $businessType = BusinessType::query()->firstOrCreate(['name' => 'Collection', 'slug' => 'collection'], ['name' => 'Collection', 'slug' => 'collection']);
            $repaymentDurations = RepaymentDuration::query()->get();
            $repaymentCycles = RepaymentCycle::query()->get();
            $downpaymentRate = DownPaymentRate::query()->where('percent', 0)->first();
            $tenantEmail = $this->tenant->slug . ' ' . $this->tenant->id;
            $tenantEmail = str_replace(' ', '_', $tenantEmail);
            $tenantEmail = strtolower($tenantEmail);
            $user = User::query()->firstOrCreate([
                'email' => $tenantEmail,
                'tenant_id' => $this->tenant->id,
            ], [
                'staff_id' => 'TNT/' . $this->tenant->id,
                'full_name' => $this->tenant->name,
                'date_of_appointment' => Carbon::now()->format('Y-m-d'),
                'status' => 'inactive',
                'category' => 'contract',
                'phone_number' => 'TNT-' . $this->tenant->id,
                'highest_qualification' => 'unknown',
                'password' => Hash::make('password'),
                'portal_access' => false,
                'address' => 'unknown',
                'gender' => 'unknown',
                'referee_1' => 'unknown',
                'referee_2' => 'unknown',
                'referee_1_phone_no' => 'unknown',
                'referee_2_phone_no' => 'unknown',
                'date_of_birth' => 'unknown',
                'hr_id' => 1,
                'nationality' => 'unknown',
                'next_of_kin_name' => 'unknown',
                'next_of_kin_phone_no' => 'unknown',
            ]);
            foreach ($collections as $collection) {

                DB::beginTransaction();
                $product = BnplVendorProduct::query()->firstOrCreate(
                    [
                        'name' => $collection['product_name'],
                        'price' => $collection['product_amount'],
                        'vendor_id' => $user->id,
                    ],
                );
                $customerModelData = $this->customerData($collection, $branches, $employee);
                $customerModelData = array_merge($this->setNotNullableFields(), $customerModelData);
//                dd($customerModelData);
                $customer = Customer::query()->firstOrCreate(['telephone' => $customerModelData['telephone']], $customerModelData);
                $customer_id = $customer->id;
                $guarantorsModelsData = $this->guarantorsData($collection, $customer_id, $employee);
                foreach ($guarantorsModelsData as $guarantorModelData) {
                    Guarantor::query()->updateOrCreate(['customer_id' => $guarantorModelData['customer_id'], 'phone_number' => $guarantorModelData['phone_number']], $guarantorModelData);
                }
                $orderModelData = $this->orderData(
                    $collection,
                    $orderType,
                    $product,
                    $businessType,
                    $saleCategory,
                    $customer_id,
                    $repaymentDurations,
                    $repaymentCycles,
                    $downpaymentRate
                );

                $this->newOrderRepository->store($orderModelData);
                DB::commit();
            }
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
            DB::rollBack();
//            dd($exception, $this->getRowNumber());
            throw new \Exception($exception->getMessage());
        }
    }

    public function rules(): array
    {
        return [
            'customer_id' => ['required', 'string', 'max:200'],
            'customer_first_name' => ['required', 'string', 'max:200'],
            'customer_middle_name' => ['nullable', 'string', 'max:200'],
            'customer_surname' => ['required', 'string', 'max:200'],
            'customer_phone_number' => ['required', 'string', 'max:11'],
            'customer_home_address' => ['required', 'string', 'max:200'],
            'customer_work_address' => ['nullable', 'string', 'max:200'],
            'customer_date_of_birth' => ['nullable', 'date'],
            'customer_employment_status' => ['nullable', 'string', 'max:200'],
            'customer_occupation' => ['nullable', 'string', 'max:200'],
            'customer_gender' => ['required', 'string', 'max:200'],
            'other_phone_numbers' => ['nullable', 'string', 'max:200'],
            'first_guarantor_first_name' => ['nullable', 'required_with:first_guarantor_last_name,first_guarantor_phone', 'string', 'max:200'],
            'first_guarantor_last_name' => ['nullable', 'required_with:first_guarantor_first_name,first_guarantor_phone', 'string', 'max:200'],
            'first_guarantor_phone' => ['nullable', 'required_with:first_guarantor_first_name,first_guarantor_last_name', 'string', 'max:11'],
            'first_guarantor_address' => ['nullable', 'string', 'max:200'],
            'second_guarantor_first_name' => ['nullable', 'required_with:second_guarantor_last_name,second_guarantor_phone', 'string', 'max:200'],
            'second_guarantor_last_name' => ['nullable', 'required_with:second_guarantor_first_name,second_guarantor_phone', 'string', 'max:200'],
            'second_guarantor_phone' => ['nullable', 'required_with:second_guarantor_first_name,second_guarantor_last_name', 'string', 'max:11'],
            'second_guarantor_address' => ['nullable', 'string', 'max:200'],
            'branch' => ['required', 'string', 'max:200'],
            'work_address' => ['nullable', 'string', 'max:200'],
            'nearest_landmark' => ['required', 'string', 'max:200'],
            'local_government' => ['required', 'string', 'max:200'],
            'city' => ['required', 'string', 'max:200'],
            'state' => ['required', 'string', 'max:200'],
            'product_name' => ['required', 'string', 'max:200'],
            'product_amount' => ['required', 'numeric', 'min:1'],
            'amount_paid' => ['required', 'numeric', 'min:0'],
            'amount_owed' => ['required', 'numeric', 'min:0'],
            'payment_duration' => ['required', 'numeric', 'min:1'],
            'loan_date' => ['required', 'date'],
            'loan_id' => ['required', 'string', 'max:200', 'unique:new_orders,custom_order_number'],
            'repayment_cycle' => ['required', 'string', 'max:200'],
        ];
    }

    public function headings(): array
    {
        return [
            'customer_first_name',
            'customer_last_name',
            'customer_phone_number',
            'house_address',
            'guarantor_first_name',
            'guarantor_last_name',
            'guarantor_phone',
            'guarantor_address',
            'branch',
            'work_address',
            'nearest_landmark',
            'local_government',
            'city',
            'state',
            'product_name',
            'product_amount',
            'amount_paid',
            'amount_owed',
            'payment_duration',
        ];
    }

    public function columnFormats(): array
    {
        return [
        ];
    }

    public function endColumn(): string
    {
        return 'AT';
    }


    public function customerData($collection, $branches, $employee): array
    {
        return [
            'tenant_id' => $this->tenant->id,
            'branch_id' => $branches->where('name', $collection['branch'])->first()->id,
            'employee_id' => $employee->staff_id,
            'user_id' => $employee->id,
            'date_of_registration' => Carbon::now()->format('Y-m-d'),
            'first_name' => $collection['customer_first_name'],
            'last_name' => $collection['customer_surname'],
            'middle_name' => $collection['customer_middle_name'],
            'telephone' => $collection['customer_phone_number'],
            'gender' => $collection['customer_gender'],
            'occupation' => $collection['customer_occupation'],
            'employment_status' => $collection['customer_employment_status'],
            'area_address' => $collection['customer_home_address'],
            'cadd_addinfo' => $collection['customer_work_address'],
            'comp_area' => $collection['customer_work_address'] ?? 'N/A',
            'date_of_birth' => $collection['customer_date_of_birth'],
            'add_addinfo_description' => $collection['nearest_landmark'],
            'registration_channel' => 'collection_upload',
            'bvn' => $collection['customer_bvn'],
            'state' => $collection['state'],
            'city' => $collection['city'],
            'custom_customer_id' => $collection['customer_id'],
            'other_phone_numbers' => $collection['other_phone_numbers'],


            //next of kin
            'nextofkin_first_name' => $collection['next_of_kin_first_name'] ?? 'n/a',
            'nextofkin_last_name' => $collection['next_of_kin_surname'] ?? 'n/a',
            'nextofkin_middle_name' => $collection['next_of_kin_middle_name'],
            'nextofkin_telno' => $collection['next_of_kin_phone_number'] ?? 'n/a',
            'nextofkin_gender' => $collection['next_of_kin_gender'],
            'nextofkin_relationship' => $collection['next_of_kin_relationship'],


        ];
    }
    private function setNotNullableFields()
    {
        return [
            'registration_channel' => 'collection_upload',
            'on_boarded' => true,
            'add_street' => 'N/A',
            'employee_name' => 'altara',
            'add_nbstop' => 'N/A',
            'add_houseno' => 'N/A',
            'gender' => 'N/A',
            'date_of_birth' => 'N/A',
            'civil_status' => 'N/A',
            'type_of_home' => 'N/A',
            'no_of_rooms' => 'N/A',
            'duration_of_residence' => 0,
            'people_in_household' => 0,
            'number_of_work' => 0,
            'depend_on_you' => 0,
            'level_of_education' => 'N/A',
            'visit_hour_from' => 'N/A',
            'visit_hour_to' => 'N/A',
            'employment_status' => 'N/A',
            'name_of_company_or_business' => 'N/A',
            'cadd_nbstop' => 'N/A',
            'company_city' => 'N/A',
            'company_state' => 'N/A',
            'company_telno' => 'N/A',
            'days_of_work' => 'N/A',
            'comp_street_name' => 'N/A',
            'comp_house_no' => 'N/A',
            'comp_area' => 'N/A',
            'current_sal_or_business_income' => 'N/A',
            'cvisit_hour_from' => 'N/A',
            'cvisit_hour_to' => 'N/A',
            'nextofkin_first_name' => 'N/A',
            'nextofkin_middle_name'  => 'N/A',
            'nextofkin_last_name' => 'N/A',
            'nextofkin_telno' => 'N/A'
        ];
    }
    public function guarantorsData($collection, $customer_id, $employee): array
    {
        $guarantorsModelData = [];
        if ($collection['first_guarantor_first_name'] && $collection['first_guarantor_last_name'] && $collection['first_guarantor_phone']) {
            $guarantorsModelData[] = [
                'customer_id' => $customer_id,
                'created_by' => $employee->id,
                'first_name' => $collection['first_guarantor_first_name'],
                'last_name' => $collection['first_guarantor_last_name'],
                'occupation' => $collection['first_guarantor_occupation'],
                'home_address' => $collection['first_guarantor_home_address'],
                'work_address' => $collection['first_guarantor_work_address'],
                'gender' => $collection['first_guarantor_gender'],
                'phone_number' => $collection['first_guarantor_phone'],
            ];
        }

        if ($collection['second_guarantor_first_name'] && $collection['second_guarantor_last_name'] && $collection['second_guarantor_phone']) {
            $guarantorsModelData[] = [
                'customer_id' => $customer_id,
                'created_by' => $employee->id,
                'first_name' => $collection['second_guarantor_first_name'],
                'last_name' => $collection['second_guarantor_last_name'],
//                'middle_name' => $collection['second_guarantor_middle_name'],
                'occupation' => $collection['second_guarantor_occupation'],
                'home_address' => $collection['second_guarantor_home_address'],
                'work_address' => $collection['second_guarantor_work_address'],
                'gender' => $collection['second_guarantor_gender'],
                'phone_number' => $collection['second_guarantor_phone'],
            ];
        }
        return $guarantorsModelData;
    }


    public function orderData($collection, $orderType, $product, $businessType, $saleCategory, $customer_id, $repaymentDurations, $repaymentCycles, $downpaymentRate): array
    {
        // $businessType = BusinessType::query()->where('slug', 'ap_products')->first();
        $collectionRepaymentCycle = $collection['repayment_cycle'];
        if ($collectionRepaymentCycle == 'daily' || $collectionRepaymentCycle == 'weekly') {
            $repaymentCycle = $repaymentCycles->where('name', 'bi_monthly')->first();
        } else {
            $repaymentCycle = $repaymentCycles->where('name', $collectionRepaymentCycle)->first();
        }

        $collectionRepaymentDuration = $collection['payment_duration'];
        if ($collectionRepaymentDuration < 90) {
            $repaymentDuration = $repaymentDurations->where('value', 90)->first();
        } elseif ($collectionRepaymentDuration < 180) {
            $repaymentDuration = $repaymentDurations->where('value', 180)->first();
        } elseif ($collectionRepaymentDuration < 270) {
            $repaymentDuration = $repaymentDurations->where('value', 270)->first();
        } else {
            $repaymentDuration = $repaymentDurations->where('value', 360)->first();
        }

        return [
            "bnpl_vendor_product_id" => $product->id,
            'business_type_id' => $businessType->id,
            "customer_id" => $customer_id,
            "bank_id" => 1,
            "owner_id" => 1,
            "inventory_id" => 2,
            "payment_gateway_id" => 1,
            "payment_method_id" => 1,
            "order_type_id" => $orderType->id,
            "sales_category_id" => $saleCategory->id,
            "repayment_cycle_id" => $repaymentCycle->id,
            "repayment_duration_id" => $repaymentDuration->id,
            "repayment" => $collection['amount_owed'],
            "down_payment" => $collection['amount_paid'],
            "down_payment_rate_id" => $downpaymentRate->id,
            "financed_by" => $this->tenant->name,
            "product_price" => $collection['product_amount'],
            "fixed_repayment" => $collection['amortization'],
            "cost_price" => $product->retail,
            'custom_order_number' => $collection['loan_id'],
            "order_date" => Carbon::parse($collection['loan_date'])->format('Y-m-d'),
        ];
    }

    public function limit(): int
    {
        return 500;
    }

    public function chunkSize(): int
    {
        return 100;
    }
}
