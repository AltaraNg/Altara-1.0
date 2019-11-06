<?php

namespace App\Http\Controllers;

/*use App\Caution;
use App\User;*/
use App\{User, Caution};
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CautionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $cautions = Caution::with(['user' => function ($query) {
            return $query->select('id', 'full_name', 'staff_id');
        }, 'issuer' => function ($query) {
            return $query->select('id', 'full_name', 'staff_id');
        }])->paginate(10);

        return response()->json([
            'cautions' => $cautions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $users = User::select('id', 'full_name', 'staff_id')->get();
        return response()->json([
            'form' => Caution::form(),
            'users' => $users,
            'cautionsList' => Caution::cautions()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = $request->form;
        Caution::create($data);
        $users = User::select('id', 'full_name', 'staff_id')->get();
        return response()->json([
            'saved' => true,
            'form' => Caution::form(),
            'users' => $users,
            'cautionsList' => Caution::cautions(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Caution $caution
     * @return Response
     */
    public function show(Caution $caution)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Caution $caution
     * @return Response
     */
    public function edit(Caution $caution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Caution $caution
     * @return Response
     */
    public function update(Request $request, Caution $caution)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Caution $caution
     * @return Response
     */
    public function destroy(Caution $caution)
    {
        //
    }
}
