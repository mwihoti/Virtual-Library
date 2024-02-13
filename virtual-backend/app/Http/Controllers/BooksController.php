<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Book;


class BooksController extends Controller
{
    //
    function books()
    {
        return Book::all();

    }
    function books_id($id)
    {
        $book = Book::with('author')->find($id);

        if ($book) {
            // If the book is found, return it as a JSON response
            return response()->json($book);
        } else {
            // If the book is not found, return an error response
            return response()->json(['error' => 'Book not found'], 404);
        }
    }
    function book_list(Request $req)
    {
        return Book::create($req->all());
    }
    function update_book(Request $req, $id)
    {
        $book = Book::find($id);
        $book->name= $req->input('name');
        $book->isbn = $req->input('isbn');
        $book->author = $req->input('author');
        $book->save();
        return $book;
    }
    function delete ($id)
    {
        $response = Book::where('id', $id)->delete();
        if($response)
        {
            return ["response"=> "Product has been delete"];
        }
        else {
            return ["response" => "Operation failed"];
        }
    }
    function getBook($id)
    {
        return $id;
    }
    function search($key)
    {
        return Book::where('name' ,'Like', "%$key%")->get();
    }
}
