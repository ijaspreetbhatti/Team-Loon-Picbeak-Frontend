import React from 'react'
import './Button.scss';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    )
}

export default Button
