import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import './SignIn.css'

const SignIn = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        console.log("signin");

        auth.
            signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault()
        console.log("register");

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // to push the user to home page
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="signin">
            <Link to={'/'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0n2x9JnhQ4WNCtEHoCgtdWTqp3OMYZJYWgIFW7nSo&s" alt="amazon logo" /></Link>
            <div className="signin__container">
                <h1>Sign-in</h1>
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="button" value="Sign In" onClick={signIn} />
                </form>
                <p>
                    By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a>
                    Need help?
                </p>
                <button onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default SignIn