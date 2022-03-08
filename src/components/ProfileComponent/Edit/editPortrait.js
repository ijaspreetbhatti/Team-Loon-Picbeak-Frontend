
import Card from "../../shared/DialogComponent/Card";
import "../../shared/DialogComponent/Card.scss";
import React, { useState } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./editPortrait.scss";

function EditPortrait(props) {
    if(!props.showicon){
        return null
    }


    return (
        <div>
            <div className="backGround"></div>
            <Card className="card">
                <div className="modalHeader">
                    <span>Choose portrait</span>
                    <Button className="exit" onClick={props.onClose}></Button>
                </div>

                <div className="portraitWrapper">
                
                    <div className="portrait-green" onClick={() => {props.onClose(); props.changeIcon("green")}}/>
                    <div className="portrait-yellow" onClick={() => {props.onClose(); props.changeIcon("yellow")}}/>
                    <div className="portrait-red" onClick={() => {props.onClose(); props.changeIcon("red")}}/>
                    <div className="portrait-blue" onClick={() => {props.onClose(); props.changeIcon("blue")}}/>
                </div>

            </Card>
        </div>

    )
}

export default EditPortrait
