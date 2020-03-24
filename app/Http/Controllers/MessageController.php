<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class MessageController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $isInProduction = App::environment() === 'production';
        if(!$isInProduction) {
            return response()->json(request('message'), 200);
        }
        $ch = curl_init();
        $receiver = urlencode(request('to'));
        $message = urlencode(request('message'));
        curl_setopt($ch, CURLOPT_URL, env('SMS_URL') . 'query?username=' . env('SMS_USERNAME') . '&password=' . env('SMS_PASSWORD') . '&to=' . $receiver . '&text=' . $message);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $data = curl_exec($ch);
        curl_close($ch);

        return response()->json($data);
    }


    public function store(Request $request)
    {
        if ($request['bulk']) {
            unset($request['bulk']);
            Message::insert($request['messages']);
            $ids = Message::orderBy('id', 'desc')->take(count($request['messages']))->pluck('id');
        } else {
            $request['user_id'] = auth('api')->user()->id;
            $ids = [Message::insertGetId($request->all())];
        }

        return response()->json([
            'sentAndLogged' => true,
            'ids' => $ids ?? null
        ]);
    }
}
