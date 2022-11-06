import React from 'react'
import './Payment.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Form } from 'react-bootstrap'
import { useEffect, useState } from "react";

const Payment = () => {

    // const [code, setCode]=useState('')
    // const checkLength = event => {
    //     if ()
    // }

    return(
        <div>
        <div><Header/></div>
        <div className="Auth-form-container1" >
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Credit Card Payment</h3>
                <div className="form-group mt-3">
                    <label>Card Owner Name</label>
                    <div> 
                        <input style={{ width:"100%", height:"5vh"}}
                        type="text"
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
                        className="form-control mt-1"
                        placeholder="Enter Month"
                        />
                    </div>
                    <div> 
                        <input style={{ width:"100%", height:"5vh"}}
                        type="number"
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
                        className="form-control mt-1"
                        placeholder="Enter 3-digit code"
                        // value={code}
                        // onChange={checkLength}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="button">
                        Confirm Payment
                    </button>
                </div>
            </div>
        </form>
        </div>
        <div><Footer/></div>
        </div>
    )
}

export default Payment