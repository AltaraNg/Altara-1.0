<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class ProductTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetOneProduct()
    {
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get('/api/products/1');
        $response->assertSuccessful();
    }
}
