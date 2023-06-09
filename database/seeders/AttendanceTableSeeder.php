<?php
namespace Database\Seeders;

use App\Models\Attendance;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttendanceTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
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
