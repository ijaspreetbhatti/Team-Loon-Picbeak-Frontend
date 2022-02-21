import React, { useReducer, useState } from 'react'
import Button from '../../shared/ButtonComponent/Button';

import "./Login.scss";

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'USER_ERROR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
};


function Login(props) {
    const [userPassword, setUserPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState();
    const [formValid, setFormValid] = useState(false);

    const [emailValidState, dispatchValidEmail] = useReducer(emailReducer, { value: '', isValid: null })

    const emailChangeHandler = (event) => {
        dispatchValidEmail({ type: 'USER_INPUT', value: event.target.value });
    }

    const passwordChangeHandler = (event) => {
        setUserPassword(event.target.value);

        setFormValid(
            emailValidState.isValid && event.target.value.trim().length > 8
        )
    };

    const emailValidateHandler = (event) => {
        dispatchValidEmail({ type: 'USER_ERROR' })
    };

    const passwordValidateHandler = () => {
        setPasswordValid(userPassword.trim().length > 8);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailValidState.value, userPassword);
    }


    return (
        <div className="loginWrapper">
            <form onSubmit={submitHandler}>
                <h1>Log in</h1>
                <div className={`emailWrapper ${emailValidState.isValid === false ? 'error' : ''}`}>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={emailValidState.value}
                        onChange={emailChangeHandler}
                        onError={emailValidateHandler} />

                </div>
                <div className={`passwordWrapper ${passwordValid === false ? 'error' : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userPassword}
                        onChange={passwordChangeHandler}
                        onError={passwordValidateHandler} />
                    <a href="/">Forgot password?</a>
                </div>
                <div className="buttonWrapper">
                    <Button type="submit" className="login" disabled={!formValid}>Log in</Button>
                </div>
                <span>New to Picbeak? <a href="/">Creat account</a></span>
            </form>
        </div>
    )
}

export default Login
