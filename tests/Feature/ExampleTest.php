<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest2 extends TestCase
{
    public function testIfApplicationLoadsUp()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    private $API_TOKEN = null;
    private $HEADER = [];

    public function setUp()
    {
        parent::setUp();

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

        $this->API_TOKEN = $response->json()['api_token'];
        $this->HEADER = [];
        $this->HEADER['Accept'] = 'application/json';
        $this->HEADER['Authorization'] = 'Bearer ' . $this->API_TOKEN;
    }

    public function testLoginIsSuccessful()
    {
        $this->json('GET', '/api/bank', [], $this->HEADER)
            ->assertStatus(200);
    }

    public function testGetAllBanks()
    {
        $this->json('GET', '/api/bank', [], $this->HEADER)
            ->assertStatus(200);
    }
}
