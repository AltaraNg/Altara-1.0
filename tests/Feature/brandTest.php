<?php

namespace Tests\Feature;

use App\Brand;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class brandTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetOneBrand()
    {
        $id = 1;
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get(`/api/brand/$id`);
        $response->assertSuccessful();
    }
    public function testGetAllBrands(){
        $user = factory(User::class)->create();
        $brand = factory(Brand::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get(`/api/brand`);
        $response->assertSuccessful();
    }
    public function testCreateBrand(){
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $brand = [
            'name' => 'Yaml'
        ];
        $response = $this->actingAs($user, 'api')->json('POST', '/api/brand', $brand);
        $response->assertSuccessful();
        $response->assertJson([
            'message' => 'Brand Created!']);
    }
}
