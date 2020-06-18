<?php


namespace App\Libraries\Repeaters;


class DailyRepeater extends BaseRepeater
{
    public function repeat()
    {
        $this->trigger->date = $this->repeatDate->addDay();
        $this->trigger->save();
    }
}
