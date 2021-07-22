<?php

namespace App\Helper;

use Illuminate\Support\Str;

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
}
