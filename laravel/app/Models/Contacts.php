<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    protected $table = 'contacts';

    protected $primaryKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'fname', 'lname', 'cell', 'email'
    ];


    public function user() {
        return $this->belongsTo(User::class, 'id');
    }

    public function events() {
        return$this->hasMany(Events::class, 'contactID', 'id');
    }
}
