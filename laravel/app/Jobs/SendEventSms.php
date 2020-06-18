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
use App\Libraries\SaveSentTrigger;

class SendEventSms implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $event;
    protected $date;
    protected $triggers;

    /**
     * Create a new job instance.
     *
     * @param Carbon $date
     */
    public function __construct(Carbon $date)
    {
//        $this->date = $date;

        $this->date = new Carbon();
    }

    /**
     * Execute the job.
     *
     * @param SendSms $sendSms
     * @return void
     */
    public function handle(SendSms $sendSms)
    {
        $this->checkForEvents($sendSms);
    }

    private function checkForEvents($sendSms)
    {
        $this->triggers = Trigger::where('date', '=', $this->date->toDateString())->with('event', 'contact')->get();

        $this->sendEventSms($this->triggers, $sendSms);
    }

    private function sendEventSms($triggers, $sendSms)
    {
        if($triggers) {
            foreach ($triggers as $trigger) {

                $sendSms->sendText($trigger);
                (new SaveSentTrigger)->saveSentTrigger($trigger);
            }
        }
    }
}
