<?php


namespace App\Http\Controllers\Profile;


use App\Http\Repositories\ProfileRepository;
use Illuminate\Http\Request;

class ProfileController
{
    public function getUserProfile(Request $request, ProfileRepository $profileRepository, $userID = false) {

        return response()->json(['profile' => $profileRepository->getUserProfile($userID)]);
    }

    public function updateProfile(Request $request, ProfileRepository $profileRepository) {
        return $request;
        $user = $profileRepository->updateProfile($request);

        return response()->json(['user' => $user]);
    }

}
