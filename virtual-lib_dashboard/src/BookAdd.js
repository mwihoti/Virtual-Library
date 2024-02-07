import React, {  useState } from 'react';

function BookAdd() {
    const [name, setName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");

    async function addbook ()
    {
        console.warn(name, isbn, author);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('isbn', isbn);
        formData.append('author', author);
        let response = await fetch("http://localhost:8000/api/book",{
            method: 'POST',
            body: formData
          });
          alert("Book Data has been created");
        formData.append('name', name);
          console.warn("Book Result", response)

    }

  return (
    <div>
        <div>
        <h1>Add Books</h1>

        <div>
        <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Name'/>
        <input type="text" onChange={(e) => setIsbn(e.target.value)} className='form-control' placeholder='isbn'/>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} className='form-control' placeholder='Author'/>
        </div>
        <button className='btn btn-primary' onClick={addbook}>ADD BOOK</button>

       
        
        </div>
    </div>
  )
}

export default BookAdd