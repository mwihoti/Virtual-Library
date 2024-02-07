# Virtual Library Web Application

## Overview
The Virtual Library is a small web application built using Laravel for the backend and ReactJS for the frontend. 
It allows users to manage a list of books and authors.

## Features
- View a list of books
- View details of a specific book, including the author's information
- View a list of authors
- View details of a specific author, including the books they have written
- Add a new book
- Add a new author


## Project Structure
- **Backend (Laravel):** The backend code is located in the `virtual-backend` directory. It includes controllers, models, routes, and migrations for books and authors.
- **Frontend (ReactJS):** The frontend code is located in the `Virtual-lib dashboard` directory. It includes React components, styles, and API service functions.

## Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Composer](https://getcomposer.org/) installed
- [MySQL](https://www.mysql.com/) installed and configured

## Setup

### Backend (Laravel)
1. Clone the repository:
   ```bash
   git clone https://github.com/mwihoti/virtual-library.git

2. Navigate to the backend directory:

```bash
      Copy code
      cd virtual-library/virtual-backend
```
3. Install dependencies:


```bash
      Copy code
      composer install
      Copy the .env.example file to create a .env file:
```
      
 ```bash
      Copy code
      cp .env.example .env
      Configure the .env file with your database connection details.
```
      
4. Generate the application key:

      
 ```bash
      Copy code
      php artisan key:generate
```
5. Run migrations to create the database tables:

      
```bash
      Copy code
      php artisan migrate
```
6. Start the Laravel development server:

      
```bash
      Copy code
      php artisan serve
```
7. Frontend (ReactJS):
      Open a new terminal window and navigate to the frontend directory:


```bash
   Copy code
   cd virtual-library/virtual-lib_dashboard
```
8. Install dependencies:


```bash
   Copy code
   npm install
```
9. Start the React development server:


```bash
   Copy code
   npm start
```
   Open your browser and go to http://localhost:3000 to access the React app.



Usage
Visit http://localhost:8000 to access the Laravel backend.
Use the React app at http://localhost:3000 to interact with the frontend.

