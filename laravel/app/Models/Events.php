<?php


namespace App\Models;
use Illuminate\Database\Eloquent\Model;



class Events extends Model
{
    protected $table = 'events';

    protected $primarKey = 'id';

    public $timestamps = true;

    protected $fillable = [
      'name', 'body', 'userID'
    ];
}
