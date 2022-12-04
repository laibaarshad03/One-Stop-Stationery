import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap' 


const CheckoutSteps = ({s1, s2, s3, s4}) => {

    return(
        <Nav className="justify-content-center mb-4" >
            <Nav.Item  >
                {s1 ? (
                    <LinkContainer to= '/api/login'>
                        <Nav.Link>
                            <div style={{color:"green"}}> Log In </div>
                        </Nav.Link>
                    </LinkContainer>
                     ): (<Nav.Link disabled>
                        Log In
                     </Nav.Link>)
                }
            </Nav.Item>
            <Nav.Item>
                {s2 ? (
                    <LinkContainer to= '/api/checkout'>
                        <Nav.Link>
                            <div style={{color:"green"}}> Checkout </div>
                        </Nav.Link>
                    </LinkContainer>
                     ): (<Nav.Link disabled>
                        Checkout
                     </Nav.Link>)
                }
            </Nav.Item>
            <Nav.Item>
                {s3 ? (
                    <LinkContainer to= '/api/pay'>
                        <Nav.Link>
                        <div style={{color:"green"}}> Payment </div>
                        </Nav.Link>
                    </LinkContainer>
                     ): (<Nav.Link disabled>
                        Payment
                     </Nav.Link>)
                }
            </Nav.Item>
            <Nav.Item>
                {s4 ? (
                    <LinkContainer to= '/api/order'>
                        <Nav.Link>
                        <div style={{color:"green"}}> Order Placed </div>
                        </Nav.Link>
                    </LinkContainer>
                     ): (<Nav.Link disabled>
                        Order Placed
                     </Nav.Link>)
                }
            </Nav.Item>
            
        </Nav>
    )
}

export default CheckoutSteps