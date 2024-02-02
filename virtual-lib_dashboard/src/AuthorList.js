import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AuthorList() {
 
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await fetch("http://localhost:8000/api/authors");
            let result = await response.json();
            setAuthor(result);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
      console.warn("Books", author)
   
    
  return (
    <div>
        <h1>BookList</h1>

        <div>
        <Table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Gender</td>
                <td>Age</td>
                <td>Country</td>
                <td>Genre</td>
                
            </tr>
            {
                author.map((item)=>
                    <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.country}</td>
                <td>{item.genre}</td>
        
                <td>
                    <Link to ={"update/"+item.id}>
                    <span  className="update">Update</span>
                    </Link>
                    
                    </td>
            </tr>

                )
            }
        </Table>
        
        </div>

        
        

       
        
        </div>
  )
}


export default AuthorList