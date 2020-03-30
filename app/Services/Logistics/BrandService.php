<?php


namespace App\Services\Logistics;
use App\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PharIo\Manifest\LibraryTest;


/**
 * @property Brand brandModel
 * @property Validator validator
 */
class BrandService
{
    protected $query;

    /**
     * BrandService constructor.
     * @param Brand $brandModel
     * @param Validator $validator
     */
    public function __construct(Brand $brandModel)
    {
        $this->brandModel = $brandModel;

    }

    /**
     * @return Brand[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getBrands(){
        $this->query = $this->brandModel::select('id', 'name', DB::raw('(CASE 
        WHEN brands.is_available = "0" THEN "Inactive"
        ELSE "Active"
        END)
        '))->searchPaginateAndOrder();
        return $this->query;
    }

    /**
     * @return mixed
     */
    public function getAvailableBrands(){
        $this->query = $this->brandModel::where('is_available', '1')->get();
        return $this->query;
    }
    public function storeBrand(Request $request){
        $request->validate(['name' => 'required|unique:brands']);
        $brand = new Brand($request->all());
        $brand->name = ucwords(strtolower($brand->name));
        $brand->save();
    }

}
