import React from 'react'
import './Payment.css'
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Form } from 'react-bootstrap'
import { useEffect, useState } from "react";
import CheckoutSteps from '../../components/CheckoutSteps';

const Payment = () => {

    // const [code, setCode]=useState('')
    // const checkLength = event => {
    //     if ()
    // }
    const navigate = useNavigate()

    const submitHandler=(e)=>{
        // e.preventDefault()
        navigate('/api/order')
    }

    return(
        <div>
        <div><Header/></div>
        <div className="Container" style={{marginTop:"2%"}} >
        <Container className="square border border-1 con shadow p-3 mb-5 bg-white rounded" style={{width:"45%"}}>
            <CheckoutSteps s1 s2 s3/>
        <hr></hr>
        <Form onSubmit={submitHandler} >
        {/* <form className="Auth-form" onSubmit={submitHandler}> */}
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Credit Card Payment</h3>
                <hr></hr>
                <div className="form-group mt-3">
                    <label>Card Owner Name</label>
                    <div> 
                        <input 
                        style={{ width:"100%", height:"5vh"}}
                        type="text"
                        required
                        className="form-control mt-1"
                        placeholder="Enter Valid Owner Name"
                        />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label>Card Number</label>
                    <div> 
                        <input style={{ width:"100%", height:"5vh"}}
                        type="text"
                        required
                        className="form-control mt-1"
                        placeholder="Enter Valid Card Number"
                        />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label>Expiration Date</label>
                    <div className='expiry'>
                    <div> 
                        <input style={{ width:"100%", height:"5vh"}}
                        type="number"
                        required
                        className="form-control mt-1"
                        placeholder="Enter Month"
                        />
                    </div>
                    <div> 
                        <input style={{ width:"100%", height:"5vh"}}
                        type="number"
                        required
                        className="form-control mt-1"
                        placeholder="Enter Year" 
                        />

                    </div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label>Security Code</label>
                    <div> 
                        <input style={{ width:"100%", height:"5vh"}}
                        type="number"
                        required
                        className="form-control mt-1"
                        placeholder="Enter 3-digit code"
                        // value={code}
                        // onChange={checkLength}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2 ">
                    <button type="submit"
                    // onClick={submitHandler} 
                    className="button">
                        Confirm Payment
                    </button>
                </div>
            </div>
        </Form>
        {/* </form> */}
        </Container>
        </div>
        <div style={{marginTop:'40px'}}><Footer/></div>
        </div>
    )
}

export default Payment