<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository extends Repository
{
    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Category::class;
    }
}
