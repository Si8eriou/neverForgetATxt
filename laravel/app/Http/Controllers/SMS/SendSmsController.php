<?php


namespace App\Http\Controllers\SMS;
use App\Libraries\SendSms;
use Illuminate\Http\Request;


class SendSmsController
{
    public function sendSms(Request $request, $cell, SendSms $sendSms) {
        return $sendSms->sendSms($request, $cell);
    }
}
