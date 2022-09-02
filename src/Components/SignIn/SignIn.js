import React from 'react'
import './SignIn.css'

const SignIn = () => {
    return (
        <div className="signin">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0n2x9JnhQ4WNCtEHoCgtdWTqp3OMYZJYWgIFW7nSo&s" alt="amazon logo" />
            <div className="signin__container">
                <h1>Sign-in</h1>
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <input type="button" value="Sign In" />
                </form>
                <p>
                    By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a>
                    Need help?
                </p>
                <button>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default SignIn