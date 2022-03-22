import React from 'react'
import Card from "../shared/DialogComponent/Card";
import "../shared/DialogComponent/Card.scss";
import Button from "../shared/ButtonComponent/Button";
import "./modal.scss";

function Modal(props) {
    if(!props.show){
        return null
    }

    console.log(props.commonName)
    return (
        <div>
            <div className="backGround"></div>
            <Card className="card">
                <div className="modalHeader">
                    <span>No photo added yet</span>
                    <Button className="exit" onClick={props.onClose}></Button>
                </div>
                <div className="modalImg">
                    
                </div>
                <span className="modalContent">
                Capture a photo of {props.commonName} to have it displayed in the gallery.
                </span>
                <div className="buttons">
                    <Button className="primary-grey" onClick={props.onClose}>Maybe later</Button>
                    <Button className="primary">Add photo</Button>
                </div>
            </Card>
        </div>

    )
}

export default Modal
