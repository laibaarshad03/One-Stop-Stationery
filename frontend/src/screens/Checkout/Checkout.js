import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Form, Container, Row,Col, Button } from 'react-bootstrap'
const Checkout = () => {
  return (
    <div >
      <Header/>
      <Container className="square border border-1 con">
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Information</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Shipping adress</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
      </Container>
      
    </div>
  )
}

export default Checkout
