<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    protected $table = 'contacts';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'fname', 'lname', 'cell', 'email'
    ];


    public function user() {
        return $this->belongsTo(User::class, 'id');
    }
}
