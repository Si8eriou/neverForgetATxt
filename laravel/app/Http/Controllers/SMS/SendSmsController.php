<?php


namespace App\Http\Controllers\SMS;
use App\Libraries\SendSms;
use Illuminate\Http\Request;


class SendSmsController
{
    public function sendSms(Request $request, $cell, SendSms $sendSms) {
        $smsSent = $sendSms->sendSms($request, $cell);

        return response()->json(['smsSent' => $smsSent]);
    }
}
