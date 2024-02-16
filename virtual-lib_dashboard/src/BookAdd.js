import React, {  useState } from 'react';

function BookAdd() {
    const [name, setName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [author_id, setAuthor_id] = useState("");
    
    async function addbook ()
    {
        console.warn(name, isbn, author);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('isbn', isbn);
        formData.append('author', author);
        formData.append('author_id', author_id);
        let response = await fetch("http://localhost:8000/api/book",{
            method: 'POST',
            body: formData
          });
          alert("Book Data has been created");
       
          console.warn("Book Result", response)
          setName("");
          setIsbn("");
          setAuthor("");
          setAuthor_id("");


    }

  return (
    <div>
        <div>
        <h1>Add Books</h1>

        <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Name'/>
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} className='form-control' placeholder='isbn'/>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='form-control' placeholder='Author'/>
        <input type="text" value={author_id} onChange={(e) => setAuthor_id(e.target.value)} className='form-control' placeholder='Author_id'/>
        </div>
        <button className='btn btn-primary' onClick={addbook}>ADD BOOK</button>

       
        
        </div>
    </div>
  )
}

export default BookAdd