<?php

namespace App\Http\Controllers;

use App\Http\Filters\MessageFilter;
use App\Message;
use App\Repositories\MessageRepository;
use App\Services\MessageService;
use App\User;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $messageRepo;
    public function __construct(MessageRepository $messageRepository)
    {
        $this->messageRepo = $messageRepository;
    }

     public function index(MessageFilter $filter){
        $messages = $this->messageRepo->getAll($filter);

        return $this->sendSuccess($messages->toArray(), 'Messages retrieved successfully');
     }
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

    public function sendDsa(Request $request){
        $roles = $request['roles'];
        $staffIDs = [];
        foreach($roles as $role){
            $staffs = User::where('role_id', $role)->get()->toArray();
            $staffIDs = array_merge($staffIDs, $staffs);
        }
        // dd($staffIDs);
        $message = $request['message'];
        $response = [];

        foreach($staffIDs as $staff){
            //**Send message */
            $telephone = $staff['phone_number'];
            $telephone = '234'. substr($telephone, 1);
            $messageService = new MessageService();
            $result = $messageService->sendMessage($telephone, $message);

            // ** save to db
            $model = new Message();
            $model->user_id = auth('api')->user()->id;
            $model->message = $message;
            $model->receiver_id = $staff['id'];
            $model->type = 'staff';
            $model->contacts = $telephone;
            $model->save();
            array_push($response, $result);
        }
        return response()->json($response);

    }
}
