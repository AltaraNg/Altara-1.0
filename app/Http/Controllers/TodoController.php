<?php

namespace App\Http\Controllers;

use App\Events\ProspectActivityEvent;
use App\Http\Filters\TodoFilter;
use App\Http\Requests\TodoRequest;
use App\ProspectActivity;
use App\Repositories\TodosRepository;
use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{

    private $todoRepo;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(TodosRepository $todoRepository)
    {
        $this->todoRepo = $todoRepository;
    }
    public function index(TodoFilter $filter)
    {
        //
        $todos = $this->todoRepo->getAll($filter);
        return $this->sendSuccess($todos->toArray(), 'Todos retrieved Successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TodoRequest $request)
    {
        $todo = $this->todoRepo->store($request->validated());
        event(new ProspectActivityEvent($todo));
        return $this->sendSuccess($todo->toArray(), 'Todo Successfully Created');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        //
        return $this->sendSuccess($todo->toArray(), 'Todo retrieved successfully');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Todo $todo, TodoRequest $request)
    {
        $todo = $this->todoRepo->update($todo, $request->validated());

        return $this->sendSuccess($todo->toArray(), 'Todo updated successfully');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
