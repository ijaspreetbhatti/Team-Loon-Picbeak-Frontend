
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
                    <div className="portrait-green" onClick={() => {props.onClose(); props.setNewPortrait("621ff10b0082282921ade8af")}}/>
                    <div className="portrait-yellow" onClick={() => {props.onClose(); props.setNewPortrait("621ff0ea0082282921ade8ae")}}/>
                    <div className="portrait-red" onClick={() => {props.onClose(); props.setNewPortrait("621feb430082282921ade8ac")}}/>
                    <div className="portrait-blue" onClick={() => {props.onClose(); props.setNewPortrait("621ff14c0082282921ade8b0")}}/>
                </div>

            </Card>
        </div>

    )
}

export default EditPortrait
