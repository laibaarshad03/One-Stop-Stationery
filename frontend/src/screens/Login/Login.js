import React from 'react'
import './Login.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import  {useState, useEffect} from 'react'
import { login } from '../../actions/userActions'
import { useDispatch,  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let history = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, userInfo } = useSelector((state) => state.userLogin)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (userInfo) {
      history("/")
    }
  }, [dispatch, userInfo, history])

  const submitHandler=(e)=>{
    //console.log(email,password)
    dispatch(login(email, password))

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
              <div>
                Don't have an account? Click <a href="/api/signup">here</a> to sign up.
              </div>
            </div>
            {error ?
              <div class="text-danger" style={{marginLeft:"12%"}}>
                    * Invalid Email or Password
              </div>
              : ''}
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
