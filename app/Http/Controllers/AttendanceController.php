<?php

namespace App\Http\Controllers;

use App\Attendance;
use App\Branch;
use App\User;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $attendances = User::where('branch_id', 2)
            ->select('id', 'full_name', 'staff_id')
            ->with(['attendances' => function ($query) {
                return $query->when(request(['month', 'year']), function ($query) {
                    $query->where('date', 'like', '%' . request('year') . '-' . request('month') . '%');
                });
            }])
            ->get();
        $branch = Branch::whereId(2)->select('id', 'state_id', 'name', 'description')->with(['state'])->get();
        return response()->json([
            'branch' => $branch,
            'attendances' => $attendances
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $form = Attendance::form();
        return response()->json([
            'form' => $form
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request('form');
        foreach( $data as $attendance){
            unset($attendance['user']);
            Attendance::create($attendance);
        }
        return response()->json([
            'saved' => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Attendance $attendance
     * @return \Illuminate\Http\Response
     */
    public function show(Attendance $attendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Attendance $attendance
     * @return \Illuminate\Http\Response
     */
    public function edit(Attendance $attendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Attendance $attendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attendance $attendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Attendance $attendance
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attendance $attendance)
    {
        //
    }
}
