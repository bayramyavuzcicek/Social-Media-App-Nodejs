import { useRef } from 'react';
import './login.css'
import { loginCall } from '../../apiCalls';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'

export default function Login() {

    const email = useRef()
    const password = useRef()
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({email:email.current.value , password:password.current.value},dispatch)
    }
 
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>SocialMediaApp</h3>
                <span className="loginDesc">
                    Connect with friends and the world arround you on SocialMediaApp.
                </span>
            </div>
            <form className="loginRight" onSubmit={handleClick}>
                <div className="loginBox">
                    <input type="email" placeholder="Email" className="loginInput" required ref={email}/>
                    <input type="password" placeholder="Password" className="loginInput" minLength={"6"} required ref={password} />
                    <button className="loginButton">{isFetching ? "Loading" : "Log In"}</button>
                    <span className='loginForgot'>Login Forgot?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </form>
        </div>
    </div>
  )
}
