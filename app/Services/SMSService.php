<?php

namespace App\Services;

use Illuminate\Support\Facades\App;

class SMSService
{
    public function create($receiver, $message)
    {
        $isInProduction = App::environment() === 'production';
        if (!$isInProduction) {
            return response()->json($message, 200);
        }
        $ch = curl_init();
        $receiver = urlencode($receiver);
        $message = urlencode($message);
        curl_setopt($ch, CURLOPT_URL, env('SMS_URL') . 'query?username=' . env('SMS_USERNAME') . '&password=' . env('SMS_PASSWORD') . '&to=' . $receiver . '&text=' . $message);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }
}
