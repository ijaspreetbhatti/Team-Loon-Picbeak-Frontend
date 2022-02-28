import React from 'react'
import './Card.scss'

function Card(props) {
    return (
        <div>
            <div className="card">{props.children}</div>
        </div>
    )
}

export default Card
