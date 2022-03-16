import React from 'react'
import './MessagePop.scss'

function MessagePop(props) {
    return (
        <div className='popMsg'>
            {props.children}
        </div>
    )
}

export default MessagePop
