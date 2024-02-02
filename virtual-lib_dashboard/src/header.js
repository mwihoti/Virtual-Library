import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
     
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto navbar_wrapper">
              <Link to="/update">Home</Link>
              <Link to="/authors">Authors</Link>
              <Link to="/booklist">Book List</Link>
              <Link to="/books">Book</Link>
            </Nav>
          
        </Navbar>
        </>
        )
        }
        export default Header
