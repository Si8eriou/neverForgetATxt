<?php

namespace App\Jobs;

use App\Models\Events;
use App\Models\Trigger;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Libraries\SendSms;

class SendEventSms implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $event;
    protected $date;
    protected $triggers;

    /**
     * Create a new job instance.
     *
     * @param SendSms $sendSms
     */
    public function __construct(Carbon $date)
    {
        $this->date = $date->format('m/d/Y');
    }

    /**
     * Execute the job.
     *
     * @param SendSms $sendSms
     * @return void
     */
    public function handle(SendSms $sendSms)
    {
        $this->checkForEvents($this->date);
        $this->getEventInfo($this->triggers, $sendSms);
    }

    private function checkForEvents($date)
    {
        $this->trigger = Trigger::where('date', $date)->get();
    }

    private function getEventInfo($triggers, $sendSms)
    {
        if(count($triggers)) {
            foreach ($this->triggers as $trigger) {
                $event = Events::where('id', $trigger->eventID)->get();

                $this->sendEventSms($event, $sendSms);
            }
        }
    }

    private function sendEventSms($event, $sendSms)
    {
        if(count($event)) {
            $sendSms->sendText($event);
        }
    }
}
