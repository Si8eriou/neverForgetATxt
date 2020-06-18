<?php


namespace App\Libraries\Repeaters;


class ThirtyDayRepeater extends BaseRepeater
{
    public function repeat()
    {
        $this->trigger->date = $this->repeatDate->addDays(30);
        $this->trigger->save();
    }
}
