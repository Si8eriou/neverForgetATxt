<?php


namespace App\Libraries\Repeaters;


use Carbon\Carbon;

class RepeaterFactory
{
    public function getRepeater($sentTrigger) {
        switch ($sentTrigger->event->repeat_type) {
            case 1:
                return new DailyRepeater($sentTrigger);
            case 2:
                return new WeeklyRepeater($sentTrigger);
            case 3:
                return new MonthlyRepeater($sentTrigger);
            case 4:
                return new ThirtyDayRepeater($sentTrigger);
            case 5:
                return new YearlyRepeater($sentTrigger);
        }
        return false;
    }
}
