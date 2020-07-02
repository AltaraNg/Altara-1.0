<?php

namespace App\Repositories;

use App\Brand;
use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;

class BrandRepository extends Repository
{
    use OrderObject, ExtractRequestObject;

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Brand::class;
    }
}
