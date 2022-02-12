import React, { useState } from 'react'
import Button from '../shared/ButtonComponent/Button';

import "../../Styles/Login.scss";

function Login(props) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <div className="loginWrapper">
            <form action="">
                <h1>Log in</h1>
                <div className="emailWrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="passwordWrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <a href="/">Forgot password?</a>
                </div>
                <div className="buttonWrapper">
                    <Button type="submit" className="login">Log in</Button>
                </div>
                <span>New to Picbeak? <a href="/">Creat account</a></span>
            </form>
        </div>
    )
}

export default Login
