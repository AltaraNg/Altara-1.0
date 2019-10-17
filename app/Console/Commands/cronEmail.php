<?php

namespace App\Console\Commands;
use Mail;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class cronEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'report:day';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send Daily Report to Paul\'s mail ';

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
        $reports = DB::table('altara_pay_reports')
        ->join('branches', 'branches.id','altara_pay_reports.branch_id') 
        ->join('users', 'users.id', 'altara_pay_reports.user_id')
        ->select('branches.name', 'altara_pay_reports.date', 'users.staff_id', 'altara_pay_reports.interest', 'altara_pay_reports.check')
        ->where('altara_pay_reports.date','=', date('Y-m-d'))
        ->get();
        
        // return response()->json([
        //     'reports' => $reports
        // ]);
        $data = ['reports' => $reports];
        Mail::send('report', $data = $data , function ($mail) {
            $mail->to('admintech@altaracredit.com')
                ->from('poluyege@altaracredit.com', 'Altara Pay')
                ->subject('Today\'s Report');
        });
 
    $this->info('Daily Report sent successfully!');
        
    }
}
