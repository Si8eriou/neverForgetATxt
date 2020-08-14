<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'dark_mode', 'userID'
    ];

}
