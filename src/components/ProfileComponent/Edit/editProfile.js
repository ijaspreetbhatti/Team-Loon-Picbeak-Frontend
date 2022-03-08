
import Card from "../../shared/DialogComponent/Card";
import "../../shared/DialogComponent/Card.scss";
import React, { useState } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./editProfile.scss";
import EditPortrait from "./editPortrait";

function EditProfile(props) {
    if(!props.showedit){
        return null
    }

    return (
        <div>
            
            <div className="backGround"></div>
            <Card className="card">
                <form className="editProfile">
                    <div className="modalHeader">
                        <span>Edit profile</span>
                        <Button className="exit" onClick={props.onClose}></Button>
                        
                    </div>
                    <div className={props.portraitIcon}>
                        <Button className="edit-secondary-red" onClick={() => {props.onClick(); props.onClose();}}></Button>
                        
                    </div>
                    <div className="nicknameWrapper">
                        <label htmlFor="nickName">Nickname</label>
                        <input type="text" id="nickName" name="nickName"/>
                    </div>

                    <div className="emailWrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    
                    <div className="buttons-edit">
                        <Button className="primary-grey" onClick={props.onClose}>Cancel</Button>
                        <Button className="primary"  onclick={props.showSnack} >Save</Button>
                    </div>
                </form>
            </Card>
        </div>

    )
}

export default EditProfile
