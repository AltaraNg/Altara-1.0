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
    private function process($row)
    {
        $data = [];
        $data['brand_id'] = $this->getId(Brand::class, $row['brand']);
        $data['category_id'] = $this->getId(Category::class, $row['product_type']);

        return $data;
    }

    private function getId($model, $value)
    {
        if ($brand = $model::where('name', 'like', '%' . $value . '%')->first()){
            return $brand->id;
        }
        $brand = $model::create(['name' => $value]);
        return $brand->id;
    }

    /**
     * @inheritDoc
     */
    public function collection(Collection $collection)
    {
        foreach ($collection as $row) {

            $data = $this->process($row);
            Product::updateOrCreate([
                'name' => $row['product_name'],
            ], [
                'brand_id' => $data['brand_id'],
                'category_id' => $data['category_id'],
                'product_type_id' => ProductType::first()->id,
                'feature' => $row['feature'] ?: '',
                'retail_price' => $row['supplier_price'] ?: 0,
                'user_id' => auth()->user()->id
            ]);
        }
    }
}
