<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'name',
        'datetime',
        'place',
        'price',
    ];

    public  function admin()
    {
        $this->belongsTo(Admin::class);
    }
}
