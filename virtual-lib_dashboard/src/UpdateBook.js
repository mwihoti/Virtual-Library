import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function Updates(props) {
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
        <h1>Update Product</h1>
        <input type='text' defaultValue={data.name} /> <br /> <br />
        <input type='text' defaultValue={data.isbn} /> <br /> <br />
        <input type="text" defaultValue={data.author} /> <br/><br/>
        
    </div>


  )
}

export default Updates