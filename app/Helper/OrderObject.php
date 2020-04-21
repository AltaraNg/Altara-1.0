<?php


namespace App\Helper;

use DateTime;

/*use Monolog\Handler\StreamHandler;
use Monolog\Logger;*/

trait OrderObject
{

    public static function getDateForReminder($requestObject)
    {
        // TODO:: cleanup
        /*$log = new Logger('dva-reminder');
        $log->pushHandler(new StreamHandler('dva.log', Logger::WARNING));*/
//        $log->warning('getDateForReminder-1: '. json_encode($requestObject));

        $list = $requestObject['list'];
        $today = date('Y-m-d');
        $count = (date("D") == "Mon" || in_array($list, Self::COLLECTIONS_LIST)) ? 3 : 1;
        if ($list) $informal = [];

        $days = 0;

        switch ($list) {
            case 'overdue':
                $days = $requestObject['overdueDays'];
                $count = 1;
                break;
            case 2://sms reminder: 2
                $days = 7;
                break;
            case 3://sms reminder: 3
                $days = 11;
                break;

            case 4://call reminder: 1
                $days = 14;
                break;
            case 5://call reminder: 2
                $days = 15;
                break;
            case 6://call reminder: 3
                $days = 19;//21;
                break;
            case 7://call reminder: 4
                $days = 31;
                break;

            case 9://collections visit: 1
                $days = 38;
                break;
            case 10://collections visit: 2
                $days = 45;
                break;

            case 11://recovery visit: 1
                $days = 61;
                break;
            case 12://recovery visit: 2
                $days = 75;
                break;
            case 13://recovery visit: 2
                $days = 90;
                break;

            case 14://external recovery - lawyer visit: 2
                $days = 121;
                break;

            default://sms reminder: 1 and promise call 8
                for ($j = 0; $j < $count; $j++)
                    $informal[$j] = date('Y-m-d', strtotime($today . ' - ' . $j . ' days'));

//                $log->warning('getDateForReminder-informal-2: '. json_encode($informal));

                return $informal;
        }

        for ($a = 0; $a < $count; $a++) {
            $informal[$a] = [date('Y-m-d', strtotime($today . ' - ' . ($a + $days) . ' days'))];
            for ($i = 1; $i < 12; $i++) {
                $informal[$a][$i] =
                    date('Y-m-d', strtotime($informal[$a][$i - 1] . ' - 14 days'));
            }
        }

        $dateArr = $count == 3 ? call_user_func_array('array_merge', $informal) : $informal[0];

//        $log->warning('getDateForReminder-dateArr-3: '. json_encode($dateArr));

        return $dateArr;
    }

    public static function isOrderRepaymentDetailValid($order)
    {
        return (isset($order->repayment_formal) || isset($order->repayment_informal));
    }

    public static function isBankDraftAvailable()
    {
        return false;
    }

    public static function setIsOrderFormal($order)
    {
        $status = strtolower($order->customer->employment_status);

        $isOrderFormal = in_array($status, ['formal', 'salaried']);
        if (((int)$order->payment_method_id) === Self::DIRECT_DEBIT_PAYMENT_METHOD) $isOrderFormal = true;

        return $isOrderFormal;
    }

    public static function getCountAndInterval($order)
    {
        $count = 0;
        $interval = 0;

        $orderDate = date($order->order_date);

        if ($orderDate <= date(Self::DIRECT_DEBIT_IMPLEMENTATION_DATE)) {
            if (isset($order->repayment_formal)) {
                $interval = 28;
                $count = 6;
            }
            if (isset($order->repayment_informal)) {
                $interval = 14;
                $count = 12;
            }
        } else {
            if (
                (Self::isBankDraftAvailable() && Self::setIsOrderFormal($order))
                ||
                ((int)$order->payment_method_id) === Self::DIRECT_DEBIT_PAYMENT_METHOD
            ) {
                $interval = 28;
                $count = 6;
            } else {
                $interval = 14;
                $count = 12;
            }
        }
        return ['interval' => $interval, 'count' => $count];
    }

    public static function getColumn($column)
    {
        $actualColumn = null;
        switch ($column) {
            case 1:
                $actualColumn = $column . 'st';
                break;
            case 2:
                $actualColumn = $column . 'nd';
                break;
            case 3:
                $actualColumn = $column . 'rd';
                break;
            default:
                $actualColumn = $column . 'th';
                break;
        }
        return $actualColumn;
    }

    public static function getRepaymentData($order)
    {
        if (isset($order->repayment_formal)) return $order->repayment_formal;
        if (isset($order->repayment_informal)) return $order->repayment_informal;
        return null;
    }

    public static function generateDueDates($startDate, $interval, $count)
    {

        /*$log = new Logger('dva-reminder');
        $log->pushHandler(new StreamHandler('dva.log', Logger::WARNING));
        $log->warning('generateDueDatesInput: ' . json_encode($startDate, $interval, $count));*/

        $dueDates = [];
        for ($i = 0; $i < $count; $i++) {
            $daysToAdd = ($i + 1) * $interval;
            $date = (new DateTime($startDate))
                ->modify($daysToAdd . ' day')
                ->format('Y-m-d');
            array_push($dueDates, $date);
        }

//        $log->warning('generateDueDatesOutput: ' . json_encode($dueDates));

        return $dueDates;
    }

    public static function getFirstMissedPaymentDate($order)
    {
        /*        $log = new Logger('dva-reminder');
                $log->pushHandler(new StreamHandler('dva.log', Logger::WARNING));
                $log->warning('getFirstMissedPaymentDateInput: ' . json_encode($order));*/

        extract(Self::getCountAndInterval($order));

        for ($i = 1; $i < ($count + 1); $i++) {
            $column = Self::getColumn($i);
            $repaymentData = Self::getRepaymentData($order);
            $col = $column . "_pay";
            if ((int)$repaymentData->$col < 1) {

                // $res = Self::generateDueDates($order->order_date, $interval, $count)[$i - 1];

                //$log->warning('getFirstMissedPaymentDateOutput: ' . json_encode($res));

//                return $res;

                return Self::generateDueDates($order->order_date, $interval, $count)[$i - 1];
            }
        }
        return null;
    }

    public static function getPossibleRepaymentDatesForASuppliedDate($requestObject)
    {
        /*$log = new Logger('dva-reminder');
        $log->pushHandler(new StreamHandler('dva.log', Logger::WARNING));
        $log->warning('getPossibleRepaymentDatesForASuppliedDateInput: ' . json_encode($requestObject));*/

        $datePool = [];
        $list = $requestObject['list'];
        $mode = Self::REMINDER_TYPES[$list]['mode'];
        $dayInterval = Self::REMINDER_TYPES[$list]['dayInterval'];
        $list === 'overdue' && $dayInterval = $requestObject['overdueDays'];
        $accumulatedDays = date("D") == "Mon" || in_array($list, Self::COLLECTIONS_LIST)
            ? 3 : 1;

        if ($mode === 'sms') {
            for ($p = 0; $p < $accumulatedDays; $p++) {
                $date = (new DateTime())->modify('+' . ($p + $dayInterval) . ' day')->format('Y-m-d');
                array_push($datePool, $date);
            }
        } else {
            for ($p = 0; $p < $accumulatedDays; $p++) {
                $date = (new DateTime())->modify('-' . ($p + $dayInterval) . ' day')->format('Y-m-d');
                array_push($datePool, $date);
            }
        }

        // $log->warning('getPossibleRepaymentDatesForASuppliedDateOutput: ' . json_encode($datePool));

        return $datePool;
    }
}
