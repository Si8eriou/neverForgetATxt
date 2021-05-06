<?php


namespace App\Libraries;
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
    }

    public static function sendSms($message, $cell) {
        try {
            $sid    = env('TWILIO_SID');
            $token  = env("TWILIO_TOKEN");
            $twilio = new Client($sid, $token);


            $number = '+1';
            $number .= $cell;

            $twilio->messages
                ->create(
                    $number,
                    [
                        "body" => $message,
                        "from" => env("TWILIO_NUMBER"),
                    ]
                );

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
