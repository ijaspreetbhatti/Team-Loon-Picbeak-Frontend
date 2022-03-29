import React from 'react'
import Card from "../shared/DialogComponent/Card";
import "../shared/DialogComponent/Card.scss";
import Button from "../shared/ButtonComponent/Button";
import "./addPhoto.scss";

function AddPhoto(props) {
    if(!props.showAddPhoto){
        return null
    }
    return (
        <div>
            <div className="backGround"></div>
            <Card className="card">
                <div className="addPhotoHeader">
                    <span>Add photo</span>
                    <Button className="exit" onClick={()=>{props.onClose(); props.setShow()}}></Button>
                </div>
                <div className="addPhotoImg">
                <img src={props.image} className="selectedImg"/>
                </div>
                
                <div className="addPhoto-buttons">
                    <label htmlFor="files" className="primary-grey">pick photo</label>
                    <input id="files"type="file" className="primary-grey" onChange={(event)=>{props.setSelectedFile(event.target.files[0]); props.setImage(URL.createObjectURL(event.target.files[0]))}} />
                    <Button className="primary" onClick={()=> {props.upload();props.onClose(); props.setShow()}}>Save</Button>
                </div>
            </Card>
        </div>

    )
}

export default AddPhoto
