<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class BranchTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetOneBranch()
    {
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get('/api/branch/1');
        $response->assertSuccessful();
    }
}
