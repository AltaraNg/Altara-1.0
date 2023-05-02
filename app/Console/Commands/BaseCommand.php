<?php

namespace App\Console\Commands;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\Validator;
use Illuminate\Console\Command;

/**
 * A base class for all dated report, it contains
 * some functions general to the subclasses.
 *
 * Class DatedBaseCommand
 * @package App\Console\Commands
 */
abstract class BaseCommand extends Command
{
    /**
     * @var DateTime
     */
    protected $startDateTime;

    /**
     * @var DateTime
     */
    protected $endDateTime;

    /**
     * Determines whether a single report should be sent for each day in the
     * requested date range.
     *
     * @var boolean
     */
    protected $oneReportPerDay = false;


    /**
     * A flag to recognize whether the report range is a single day.
     *
     * @var bool
     */
    protected $singleDay = false;


    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Process the input from options provided and
     * set the start and end date from the input.
     * if no option is specified, it will set the start and end date
     * to be yesterday.
     * @throws \Exception
     */
    public function processInput()
    {
        $this->validateInput();
        if (($date = $this->option('date'))) {
            $this->startDateTime = new DateTime(date("Y-m-d 00:00:00", strtotime($date)));
            $this->endDateTime = new DateTime(date('Y-m-d 00:00:00', strtotime($date . "+ 1day")));
            $this->singleDay = true;
        } elseif (($days = $this->option('days'))) {
            $this->startDateTime = new DateTime(date('Y-m-d 00:00:00', strtotime("$days days ago")));
            $this->endDateTime = new DateTime(date("Y-m-d 00:00:00", strtotime("today")));
            $this->singleDay = $days == 1;
        } else if (($dateFrom = $this->option('startDate'))) {
            $this->startDateTime = new DateTime(date('Y-m-d 00:00:00', strtotime($dateFrom)));
            $this->endDateTime = !empty($this->option('endDate')) ?
                new DateTime(date('Y-m-d 00:00:00', strtotime($this->option('endDate') . "+1day"))) :
                new DateTime(date('Y-m-d 00:00:00', strtotime("today")));
            $this->singleDay = $this->startDateTime == $this->endDateTime;
        } else {
            $time = Carbon::yesterday();
            $this->startDateTime = Carbon::create($time->year, $time->month, $time->day, 0, 00, 0);
            $this->endDateTime = $time->endOfDay();
            $this->singleDay = true;
        }
        return 0;
    }

    /**
     * Validate the input.
     *
     */
    protected function validateInput()
    {
        $data = $this->option();
        $validator = Validator::make($data, [
            'date' => 'nullable|date|before:' . date('Y-m-d', strtotime("today")),
            'days' => 'nullable|integer|min:1',
            'startDate' => 'nullable|date|before:' . date('Y-m-d', strtotime("today")),
            'endDate' => 'nullable|date|before:' . date('Y-m-d', strtotime("today"))
        ]);
        if ($validator->fails()) {
            $this->error('input arguments failed validation Errors: ');
            $errors = $validator->getMessageBag()->all();
            array_walk($errors, [$this, "error"]);
            exit();
        }
    }
}
