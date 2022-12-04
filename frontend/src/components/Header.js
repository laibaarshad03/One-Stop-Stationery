import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions';
import  {useState, useEffect} from 'react'
import {NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Header = ()=> {
  let history = useNavigate()
  const dispatch=useDispatch()
  const { loading, error, userInfo } = useSelector((state) => state.userLogin)


  const logoutHandler = () => {
    dispatch(logout())
    history('/')
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
              <Link to={'/'}>
                <NavDropdown.Item 
              onClick ={logoutHandler}>
               Log out
              </NavDropdown.Item>
              </Link>
            </NavDropdown>
          ): 
            <Nav className="justify-content-end">
              <Nav.Link href="/api/login" >Log In</Nav.Link>
            </Nav>
          }
        </Container>
      </Navbar>
    </>
  );
}

export default Header;