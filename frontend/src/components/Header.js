import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <>
      <Navbar style={{backgroundColor:"#e8a18e"}}>
        <Container>
          <Navbar.Brand href="#home"><b>ONE STOP STATIONERY</b></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/api/cart/0">Cart</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
             <Nav.Link href="/" >Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;