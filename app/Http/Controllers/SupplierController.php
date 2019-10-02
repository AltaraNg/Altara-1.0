<?php

namespace App\Http\Controllers;

use App\Bank;
use App\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Supplier::select('id', 'sku', 'name', 'phone_number', 'email', 'contact_person_name', 'status', 'date_of_reg')
            ->searchPaginateAndOrder();
        $columns = Supplier::$columns;
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
        $form = Supplier::form();
        return response()->json([
            'form' => $form,
            'banks' => $banks,
        ]);
    }
    public function getSuppliers(){
        $suppliers = Supplier::all();
        return response()->json([
            'suppliers'=> $suppliers
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
        $request->validate([
            'name' => 'required|unique:suppliers',
            'email' => 'required|unique:suppliers',
            'bank_account_no' => 'required|unique:suppliers',
            'phone_number' => 'required|unique:suppliers',
        ]);
        $user = auth('api')->user();
        $request->user_id = $user->id;



        $supplier = new Supplier($request->all());

        $supplier->name =  ucwords(strtolower($request->name));
        $supplier->bank_account_name = ucwords(strtolower($request->bank_account_name));
        $supplier->address =  ucfirst(strtolower($request->address));




        $supplier->save();

        return response()->json([
            'saved' => true,
            'message' => 'Supplier Created!',
            'form' => Supplier::form(),
            'staff_id' => $user->staff_id,
            'log' => 'SupplierCreated'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Supplier $suppliers
     * @return \Illuminate\Http\Response
     */
    public function show(Supplier $suppliers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $banks = Bank::all();
        $form = Supplier::findOrFail($id);
        return response()->json([
            'form' => $form,
            'banks' => $banks,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|unique:suppliers,name,' . $id,
            'email' => 'required|unique:suppliers,name,' . $id,
            'bank_account_no' => 'required|unique:suppliers,name,' . $id,
            'phone_number' => 'required|unique:suppliers,name,' . $id,
        ]);



        $supplier = Supplier::find($id);
        $supplier->name =  ucwords(strtolower($request->name));
        $supplier->bank_account_name = ucwords(strtolower($request->bank_account_name));
        $supplier->address =  ucfirst(strtolower($request->address));
        $supplier->email = $request->email;
        $supplier->sku = $request->sku;
        $supplier->date_of_reg = $request->date_of_reg;
        $supplier->status = $request->status;
        $supplier->contact_person_name = $request->contact_person_name;
        $supplier->bank_name = $request->bank_name;
        $supplier->bank_account_no = $request->bank_account_no;
        $supplier->phone_number = $request->phone_number;
        $supplier->user_id = $request->user_id;

        $supplier->save();




        return response()->json([
            'updated' => true,
            'message' => 'Supplier Updated!',
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'SupplierUpdated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Supplier $suppliers
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $suppliers)
    {
        //
    }
}
