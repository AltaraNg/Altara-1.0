<?php

namespace Tests\Feature;

use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $payload = [
            'staff_id' => 'AC/IT/2018/0001',
            'password' => 'clinsmann'
        ];

        $response = $this->json('POST', 'api/login', $payload)
            ->assertStatus(200)
            ->assertJsonStructure([
                'user_id',
                'auth',
                'role',
                'api_token',
                'user_name',
                'portal_access',
                'message'
            ]);

        dd(/*$this->token = */$response->json()['api_token']);
    }
}
