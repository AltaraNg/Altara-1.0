<?php

use App\Bank;
use Illuminate\Database\Seeder;

class BanksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $banks = [
            'Access Bank',
            'Diamond Bank',
            'Ecobank Nigeria',
            'Fidelity Bank Nigeria',
            'First Bank of Nigeria',
            'First City Monument Bank ',
            'Guaranty Trust Bank',
            'Heritage Bank Plc.',
            'Keystone Bank Limited',
            'Mainstreet Bank Limited',
            'Skye Bank',
            'Stanbic IBTC Bank Nigeria Limited',
            'Sterling Bank',
            'Union Bank of Nigeria',
            'United Bank for Africa',
            'Unity Bank Plc.',
            'Wema Bank',
            'Zenith Bank',
        ];

        for ($i = 0; $i < count($banks); $i++) {
            $bank = new Bank();
            $bank->name = $banks[$i];
            $bank->save();
        }
    }
}
