<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthorControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_can_get_list_of_authors()
    {
        // Arrange
        $authors = Author::factory(3)->create();

        // Act
        $response = $this->json('GET', '/api/authors');

        // Assert
        $response
            ->assertStatus(200)
            ->assertJsonCount(3, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'gender',
                        'age',
                        'country',
                        'genre',
                       
                    ],
                ],
            ]);
    }

    public function test_can_get_author_by_id()
    {
        // Arrange
        $author = Author::factory()->create();

        // Act
        $response = $this->json('GET', "/api/author/{$author->id}");

        // Assert
        $response
            ->assertStatus(200)
            ->assertJson([
                'id' => $author->id,
                'name' => $author->name,
                'gender' => $author->gender,
                'age' => $author->age,
                'country' => $author->country,
                'genre' => $author->genre,
               
            ]);
    }

    public function test_can_create_author()
    {
        // Arrange
        $authorData = [
            'name' => 'John Doe',
            'gender' => 'Male',
            'age' => 30,
            'country' => 'USA',
            'genre' => 'Fiction',
        ];

        // Act
        $response = $this->json('POST', '/api/author', $authorData);

        // Assert
        $response
            ->assertStatus(201)
            ->assertJson($authorData);
    }

    public function test_can_update_author()
    {
        // Arrange
        $author = Author::factory()->create();
        $updatedAuthorData = [
            'name' => 'Updated Author Name',
            'gender' => 'Female',
            'age' => 40,
            'country' => 'Canada',
            'genre' => 'Mystery',
        ];

        // Act
        $response = $this->json('PUT', "/api/author/{$author->id}", $updatedAuthorData);

        // Assert
        $response
            ->assertStatus(200)
            ->assertJson($updatedAuthorData);
    }

    public function test_cannot_update_nonexistent_author()
    {
        // Act
        $response = $this->json('PUT', '/api/author/999', []);

        // Assert
        $response
            ->assertStatus(404)
            ->assertJson(['error' => 'Author not found']);
    }
