<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use App\Models\User;
use App\Repositories\AuthRepository;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CreateCollectionClientProfile extends Command
{
    private AuthRepository $authRepository;
    public function __construct(AuthRepository $authRepository)
    {
        parent::__construct();
        $this->authRepository = $authRepository;
    }

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:collection_client_profile';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create collection client profile';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $client_name = $this->ask('What is the Client Name ?');
        $tenantEmail = $this->ask('What is the Client Email ?');
        $tenantPassword = $this->ask('What is the Client Password ?');
        $tenant = Tenant::query()->firstOrCreate([
            'name' => $client_name,
            'slug' => Str::slug($client_name)
        ]);
        $this->info("Tenant created");
        if ($tenantEmail == null) {
            $this->error('Client email cannot be blank.');
        }
        if ($tenantPassword == null) {
            $tenantPassword = "password";
        }

        $user = User::query()->firstOrCreate([
            'email' => $tenantEmail,
            'tenant_id' => $tenant->id,
        ], [
            'staff_id' => 'TNT/' . Carbon::now()->year . '/' . $tenant->id,
            'full_name' => $tenant->name,
            'date_of_appointment' => Carbon::now()->format('Y-m-d'),
            'status' => 'inactive',
            'category' => 'contract',
            'phone_number' => 'TNT-' . $tenant->id,
            'highest_qualification' => 'unknown',
            'password' => Hash::make($tenantPassword ?? 'password'),
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

        $this->authRepository->sendClientEmailVerification($tenant, $user);

        $this->info("User created created");
        $this->info("Tenant ID: " . $tenant->id);
        $this->info("User Email: " . $tenantEmail);
        $this->info("User Password: " . $tenantPassword);


        return Command::SUCCESS;
    }
}
//docker-compose exec app php artisan create:collection_client_profile
// Taoforge Solutions
// taoforge@gmail.com
