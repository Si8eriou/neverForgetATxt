<?php


namespace App\Http\Controllers\Setting;


use App\Http\Repositories\SettingRepository;
use Illuminate\Http\Request;

class SettingController
{
    public function getUserSettingsByID(Request $request, SettingRepository $settingRepository) {

        return $settingRepository->getUserSettingsByID($request);

    }

}
