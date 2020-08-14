<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class SentTrigger extends Model
{
    protected $table = 'sent_trigger_table';

    protected $primaryKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'eventID', 'userID', 'contactID', 'date'
    ];

    public function event() {
        return $this->hasOne(Events::class, 'id', 'eventID');
    }
}
