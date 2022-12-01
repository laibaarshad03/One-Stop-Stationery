import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions';
import { useNavigate } from 'react-router-dom'
import  {useState, useEffect} from 'react'

const Header = ()=> {
  //let history = useNavigate()
  const dispatch=useDispatch()
 // const { userInfo }= useSelector((state) => state.userLogin)
  
  // useEffect(() => {
  //   if (userInfo) {
  //     history("/api/viewItems")
  //   }
  // }, [dispatch, userInfo, history])

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
          <Nav className="justify-content-end">
             <Nav.Link href="/"  onClick ={logoutHandler}>Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;