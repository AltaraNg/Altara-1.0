<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Filters\CategoryFilter;
use App\Http\Requests\CategoryRequest;
use App\Repositories\CategoryRepository;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    private $catRepo;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->catRepo = $categoryRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(CategoryFilter $filter)
    {
        $cats = $this->catRepo->getAll($filter);

        return $this->sendSuccess($cats->toArray(), 'Categories retrieved successfully');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryRequest $request
     * @return Response
     */
    public function store(CategoryRequest $request)
    {
        $cat = $this->catRepo->store($request->validated());

        return $this->sendSuccess($cat->toArray(), 'Category Successfully Created');
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return Response
     */
    public function show(Category $category)
    {
        return $this->sendSuccess($category->toArray(), 'Category retrieved successfully');
    }

    /**
     * @param Category $category
     * @param CategoryRequest $request
     *
     * @return Response
     */
    public function update(Category $category, CategoryRequest $request)
    {
        $category = $this->catRepo->update($category, $request->validated());

        return $this->sendSuccess($category->toArray(), 'Category updated successfully');
    }

    /**
     * @param Category $category
     * @return Response
     * @throws \Exception
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return $this->sendSuccess([],'Category deleted successfully');
    }
}
