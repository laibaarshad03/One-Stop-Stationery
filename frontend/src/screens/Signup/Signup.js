import React from 'react'
import './Signup.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import  {useState, useEffect} from 'react'
import { register } from '../../actions/userActions'
import { useDispatch,  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [verifyEmail, setVerifyEmail] = useState(false)
  const [emailCheck, setEmailCheck] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState(false)
  const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})");
  const emailRegex = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$");

  let history = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  
  useEffect(() => {
    if (userInfo) {
      history("/")
    }
  }, [dispatch, userInfo, history])

  const emailFunc = (event) => {
    setEmail(event.target.value)
    setVerifyEmail(false)

    if (emailRegex.test(event.target.value)) {
        setEmailCheck(false);
    }
    else {
        setEmailCheck(true)
    }
  } 
  
  const passwordFunc = (event) => {
    setPassword(event.target.value)

    if (passwordRegex.test(event.target.value)) {
        setPasswordCheck(false);
    }
    else {
        setPasswordCheck(true)
    }
}
  const submitHandler=(e)=>{
    dispatch(register(name,password,phone,email))
    history("/")
  }
    return (
      <div>
      <div>
        <Header/>
      </div>
      <div className="Auth-form-container1" >
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up Form</h3>
            <div className="form-group mt-3">
            <label>Name</label>
            <div> 
                <input style={{ width:"100%", height:"5vh"}}
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="form-control mt-1"
                placeholder="Enter your name"
                />
            </div>
          </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <div> 
                  <input style={{ width:"100%", height:"5vh"}}
                  type="email"
                  value={email}
                  onChange={(event) => emailFunc(event)}
                  className="form-control mt-1"
                  placeholder="Enter a valid email"
                  />
              </div>
              {emailCheck && (email.length !== 0) ?
                <div style={{ color: "red", fontSize: "10px", marginTop:"2%"}}>
                    * invalid email format
                </div>
                : verifyEmail ? <div style={{ color: "red", fontSize: "10px" }}>
                    * email already exists
                </div> : ''}
            </div>
            <div className="form-group mt-3" style={{paddingTop: "2%", }}>
              <label>Password</label>
              <div> 
                  <input style={{ width:"100%", height:"5vh" }}
                  type="password"
                  value={password}
                  onChange={(event) => passwordFunc(event)}
                  className="form-control mt-1"
                  placeholder="Enter a strong password"
                  />
              </div>
              {passwordCheck && (password.length !== 0) ?
                <div style={{ color: "red", fontSize: "10px", marginTop:"2%"}}>
                    * password should containt atleast 8 characters. 1 uppercase letter, 1 lowercase letter, 1 symbol and 1 number atleast.
                </div>
                : ''}
            </div>
            
            <div className="form-group mt-3" style={{paddingTop: "2%", }}>
              <label>Phone number</label>
              <div>
                  <input style={{ width:"100%", height:"5vh"}}
                  type="text"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="form-control mt-1"
                  placeholder="Enter phone"
                  />
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="button" onClick={submitHandler}>
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