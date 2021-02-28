import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import './Login.css';
import {auth} from './firebase';
function Login() {
    const history = useHistory();  // push to history when u redirect
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) =>{
        event.preventDefault();  //stops the page refresh
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
            history.push("/");  //redirect to home page after successfully logged in
        })
        .catch(err => alert(err.message));
    }

    const register = (event) =>{
        event.preventDefault();  //stops the page refresh
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push("/");
        }).catch(err => alert(err.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="loginLogo" src="https://th.bing.com/th/id/OIP.9l7oS9LpgfDzE-jh5Kkl5QHaDa?w=332&h=161&c=7&o=5&pid=1.7" alt=""/>
            </Link>
            <div className="loginContainer">
                <h1>Sign in</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type="text" value={email} onChange={event=>setEmail(event.target.value)} />
                   <h5>Password</h5>
                   <input  type="text" name="pass" value={password} onChange={event=>setPassword(event.target.value)} />
                   <button type="submit" value={password} onClick={login} className="signInButton" >Sign In</button>
               </form>
               <p>
                   By signing-in, you agree to Amazon's Condition of Use and Privacy Notice.
               </p>
                <button onClick={register} className="regiButton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
