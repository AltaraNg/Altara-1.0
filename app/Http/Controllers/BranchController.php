<?php

namespace App\Http\Controllers;

use App\Bank;
use App\Branch;
use App\State;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Branch::select('id', 'name', 'state_id', 'phone_english', 'phone_yoruba', 'email', 'description', 'status')->searchPaginateAndOrder();
        $columns = Branch::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $banks = Bank::all();
        $form = Branch::form();
        $states = State::all();
        return response()->json([
            'form' => $form,
            'banks' => $banks,
            'states' => $states
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
        $this->validate($request, [
            'name' => 'unique:branches',
            'email' => 'unique:branches',
            'account_number' => 'unique:branches'
        ]);
        $user = new Branch($request->all());
        $user->save();
        return response()
            ->json([
                'created' => true,
                'prepareForm' => $this->create()->original
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $branch = Branch::whereId($id)->first();
        return response()->json(['branch' => $branch]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'unique:branches,name,' . $id,
            'email' => 'unique:branches,email,' . $id,
            'account_number' => 'unique:branches,account_number,' . $id
        ]);
        Branch::whereId($id)->update($request->all());
        return response()->json(['updated' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
