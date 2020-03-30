<?php


namespace App\Services\Logistics;
use App\Category;

/**
 * @property Category categoryModel
 */
class CategoryService
{
    public function __construct(Category $categoryModel)
    {
        $this->categoryModel = $categoryModel;
    }

    /**
     * @return Category[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getCategories(){
        return $this->categoryModel::all();
    }

    /**
     * @return mixed
     */
    public function getAvailableCategories(){
        $query = $this->categoryModel::where('is_available', '1')->get();
        return $query;
    }

}
