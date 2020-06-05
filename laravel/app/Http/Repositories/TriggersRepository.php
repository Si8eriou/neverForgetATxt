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
        }

        $trigger->date = new Carbon($trigger->date);

        $trigger->contactID = $request->get('contactID');
        $trigger->date = $request->get('date');
        $trigger->eventID = $event->id;

        $trigger->save();

        return $trigger;
    }

    public function getTrigger($event) {

        return Trigger::where('eventID', $event->id)->first();
    }
}
