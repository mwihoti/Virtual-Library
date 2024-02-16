import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function Updates() {
    const [data, setData] = useState([]);
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
    }; fetchData();}, [id])
    
  return (
    <div>
        <h1>Update Books</h1>
        <input type='text' value={data.name} /> <br /> <br />
        <input type='text' value={data.isbn} /> <br /> <br />
        <input type='text' value={data.author} /> <br/><br/>
       

        <button>Update Button</button>
        
    </div>


  )
}

export default Updates