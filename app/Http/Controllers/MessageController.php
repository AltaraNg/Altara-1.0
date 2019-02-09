<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
      //

   }

   /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function create()
   {
      $ch = curl_init();
      $receiver = urlencode(request('to'));
      $message = urlencode(request('message'));
      curl_setopt($ch, CURLOPT_URL, env('SMS_URL').'query?username='.env('SMS_USERNAME').'&password='.env('SMS_PASSWORD').'&to='.$receiver.'&text='.$message);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
      $data = curl_exec($ch);
      curl_close($ch);
      return response()->json($data);
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request $request
    * @return \Illuminate\Http\Response
    */
   public function store(Request $request)
   {
      /** we keep track of all the message sent to anybody through this portal.
       * This is a control measure */
      /** create the message instance*/
      $message = new Message($request->all());
      /** add other key value pair, like the current logged in user id(who sent the message)*/
      $message->contacts = implode(' ', $request['contacts']);
      $message->user_id = auth('api')->user()->id;
      /** save to the database*/
      $message->save();
      /** return the response flag(true) */
      return response()->json(['sentAndLogged' => true]);
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\Message $message
    * @return \Illuminate\Http\Response
    */
   public function show(Message $message)
   {
      //
   }

   /**
    * Show the form for editing the specified resource.
    *
    * @param  \App\Message $message
    * @return \Illuminate\Http\Response
    */
   public function edit(Message $message)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request $request
    * @param  \App\Message $message
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, Message $message)
   {
      //
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Message $message
    * @return \Illuminate\Http\Response
    */
   public function destroy(Message $message)
   {
      //
   }
}
