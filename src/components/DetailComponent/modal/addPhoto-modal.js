import React from 'react'
import Card from "../../shared/DialogComponent/Card";
import "../../shared/DialogComponent/Card.scss";
import Button from "../../shared/ButtonComponent/Button";
import "./addPhoto-modal.scss";

function AddPhoto(props) {
    if(!props.showPhoto){
        return null
    }
    return (
        <div>
            <div className="backGround"></div>
            <Card className="card">
                <div className="addPhotoModalHeader">
                    <span>Add photo</span>
                    <Button className="exit" onClick={props.onClose}></Button>
                </div>
                <div className="addPhotoModalImg">
                    
                </div>
                
                <div className="addPhoto-buttons">
                    <Button className="primary-grey" onClick={props.onClose}>Change photo</Button>
                    <Button className="primary">Save</Button>
                </div>
            </Card>
        </div>

    )
}

export default AddPhoto
