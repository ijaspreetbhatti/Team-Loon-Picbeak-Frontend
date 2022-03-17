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
    const [loggedIn, setLoggedIn] = useState(false);

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
                res => console.log("User Created: ", res),
                setEmail(''),
                setPassword(''),
                setnickName(''),
                setChangeModal(false),
                localStorage.setItem('userInfo', JSON.stringify(email)),
                props.onClose(false),
                props.setPopUp(true),
                console.log('Account created')
            )
            .catch(error => console.error(error))
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

            setEmail('')
            setPassword('')
            setnickName('')
            console.log(data);

            localStorage.setItem('userInfo', JSON.stringify(data))

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

    return (
        <div>
            <div className="modalbg" onClick={props.onClose}></div>
            <Card>
                {!changeModal ? (
                    <form onSubmit={loginUser}>
                        <div className="modalHeader">
                            <h1>Log in</h1>
                            <Button className="exit" onClick={props.onClose}></Button>
                        </div>
                        <div className="emailWrapper">

                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />

                        </div>
                        <div className="passwordWrapper" >
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} />
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
                                onChange={(e) => setnickName(e.target.value)} />
                        </div>

                        <div className="emailWrapper2">

                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="passwordWrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
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
