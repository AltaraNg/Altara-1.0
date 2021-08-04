<?php

namespace App\Http\Controllers;
/*
use App\Bank;
use App\Branch;*/
use App\{Bank,Branch};
use Illuminate\Http\Request;

class BranchController extends Controller
{
   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
      /** gets list of branches(paginated), searchPaginateAndOrder is a custom
       * query scope used by all the models that use data viewer trait
       * in this application */
      $model = Branch::select('id', 'name', 'state_id','category', 'phone_english', 'phone_yoruba', 'email', 'description', 'status')
         ->searchPaginateAndOrder();
      /** the columns used to render the data viewer for branches*/
      $columns = Branch::$columns;
      /** return the model(the paginated branches and the
       * columns that will be used to render it) */
      return response()->json([
         'model' => $model,
         'columns' => $columns
      ]);
   }

   public function allBranches()
   {
      /** fetch list of all branches*/
      $branches = Branch::all();
      /** return list of all branches*/
      return response()->json(['branches' => $branches]);
   }

   /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function create()
   {
      /** fetch list of all banks*/
      $banks = Bank::all();
      /** fetch the branch object form that will
       * be used to create a new branch*/
      $form = Branch::form();
      /** return the form, states, and banks*/
      return response()->json([
         'form' => $form,
         'banks' => $banks,
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
      /** validate the input from the branch form*/
      $request->validate([
         'name' => 'unique:branches',
         'email' => 'unique:branches',
         'account_number' => 'unique:branches'
      ]);
      /** create new instance of branch*/
      $branch = new Branch($request->all());
      /** save to database */
      $branch->save();
      /** return created flag set to true and a fresh branch creation form*/
      return response()->json([
         'created' => true
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
      /** fetch branch with id of $id*/
      $branch = Branch::whereId($id)->first();
      /** return the branch*/
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
      $banks = Bank::all();
      $form = Branch::findOrFail($id);
      return response()->json([
         'form' => $form,
         'banks' => $banks,
      ]);
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
      /** validate the inputs from the branch update form*/
      $this->validate($request, [
         'name' => 'unique:branches,name,' . $id,
         'email' => 'unique:branches,email,' . $id,
         'account_number' => 'unique:branches,account_number,' . $id
      ]);
      /** update branch*/
      Branch::whereId($id)->update($request->all());
      /** return and updated flag*/
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
