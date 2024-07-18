<?php

namespace App\Models;


use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Traits\HasWalletFloat;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model implements Wallet, WalletFloat
{
    use HasFactory, HasWalletFloat;
    protected $guarded = [];

    public function bankAccount(){
        return $this->belongsTo(BankAccount::class);
    }
}
