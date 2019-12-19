<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class BankTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetAllBanks()
    {

        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get('/api/banks');
        $response->assertSuccessful();
  
    }

    public function testCreateBank()
    {
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $bank  = [
        'name' => "Fidelity"
        ];
        $response = $this->actingAs($user, 'api')->post('/api/banks');
        $response->assertSuccessful();
    }
}
