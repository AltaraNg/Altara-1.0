<?php

namespace App\Imports;

use App\Brand;
use App\Category;
use App\Product;
use App\ProductType;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductsImport implements ToCollection, WithHeadingRow
{
    // private function process($row)
    // {
    //     $data = [];
    //     $data['brand_id'] = $this->getId(Brand::class, $row['brand']);
    //     $data['category_id'] = $this->getId(Category::class, $row['product_type']);

    //     return $data;
    // }

    // private function getId($model, $value)
    // {
    //     if ($brand = $model::where('name', 'like', '%' . $value . '%')->first()){
    //         return $brand->id;
    //     }
    //     $brand = $model::create(['name' => $value]);
    //     return $brand->id;
    // }

    /**
     * @inheritDoc
     */
    public function collection(Collection $collection)
    {
        $brand = Brand::first()->id;
        $category = Category::first()->id;
        $type = ProductType::first()->id;


        foreach ($collection as $row) {
            Product::updateOrCreate([
                'name' => $row['product_name'],
            ], [
                'brand_id' => $brand,
                'category_id' => $category,
                'product_type_id' => $type,
                'feature' => $row['feature'] ?: '',
                'retail_price' => $row['supplier_price'] ?: 0,
                'user_id' => auth()->user()->id
            ]);
        }
    }
}
