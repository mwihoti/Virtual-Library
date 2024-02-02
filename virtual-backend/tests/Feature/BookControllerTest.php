<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Book;

class BookControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_can_get_list_of_books()
    {
        // Arrange
        $books = Book::factory(3)->create();

        // Act
        $response = $this->json('GET', '/api/books');

        // Assert
        $response
            ->assertStatus(200)
            ->assertJsonCount(3, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'isbn',
                        'author_id',
                       
                    ],
                ],
            ]);
    }
}
