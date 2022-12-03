import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions';
import { useNavigate } from 'react-router-dom'
import  {useState, useEffect} from 'react'
import {NavDropdown} from 'react-bootstrap'
const Header = ()=> {

  const dispatch=useDispatch()
  const { loading, error, userInfo } = useSelector((state) => state.userLogin)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <Navbar style={{backgroundColor:"#e8a18e"}}>
        <Container>
          <Navbar.Brand href="#home"><b>ONE STOP STATIONERY</b></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/api/cart/0">Cart</Nav.Link>
          </Nav>
          {userInfo ? (
            <NavDropdown style={{color:"#4F4F4F"}} title={userInfo.name} id='username'>
              <NavDropdown.Item  onClick ={logoutHandler}>
               Log out
              </NavDropdown.Item>
            </NavDropdown>
          ): 
            <Nav className="justify-content-end">
              <Nav.Link href="/" onClick ={logoutHandler}>Log out</Nav.Link>
            </Nav>
          }
        </Container>
      </Navbar>
    </>
  );
}

export default Header;