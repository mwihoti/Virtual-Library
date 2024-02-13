import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await fetch("http://localhost:8000/api/books");
            let result = await response.json();
            setBooks(result);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
      console.warn("Books", books)

      async function deleteOp(id)
      {
        let result = await fetch("http://localhost:8000/api/book/delete/"+id, {
          method: 'DELETE'
        });
        result = await result.json();
        
        console.warn(result);
        setBooks (prevBooks => prevBooks.filter(book => book.id !== id))
      }
   
    
  return (
    <div>
        <h1>BookList</h1>

        <div>
        <Table>
            <tr>
                <td>Id</td>
                <td>name</td>
                <td>Isbn</td>
                <td>Author</td>
                <td>Operations</td>
                
            </tr>
            { 
                books.map((item)=>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.isbn}</td>
                <td>{item.author}</td>
        
                <td>
                    <Link to ={"update/"+item.id}>
                    <span  className="update">Update</span>
                    </Link>
                    <span className="delete" value={books} onClick={()=>deleteOp(item.id)}>Delete</span>
                    
                    </td>
            </tr>

                )
            }
        </Table>
        
        </div>

        
        

       
        
        </div>
  )
}

export default BookList