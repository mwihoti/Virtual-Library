import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function Updates() {
    const [data, setData] = useState({name: '', isbn: '', author: ''});
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(()=>{
        const fetchData= async() =>
        {
        try {
        let result = await fetch(`http://localhost:8000/api/book/${id}`);
        result = await result.json();
        setData(result)
        } catch(error){
            console.log("Missing data", error)
        }
    }; fetchData();}, [id]);

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setData({ ...data, [name]: value })

    };
    const handleUpdate = async () => {
      try {
        await fetch(`http://localhost:8000/api/book/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(data)
        })
      }
      catch (error)
      {
        console.error("Error updating", error)
      }
    }
    
  return (
    <div>
        <h1 className='text-uppercase text-decoration-underline'>Update Books</h1>
        <input type='text' name='name' value={data.name || '' } onChange={handleInputChange} /> <br /> <br />
        <input type='text' name= 'isbn' value={data.isbn || ''} onChange={handleInputChange} /> <br /> <br />
        <input type='text' name= 'author' value={data.author|| ''} onChange={handleInputChange}/> <br/><br/>
       

        <button onClick={handleUpdate}>Update Button</button>
        
    </div>


  )
}

export default Updates