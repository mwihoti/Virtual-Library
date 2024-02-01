<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BooksController extends Controller
{
    //
    function getIndex()
    {
        return Book::all();

    }
    function show_id($id)
    {
        return Book::with('author')->find($id);
    }
    function book_store(Request $req)
    {
        return Book::create($req->all());
    }
    function update_books(Request $req, $id)
    {
        $book = Book::findOrFail($id);
        $book->update($req->all());
        return $book;
    }
}
