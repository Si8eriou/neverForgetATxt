<?php


namespace App\Libraries;
use App\Http\Controllers\Triggers\SaveSentTriggerController;
use Twilio\Rest\Client;


class SendSms {
    public static function sendText($event) {
        $sid    = env('TWILIO_SID');
        $token  = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);

        $messageBody = $event->event->body;

        $number = '+1';
        $number .= $event->contact->cell;


        $message = $twilio->messages
            ->create($number, // to
                [
                    "body" => $messageBody,
                    "from" => env("TWILIO_NUMBER"),
                ]
            );

        self::saveSentTrigger($event);
    }

    public static function saveSentTrigger($event) {
        (new SaveSentTriggerController)->saveSentTrigger($event);
    }
}
