import React, { useState } from 'react'

function AddAuthor() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [genre, setGenre] = useState("");

    async function addbook ()
    {
        console.warn(name, gender, age, country, genre);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('age', age);
        formData.
        let response = await fetch("http://localhost:8000/api/book",{
            method: 'POST',
            body: formData
          });
          alert("Data has been created");

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

export default AddAuthor