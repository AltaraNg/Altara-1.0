<?php

namespace App\Helper;

use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\Integer;

/**
 * Class Helper
 * @package App\Helper
 *
 * @author: Adeniyi
 */
class Helper
{
    /**
     * @param string $string
     * @param bool $capitalizeFirstCharacter
     * @return string
     */
    public static function convertUnderscoreToCamelcase($string, $capitalizeFirstCharacter = false)
    {
        $str = str_replace(' ', '', ucwords(str_replace('_', ' ', $string)));

        if (!$capitalizeFirstCharacter) {
            $str[0] = strtolower($str[0]);
        }

        return $str;
    }

    /**
     * @param string $prefix
     * @param int $length
     * @return string
     */
    public static function generateTansactionNumber(string $prefix, $length = 12)
    {
        return strtoupper(substr(uniqid($prefix, true), 0, $length));
    }

    /**
     * Generates custom SKU for product, can be used for generating other uniques
     * @param int length,
     * @param mixed characters of values
     *
     * @return string $sku
     * @throws \Exception
     */
    public static function generateSKU($length, $keyspace = '0A1B2C3D4E5F6G7H8I9JKLMNOPQRSTUVWXYZ')
    {
        //hold pieces of sku characters in array
        $pieces = [];
        //get max string length
        $max = mb_strlen($keyspace, '8bit') - 1;
        //loop through length
        for ($i = 0; $i < $length; ++$i) {
            //add to pieces
            $pieces[] = $keyspace[random_int(0, $max)];
        }
        //return generated sku
        return implode('', $pieces);
    }

    public static function generatePrefix(string $target, int $stop = 3, int $start = 0)
    {
        return Str::upper(Str::substr($target, $start, $stop));
    }

    /**
     * Get the array regex representation of the keys.
     *
     * @param  array  $keys
     * @return array
     */
    public static function generateReplacementKeys(array $keys)
    {
        //construct a new array to construct regex to search for when replacing
        return array_map(function ($value) {
            return '/\[' . $value . '\]/';
        }, $keys);
    }

    /**
     * Append an ordinal indicator to a numeric value.
     *
     * @param  string|int  $value
     * @param  bool  $superscript
     * @return string
     */
    public static function str_ordinal($value, $superscript = false)
    {
        $number = abs($value);

        $indicators = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

        $suffix = $superscript ? '<sup>' . $indicators[$number % 10] . '</sup>' : $indicators[$number % 10];
        if ($number % 100 >= 11 && $number % 100 <= 13) {
            $suffix = $superscript ? '<sup>th</sup>' : 'th';
        }

        return number_format($number) . $suffix;
    }

    public static  function calculator(int $productPrice, $data)
    {
        $count = Helper::repaymentCount($data->repayment_dur, $data->repayment_cycle);
        // $marketPrice = $productPrice * (1 + $params->margin);
        // $upfront = ($data->percent / 100) * $marketPrice;

        // $residual = $marketPrice - $upfront;
        // $tempInstallment = $residual / $count;
        // $tempInterest = $residual * ($params->interest / 100);

        // $totalPremium = ($tempInstallment * $count) + ($tempInterest * $count) + $upfront;
        // $labelPrice = $totalPremium * (1 + $params->tax / 100);
        // $total = ceil($labelPrice / 100 * 100);
        $total = $productPrice;

        $initialDownPayment = ($data->percent / 100) * $total;
        $downpayment = $initialDownPayment + ((($total - $initialDownPayment) / $count) * $data->plus);
        $actualDownpayment = floor($downpayment / 100 * 100);
        $actualRepayment = floor(($total - $actualDownpayment) / 100 * 100);
        $onetimepay = ceil($actualRepayment / $count);

        return [
            'total_price' => $total,
            'downpaymment' => $actualDownpayment,
            'repayment' => $actualRepayment,
            'onetime' => $onetimepay
        ];
    }

    public static function repaymentCount($days, $cycle)
    {
        $result = $days / $cycle;

        if ($result >= 24) {
            return 24;
        } elseif ($result >= 12) {
            return 12;
        }
        if ($result >= 6) {
            return 6;
        }
        return 3;
    }

    public static function PaymentCompleted($order): bool
    {
        return $order->amortization->sum('actual_amount') >= $order->amortization->sum('expected_amount');
    }
}
