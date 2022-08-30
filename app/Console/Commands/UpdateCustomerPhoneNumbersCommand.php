<?php

namespace App\Console\Commands;

use App\Customer;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UpdateCustomerPhoneNumbersCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:customers-phone ' .
        '{--telephone= : Pass specific phone number you want to update customers  telephone column with} ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update all customers telephone on staging environment by passing a telephone';

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
        $isInStaging = App::environment() === 'staging';
        if (!$isInStaging) {
            $data = $this->option();
            $validator = Validator::make($data, [
                'telephone' => 'required'
            ]);
            if ($validator->fails()) {
                $this->error('input arguments failed validation Errors: ');
                $errors = $validator->getMessageBag()->all();
                array_walk($errors, [$this, "error"]);
                exit();
            }
            DB::table('customers')->update(['telephone' => $data['telephone']]);
            $this->info('Customer\'s telephone updated successfully');
        } else {
            $this->error('You are not allowed to run this command on production environment');
        }
        return 0;
    }
}
