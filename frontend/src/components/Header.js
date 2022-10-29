import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar style={{backgroundColor:"#e8a18e"}}>
        <Container>
          <Navbar.Brand href="#home"><b>ONE STOP STATIONARY</b></Navbar.Brand>
          <Nav className="me-auto">
            <i class="bi bi-cart"></i>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;