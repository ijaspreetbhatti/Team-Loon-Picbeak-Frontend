import React, { useReducer, useState } from 'react'
import Button from '../../shared/ButtonComponent/Button';
import Card from '../../shared/DialogComponent/Card';

import "./Login.scss";

function Login(props) {

    if (!props.show) {
        return null;
    }

    return (
        <div>
            <div className="modalbg" onClick={props.onClose}></div>
            <Card>
                <form>
                    <div className="modalHeader">
                        <h1>Log in</h1>
                        <Button className="exit" onClick={props.onClose}></Button>
                    </div>
                    <div className="emailWrapper">

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email" />

                    </div>
                    <div className="passwordWrapper" >
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password" />
                        <a href="/">Forgot password?</a>
                    </div>
                    <div className="buttonWrapper">
                        <Button type="submit" className="primary">Log in</Button>
                    </div>
                    <span>New to Picbeak? <a href="/">Creat account</a></span>
                </form>
            </Card>
        </div>
    )
}

export default Login
