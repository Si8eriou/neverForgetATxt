<?php


namespace App\Libraries\Repeaters;


class YearlyRepeater extends BaseRepeater
{
    public function repeat()
    {
        $this->trigger->date = $this->repeatDate->addYear();
        $this->trigger->save();
    }
}
