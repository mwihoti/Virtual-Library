import React, { useState } from 'react';
import Header from './header';

function SearchItems() {
    const [data, setData] = useState([])
    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/" + key)
        result = await result.json();
        setData(result)

    }
    return (
        <div className='col-sm-6 offset-sm-3'>


            <h1>search items</h1>
            <input type='text' className="form-control" onChange={(e) => search(e.target.value)} placeholder='Search items' />


        </div>
    )
}

export default SearchItems