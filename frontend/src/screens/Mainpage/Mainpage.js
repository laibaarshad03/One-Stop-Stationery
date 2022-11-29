import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidemenu from '../../components/Sidemenu'
import Carousel from '../../components/Carousel'
import InputGroup from "react-bootstrap/InputGroup";
import './Mainpage.css';
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { ListGroup } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
const Mainpage = () => {
  return (
    <>
        <div>
            <Header/>
        </div>
        <div style={{display:"flex"}}>
          <div style={{width:"80%"}}>
            <InputGroup style={{marginLeft:"30%",marginTop:"5%",  width:"65%"}}>
            <FormControl 
              placeholder="What are you looking for?"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button id="button" >
              Search
            </Button>
            </InputGroup>
          </div>
          
          <div style={{width:"20%", marginTop:"5%"}}>
          <a href="/api/login" style={{color:"black"}}>
            <i class="fa fa-user" style={{fontSize:"25px", marginLeft:"50%"}}></i>
          </a>
          <a href="/api/cart" style={{color:"black"}}>
            <i class="fa fa-shopping-cart" style={{fontSize:"25px", marginLeft:"10%"}}></i>
          </a>
          </div>
        </div>

        <div>
        <ListGroup class="list-group">
          <ListGroup.Item class="list-group-item1" >
            <Link to={'/api/viewitems'} style={{ textDecoration: 'none' }}>
            Basic Supplies    
            </Link>
            {/* <a class="item" href="#">Basic Supplies</a> */}
          </ListGroup.Item>
          <ListGroup.Item class="list-group-item1"><a class="item" href="#">Paper Products</a></ListGroup.Item>
          <ListGroup.Item class="list-group-item1"><a class="item" href="#">Office/Desk Supplies</a></ListGroup.Item>
          <ListGroup.Item class="list-group-item1"><a class="item" href="#">Paiinting & Drawing </a></ListGroup.Item>
          {/* <ListGroup.Item class="list-group-item"><a class="item" href="#">Gift Bags </a></ListGroup.Item> */}
        </ListGroup>
       
        </div>
        <div style={{margin:"2%"}}>
        <Carousel/>
        </div>
        
        <div>
        <Footer/>
        </div>
    </>
  )
}

export default Mainpage
