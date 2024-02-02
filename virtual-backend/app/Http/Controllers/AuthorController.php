<?php

namespace App\Http\Controllers;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    //
    function authors()
    {
        return Author::all();

    }
    function authors_id($id)
    {
        $author = Author::find($id);

        if ($author) {
            // If the book is found, return it as a JSON response
            return response()->json($author);
        } else {
            // If the book is not found, return an error response
            return response()->json(['error' => 'Book not found'], 404);
        }
    }
    function author_c(Request $req)
    {
        return Author::create($req->all());
    }
    function update_authors(Request $req, $id)
    {
        $author = Author::find($id);

    if ($author) {
        // Validate and update the author with the JSON data
        $req->validate([
            'name' => 'required|string',
            'gender' => 'required|in:Male,Female,Other',
            'age' => 'nullable|integer',
            'country' => 'nullable|string',
            'genre' => 'nullable|string',
        ]);

        $author->update($req->all());

        // Return the updated author as a JSON response
        return response()->json($author);
    } else {
        // If the author is not found, return an error response
        return response()->json(['error' => 'Author not found'], 404);
    }
    }
}
