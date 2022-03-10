import React, { useReducer, useState } from 'react'
import Button from '../../shared/ButtonComponent/Button';
import Card from '../../shared/DialogComponent/Card';
import axios from 'axios'

import "./Login.scss";

function Login(props) {
    const [changeModal, setChangeModal] = useState(false);
    const [nickName, setnickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);



    async function registerUser(event) {

        event.preventDefault();

        let config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const data = JSON.stringify({ nickName, email, password })
        console.log('sending data here', data)


        await axios
            .post('http://localhost:8080/api/v1/profiles', data, config)
            .then(res => console.log("iketa yoo", res))
            .catch(error => console.error(error))

        // try {
        //     const response = await axios.post('http://localhost:8080/api/v1/profiles', data)
        //         .then(res => console.log("iketa yoo"))
        //         .catch(error => console.error(error))



        //     //console.log(response);
        // } catch (error) { }

        // event.preventDefault();
        // const response = await axios.post('https://pic-beak-backend.herokuapp.com/api/v1/profiles', {
        //     body: {
        //         nickName, email, password
        //     }
        // })

        // const data = await response.json();

        // console.log(data);
    }

    if (!props.show) {
        return null;
    }

    return (
        <div>
            <div className="modalbg" onClick={props.onClose}></div>
            <Card>
                {!changeModal ? (
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
                                name="email"
                                value={email} />

                        </div>
                        <div className="passwordWrapper" >
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
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
