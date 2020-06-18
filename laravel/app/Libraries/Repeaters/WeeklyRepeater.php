<?php


namespace App\Libraries\Repeaters;


use App\Models\Trigger;

class WeeklyRepeater extends BaseRepeater
{

    public function repeat()
    {
        $this->trigger->date = $this->repeatDate->addWeek();
        $this->trigger->save();
    }
}

