<?php

namespace App\Http\Controllers;

use App\Address;
use App\Branch;
use App\Customer;
use App\Document;
use App\PersonalGuarantor;
use App\ProcessingFee;
use App\State;
use App\User;
use App\Verification;
use App\WorkGuarantor;
use Illuminate\Http\Request;

class CustomerController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->except('');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Customer::select('id', 'first_name', 'last_name', 'employee_name', 'civil_status', 'telephone', 'date_of_registration')->searchPaginateAndOrder();
        $columns = Customer::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $states = State::all();
        $form = Customer::form();
        $branches = Branch::all();
        return response()->json([
            'form' => $form,
            'states' => $states,
            'branches' => $branches,
            'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id', 'role_id'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, ['telephone' => 'unique:customers']);
        $customer = new Customer($request->all());
        $customer->days_of_work = implode(' ', $request['days_of_work']);
        $customer->save();
        $this->createCustomerDocument($customer->id);
        $this->createCustomerVerification($customer->id);
        return response()->json([
            'registered' => true,
            'prepareForm' => $this->create()->original,
            'customer' => $this->fetchCustomer($customer->id)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = $this->fetchCustomer($id);
        if ($customer) {
            $d = $customer->document;
            $v = $customer->verification;
            if (!isset($v) || !isset($d)) {
                if (!isset($d)) $this->createCustomerDocument($customer->id);
                if (!isset($v)) $this->createCustomerVerification($customer->id);
                $customer = $this->fetchCustomer($id);
            }
            return response()->json([
                'success' => true,
                'customer' => $customer,
                'empty_address' => Address::form(),
                'empty_processing_fee' => ProcessingFee::form(),
                'empty_work_guarantor' => WorkGuarantor::form(),
                'empty_personal_guarantor' => PersonalGuarantor::form(),
                'user' => auth('api')->user()->only(['full_name', 'id', 'branch_id', 'role_id'])
            ]);
        }
        return response()->json([
            'customer' => '',
            'message' => 'The Customer ID did not match any customer in our records!'
        ], 422);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        unset($request['user']);
        unset($request['branch']);
        unset($request['address']);
        unset($request['document']);
        unset($request['verification']);
        unset($request['work_guarantor']);
        unset($request['processing_fee']);
        unset($request['personal_guarantor']);
        Customer::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
            'prepareForm' => $this->create()->original,
            'customer' => $this->show($id)->original['customer']
        ]);
    }


    public function fetchCustomer($id)
    {
        return Customer::with([
            'user' => function ($query) {
                $query->select('id', 'full_name', 'branch_id');
            },
            'branch',
            'verification',
            'address',
            'workGuarantor',
            'personalGuarantor',
            'document',
            'processingFee'
        ])->whereId($id)->first();
    }

    static function createCustomerVerification($customerId)
    {
        (new Verification([
            'id_card' => 0,
            'address' => 0,
            'passport' => 0,
            'work_guarantor' => 0,
            'personal_guarantor' => 0,
            'customer_id' => $customerId
        ]))->save();
    }

    static function createCustomerDocument($customerId)
    {
        (new Document([
            'id_card_url' => '',
            'passport_url' => '',
            'customer_id' => $customerId
        ]))->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /**
     * - Before running the correct query below
     * rerun the old one for the
     * staff with the id 046...
     * mis typed as 1c/c/046/2018 by taiwo.
     */
    /*public function runQuery()
    {
        $customers = Customer::where('user_id',0)->select(['id', 'user_id', 'employee_id', 'employee_name'])->get();
        for ($i = 0; $i < count($customers) ; $i++){
            ini_set('max_execution_time', 0);
            $user = User::where('staff_id',$customers[$i]->employee_id)->first();
            if($user){
                $customers[$i]->user_id = $user->id;
                $customers[$i]->employee_name = $user->full_name;
                $customers[$i]->save();
            }
        }
        return response()->json(['success' => true]);
    }*/

    /**The code below corrects
     * the id error in
     * format like 077
     */

    /*public function runQuery()
    {
        $customers = Customer::where('employee_id', '>', 0)->where('employee_id', '<', 200)->select(['id', 'user_id', 'employee_id', 'employee_name'])->get();
        foreach ($customers as $cus){
            ini_set('max_execution_time', 0);
            $new = User::where('staff_id', 'like', '%' . $cus->employee_id . '%')->whereIn('role_id', [17, 18])->select('id', 'staff_id', 'role_id', 'full_name')->first();

            if ($new) {
                $cus->user_id = $new->id;
                $cus->employee_name = $new->full_name;
                $cus->employee_id = $new->staff_id;
                $cus->save();
            }
        }
        return response()->json(['success' => true]);
    }*/


    /**- for mistakes of using phone
     * - number as staff id
     * - on customers table
     * - format: 081214154154           a:1     a[0]:       a[1]:       a[2]:                   DONE
     *
     * - format: AC/087 or AC/DSA       a:2     a[0]:AC                                         DONE
     *
     * - format: AC/C/                  a:3     a[0]:AC     a[1]:C      a[2]:null               DONE
     * - format: AC/C/024               a:3     a[0]:AC     a[1]:C      a[2]:num                DONE
     * - format: AL/024/18              a:3     a[0]:AL     a[1]:num    a[2]:year               DONE
     * - format: AC/082/18              a:3     a[0]:AC     a[1]:num    a[2]:year               DONE
     * - format: AC/C024/18             a:3     a[0]:AC     a[1]:num    a[2]:year               DONE
     * - format: AC c/C024/18           a:3     a[0]:AC c   a[1]:num    a[2]:year               DONE
     *
     *
     *
     * - format: AC/C/024/18/024        a:5     a[0]:AC     a[1]:C      a[0]:num                DONE
     * - format: AC/C/C/047/18          a:5     a[0]:       a[1]:       a[2]:                   DONE
     * - format: AC//C/047/18           a:5     a[0]:       a[1]:       a[2]:                   DONE
     * - format: AC/C//047/18           a:5     a[0]:       a[1]:       a[2]:                   DONE
     *
     *
     *
     * - format: AC/AC/024/18           a:4     a[0]:ac
     * - format: AC/C/24/18             a:4     a[0]:ac     a[1]:       a[2]:
     * - format: AC/C/047/2018          a:4     a[0]:ac     a[1]:       a[2]:
     * - format: AC /C/047/18           a:4     a[0]:ac     a[1]:       a[2]:
     * - format: AC C/C/047/18          a:4     a[0]:ac     a[1]:       a[2]:
     * - format: AC/C/0008/18           a:4     a[0]:ac     a[1]:       a[2]:
     * - format: AC/C/024 /18           a:4     a[0]:ac     a[1]:       a[2]:
     * - format: AC/C/024/16            a:4     a[0]:ac     a[1]:       a[2]:
     * - format: AC/C/024/              a:4     a[0]:ac     a[1]:       a[2]:
     *
     *
     * - format: AL/C/024/18            a:4     a[0]:       a[1]:       a[2]:               DONE
     * - format: ALL/C/024/18           a:4     a[0]:       a[1]:       a[2]:               DONE
     * - format: AV/C/024/18            a:4     a[0]:       a[1]:       a[2]:               DONE
     * - format: AT/C/024/18            a:4     a[0]:       a[1]:       a[2]:               DONE
     * - format: A/C/047/18             a:4     a[0]:a      a[1]:       a[2]:               DONE
     * - format: A/C/047/DSA            a:4     a[0]:       a[1]:       a[2]:               DONE
     */

    /*public function runQuery()
    {
        $dsa =[17,18];
        $allCus = [];
        $toBeFixed = [];
        $foundUser = [];
        ini_set('max_execution_time', 0);
        $customers = Customer::where('user_id', 0)->select(['id', 'user_id', 'employee_id', 'employee_name'])->orderBy('employee_id')->get();
        foreach ($customers as $cus) {
            if (strpos($cus->employee_id, '/') !== false) {//TODO: ID with '/';
                $arrEmployeeId = explode('/', $cus->employee_id);
                if (count($arrEmployeeId) === 2) {//TODO for AC/087, AC/DSA;
                    if (preg_match('/[A-Za-z]+/', $arrEmployeeId[1])) {//TODO: for AC/DSA;
                        $user = User::where('staff_id', 'like', '%' . $cus->employee_name . '%')->select('id', 'staff_id', 'full_name')->first();
                        if ($user) {
                            if ($user) $this->saveCustomer($cus, $user);
                        } else {
                            $user = User::where('full_name', 'like', '%' . $cus->employee_name . '%')->select('id', 'staff_id', 'full_name')->first();
                            if ($user) if ($user) $this->saveCustomer($cus, $user);
                        }
                    } else {//TODO: for AC/023; OK:
                        $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[1] . '%')->select('id', 'staff_id', 'full_name')->first();
                        if ($user) $this->saveCustomer($cus, $user);
                    }
                }
                else if(count($arrEmployeeId) === 3){
                    if(strtolower($arrEmployeeId[0]) == 'ac'){//42
                        if(strtolower($arrEmployeeId[1]) == 'c'){
                            if(strtolower($arrEmployeeId[2]) != ''){
                                if(strlen(strtolower($arrEmployeeId[2])) === 3){//ac/c/045
                                    $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[2] . '%')->whereIn('role_id',[17,18,21])->select('id', 'staff_id', 'full_name')->first();
                                    if($user) $this->saveCustomer($cus, $user);
                                }else{//ac/c/09394
                                    $sub = substr($arrEmployeeId[2], 0,3);
                                    $user = User::where('staff_id', 'like', '%' . $sub . '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                                    if ($user) $this->saveCustomer($cus, $user);
                                }
                            }else{//1
                                //TODO for AC/C/
                            }
                        }
                        else{//ac/c092/18  ac/0928/18
                            if($arrEmployeeId[2] == 18 && strlen((string)$arrEmployeeId[1]) == 3){//ac/058/18
                                $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[1] . '%')->whereIn('role_id',$dsa)->select('id', 'staff_id', 'full_name')->first();
                                if ($user) $this->saveCustomer($cus, $user);
                            }
                            else{
                                if(strtolower(((string)((str_split($arrEmployeeId[1]))[0]))) == 'c'){
                                    $user = User::where('staff_id', 'like', '%' . mb_substr($arrEmployeeId[1],1,3) . '%')->whereIn('role_id',$dsa)->select('id', 'staff_id', 'full_name')->first();
                                    if($user) $this->saveCustomer($cus, $user);
                                }
                            }
                        }
                    }else{//2
                        $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[1] . '%')->select('id', 'staff_id', 'full_name')->first();
                        if ($user) $this->saveCustomer($cus, $user);
                    }
                }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                else if(count($arrEmployeeId) === 4){
                    if(strtolower($arrEmployeeId[0]) == 'ac'){
                        if(strtolower($arrEmployeeId[1]) == 'c' && strlen($arrEmployeeId[2]) == 3 && $arrEmployeeId[3] == 18){

                        }else{//23
                            if(strlen($arrEmployeeId[2]) == 3 ){//16
                                if(strtolower(   (str_split($arrEmployeeId[2]))[0]  ) == 'o'){
                                    $p = str_replace('O','',$arrEmployeeId[2]);
                                    $user = User::where('staff_id', 'like', '%00' . $p . '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                                    if($user) $this->saveCustomer($cus, $user);
                                }
                                else{
                                    $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[2] . '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                                    if($user) $this->saveCustomer($cus, $user);
                                }
                            }else{//7
                                $u = str_replace(' ','',$arrEmployeeId[2]);

                                if(strlen($u) == 2){
                                    $user = User::where('staff_id', 'like', '%0'.$u. '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                                    if($user) $this->saveCustomer($cus, $user);
                                }else if (strlen($u) == 3){
                                    $user = User::where('staff_id', 'like', '%'.$u. '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                                    if($user) $this->saveCustomer($cus, $user);
                                }else if (strlen($u) == 4){
                                    $user = User::where('staff_id', 'like', '%'.substr($u,1,3). '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                                    if($user) $this->saveCustomer($cus, $user);
                                }
                            }
                        }
                    }
                    else{//67
                        if(strlen($arrEmployeeId[2]) == 3 ){//67
                            $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[2] . '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                            if($user) $this->saveCustomer($cus, $user);//42 successful
                        }
                    }
                }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                else if(count($arrEmployeeId) === 5){//5
                    if(strlen($arrEmployeeId[3]) == 3){//4
                        $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[3] . '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                        if($user) $this->saveCustomer($cus, $user);
                    }else{//1
                        $user = User::where('staff_id', 'like', '%' . $arrEmployeeId[2] . '%')->whereIn('role_id',[17,18])->select('id', 'staff_id', 'full_name')->first();
                        if($user) $this->saveCustomer($cus, $user);
                    }
                }
            } else {//TODO: ID without '/' OK for :08163145041;
                if (strlen($cus->employee_id) === 11 && !preg_match('/[A-Za-z]+/', $cus->employee_id)) {
                    $user = User::where('phone_number', 'like', '%' . $cus->employee_id . '%')->select('id', 'staff_id', 'full_name')->first();
                    if ($user) $this->saveCustomer($cus, $user);
                }
            }
        }
        return response()->json([
            'toBeFixed' => $toBeFixed,
            'foundUser' => $foundUser,
            'allCus' => $allCus,
        ]);
    }*/

//    public function runQuery()
//    {
//        $dsa = [17, 18, 19];
//        $user = '';
//        $allCus = [];
//        $foundUser = [];
//        ini_set('max_execution_time', 0);
//        $customers = Customer::where('user_id', 0)->select(['id', 'user_id', 'employee_id', 'employee_name'])->orderBy('employee_id')->get();
//
//        foreach ($customers as $cus) {
//
//            $nam = $cus->employee_id;
//            $nam2 = $cus->employee_name;
//
//            $c1 = preg_match("~[0-9]~", $nam) === 1;
//            $c2 = preg_match("~[0-9]~", $nam2) === 1;
//            $c3 = stripos($nam, '/') !== false;
//            $c4 = stripos($nam2, '/') !== false;
//            $c5 = stripos($nam, '-') !== false;
//            $c6 = stripos($nam2, '-') !== false;
//
//            //The code below works for where employee name and id are both names
//            /*if ($c1 || $c2 || $c3 || $c4 || $nam == '' || $nam2 == '') {}
//            else {
//
//                $name = explode(' ', strtolower($nam) . ' ' . strtolower($nam2));
//
//                if (count($name) === 2)
//                    $user = User::whereIn('role_id', $dsa)
//                        ->where('full_name', 'like', '%' . $name[0] . '%')
//                        ->where('full_name', 'like', '%' . $name[1] . '%')
//                        ->select('id', 'staff_id', 'full_name')
//                        ->first();
//
//                else if (count($name) === 3)
//                    $user = User::whereIn('role_id', $dsa)
//                        ->where('full_name', 'like', '%' . $name[0] . '%')
//                        ->where('full_name', 'like', '%' . $name[1] . '%')
//                        ->where('full_name', 'like', '%' . $name[2] . '%')
//                        ->select('id', 'staff_id', 'full_name')
//                        ->first();
//
//                if ($user) $this->saveCustomer($cus, $user);
//
//                if ($user) {$cus->user = $user; array_push($foundUser,$user);};
//                $cus->names = $name;
//                array_push($allCus, $cus);
//
//
//            }*/
//
//            //The code below works for where employee id is a name
//            /*if (($c1 || $c3 || $nam == '' || $c5)) {}
//            else {
//
//                $name = explode(' ', strtolower($nam));
//
//                if (count($name) === 1)
//                    $user = User::whereIn('role_id', $dsa)
//                        ->where('full_name', 'like', '%' . $name[0] . '%')
//                        ->select('id', 'staff_id', 'full_name')
//                        ->first();
//
//                else if (count($name) === 2)
//                    $user = User::whereIn('role_id', $dsa)
//                        ->where('full_name', 'like', '%' . $name[0] . '%')
//                        ->where('full_name', 'like', '%' . $name[1] . '%')
//                        ->select('id', 'staff_id', 'full_name')
//                        ->first();
//
//                else if (count($name) === 3)
//                    $user = User::whereIn('role_id', $dsa)
//                        ->where('full_name', 'like', '%' . $name[0] . '%')
//                        ->where('full_name', 'like', '%' . $name[1] . '%')
//                        ->where('full_name', 'like', '%' . $name[2] . '%')
//                        ->select('id', 'staff_id', 'full_name')
//                        ->first();
//
//                //if ($user) $this->saveCustomer($cus, $user);
//                if ($user) {$cus->user = $user; array_push($foundUser,$user);};
//                $cus->names = $name;
//                array_push($allCus, $cus);
//            }*/
//        }
//        return response()->json([
//            'foundUser' => $foundUser,
//            'allCus' => $allCus,
//        ]);
//    }

//    public function saveCustomer($customer, $user)
//    {
//        $customer->user_id = $user->id;
//        $customer->employee_id = $user->staff_id;
//        $customer->employee_name = $user->full_name;
//        $customer->save();
//    }
}