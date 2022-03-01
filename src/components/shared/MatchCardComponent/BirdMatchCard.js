import React from 'react';
import './BirdMatchCard.scss';
import Audio from '../AudioComponent/Audio';

export default function BirdMatchCard(props) {
    return(
        <div key={props.key} className='birdMatchCard listViewCard' id={props.id.replace(/\s/g, '-')}>
            <Audio src={props.audioLink}/>
            <img src={props.imageLink} alt={props.alt}/>
            <div className="listDetailCard">
                <div className="nameContainer">
                    <p className="body2">{props.commonName}</p>
                    <p>{props.sciName}</p>
                </div>
            </div>
        </div>
    )
}