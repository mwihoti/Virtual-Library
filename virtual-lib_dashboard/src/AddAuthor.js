import React, { useState } from 'react'

function AddAuthor() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [genre, setGenre] = useState("");

    async function AddAuthors ()
    {
        console.warn(name, gender, age, country, genre);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('age', age);
        formData.append('country', country);
        formData.append('genre', genre)
        let response = await fetch("http://localhost:8000/api/author",{
            method: 'POST',
            body: formData
          });
          alert("Data has been created");

    }

  return (
    <div>
        <div>
        <h1>Add Authors</h1>

        <div>
        <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Name'/>
        <input type="text" onChange={(e) => setGender(e.target.value)} className='form-control' placeholder='gender'/>
        <input type="text" onChange={(e) => setAge(e.target.value)} className='form-control' placeholder='Age'/>
        <input type="text" onChange={(e) => setCountry(e.target.value)} className="form-control" placeholder='country'/>
        <input type="text" onChange={(e) => setGenre(e.target.value)} className="form-control" placeholder='genre'/>
        
        </div>
        <button className='btn btn-primary' onClick={AddAuthors}>ADD BOOK</button>

       
        
        </div>
    </div>
  )
}

export default AddAuthor