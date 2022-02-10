import React from 'react'

function Button(props) {
    return (
        <button onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    )
}

export default Button
