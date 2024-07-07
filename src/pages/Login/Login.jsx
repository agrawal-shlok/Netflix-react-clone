import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

const[signstate,setSignstate] = useState('Sign In')
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const user_auth = async (evt) =>{


  evt.preventDefault();
  setLoading(true)
  if(signstate  === "SignIn" )
  {
    await login(email,password)
  }else{
    await signup(name,email,password)
  }
  setLoading(false)
}



  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> : 
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{signstate}</h1>
        <form >
          {signstate === 'Sign Up' ? <input   value = {name} onChange ={(e) =>{setName(e.target.value)}} type="text" placeholder='Your Name'/> : <></>}
          <input type="email" placeholder='Email' value = {email} onChange ={(e) =>{setEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' value = {password} onChange ={(e) =>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type='submit'>{signstate}</button>
          <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
          </div>
          
        </form>
        <div className="form-switch">
          {signstate === 'Sign In' ? <p>New To Netflix? <span onClick={() =>{setSignstate("Sign Up")}}>Sign Up</span></p>
          :<p>Already Have An Account? <span onClick={() =>{setSignstate("Sign In")}}>Sign In</span></p>}
        
        
        </div>
      </div>
    </div>
  )
}

export default Login