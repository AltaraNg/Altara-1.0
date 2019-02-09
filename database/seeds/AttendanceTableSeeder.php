<?php

use Carbon\Carbon;
use App\Attendance;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttendanceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('attendances')->delete();
        for($w = 1; $w < 30; $w++){
            Attendance::create([
                'user_id' => $w,
                'branch_id' => rand(2, 6),
                'date' => '2019-01-' . $w,
                'arrival_time' => Carbon::now()->toTimeString(),
                'departure_time' => Carbon::now()->addHours('6')->toTimeString(),
                'is_present' => 1,
                'remark' => 'attendance filled',
            ]);
        }
    }
}
