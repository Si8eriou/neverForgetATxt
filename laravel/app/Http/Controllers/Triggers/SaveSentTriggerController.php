<?php


namespace App\Http\Controllers\Triggers;


use App\Http\Repositories\SentTriggerRepository;
use App\Http\Repositories\TriggersRepository;
use App\Models\Trigger;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SaveSentTriggerController
{
    public function saveSentTrigger($sentTrigger) {
        (new \App\Http\Repositories\SentTriggerRepository)->saveSentTrigger($sentTrigger);

        switch ($sentTrigger->event->repeat_type) {
            case 1:
                $sentTrigger->date = Carbon::parse($sentTrigger->date)->addDay();
                break;
            case 2:
                $sentTrigger->date = Carbon::parse($sentTrigger->date)->addWeek();
                break;
            case 3:
                $sentTrigger->date = Carbon::parse($sentTrigger->date)->addMonth();
                break;
            case 4:
                $sentTrigger->date = Carbon::parse($sentTrigger->date)->addDays(30);
                break;
            case 5:
                $sentTrigger->date = Carbon::parse($sentTrigger->date)->addYear();
                break;
        }

        (new TriggersRepository())->saveTriggerAfterSend($sentTrigger);
}

}
