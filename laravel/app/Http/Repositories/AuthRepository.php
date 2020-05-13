<?php


namespace App\Http\Repositories;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AuthRepository
{
    public function saveNewUser($request)
    {
        $authEmail = User::where('email', $request->get('email'))->first();

        if ($authEmail) {
            return response()->json([false]);
        }
        else {
            $user = new User();

            $user->name = $request->get('name');
            $user->email = $request->get('email');
            $user->password = $request->get('password');
            $user->remember_token = Str::random(60);

            $user->save();

            return $user;
        }
    }

    public function userLogin(Request $request) {

        $user = User::where('email', $request->get('email'))->first();

        if($user && $user->password === $request->get('password')) {
            return $user;
        }
        else {
            return false;
        }
    }
}
