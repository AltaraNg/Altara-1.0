<?php


namespace App\Helper;


trait AutoCompleteSearchTrait
{
    public static function scopeAutocompleteSearch($query, $request)
    {
        $searchQueries = [];
        $searchColumns = array_keys($request->searchableFields);
        $searchValues = array_values($request->searchableFields);
        $pageSize = $request->pageSize ? $request->pageSize : 20;

        for ($i = 0; $i < count($searchColumns); $i++) {
            array_push($searchQueries, [$searchColumns[$i], 'LIKE', '%' . $searchValues[$i] . '%']);
        }

        return $query
            ->where([$searchQueries[0]])
            ->when(isset($searchQueries[1]), function ($query) use ($searchQueries) {
                for ($i = 1; $i < count($searchQueries); $i++) {
                    isset($searchQueries[$i]) && $query->orWhere([$searchQueries[$i]]);
                }
            })
            ->select(self::getSelectColumns($searchColumns))->take($pageSize);
    }

    private static function getSelectColumns($searchColumns)
    {
        /**
         * Searching with phone numbers displays : phone_no & full name
         * Searching with customer id displays : customer id & full name
         * Searching with full name displays : full name
         *
         * */
        $columns = ['id', 'first_name', 'last_name'];
        in_array('telephone', $searchColumns) && array_push($columns, 'telephone');
        in_array('middle_name', $searchColumns) && array_push($columns, 'middle_name');
        return $columns;
    }
}

//
//namespace App\Helper;
//
//
//trait AutoCompleteSearchTrait
//{
//    public static function scopeAutocompleteSearch($query, $request)
//    {
//        $searchQueries = [];
//        $searchColumns = array_keys($request->searchableFields);
//        $searchValues = array_values($request->searchableFields);
//        $pageSize = $request->pageSize ? $request->pageSize : 20;
//        if (in_array('middle_name', $searchColumns))
//            $searchValues = explode(" ", $searchValues[0]);
//
//        for ($sc = 0; $sc < count($searchColumns); $sc++) {
//            for ($sv = 0; $sv < count($searchValues); $sv++) {
//                array_push($searchQueries, [$searchColumns[$sc], 'LIKE', '%' . $searchValues[$sv] . '%']);
//            }
//        }
//
//        return $query
//            ->where([$searchQueries[0]])
//            ->when(isset($searchQueries[1]), function ($query) use ($searchQueries, $searchColumns) {
//
//                /*$count = null;
//                if(in_array('middle_name', $searchColumns)){
//$count
//                }*/
//
//                for ($i = 1; $i < count($searchQueries); $i++) {
//
//
//                    isset($searchQueries[$i]) && $query->andWhere([$searchQueries[$i]]);
//                }
//            })
//            ->select(self::getSelectColumns($searchColumns))->take($pageSize);
//    }
//
//    private static function getSelectColumns($searchColumns)
//    {
//        /**
//         * Searching with phone numbers displays : phone_no & full name
//         * Searching with customer id displays : customer id & full name
//         * Searching with full name displays : full name
//         *
//         * */
//        $columns = ['id', 'first_name', 'last_name'];
//        in_array('telephone', $searchColumns) && array_push($columns, 'telephone');
//        in_array('middle_name', $searchColumns) && array_push($columns, 'middle_name');
//        return $columns;
//    }
//}
