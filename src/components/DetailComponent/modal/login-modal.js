// import React from 'react'
import React, { useState, useEffect } from "react";
import Card from "../../shared/DialogComponent/Card";
import "../../shared/DialogComponent/Card.scss";
import Button from "../../shared/ButtonComponent/Button";
import "./login-modal.scss";
import Login from "../../LoginComponent/Login/Login";

function LoginModal(props) {

    if(!props.showLoginModal){
        return null
    }
    return (
        <div>
            <div className="backGround"></div>
            <Card className="card">
                <div className="loginModalHeader">
                    <span>Log in to collect bird</span>
                    <Button className="exit" onClick={props.onClose}></Button>
                </div>
                <div className="loginModalImg">
                    
                </div>
                <span className="loginModalContent">
                You need to log in to be able to collect birds in your Beakpedia.
                </span>
                <div className="Login-buttons">
                    <Button className="primary-grey" onClick={props.onClose}>Cancel</Button>
                    <Button className="primary" onClick={()=> {props.onClose();props.setLoginModal()}}>Log in</Button>
                </div>
            </Card>
        </div>

    )
}

export default LoginModal
