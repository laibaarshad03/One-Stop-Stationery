import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CheckoutSteps from '../../components/CheckoutSteps';
import { useNavigate } from "react-router-dom";
import {Form, Container, Row,Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveCheckoutAddress } from '../../actions/cartActions'

const Checkout = ({history}) => {
const navigate = useNavigate()
const cart = useSelector(state => state.cart)
const { checkoutAddress } = cart
// console.log(checkoutAddress)
  const [address, setAddress] = useState(checkoutAddress.address)
  const [city, setCity] = useState(checkoutAddress.city)
  const [postalCode, setPostalCode] = useState(checkoutAddress.postalCode)
  const [country, setCountry] = useState(checkoutAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveCheckoutAddress({address, city, postalCode, country }))
    // console.log('submit')
    navigate('/api/pay')
  }



  return (
    <div >
      <Header/>
      <Container className="square border border-1 con shadow p-3 mb-5 bg-white rounded" style={{width:"45%"}}>
        <CheckoutSteps s1 s2/>
        <hr></hr>
        {/* <div style={{textAlign:'center'}}><h1>Checkout</h1></div> */}
        <h3 className="Auth-form-title">Checkout</h3>
        <hr></hr>
        <Form id="f1" onSubmit={submitHandler}>
        <Form.Group className="mb-3"  controlId='address'>
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control as="textarea" 
            type='text'
            placeholder="Enter Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            rows={3} />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Country</Form.Label>
            <Form.Control as="input" 
            placeholder="Enter Country " 
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
            rows={1} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" >
            <Form.Label>City</Form.Label>
            <Form.Control as="input" 
            placeholder="Enter City " 
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            rows={1} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Postal Code</Form.Label>
            <Form.Control as="input" 
            placeholder="Enter Postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
            rows={1} />
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col style={{marginTop:"3%"}}>
            <Form.Group className="mb-3" >
            <i className='fas fa-angle-double-left'></i>
              <a href="/api/cart/0" style={{color:"black", marginLeft:"2%"}}> 
              Return to cart </a>
            </Form.Group>
          </Col>
          <Col>
            <Button id="b1" 
            // className="float-end" 
            type='submit'
            // onClick={{submitHandler}}
            style={{backgroundColor:"black"}}>
                Continue to Payment
               </Button>
          </Col>
        </Row>
        </Form>
      </Container>
      <div style={{marginTop:'40px'}}><Footer/></div>
    </div>
  )
}

export default Checkout
