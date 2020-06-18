<?php


namespace App\Libraries;


use App\Http\Repositories\SentTriggerRepository;
use App\Http\Repositories\TriggersRepository;
use App\Libraries\Repeaters\RepeaterFactory;
use App\Models\Trigger;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SaveSentTrigger
{
    public function saveSentTrigger($sentTrigger) {
        (new \App\Http\Repositories\SentTriggerRepository)->saveSentTrigger($sentTrigger);

        $repeaterFactory = new RepeaterFactory();
        $repeater = $repeaterFactory->getRepeater($sentTrigger);
        $repeater->repeat();

        (new TriggersRepository())->saveTriggerAfterSend($sentTrigger);
}

}
