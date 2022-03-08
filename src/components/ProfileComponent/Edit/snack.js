import React, { useState } from "react";
import "./snack.scss";

function Snack(props) {
    if(!props.showSnack){
        return null
    }

    
    return (
        <div>
            <div className="snackWrapper">
                {props.children}
            </div>          
        </div>

    )
}

export default Snack