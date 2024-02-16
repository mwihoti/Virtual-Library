import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function UpdateAuthor() {
    const [author, setAuthor] = useState([]);
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

    return (
    <div>
        <h1>Update Author</h1>
        <input type='text' defaultValue={author.name} /> <br/> <br/>
        <input type="text" defaultValue={author.id} /> <br/><br/>

        <input type='text' defaultValue={author.gender} /> <br/> <br/>
        <input type='text' defaultValue={author.age} /> <br/> <br/>
        <input type='text' defaultValue={author.country} /> <br/> <br/>
        <input type='text' defaultValue={author.genre} /> <br/> <br/>

        <button>Update Button</button>


    </div>
  )
}

export default UpdateAuthor