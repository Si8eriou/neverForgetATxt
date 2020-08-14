<?php


namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Http\Repositories\AuthRepository;
use App\Http\Repositories\SettingRepository;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function saveNewUser(Request $request, AuthRepository $authRepository, SettingRepository $settingRepository) {

        $user = $authRepository->saveNewUser($request);

        $settingRepository->createNewSettingsUserEntry($user->id);

        return response()->json(['user' => $user]);
    }

    public function userLogin(Request $request, AuthRepository $authRepository) {
        $user = $authRepository->userLogin($request);

        return response()->json(['user' => $user]);
    }

    public function checkIfEmailUsed(Request $request, AuthRepository $authRepository) {

        return response()->json(['email' => $authRepository->checkIfEmailUsed($request)]);
    }
}
