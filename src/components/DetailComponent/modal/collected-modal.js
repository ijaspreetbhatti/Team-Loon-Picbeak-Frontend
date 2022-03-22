import React from 'react'
import Card from "../../shared/DialogComponent/Card";
import "../../shared/DialogComponent/Card.scss";
import Button from "../../shared/ButtonComponent/Button";
import "./collected-modal.scss";

function CollectModal(props) {
    if(!props.showCollect){
        return null
    }
    return (
        <div>
            <div className="backGround"></div>
            <Card className="card">
                <div className="collectModalHeader">
                    <span>Bird collected!</span>
                    <Button className="exit" onClick={props.onClose}></Button>
                </div>
                <div className="collectModalImg">
                    
                </div>
                <span className="collectModalContent">
                You just added {props.commonName} to your Beakpedia. Now you can add a photo of it in the gallery!
                </span>
                <div className="collect-buttons">
                    <Button className="primary-grey" onClick={props.onClose}>Maybe later</Button>
                    <Button className="primary">Add photo</Button>
                </div>
            </Card>
        </div>

    )
}

export default CollectModal
