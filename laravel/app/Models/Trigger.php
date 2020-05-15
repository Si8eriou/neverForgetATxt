<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Events;



class Trigger extends Model
{
    protected $table = 'trigger';

    protected $primarKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'contactID', 'eventID', 'date'
    ];

    public function event() {
        return $this->hasOne( Events::class, 'id', 'eventID');
    }
}