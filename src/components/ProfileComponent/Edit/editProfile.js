
import Card from "../../shared/DialogComponent/Card";
import "../../shared/DialogComponent/Card.scss";
import React, { useState, useEffect } from "react";
import Button from "../../shared/ButtonComponent/Button";
import axios, { Axios } from "axios";
import "./editProfile.scss";
import EditPortrait from "./editPortrait";

function EditProfile(props) {
    if(!props.showedit){
        return null
    }


function afterSubmit(e){
    e.preventDefault();
}

    return (
        <div>
            
            <div className="backGround"></div>
            <Card className="card">
                <form className="editProfile" onSubmit={(e)=>afterSubmit(e)}>
                    <div className="modalHeader">
                        <span>Edit profile</span>
                        <Button className="exit" onClick={props.onClose}></Button>
                        
                    </div>
                    <div>
                        <img className="portraitEdit" src={props.imageLink}/>
                        <Button className="edit-secondary-red" onClick={() => {props.onClick(); props.onClose();}}></Button>
                        
                    </div>
                    <div className="nicknameWrapper">
                        <label htmlFor="nickName">Nickname</label>
                        <input type="text" id="nickName" name="nickName" defaultValue={props.defaultNickName} onChange={(e) => {
                            if (e.target.value != "") {
                                props.setError(false)
                                props.setNewNickName(e.target.value)
                            } else {
                                props.setError(true)
                            }
                        }} />
                    </div>

                    <div className="emailWrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" defaultValue={props.defaultEmail} onChange={(e) => {
                            if (e.target.value != "") { 
                                props.setError(false)
                                props.setNewEmail(e.target.value)
                            } else {
                               props.setError(true)
                            }
                        }} />
                    </div>
                    
                    <div className="buttons-edit">
                        <Button className="primary-grey" onClick={()=> props.onClose()}>Cancel</Button>
                        <Button className="primary" onClick={()=> {{
                            if (!props.error) {
                                props.updateProfile(); props.onClose(); props.setEditPopUp(true)
                            }
                        }}} >Save</Button>
                    </div>
                </form>
            </Card>
        </div>

    )
}

export default EditProfile
