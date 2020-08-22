<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Message extends Model
{
    protected $table = 'message';

    protected $primaryKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'event_id',
        'user_id',
        'contact_id',
        'type',
        'body',
    ];

    public function event() {
        return $this->hasOne(Events::class, 'id', 'eventID');
    }
}
