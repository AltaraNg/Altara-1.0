<?php

namespace Tests\Feature;

use Tests\TestCase;

class LoginTest extends TestCase
{
    public function test_LoginUser_CorrectCredentialsGiven_ShouldLogin()
    {
        $payload = ['staff_id' => 'AC/IT/2018/0001', 'password' => 'clinsmann'];
        $response = $this->json('POST', 'api/login', $payload)
            ->assertStatus(200)
            ->assertJsonStructure(['user_id', 'auth', 'role', 'api_token', 'user_name', 'portal_access', 'message']);
        $this->token = $response->json()['api_token'];
    }


    public function test_LoginUser_WrongPasswordGiven_ShouldThrowError()
    {
        $payload = ['staff_id' => 'AC/IT/2018/0001', 'password' => 'clinsmannError'];
        $this->json('POST', 'api/login', $payload)
            ->assertStatus(401)
            ->assertExactJson([
                'staff_id' => ['Provided staff id and password does not match'],
                'message' => 'Check your login details and try again!'
            ]);
    }

    public function test_LoginUser_NonExistingRecordGiven_ShouldThrowError()
    {
        $payload = ['staff_id' => 'AC/IT/2018/000122222', 'password' => 'clinsmann'];
        $this->json('POST', 'api/login', $payload)
            ->assertStatus(404)
            ->assertExactJson([
                'staff_id' => ['The combination does not exist in our record!'],
                'message' => 'Check your login details and try again!'
            ]);
    }
}
