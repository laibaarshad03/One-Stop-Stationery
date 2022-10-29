import React from 'react'
import './Login.css'
const Login = () => {
  return (
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
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
