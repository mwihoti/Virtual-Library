import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function UpdateAuthor() {
    const [author, setAuthor] = useState({name: '', gender: '', age: '', country: '', genre: '' });
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch(`http://localhost:8000/api/author/${id}`);
                result = await result.json();
                setAuthor(result)
            } catch(error){
                console.log("Missing data", error)
            }
        }; fetchData()
    }, [id])

    const handleInputChange =(e) => {
        const {name, value} = e.target;
        setAuthor({...author, [name]: value })
    };

    const handleUpdate = async () => {
        try {
            await fetch(`http://localhost:8000/api/author/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'

            },
            body: JSON.stringify(author)
        })
        }
        catch (error)
        {
            console.error("Error updating", error)
        }
    }

    return (
    <div>
        <h1 className='text-uppercase text-decoration-underline'>Update Author</h1>
        <input type='text' name= 'name' value={author.name || ''} onChange={handleInputChange}/> <br/> <br/>
        <input type="text"  value={author.id} /> <br/><br/>

        <input type='text' name= 'gender' value={author.gender || ''} onChange={handleInputChange} /> <br/> <br/>
        <input type='text' name= 'age' value={author.age || ''}  onChange={handleInputChange}/> <br/> <br/>
        <input type='text' name= 'country' value={author.country || ''} onChange={handleInputChange} /> <br/> <br/>
        <input type='text' name= 'genre' value={author.genre || ''}  onChange={handleInputChange}/> <br/> <br/>

        <button onClick={handleUpdate}>Update Button</button>


    </div>
  )
}

export default UpdateAuthor