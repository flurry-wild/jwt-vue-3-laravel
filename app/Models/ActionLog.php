<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActionLog extends Model
{
    const TYPE_LOGIN = 'login';
    const TYPE_REGISTRATION = 'reg_user';

    const RESULT_FAILED = 'failed';
    const RESULT_SUCCESS = 'success';

    protected $table = 'action_log';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'ip',
        'type',
        'result'
    ];
}
