import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to ='/'>
            <img className = "login__logo" src="https://bgr.com/wp-content/uploads/2020/09/amazon-logo-sign.jpg?quality=70&strip=all&w=640&h=500&crop=1" alt="amazon_logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h4>Email</h4>
                    <input type="text" />
                    <h4>Password</h4>
                    <input type="password" />
                    <button className="login__signInButton"> Sign In </button><br></br>
                    <button className="login__registerButton">Create New Account </button>
                </form>
            </div>            
        </div>


    )
}

export default Login
