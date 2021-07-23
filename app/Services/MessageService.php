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
            if ($num > 0.5) {
                return json_decode(json_encode($this->success($receiver)));
            }
            return json_decode(json_encode($this->error($receiver)));
        }
        $ch = curl_init();
        $receiver = urlencode($receiver);
        $message = urlencode($message);
        curl_setopt($ch, CURLOPT_URL, env('SMS_URL') . '?user=' . env('SMS_USERNAME') . '&password=' . env('SMS_PASSWORD') . '&sender=' . env('SENDER') . '&SMSText=' . $message . '&GSM=' . $receiver . '&type=longSMS');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $data = curl_exec($ch);
        curl_close($ch);


        $response = (int) preg_replace('/[^0-9]/', '', $data);
        $res_message = '';
        switch ($data) {
            case -1:
                $res_message = "Send_Error";
                break;

            case -2:
                $res_message = "Not_Enough Credits";
                break;

            case -3:
                $res_message = "Network_NotCovered";
                break;


            case -5:
                $res_message = "Invalid user or password";
                break;


            case -6:
                $res_message = "Missing destination address";
                break;


            case -7:
                $res_message = "Missing SMS Text";
                break;


            case -8:
                $res_message = "Missing sender name";
                break;


            case -9:
                $res_message = "Invalid phone number format";
                break;


            case -10:
                $res_message = "Missing Username";
                break;


            case -13:
                $res_message = "Invalid phone number";
                break;



            default:
                $res_message = "Successful, Message was sent";
                break;
        }

        if ($data > 0) {
            return json_decode(json_encode([
                'messages' => [
                    0 => [
                        "status" => [
                            "groupId" => 1,
                            "groupName" => "Success",
                            "id" => $response,
                            "name" => "PENDING_ENROUTE",
                            "description" => $res_message
                        ],
                        "to" => $receiver

                    ]
                ]
            ]));
        } else {
            return json_decode(json_encode([
                'messages' => [
                    0 => [
                        "status" => [
                            "groupId" => 1,
                            "groupName" => "Failed",
                            "id" => $response,
                            "name" => "PENDING_ENROUTE",
                            "description" => $res_message
                        ],
                        "to" => $receiver
                    ]
                ]
            ]));
        }
    }

    private function success($receiver)
    {

        return [
            'messages' => [
                0 => [
                    "status" => [
                        "groupId" => 1,
                        "groupName" => "PENDING ",
                        "id" => 7,
                        "name" => "PENDING_ENROUTE",
                        "description" => "Message has been processed and sent to the next instance",
                        "received" => $receiver
                    ]
                ]
            ]
        ];
    }

    private function error($receiver)
    {

        return [
            'messages' => [
                0 => [
                    "status" => [
                        "groupId" => 5,
                        "groupName" => "REJECTED",
                        "id" => 52,
                        "name" => "REJECTED_DESTINATION",
                        "description" => "Invalid destination address.",
                        "received" => $receiver
                    ]
                ]
            ]
        ];
    }
}
