import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
     
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="Update">Home</Nav.Link>
              <Nav.Link href="Authors">Features</Nav.Link>
              <Nav.Link href="Books">Pricing</Nav.Link>
            </Nav>
          
        </Navbar>
        </>
        )
        }
        export default Header
