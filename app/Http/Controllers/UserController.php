<?php

namespace App\Http\Controllers;

use App\Branch;
use App\Counter;
use App\EmployeeCategory;
use App\Role;
use App\User;
use DateTime;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Validator;

class UserController extends Controller
{
    public function index()
    {
        /** gets list of users(paginated), searchPaginateAndOrder is a custom
         * query scope used by all the models that use data viewer trait
         * in this application */
        $model = User::select('id', 'full_name', 'staff_id', 'phone_number', 'portal_access', 'email', 'date_of_appointment')
            ->searchPaginateAndOrder();
        /** the columns used to render the data viewer for users*/
        $columns = User::$columns;
        /** return the columns and the paginated list*/
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    public function create()
    {
        /** fetch the user object empty form*/
        $form = User::form();
        /** fetch the available roles*/
        $roles = Role::orderBy('name', 'asc')->get();
        /** fetch the branches*/
        $branches = Branch::orderBy('name', 'asc')->get();
        /** fetch the employee categories */
        $categories = EmployeeCategory::orderBy('name', 'asc')->get();
        /** return values*/
        return response()->json([
            'form' => $form,
            'roles' => $roles,
            'branches' => $branches,
            'categories' => $categories
        ]);
    }

    public function getListForTypeahead($type)
    {
        $users = null;
        switch ($type) {
            case 'type_ahead':
                $users = User::where('date_of_exit', '=', '')
                    ->orWhereNull('date_of_exit')
                    ->whereIn('role_id', [15, 17, 18])
                    ->select('id', 'full_name')
                    ->orderBy('full_name')
                    ->get();
                break;
        }
        return response()->json([
            'users' => $users
        ]);
    }

    public function store(Request $request)
    {
        $this->extendValidator();

        /** perform other validations*/
        $request->validate([
            'email' => 'unique:users',
            'phone_number' => 'unique:users',
            'date_of_birth' => 'older_than:18',
            'guarantor_phone_no' => 'unique:users',
            'guarantor_phone_no_2' => 'unique:users'
        ]);

        if ($request->hasFile('cv') && $request->file('cv')->isValid()) {
            $request->validate([
                'cv' => 'mimes:pdf|max:10000'
            ]);
            $image = $request->file('cv');
            $filename = 'cv' . '/' . str_slug($request->full_name) . '-' . date('d-m-Y');
            $s3 = Storage::disk('s3');
            $s3->put($filename, file_get_contents($image), 'public');
            $request['cv_url'] = $filename;
        }

        $user = new User;
        $user->fill($request->except(['cv', 'transfer']));
        $gen_password = str_random(8);
        /** encrypt the password*/
        $user->password = bcrypt($gen_password);
        /** generate a staff ID for the user*/
        $user->staff_id = $this->generateStaffID($request->category, $request->role);
        /** add the id of the hr that created the staff*/
        $user->hr_id = auth('api')->user()->id;
        /** save the user instance to db*/
        $user->save();
        /** fetch the user object empty form*/
        $form = User::form();
        /** return values including password etc*/
        return response()->json([
            'form' => $form,
            'success' => true,
            'password' => $gen_password,
            'staff_id' => $user->staff_id
        ]);
    }

    public function edit($id)
    {
        /** fetch the user */
        $user = User::find($id);
        $user['cv'] = '';
        /** fetch employee category*/
        $categories = EmployeeCategory::orderBy('name', 'asc')->get();
        /** fetch roles*/
        $roles = Role::select('name', 'id')->orderBy('name', 'asc')->get();
        /** fetch branches*/
        $branches = Branch::select('name', 'id')->orderBy('name', 'asc')->get();
        /** return values including the user*/
        return response()->json([
            'form' => $user,
            'roles' => $roles,
            'branches' => $branches,
            'categories' => $categories
        ]);
    }

    public function show($id)
    {
        /** fetching currently logged in user with the branch(only id and name) and return it*/
        return response()->json([
            'user' => User::with(['branch' => function ($query) {
                $query->select('id', 'name');
            }])->whereId($id)->first()
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->extendValidator();
        $this->validate($request, [
            'email' => 'unique:users,email,' . $id,
            'phone_number' => 'unique:users,phone_number,' . $id,
            'date_of_birth' => 'older_than:18',
            'guarantor_phone_no' => 'unique:users,guarantor_phone_no,' . $id,
            'guarantor_phone_no_2' => 'unique:users,guarantor_phone_no_2,' . $id
        ]);

        /** fetch the user*/
        $user = User::find($id);
        $newId = $user->staff_id;
        $transfer = (isset($request['category'])) ? ($request['category'] !== $user->category) : null;
        if ($transfer) $newId = $this->generateStaffID($request->category, $request->role_id);

        /** check is the request tries to grant access(ie portal_access == 1) to the user,
         * if the user has already exited the firm, the
         * portal access cannot be granted */
        if ($request->portal_access == 1 && isset($user->date_of_exit)) {
            return response()->json(['message' => 'Staff has already been exited and cannot be granted access!'], 422);
        }

        /** at this point the user must have portal access and have not exited the firm
         * if the request has date of exit set den set portal access
         * to 0 and clear his/her api_token from the db*/
        if (isset($user->date_of_exit) || isset($request->date_of_exit)) {
            $request['portal_access'] = 0;
            $request->request->add(['api_token' => null]);
        }

        /** update the user and save in db*/
        unset($request['transfer']);
        $user->update($request->except('cv'));
        $user->update(['staff_id' => $newId]);

        return response()->json([
            'updated' => true,
            'message' => $transfer ? "Employee Detail's and Transfer Successful! New ID is " . $newId : "Employee detail's updated successful!",
            'staff_id' => $transfer ? $newId : null,
            'transfer' => $transfer,
        ]);
    }

    public function uploadCV(Request $request, $id)
    {
        $user = User::find($id);
        $request->validate([
            'cv' => 'mimes:pdf|max:10000'
        ]);
        $image = $request->file('cv');
        $filename = 'cv' . '/' . str_slug($user->full_name) . '-' . date('d-m-Y');
        $s3 = Storage::disk('s3');
        $s3->put($filename, file_get_contents($image), 'public');
        $user->update(['cv_url' => $filename]);
        return response()->json(['cv_saved' => true]);
    }

    public function getBranchUsers()
    {
        $ITDeptAndDSALead = [1, 2, 8, 9, 15];
        //this number come from the corresponding roles that we want to grant access to ALl dsa list.
        $loggedInUserRole = auth('api')->user()->role_id;
        $DSAs = User::whereIn('role_id', [17, 18])
            ->whereNull('date_of_exit')
            ->when(!in_array($loggedInUserRole, $ITDeptAndDSALead), function ($query) {
                return $query->where('branch_id', auth('api')->user()->branch_id);
            })
            ->select('id', 'staff_id', 'full_name', 'branch_id')
            ->get();
        return response()->json([
            'DSAs' => $DSAs,
        ]);
    }

    public function generateStaffID($category, $role)
    {
        $driver_role = [24, 25];
        $lastID = Counter::where('name', in_array(intval($role), $driver_role) ? 'last_driver_id' : 'last_' . $category . '_id')->first();
        $lastIDVal = $lastID->value;

        $num = '';
        $prefix = '';
        $nextNum = '';
        if (in_array(intval($role), [24, 25])) {
            $prefix = 'DD/';
            $nextNum = explode('/', $lastIDVal)[1];
        } else {
            if ($category === 'contract') {
                $prefix = 'AC/C/';
                $nextNum = explode('/', $lastIDVal)[2];
            }
            if ($category === 'permanent') {
                $prefix = 'ACL/';
                $nextNum = explode('/', $lastIDVal)[1];
            }
            if ($category === 'freelance') {
                $prefix = 'AC/F/';
                $nextNum = explode('/', $lastIDVal)[2];
            }
        }

        $nextNum = intval($nextNum) + 1;
        if (strlen((string)$nextNum) === 1) $num = '00' . $nextNum;
        else if (strlen((string)$nextNum) === 2) $num = '0' . $nextNum;
        else if (strlen((string)$nextNum) >= 3) $num = $nextNum;
        $id = (in_array(intval($role), $driver_role)) ? $prefix . $num : $prefix . $num . '/' . date("y");

        $lastID->update(['value' => $id]);
        return $id;
    }

    private function extendValidator()
    {
        Validator::extend('older_than', function ($attribute, $value, $parameters) {
            /** This is a custom made age validator. Staff must be more than 18 years*/
            $minAge = (!empty($parameters)) ? (int)$parameters[0] : 18;
            return (new DateTime)->diff(new DateTime($value))->y >= $minAge;
        });
    }
}
