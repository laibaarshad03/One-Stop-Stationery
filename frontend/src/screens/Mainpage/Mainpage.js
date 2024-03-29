import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Mainpage.css';
import { BsFillCartFill } from "react-icons/bs";
import {Button,FormControl, ListGroup}  from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import  {useState} from 'react'
//import {FaUser} from 'react-bootstrap-icons'
const Mainpage = () => {
  const [keyword, setKeyword] = useState('')
  function handleSubmit(category) {
    localStorage.setItem('category', category)
  }
  function search(key){
    localStorage.setItem('keyword', key)
  }
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
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
              />
              <Link to={`/api/search`}>
                  <Button id="button" onClick={() => search(keyword)}>
                    Search
                  </Button>
              </Link>
            </InputGroup>
          </div>
          <div style={{width:"20%", marginTop:"5%"}}>
          <a href="/api/login" style={{color:"black"}}>
            <i class="fa fa-user" style={{fontSize:"30px", marginLeft:"48%"}}></i>
          </a>
          
          <a href="/api/cart/:id" style={{color:"black"}}>
          <BsFillCartFill style={{marginLeft: "7%", fontSize:"28px", marginBottom:"5%"}}></BsFillCartFill>
            
          </a>
          </div>
        </div>
        <div>
        <ListGroup class="list-group"  style={{flexDirection: "row"}}>
          <ListGroup.Item class="list-group-item1" style={{width:"25%"}}>
          <a class="item" href="/api/viewItems" onClick={() => handleSubmit('Basic Supplies')}>
          <div class="list-group-item1" style={{textAlign: "center"}}>
            Basic Supplies
          </div>
          </a>
         </ListGroup.Item>
          <ListGroup.Item class="list-group-item1" style={{width:"25%"}}>
          <a  class="item" href="/api/viewItems"onClick={() => handleSubmit('Paper Products')}>
           <div class="list-group-item1" style={{textAlign: "center"}}> Paper Products  </div>  </a></ListGroup.Item>
          <ListGroup.Item class="list-group-item1" style={{width:"25%"}}><a class="item" href="/api/viewItems"onClick={() => handleSubmit('Office Supplies')}
          > <div class="list-group-item1" style={{textAlign: "center"}}> Office/Desk Supplies</div></a></ListGroup.Item>
          <ListGroup.Item class="list-group-item1" style={{width:"25%"}}><a class="item" href="/api/viewItems" onClick={() => handleSubmit('Painting & Drawing')}>
          <div class="list-group-item1" style={{textAlign: "center"}}> Painting & Drawing </div> </a></ListGroup.Item>
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
