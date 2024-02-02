<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = ['name', 'gender', 'age', 'country', 'genre'];
    use HasFactory;
    public function books()
    {
        return $this->hasMany(Book::class);
    }
    
}
