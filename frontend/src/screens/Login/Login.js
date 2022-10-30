import React from 'react'
import './Login.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
const Login = () => {
  return (
    <div>
    <div>
      <Header/>
    </div>


    <div style={{width:"100%", display:"flex"}}>
    
      <div style={{width:"60%"}}>
        <Carousel/>
      </div>
      <div style={{width:"40%"}}>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <div> 
                    <input style={{ width:"100%", height:"5vh"}}
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    />
                </div>
              </div>
              <div className="form-group mt-3" style={{paddingTop: "2%", }}>
                <label>Password</label>
                <div>
                    <input style={{ width:"100%", height:"5vh"}}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    />
                </div>
              </div>
              <div>
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
              <div >
                <a href="#" > Click here to signup</a>               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Login
