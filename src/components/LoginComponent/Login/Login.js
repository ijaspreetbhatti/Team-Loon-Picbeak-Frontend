import React, { useReducer, useState } from 'react'
import Button from '../../shared/ButtonComponent/Button';
import Card from '../../shared/DialogComponent/Card';
import axios from 'axios'
import MessagePop from '../../shared/MessagePopComponent/MessagePop'

import "./Login.scss";

function Login(props) {
    const [changeModal, setChangeModal] = useState(false);
    const [nickName, setnickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    async function registerUser(event) {

        event.preventDefault();

        let signupConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const data = JSON.stringify({ nickName, email, password })
        console.log('sending data here', data)


        await axios
            .post('https://pic-beak-backend.herokuapp.com/api/v1/profiles', data, signupConfig)
            .then(
                res => localStorage.setItem('userInfo', JSON.stringify(res.data._id)),
                setEmail(''),
                setPassword(''),
                setnickName(''),
                setChangeModal(false),
                props.onClose(false),
                props.setShowPopUp(true),
            )
            .catch(error => console.error(error));
    }

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            let loginConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            };

            const { data } = await axios.post('https://pic-beak-backend.herokuapp.com/api/v1/login/', { email, password }, loginConfig)

            setEmail('');
            setPassword('');
            setnickName('');
            console.log(data);
            if (email == data.email && password == data.password) {
                localStorage.setItem('userInfo', JSON.stringify(data.user))
                setError(false)
                props.setLoginPopUp(true)
            } else {
                setError(true)
            }

            if (localStorage.getItem('userInfo')) {
                props.onClose(false)
            }

        } catch (error) {
            console.error(error)
        }
    }

    if (!props.show) {
        return null;
    }

    const enterLoginKey = (e) => {
        if (e.keyCode === 13) {
            loginUser(e);
        }
    }
    const enterSignupKey = (e) => {
        if (e.keyCode === 13) {
            return registerUser(e);
        }
    }

    return (
        <div>
            <div className="modalbg" onClick={props.onClose}></div>
            <Card>
                {!changeModal ? (
                    <form onSubmit={loginUser} >
                        <div className="modalHeader">
                            <h1>Log in</h1>
                            <Button className="exit" onClick={props.onClose}></Button>
                        </div>
                        <div className="emailWrapper">

                            <label htmlFor="email">Email</label>
                            <input
                                className={`${error ? "error" : ""}`}
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => enterLoginKey(e)}
                                value={email} />

                        </div>
                        <div className="passwordWrapper" >
                            <label htmlFor="password">Password</label>
                            <input
                                className={`${error ? "error" : ""}`}
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => enterLoginKey(e)}
                                value={password} />
                            {error ? (<div className="errorMessage">Invalid Email or Password!</div>) : (null)}
                            <button href="/">Forgot password?</button>
                        </div>
                        <div className="buttonWrapper">
                            <Button type="submit" className="primary">Log in</Button>
                        </div>
                        <span>New to Picbeak? <button onClick={() => setChangeModal(true)}>Create account</button></span>
                    </form>
                ) : (
                    <form onSubmit={registerUser}>
                        <div className="modalHeader">
                            <h1>Create Account</h1>
                            <Button className="exit" onClick={props.onClose}></Button>
                        </div>

                        <div className="nicknameWrapper">

                            <label htmlFor="nickName">Nickname</label>
                            <input
                                type="text"
                                id="nickName"
                                name="nickName"
                                value={nickName}
                                onChange={(e) => setnickName(e.target.value)}
                                onKeyDown={(e) => enterSignupKey(e)} />
                        </div>

                        <div className="emailWrapper2">

                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => enterSignupKey(e)} />
                        </div>

                        <div className="passwordWrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => enterSignupKey(e)} />
                        </div>

                        <div className="buttonWrapper">
                            <Button type="submit" className="primary">Create</Button>
                        </div>
                        <span>Already have an account? <button onClick={() => setChangeModal(false)}>Log in</button></span>
                    </form>
                )}
            </Card>

        </div>
    )
}

export default Login
