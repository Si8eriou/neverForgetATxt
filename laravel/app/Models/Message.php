<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Message extends Model
{
    protected $table = 'messages';

    protected $primaryKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'eventID',
        'userID',
        'contactID',
        'type',
        'body',
    ];

    public function event() {
        return $this->hasOne(Events::class, 'id', 'eventID');
    }
}
