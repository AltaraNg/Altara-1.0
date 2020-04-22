<?php

namespace App\Helper;

/**
 * Class Helper
 * @package App\Helpers
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
     * @return string
     */
    public static function generateTansactionNumber(string $prefix)
    {
        return strtoupper(substr(uniqid($prefix, true), 0, 12));
    }

    /**
     * @param int $length
     * @param bool $characterOnly
     * @param bool $capsOnly
     *
     * @return string
     */
    public static function generateRandomString($length = 5, $characterOnly = true, $capsOnly = true)
    {
        $upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';
        $lowerChars = 'abcdefghijklmnopqrstuvwxyz';

        $characters = $characterOnly ? $upperChars : $upperChars . $numbers;
        $characters = $capsOnly ? $characters : $characters . $lowerChars;

        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomString;
    }
}
