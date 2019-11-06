<?php

namespace App\Http\Controllers;

use App\{Attendance,Branch,User};
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $year = request('year');
        $month = request('month');
        $branch = request('branch');

        if (isset($year) && isset($month) && isset($branch)) {
            $attendances = User::where([
                ['branch_id', '=', $branch],
                ['date_of_exit', '=', null]
            ])
                ->select('id', 'full_name', 'staff_id')
                ->with(['attendances' => function ($query) {
                    return $query->when(request(['month', 'year']), function ($query) {
                        $query->where('date', 'like', '%' . request('year') . '-' . request('month') . '%');
                    });
                }])
                ->get();
            $branch = Branch::whereId($branch)
                ->select('id', 'state_id', 'name', 'description')
                ->with(['state'])
                ->get();

            return response()->json([
                'branch' => $branch,
                'attendances' => $attendances,
                'columns' => $this->tabulateData($month, $year)
            ]);
        } else {
            return response()->json([
                'message' => 'Please select all fields!'
            ], 400);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $qryBranch = request('branch');
        $branch = $qryBranch ? $qryBranch : auth('api')->user()->branch_id;

        $check = Attendance::where('branch_id', $branch)
            ->where('date', date('Y-m-d'))
            ->first();

        $form = Attendance::form($branch);

        return response()->json([
            'form' => $form,
            'today' => Carbon::now('+1')->addHour('1')->toFormattedDateString(),
            'submittedToday' => $check ? true : false,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = request('form');

        $attendance = Attendance::where('branch_id', $data[0]['branch_id'])
            ->where('date', $data[0]['date'])
            ->get();

        if (!count($attendance)) {
            foreach ($data as $attendance) {
                unset($attendance['user']);
                Attendance::create($attendance);
            }
            return response()->json([
                'saved' => true,
                'employee_id' => auth('api')->user()->employee_id
            ]);
        } else {
            return response()->json([
                'message' => 'Attendance for ' . $data[0]['date'] . ' has already been created!'
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Attendance $attendance
     * @return Response
     */
    public function show(Attendance $attendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Attendance $attendance
     * @return Response
     */
    public function edit(Attendance $attendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Attendance $attendance
     * @return Response
     */
    public function update(Request $request, Attendance $attendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Attendance $attendance
     * @return Response
     */
    public function destroy(Attendance $attendance)
    {
        //
    }

    public function tabulateData($month, $year)
    {
        $date = Carbon::parse($year . '-' . $month . '-01');
        $days = $date->daysInMonth;
        $monthString = $date->format('F');
        $daysString = [];
        for ($i = 1; $i < $days + 1; $i++) {
            $d = Carbon::parse($year . '-' . $month . '-' . $i);
            $daysString[$i] = [
                'dayString' => str_limit($d->format('l'), '3', ''),
                'date' => $i,
                'month' => str_limit($monthString, '3', ''),
                'fullDate' => Carbon::parse($i . '-' . $month . '-' . $year)->toDateString()
            ];
        }
        return $daysString;
    }
}
