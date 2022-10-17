import './register.css';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router'
export default function Register() {


    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        if(password.current.value !== passwordAgain.current.value){
            password.current.setCustomValidity("Şifreler eşleşmiyor");
        }else{
            try {
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                }
                axios.defaults.baseURL= "http://localhost:5000/api";
                await axios.post('/auth/register',user);
                history("/login")
            } catch (err) {
                console.log(err);
            }
        }
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
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleSubmit}>
                    <input placeholder="Username" className="loginInput" ref={username}/>
                    <input type="email" placeholder="Email" className="loginInput" ref={email}/>
                    <input type="password" placeholder="Password" minLength={"6"} className="loginInput" ref={password}/>
                    <input type="password" placeholder="Password again" minLength={"6"} className="loginInput" ref={passwordAgain}/>
                    <button className="loginButton" type='submit'>Sıgn Up</button>
                  
                    <button className="loginRegisterButton">Log into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
