<?php

namespace App\Http\Controllers;

use App\Message;
use App\Services\MessageService;
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
        $message = request('message');
        $receiver = request('to');
        $messageService = new MessageService();
        $result = $messageService->sendMessage($receiver, $message);

        return response()->json($result);
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
