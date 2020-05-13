<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Trigger extends Model
{
    protected $table = 'trigger';

    protected $primarKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'contactID', 'eventID', 'date'
    ];
}
