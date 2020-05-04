<?php


namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function saveNewUser(Request $request) {
        $authEmail = User::where('email', $request->get('email'))->first();

        if($authEmail) {
            return response()->json([false]);
        }
        else {
            $user = new User();

            $user->name = $request->get('name');
            $user->email = $request->get('email');
            $user->password = $request->get('password');
            $user->remember_token = Str::random(60);

            $user->save();

            return response()->json(['user' => $user]);
        }
    }

    public function userLogin(Request $request) {

        $user = User::where('email', $request->get('email'))->first();

        if(!$user) {
            return response()->json([false]);
        }

        if($user->password === $request->get('password')) {
            return response()->json(['user' => $user]);

        }
        else {
            return response()->json([false]);
        }
    }
}
