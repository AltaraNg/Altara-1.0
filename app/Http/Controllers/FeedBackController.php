<?php

namespace App\Http\Controllers;

use App\Feedback;
use App\Http\Filters\FeedBackFilter;
use App\Http\Requests\FeedbackRequest;
use App\Repositories\FeedbackRepository;

class FeedBackController extends Controller
{

    private $feedbackRepo;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct(FeedbackRepository $feedbackRepository)
    {
        $this->feedbackRepo = $feedbackRepository;
    }

    public function index(FeedBackFilter $filter)
    {
        //
        $feedback = $this->feedbackRepo->getAll($filter);
        return $this->sendSuccess($feedback->toArray(), 'Feedbacks retrieved Successfully');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FeedbackRequest $request)
    {
        $feedback = $this->feedbackRepo->store($request->validated());
        $newFeed = Feedback::findOrFail($feedback->id)->toArray();
        return $this->sendSuccess($newFeed, 'Feedback Successfully Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Feedback  $feedBack
     * @return \Illuminate\Http\Response
     */
    public function show(Feedback $feedback)
    {
        //
        return $this->sendSuccess($feedback->toArray(), 'feedback retrieved successfully');

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Feedback  $feedBack
     * @return \Illuminate\Http\Response
     */
    public function update(FeedbackRequest $request, Feedback $feedback)
    {
        //
        $feedback = $this->feedbackRepo->update($feedback, $request->validated());

        return $this->sendSuccess($feedback->toArray(), 'feedback updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Feedback  $feedBack
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feedback $feedBack)
    {
        //
    }
}
