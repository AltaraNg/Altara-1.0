<?php

namespace App\Http\Controllers;

use App\Caution;
use App\User;
use Illuminate\Http\Request;

class CautionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cautions = Caution::with(['user' => function ($query) {
            return $query->select('id', 'full_name', 'staff_id');
        }, 'issuer' => function ($query) {
            return $query->select('id', 'full_name', 'staff_id');
        }])->paginate(10);

        return response()->json([
            'cautions' => $cautions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = User::select('id', 'full_name', 'staff_id')->get();
        return response()->json([
            'form' => Caution::form(),
            'users' => $users,
            'cautionsList' => Caution::cautions()
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
        $data = $request->form;
        Caution::create($data);
        $users = User::select('id', 'full_name', 'staff_id')->get();
        return response()->json([
            'saved' => true,
            'form' => Caution::form(),
            'users' => $users,
            'cautionsList' => Caution::cautions(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Caution $caution
     * @return \Illuminate\Http\Response
     */
    public function show(Caution $caution)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Caution $caution
     * @return \Illuminate\Http\Response
     */
    public function edit(Caution $caution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Caution $caution
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Caution $caution)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Caution $caution
     * @return \Illuminate\Http\Response
     */
    public function destroy(Caution $caution)
    {
        //
    }
}
