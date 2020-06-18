<?php


namespace App\Libraries\Repeaters;


use App\Models\Trigger;
use Carbon\Carbon;

abstract class BaseRepeater
{
    protected $trigger;
    protected $repeatDate;

    public function __construct(Trigger $trigger)
    {
        $this->trigger = $trigger;
        $this->repeatDate = new Carbon($trigger->date);
    }

    abstract public function repeat();
}
