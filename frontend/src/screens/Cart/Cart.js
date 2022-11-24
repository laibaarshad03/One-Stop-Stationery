import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Row,Col, Button } from 'react-bootstrap'
import './Cart.css'
const Cart = () => {
  return (
    <div>
      <Header/>
        <Container className="square border border-1 con">
            <Row className="heading">
                <Col className="center-text">
                    <h5>Product</h5>
                </Col >
                <Col className="center-text">
                    <h5>Price</h5>
                </Col>
                <Col className="center-text">
                    <h5>Quantity</h5>
                </Col>
                <Col className="center-text">
                    <h5>Total</h5>
                </Col>
                
            </Row>

            <Row className="itemRow">
                <Col  className="center-text" >
                    <img style={{marginLeft:"6%"}}
                    src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                    className='img-fluid shadow-2-strong'
                    alt=''
                    width={150}
                   
                />
                <i class="fa fa-trash" style={{fontSize:"15px", marginLeft:"10%"}}></i>
                </Col>
                <Col  className="center-text">
                    Rs.1,990.00
                </Col>
                <Col  className="center-text">
                    <Row>
                        <h4>
                        <a className="sign" href="#"> + </a>
                        </h4>
                    </Row>
                    <Row style={{marginLeft: "1%"}}>
                        <h4> 2
                        </h4>
                    </Row>
                    <Row style={{marginLeft: "1%"}}>
                        <h4>
                        <a className="sign"  href="#"> - </a>
                        </h4>
                    </Row>
                </Col>
                <Col className="center-text">
                    Rs.4,990.00
                </Col> 
            </Row>
            <hr/>
            <Row style={{height: "50px"}}>
                <Col style={{marginLeft:"43px"}}>
                    <i class='fas fa-angle-double-left'></i>
                    <a href="/" style={{color:"black"}}> Continue shopping </a>
                </Col>
                <Col  style={{marginRight:"43px"}}>
                    <Button className="float-end but">
                    Proceed to Checkout
                    </Button>
                </Col>
                
            </Row>
        </Container>
     
    </div>
  )
}

export default Cart
