import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { ListGroup } from 'react-bootstrap'
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import './Admin.css'

const Admin = () => {

    const [category, setCat] = useState('')

    const basic = () => {
        setCat=("basic")
    }
    const journal = () => {
        setCat=("journal")
    }
    const office = () => {
        setCat=("office")
    }

    return(
        
        <>
        <div><Header/></div>
        <div className='mainClass'>
            <div>
            <ListGroup class="list-group">
            <ListGroup.Item class="list-group-item" onClick={()=>basic()}> <a class="item" href="#">Basic Supplies</a></ListGroup.Item>
            <ListGroup.Item class="list-group-item" onClick={()=>journal()}><a class="item" href="#">Journaling Essentials</a></ListGroup.Item>
            <ListGroup.Item class="list-group-item" onClick={()=>office()}><a class="item" href="#">Office/Desk Supplies</a></ListGroup.Item>
            {/* <ListGroup.Item class="list-group-item"><a class="item" href="#">Pencils & Erasers </a></ListGroup.Item>
            <ListGroup.Item class="list-group-item"><a class="item" href="#">Gift Bags </a></ListGroup.Item> */}
            </ListGroup>
            </div>
            <div style={{ display: setCat==="basic" ? "flex" : "none" }}>
                <label>BASIC</label>
                {/* console.log(setCat==="basic") */}
            </div>
            <hr></hr>
            <div className='addRemove'>
                <div className='remove'>
                <div className='add-title'><h3><b>REMOVE ITEM</b></h3></div>
                {/* display all items using usetstate and then have a remove option on the side of it */}
                </div>
                <div className='add'>
                    <div className='add-title'><h3><b>ADD ITEM</b></h3></div>
                    
                    <form>
                        <div className="form-group mt-3">
                        <label>Item image</label>
                        <div> 
                            <input style={{ width:"50%", height:"5vh"}}
                            type="text"
                            className="form-control mt-1"
                            placeholder="Upload Image"
                            />
                        </div>
                        </div>
                        <div className="form-group mt-3">
                        <label>Item name</label>
                        <div> 
                            <input style={{ width:"50%", height:"5vh"}}
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter a valid item name"
                            />
                        </div>
                        </div>
                        <div className="form-group mt-3">
                        <label>Item Description</label>
                        <div> 
                            <input style={{ width:"50%", height:"5vh"}}
                            type="textarea"
                            className="form-control mt-1"
                            placeholder="Enter description"
                            />
                        </div>
                        </div>
                    </form>
                </div>
                
            </div>
            <hr></hr>
        </div>
        <div>

        </div>
        <div><Footer/></div>
        </>

    )
}

export default Admin