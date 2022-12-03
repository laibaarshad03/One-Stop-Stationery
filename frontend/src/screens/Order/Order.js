import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from 'react-router-dom';
import { Row, Col,Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckoutSteps from "../../components/CheckoutSteps";
import { useSelector } from "react-redux";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Order = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const { checkoutAddress } = cart
    //calc price
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => 
    acc+item.price * item.qty, 0)
    const placeOrderHandler = () => {
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
        console.log('order placed')
    }
    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100

    cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2))

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    return (
        <>
        <Header/>
        <hr></hr>
            <CheckoutSteps s1 s2 s3 s4/>
        <hr></hr>
        <Row>
            <Col md={8} style={{paddingLeft:'5px'}}>
                <ListGroup 
                className='shadow p-3 mb-5 bg-white rounded'
                variant='flush' 
                style={{flexDirection:'column'}}>
                    <ListGroup.Item >
                        <h3>Shipping To</h3>
                        <p>
                            <strong>Address: </strong>
                            {checkoutAddress.address}
                        </p>
                        <p>
                            <strong>Country: </strong>
                            {checkoutAddress.country}
                        </p>
                        <p>
                        <strong>City: </strong>
                            {checkoutAddress.city}
                        </p>
                        <p>
                        <strong>Postal Code: </strong>
                            {checkoutAddress.postalCode}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Payment Method</h3>
                        <strong>Credit Status: </strong>
                        Payment Successful!
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Order items</h3>
                        {cart.cartItems.length === 0 ?
                        <p>cart is empty</p> : (
                            <ListGroup variant='flush' style={{flexDirection:'column'}}>
                                {cart.cartItems.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.image} alt={item.name}
                                                fluid rounded />
                                            </Col>
                                            <Col md={4}>
                                                <Link 
                                                to={`/api/viewitems/${item.itemId}`}
                                                style={{textDecoration:'none', color:'black'}}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.qty} x ${item.price} = ${item.qty * item.price}

                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
                <Card className='shadow p-3 mb-5 bg-white rounded'>
                    <ListGroup 
                    // className='shadow p-3 mb-5 bg-white rounded'
                    variant='flush' 
                    style={{flexDirection:'column'}}>
                        <ListGroup.Item>
                            <h3>Order Receipt</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Items
                                </Col>
                                <Col>${cart.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Shipping
                                </Col>
                                <Col>${cart.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Tax
                                </Col>
                                <Col>${cart.taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Total
                                </Col>
                                <Col>${cart.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Popup trigger={
                            <Button type='button'
                                className='btn-block'
                                disbaled={toString(cart.cartItems === 0)}
                                onClick={placeOrderHandler}
                                style={{background:'black'}}>
                                    Place Order
                                </Button>
                            } 
                            position="right center">
                                <div>Order has been placed !!</div>
                        </Popup>
                            {/* <Button type='button'
                            className='btn-block'
                            disbaled={toString(cart.cartItems === 0)}
                            onClick={placeOrderHandler}
                            style={{background:'black'}}>
                                Place Order
                            </Button> */}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

        <Footer/>
        </>
    )

}

export default Order