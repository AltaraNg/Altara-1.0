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
    public function testGetAllSuppliers()
    {
        $user = factory(User::class)->create();
        $response  = $this->actingAs($user)->get('/api/branches');
        $response->assertStatus(200)
        ->assertJsonCount(2);

    }
}
