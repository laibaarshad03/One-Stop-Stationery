import React from 'react'
import './Signup.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Signup = () => {
    return (
      <div>
      <div>
        <Header/>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up Form</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <div> 
                  <input style={{ width:"100%", height:"5vh"}}
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter a valid username"
                  />
              </div>
            </div>
            <div className="form-group mt-3" style={{paddingTop: "2%", }}>
              <label>Email address</label>
              <div> 
                  <input style={{ width:"100%", height:"5vh" }}
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter a valid email"
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
            <div className="form-group mt-3" style={{paddingTop: "2%", }}>
              <label>Confirm Password</label>
              <div>
                  <input style={{ width:"100%", height:"5vh"}}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Re-enter password"
                  />
              </div>
            </div>
            <div className="form-group mt-3" style={{paddingTop: "2%", }}>
              <label>Address</label>
              <div> 
                  <input style={{ width:"100%", height:"5vh"}}
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter delivery address"
                  />
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div><Footer/></div>
      </div>
    )
  }

  export default Signup