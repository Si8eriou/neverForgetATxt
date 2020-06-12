<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class SentTrigger extends Model
{
    protected $table = 'sent_trigger_table';

    protected $primarKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'eventID', 'userID', 'contactID', 'date'
    ];

}
