import React from 'react'
import './Login.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import  {useState, useEffect, useSelector} from 'react'
import { login } from '../../actions/userActions'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let history = useNavigate()
  const dispatch = useDispatch()
  // const userLogin = useSelector((state)=>state.userLogin)
  //const { loading, error, userInfo }=userLogin
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const redirect = location.search ?location.search.split('=')[1] : '/'
  
  // useEffect(()=>{
  //   if (userInfo){
  //     history("/api/viewItems")
  //   }
  // }, [dispatch, history, userInfo])

  const submitHandler=(e)=>{
    console.log(email,password)
    dispatch(login(email, password))
    // history("/api/viewItems")
  }

  return (
    <div>
    <div>
      <Header/>
    </div>   
    <div style={{width:"100%", height:"90vh", display:"flex"}}>
      <div style={{width:"100%"}}>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <div> 
                    <input style={{ width:"100%", height:"5vh"}}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    id="password"
                    className="form-control mt-1"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter password"
                    />
                </div>
              </div>
              <div>
                <button onClick={submitHandler} type="button" className="button">
                  Sign In
                </button>
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
