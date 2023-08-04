<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Models\RaffleDrawCode;
use App\Repositories\RaffleDrawCodeRepository;
use Illuminate\Http\Request;

class RaffleDrawCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private $raffleDrawRepository;

    public function __construct(
        RaffleDrawCodeRepository $raffleDrawCodeRepository
    ) {
        $this->raffleDrawRepository = $raffleDrawCodeRepository;
    }
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
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validated = $this->validate($request, [
            'phone_number' => ['required', 'string', 'max:11', 'min:11'],
        ]);
        $unusedCode = RaffleDrawCode::where('phone_number', $validated['phone_number'])->where('order_id', null)->first();

        if ($unusedCode === null) {
            $code = Helper::generateRaffleDrawCode('raftck');
            $savedCode = $this->raffleDrawRepository->store(['phone_number' => $validated['phone_number'], 'code' => $code]);
            return $this->sendSuccess($savedCode->toArray(), 'Raffledraw code created successfully');
        }
        return $this->sendError("This number has a code that has not been used", 422, [], 422);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RaffleDrawCode  $raffleDrawCode
     * @return \Illuminate\Http\Response
     */
    public function show(RaffleDrawCode $raffleDrawCode)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RaffleDrawCode  $raffleDrawCode
     * @return \Illuminate\Http\Response
     */
    public function edit(RaffleDrawCode $raffleDrawCode)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RaffleDrawCode  $raffleDrawCode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RaffleDrawCode $raffleDrawCode)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RaffleDrawCode  $raffleDrawCode
     * @return \Illuminate\Http\Response
     */
    public function destroy(RaffleDrawCode $raffleDrawCode)
    {
        //
    }
}