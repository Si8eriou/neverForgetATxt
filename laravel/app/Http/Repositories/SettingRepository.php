<?php


namespace App\Http\Repositories;


use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SettingRepository
{
    public function createNewSettingsUserEntry($userID) {

        $userSettings = new Setting();

        $userSettings->userID = $userID;

        $userSettings->save();

        return true;
    }

    public function getUserSettingsByID($userID) {
        $userSettings = Setting::where('userID', $userID)
            ->first();
    }

}
