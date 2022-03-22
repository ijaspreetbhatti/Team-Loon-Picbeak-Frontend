import React from 'react'
import Card from "../../shared/DialogComponent/Card";
import "../../shared/DialogComponent/Card.scss";
import Button from "../../shared/ButtonComponent/Button";
import "./addPhoto-modal.scss";

function AddPhoto(props) {
    if(!props.showCollect){
        return null
    }
    return (
        <div>
            <div className="backGround"></div>
            <Card className="card">
                <div className="addPhotoModalHeader">
                    <span>Photo added</span>
                    <Button className="exit" onClick={props.onClose}></Button>
                </div>
                <div className="addPhotoModalImg">
                    
                </div>
                <span className="addPhotoModalContent">
                That's a beautiful snap of Steller's Jay! You can change this photo anytime in your profile.  
                </span>
                <div className="addPhoto-buttons">
                    <Button className="primary-grey" onClick={props.onClose}>Change photo</Button>
                    <Button className="primary">Looks good!</Button>
                </div>
            </Card>
        </div>

    )
}

export default AddPhoto
