import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Row, Col,Form, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useNavigate,useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CartScreen = ({ }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    // console.log(qty)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.userLogin)

    const {cartItems} = cart
    // console.log(cartItems)
    const {userInfo} = user

    useEffect(() => {
        if(id) {
            dispatch(addToCart(id,qty))
        }
    },[dispatch,id,qty])

    const removeFromCartHandler = (id) => {
        // console.log('removed')
        dispatch(removeFromCart(id))
    }

    const checkoutHandler=()=>{
        // console.log('checkout')
        if (userInfo === null) {
            navigate('/api/login')
        }else{
            navigate('/api/checkout')
        }
    }


    return(
        <>
        <Header/>
        <Container>
        <Link className = 'btn btn-light my-3' to='/api/viewitems'>
            Continue Shopping
        </Link>
            <Row style={{marginTop:"3%"}}>
                <Col md={12}>
                    {cartItems.length === 0 ? 
                    <h5 style={{color:"darkgray"}}>
                        Your cart is empty!
                    </h5> : (
                        <>
                        <h4>Shopping Cart</h4>
                        <ListGroup variant='flush'>
                            {cartItems.map(item =>(
                                <ListGroup.Item key={item.itemId} style={{height:"100px"}}>
                                    <Row>
                                        <Col md={3}>
                                            <Image style={{height: "80px", marginTop: "2%"}} src={item.image} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/api/viewitems/${item.itemId}`}  style={{textDecoration: 'none', color: 'black'}}>
                                                <div style={{marginTop:"15%"}}> {item.name}</div>
                                            </Link>
                                        </Col>
                                        <Col md={2}>
                                            <div style={{marginTop:"23%"}}> ${item.price}</div>
                                        </Col>
                                        <Col md={2}>
                                        <Form.Control as='select' value={item.qty} style={{marginTop:"17%"}}
                                            onChange={(e) =>
                                            dispatch(addToCart(item.itemId, Number(e.target.value)))}>
                                            {[...Array(item.qtyInStock).keys()].map((x) => (
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                                        </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type='button' variant='light' style={{marginTop:"18%", marginLeft:"35%"}}
                                            onClick={() => removeFromCartHandler(item.itemId)}>
                                                <i className='fa fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        </>
                    )}
                </Col>
            </Row>
            <Row>
            <Col md={4}>
            <Card style={{marginTop:"10%"}}>
                <ListGroup variant='flush'>
                    <ListGroup.Item style={{width:"50%"}}>
                        <h6>SubTotal ({cartItems.reduce((acc,item) =>
                        acc + item.qty , 0)}) items</h6>
                        ${cartItems.reduce((acc,item) => acc+item.qty * item.price , 0).
                        toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item style={{width:"50%"}}>
                        <Button style={{backgroundColor:"black"}} type='button' className="btn-block" disabled={cartItems.length === 0}
                        onClick = {checkoutHandler}>
                            Proceed to checkout
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
            </Row>
        </Container>

       <div style={{marginTop:"9%"}}>
            <Footer/>
       </div>
        
        </>
    )
}
export default CartScreen