<?php


namespace App\Http\Controllers\Events;
use App\Http\Controllers\Triggers\EventTriggersController;
use App\Http\Repositories\EventsRepository;
use App\Http\Repositories\TriggersRepository;
use App\Libraries\EventsLibrary;
use Illuminate\Http\Request;
use App\Models\Events;


class EventsController
{
    public function saveEvent(Request $request, EventsRepository $eventsRepository,
                              TriggersRepository $triggersRepository, $eventID = false) {

        $event = $eventsRepository->saveEvent($eventID, $request);

        $eventTrigger = $triggersRepository->saveTrigger($event, $request);

        return response()->json(['event' => $event]);
    }

    public function getEvents(Request $request, $userID) {
        $events = EventsLibrary::getUserEvents($userID);
    }
}
