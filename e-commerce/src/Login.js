import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase/firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to ='/'>
            <img className = "login__logo" src="https://bgr.com/wp-content/uploads/2020/09/amazon-logo-sign.jpg?quality=70&strip=all&w=640&h=500&crop=1" alt="amazon_logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h4>Email</h4>
                    <input type="text" value={email} onChange={ e => setEmail(e.target.value)} />
                    <h4>Password</h4>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button  type = 'submit' onClick = {signIn} className="login__signInButton" > Sign In </button><br></br>
                    <button onClick = {register} className="login__registerButton">Create New Account </button>
                </form>
            </div>            
        </div>


    )
}

export default Login
