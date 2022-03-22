
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




    // if(newNickName != null && newEmail != null){
    //     let data = JSON.stringify({ newNickName, newEmail })
    // }else if(newNickName != null){
    //     let data = JSON.stringify({ newNickName})
    // }else if(newEmail != null){
    //     let data = JSON.stringify({ newEmail })
    // }else{
    //     let data = "";
    // }

function afterSubmit(e){
    console.log(e)
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
                    <div className={props.portraitIcon}>
                        <Button className="edit-secondary-red" onClick={() => {props.onClick(); props.onClose();}}></Button>
                        
                    </div>
                    <div className="nicknameWrapper">
                        <label htmlFor="nickName">Nickname</label>
                        <input type="text" id="nickName" name="nickName" value={props.newNickName} onChange={(e) => {props.setNewNickName(e.target.value)}}/>
                    </div>

                    <div className="emailWrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={props.newEmail} onChange={(e) => props.setNewEmail(e.target.value)}/>
                    </div>
                    
                    <div className="buttons-edit">
                        <Button className="primary-grey" onClick={()=> props.onClose()}>Cancel</Button>
                        <Button className="primary" onClick={()=> {props.updateProfile(); props.onClose()}} >Save</Button>
                    </div>
                </form>
            </Card>
        </div>

    )
}

export default EditProfile
