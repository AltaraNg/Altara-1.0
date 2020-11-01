<?php

namespace App\Services;

use Illuminate\Support\Facades\App;

/**
 *
 * @author Adeniyi
 */
class MessageService
{
    public function sendMessage($receiver, $message)
    {
        $isInProduction = App::environment() === 'production';
        if (!$isInProduction) {

            $num = rand(0, 1);
            if ($num > 0.5 ){
                return json_decode(json_encode($this->success()));
            }
            return json_decode(json_encode($this->error()));
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, env('SMS_URL') . 'query?username=' . env('SMS_USERNAME') . '&password=' . env('SMS_PASSWORD') . '&to=' . $receiver . '&text=' . $message);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $data = curl_exec($ch);
        curl_close($ch);

        return json_decode($data);
    }

    private function success() {

        return [
            'messages' => [
                0 => [
                "status" => [
                    "groupId" => 1,
                    "groupName" => "PENDING ",
                    "id"=> 7,
                    "name"=> "PENDING_ENROUTE",
                    "description" => "Message has been processed and sent to the next instance"
                    ]
                ]
            ]
        ];
    }

    private function error()
    {

        return [
            'messages' => [
                0 => [
                    "status" => [
                        "groupId" => 5,
                        "groupName" => "REJECTED",
                        "id"=> 52,
                        "name"=> "REJECTED_DESTINATION",
                        "description" => "Invalid destination address."
                    ]
                ]
            ]
        ];
    }
}
