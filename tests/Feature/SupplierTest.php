<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Supplier;
use App\User;

class SupplierTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void

     */


    // its paginated so makes testing difficult

    // public function testGetAllSuppliers()
    // {
    //     $model = Supplier::select('id', 'sku', 'name', 'phone_number', 'email', 'contact_person_name', 'status', 'date_of_reg')
    //         ->searchPaginateAndOrder();
    //     $columns = Supplier::$columns;

    //     $user = factory(User::class)->make();
    //     $user->api_token = str_random(60);
    //     $response = $this->actingAs($user, 'api')->get('/api/supplier');
    //     $response->assertSuccessful();
    // }

    public function testGetOneSupplier()
    {
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get('/api/supplier/1');
        $response->assertSuccessful();
    }

    public function testCreateSupplier()
    {

        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $supplier_data = [

            'user_id' => $user->user_id,

            'name' =>'Thomas Noma',
            'email' => 'gadm@lambo.com',
            'bank_account_no'=>'45333252',
            'phone_number'=>'3252525',
            'address' => 'Temisure',
            'date_of_reg' => 'any',
            'contact_person_name' => 'hufhvud',
            'bank_name' => 'ggtwrv',
            'bank_account_name' => '36262'
        ];


        $response = $this->actingAs($user, 'api')->json('POST', '/api/suppliers', $supplier_data);
        $response->assertSuccessful();
    }

}
