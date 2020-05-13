<?php


namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Http\Repositories\AuthRepository;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function saveNewUser(Request $request, AuthRepository $authRepository) {
        $user = $authRepository->saveNewUser($request);

        return response()->json(['user' => $user]);
    }

    public function userLogin(Request $request, AuthRepository $authRepository) {
        $user = $authRepository->userLogin($request);

        return response()->json(['user' => $user]);
    }
}
