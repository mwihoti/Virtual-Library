<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\AuthorController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/books', [BooksController::class, 'books']);
Route::get('/books/{id}', [BooksController::class, 'books_id']);
Route::post('/book', [BooksController::class, 'book_list']);
Route::put('/book/{id}', [BooksController::class, 'update_book']);
Route::get('/authors', [AuthorController::class, 'authors']);
Route::get('/authors/{id}', [AuthorController::class, 'authors_id']);
Route::post('/author', [AuthorController::class, 'author_c']);
Route::put('/author', [AuthorController::class, 'update_authors']);

