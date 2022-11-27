import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col,Form, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useNavigate,useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CartScreen = ({ }) => {
    const { id } = useParams();

    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    // console.log(qty)

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const {cartItems} = cart
    // console.log(cartItems)

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
        console.log('checkout')
    }


    return(
        <>
        <div><Header/></div>
        <Container>
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? 
                <h3>
                    your cart is empty
                </h3> : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item =>(
                            <ListGroup.Item key={item.itemId}>
                                <Row>
                                    <Col md={4}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={4}>
                                        <Link to={`/api/viewitems/${item.itemId}`}  style={{ textDecoration: 'none', color: 'black'}}>
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={2}>
                                    <Form.Control as='select' value={item.qty} 
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
                                        <Button type='button' variant='light'
                                        onClick={() => removeFromCartHandler(item.itemId)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h5>SubTotal ({cartItems.reduce((acc,item) =>
                            acc + item.qty , 0)}) items</h5>
                            ${cartItems.reduce((acc,item) => acc+item.qty * item.price , 0).
                            toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className="btn-block" disabled={cartItems.length === 0}
                            onClick = {checkoutHandler}>
                                Proceed to checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>

        </Row>
        </Container>
        <div><Footer/></div>
        </>
    )
}
export default CartScreen