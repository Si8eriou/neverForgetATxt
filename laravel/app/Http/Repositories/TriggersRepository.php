<?php


namespace App\Http\Repositories;

use App\Models\Trigger;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class TriggersRepository
{
    public function saveTrigger($event, $request) {

        $trigger = Trigger::where('eventID', $event->id)->first();

        if (!$trigger) {
            $trigger = new Trigger;
            $trigger->contactID = $request->get('contactID');
        }


        $date = new Carbon();

        $trigger->date = $date->format('Y-m-d');
        $trigger->eventID = $event->id;

        $trigger->save();

        return $trigger;
    }

    public function getTrigger($event) {

        return Trigger::where('eventID', $event->id)->first();
    }

    public function saveTriggerAfterSend($sentTrigger) {

        $trigger = Trigger::where('eventID', $sentTrigger->event->id)->first();

        $trigger->contactID = $sentTrigger->contactID;
        $trigger->date = $sentTrigger->date;
        $trigger->eventID = $sentTrigger->event->id;

        $trigger->save();
    }
}
