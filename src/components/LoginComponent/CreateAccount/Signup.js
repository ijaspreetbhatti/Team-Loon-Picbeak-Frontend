import React from 'react'
import Button from '../../shared/ButtonComponent/Button';
import Card from '../../shared/DialogComponent/Card';

import './Signup.scss'

function Signup() {
    return (
        <div>
            <div className="modalbg"></div>
            <Card>
                <form >
                    <div className="modalHeader">
                        <h1>Create Account</h1>
                        <Button className="exit"></Button>
                    </div>

                    <div className="nicknameWrapper">

                        <label htmlFor="email">Nickname</label>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname" />
                    </div>

                    <div className="emailWrapper">

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email" />
                    </div>

                    <div className="passwordWrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password" />
                    </div>

                    <div className="buttonWrapper">
                        <Button type="submit" className="primary">Log in</Button>
                    </div>
                    <span>Already have an account? <a href="/">Log in</a></span>
                </form>
            </Card>
        </div>
    )
}

export default Signup
