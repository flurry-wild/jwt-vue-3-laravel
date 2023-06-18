<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\ActionLog;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function store(StoreRequest $request)
    {
        $dbLog = ActionLog::create([
            'ip' => $request->ip(), 'type' => ActionLog::TYPE_REGISTRATION, 'result' => ActionLog::RESULT_FAILED
        ]);

        $data = $request->validated();

        $dbLog->result = ActionLog::RESULT_SUCCESS;
        $dbLog->save();
        $data['password'] = Hash::make($data['password']);

        User::firstOrCreate([
            'email' => $data['email']
        ], $data);

        return $data;
    }
}
