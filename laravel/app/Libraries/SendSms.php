<?php


namespace App\Libraries;

use App\Libraries\SaveSentTrigger;
use Twilio\Rest\Client;


class SendSms
{
    public static function sendEventSms($event)
    {
        $sid = env('TWILIO_SID');
        $token = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);

        $messageBody = $event->event->body;

        $number = '+1';
        $number .= $event->contact->cell;


        $twilio->messages
            ->create($number, // to
                [
                    "body" => $messageBody,
                    "from" => env("TWILIO_NUMBER"),
                ]
            );
    }

    public static function sendSms($message, $cell)
    {
        $sid = env('TWILIO_SID');
        $token = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);

        $number = '+1';
        $number .= $cell;

        $message = $twilio->messages
            ->create($number, // to
                [
                    "body" => $message,
                    "from" => env("TWILIO_NUMBER"),
                ]
            );

        return true;
    }
}
