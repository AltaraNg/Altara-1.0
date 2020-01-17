<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $model = Category::select('id','name', DB::raw('(CASE 
        WHEN categories.is_available = "0" THEN "Inactive"
        ELSE "Active"
        END)
        '))->searchPaginateAndOrder();
        $columns = Category::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    public function getCategories()
    {
        $categories = DB::table('categories')->where('is_available', '=', 1)->get();
        return response()->json([
            'categories'=> $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return response()->json([
            'form' => Category::form(),
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
        $request->validate(['name' => 'required|unique:categories']);
        $category = new Category($request->all());
        $category->name = ucwords(strtolower($request->name));
        $category->save();
        return response()->json([
            'saved' => true,
            'message' => 'Category Created!',
            'form' => Category::form(),
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'CategoryCreated'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return Response
     */
    public function edit($id)
    {
        $form = Category::findOrFail($id);
        return response()->json(['form' => $form]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $request->validate(['name' => 'required|unique:categories,name,' . $id]);
        Category::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
            'message' => 'Category Updated!',
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'CategoryUpdated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @return Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
