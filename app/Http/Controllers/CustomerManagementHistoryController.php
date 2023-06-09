<?php

namespace App\Http\Controllers;

use App\Models\CustomerManagementHistory;
use Illuminate\Http\Request;
use Validator;

class CustomerManagementHistoryController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'customer_id' => 'required|exists:customers,id',
        ]);

        if ($validator->fails())
            return response()
                ->json($validator->messages(), 400);

        $customerOldManagementRecord =
            CustomerManagementHistory::where('customer_id', $request->customer_id)
                ->latest('created_at')
                ->get();

        if (count($customerOldManagementRecord) > 0) {
            if ($customerOldManagementRecord[0]->user_id == $request->user_id &&
                $customerOldManagementRecord[0]->customer_id == $request->customer_id) {
                return response()
                    ->json([
                        'message' => 'nothing to update.'
                    ], 409);
            }

            CustomerManagementHistory::where('customer_id', $request->customer_id)
                ->latest('created_at')
                ->first()
                ->update(['to' => date("Y-m-d h:i:sa")]);
        }

        $newManager = new CustomerManagementHistory();
        $newManager->fill($request->all());
        $newManager->from = date("Y-m-d h:i:sa");
        $newManager->save();

        return response()->json([
            'message' => 'successful'
        ], 201);
    }
}
