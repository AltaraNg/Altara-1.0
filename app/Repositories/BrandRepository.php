<?php

namespace App\Repositories;

use App\Brand;

class BrandRepository extends Repository
{
    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Brand::class;
    }
}
