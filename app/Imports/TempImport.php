<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class TempImport implements ToCollection, WithHeadingRow
{
    /**
     * @inheritDoc
     */
    public function collection(Collection $collection)
    {
        return [];

    }
}
