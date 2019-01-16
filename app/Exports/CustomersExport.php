<?php

namespace App\Exports;

use App\Branch;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;

class CustomersExport implements FromCollection
{
   /**
    * @return \Illuminate\Support\Collection
    */

   /** initialize request*/
   private $request;

   /** initialize branches*/
   private $branches;

   public function __construct($request)
   {
      $this->request = $request;

      /** get list of all available branches and assign to branches*/
      $this->branches = Branch::select('id','name')->get();
   }

   public function collection()
   {
      $request = $this->request;

      $customers = DB::table('customers')

         ->select(DB::raw('employee_name, employee_id, branch_id, date_of_registration, COUNT(*) as customers_registered'))

         ->where('date_of_registration', '>=', $request->from)

         ->where('date_of_registration', '<=', $request->to)

         ->when($this->request->branch['id'] > 0, function ($query) use ($request) {

            return $query->where('branch_id', $request->branch['id']);

         })

         ->groupBy('employee_id')

         ->orderBy('branch_id')

         ->orderByDesc(DB::raw('COUNT(*)'))

         ->get()->toArray();

      /** convert the branch IDs to branch names*/
      $customers = $this->branchIdToBranchNames($customers);

      /** add a separator in between rows of different branches*/
      $customers = $this->addSeparator($customers);

      /** add the header showing what each column stands for notice this, is in the same other with the select(DB::raw) values*/
      array_unshift($customers, ['DSA Name', 'DSA ID', 'Branch', 'Date', 'Customer Registered']);

      /** return a collection of the customers. This is used to return a collection to be used by the excel builder*/
      return collect($customers);
   }

   public function addSeparator($customers)
   {
      /** initialize branch*/
      $branch = '';

      /** initialize index*/
      $index = 0;

      /** this is a customer array that serves as a separator it has no real values other than
       * hyphens the other is irrelevant just make sure the number of columns match
       * with the number of columns selected in the select(DB::raw) */
      $myArr = [

         '' => [
            'employee_name' => str_repeat("-", 20),

            'employee_id' => str_repeat("-", 20),

            'branch_id' => str_repeat("-", 20),

            'date_of_registration' => str_repeat("-", 20),

            'customers_registered' => str_repeat("-", 20)
         ]
      ];

      /** loop through each customers as customer*/
      foreach ($customers as $cus) {

         /** if the current customer branch is different from the previous customer branch
          that means the a new set of customers for another branch is currently being worked on*/
         if ($cus->branch_id !== $branch) {

            /** hence set the current branch to the new branch detected*/
            $branch = $cus->branch_id;

            /** and add a separator(a row) before that  new set of customer*/
            array_splice($customers, $index, 0, $myArr);

            /** increase the index by 2 instead of 1 because of a new row added*/
            $index += 2;

         } else $index++ /** if still on the same branch range add just 1*/;
      }

      /** return the customer list with a separator showing border for each branch*/
      return $customers;
   }

   public function group_by($key, $customers)
   {
      /** function not used*/
      $result = array();

      foreach ($customers as $val) {

         if (array_key_exists($key, $val)) {

            $result[$val->$key][] = $val;

         } else {

            $result[""][] = $val;
         }
      }
      return $result;
   }

   public function branchIdToBranchNames($customers)
   {
      /** loop through each customers as customer*/
      foreach ($customers as $customer) {

         /** get the customer branch*/
         $customerBranch = $customer->branch_id;

         /** loop through all branches*/
         foreach ($this->branches as $branch) {

            /** if the customer branch id is equal to the current branch id in the loop*/
            if ($customerBranch == $branch->id) {

               /** set the customer branch id to the name of the current branch in the loop*/
               $customer->branch_id = $branch->name;
            }
         }
      }
      return $customers;
   }
}
