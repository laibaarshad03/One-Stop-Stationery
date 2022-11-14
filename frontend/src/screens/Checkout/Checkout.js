import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Form, Container, Row,Col, Button } from 'react-bootstrap'
const Checkout = () => {
  return (
    <div >
      <Header/>
      <Container className="square border border-1 con" style={{width:"45%"}}>
        <Form id="f1">
        <Form.Group className="mb-3" style={{marginTop:"5%"}}>
            <Form.Label>Contact information</Form.Label>
            <Form.Label className="float-end"> <a href="#" style={{textDecoration:"none", color:"gray"}}> Already have an account? Log in</a></Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Shipping address</Form.Label>
            <Form.Control as="textarea" placeholder="Address" rows={3} />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" >
            <Form.Label>First name</Form.Label>
            <Form.Control as="input" placeholder="First name" rows={1} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Last name</Form.Label>
            <Form.Control as="input" placeholder="Last name" rows={1} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Phone</Form.Label>
            <Form.Control as="input" placeholder="+92 XXX XXXXXXX " rows={1} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Postal code</Form.Label>
            <Form.Control as="input" placeholder="Postal code" rows={1} />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{marginBottom:"5%"}}>
          <Col style={{marginTop:"3%"}}>
            <Form.Group className="mb-3" >
            <i class='fas fa-angle-double-left'></i>
              <a href="/api/cart" style={{color:"black", marginLeft:"2%"}}> 
              Return to cart </a>
            </Form.Group>
          </Col>
          <Col>
            <Button id="b1" className="float-end" style={{backgroundColor:"black"}}>
                Continue to payment
               </Button>
          </Col>
        </Row>
        </Form>
      </Container>
      
    </div>
  )
}

export default Checkout
