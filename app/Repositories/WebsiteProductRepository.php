<?php


namespace App\Repositories;



use App\WebsiteProduct;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class WebsiteProductRepository extends Repository
{

    public function model()
    {
        return WebsiteProduct::class;
    }

    public function store(array $data)
    {
        $filename = 'website_product' . '/' . Str::slug($data['name']) . '-' . date('d-m-Y');
        $s3 = Storage::disk('s3');
        $s3->put($filename, file_get_contents($data['image']), 'public');

        unset($data['image']);

        $data['image_url'] = $filename;
        $product = $this->model->create($data);

        return $product;
    }

    public function update($model, $data)
    {
        if (isset($data['image'])) {
            $filename = 'website_product' . '/' . Str::slug($data['name']) . '-' . date('d-m-Y');
            $s3 = Storage::disk('s3');
            $s3->put($filename, file_get_contents($data['image']), 'public');
            unset($data['image']);

            $data['image_url'] = $filename;
        }

        $model->update($data);

        return $model;
    }
}
