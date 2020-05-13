<?php


namespace App\Http\Repositories;

use App\Models\Trigger;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class TriggersRepository
{
    public function saveTrigger($event, $request) {

        $trigger = Trigger::where('eventID', $event->id)->first();

        if (!$trigger) {
            $trigger = new Trigger;
        }


        $trigger->contactID = $request->get('contactID');
        $trigger->date = $request->get('date');
        $trigger->eventID = $event->id;

        $trigger->save();

        return $trigger;
    }
}
