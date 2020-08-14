<?php


namespace App\Http\Repositories;


use App\Models\User;
use Illuminate\Http\Request;

class ProfileRepository
{
    public function getUserProfile($userID) {

        return User::where('id', $userID)
            ->with('setting')
            ->first();
    }

    public function updateProfile(Request $request) {

        return $request;

        $user =  User::where('id', $request->get('id'))
            ->first();

        return $user;

        $user->password = $request->get('password');
        $user->email = $request->get('email');
        $user->fname = $request->get('fname');

        $user->save();

        return $user;
    }

}
