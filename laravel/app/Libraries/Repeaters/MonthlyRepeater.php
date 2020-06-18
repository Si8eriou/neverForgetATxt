<?php


namespace App\Libraries\Repeaters;


class MonthlyRepeater extends BaseRepeater
{

    public function repeat()
    {
        $this->trigger->date = $this->repeatDate->addMonth();
        $this->trigger->save();
    }
}
