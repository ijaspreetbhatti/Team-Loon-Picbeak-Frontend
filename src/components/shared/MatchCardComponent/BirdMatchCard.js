import React from 'react';
import Button from '../ButtonComponent/Button.js';
import './MatchView.scss';
import Audio from '../AudioComponent/Audio';

export default function BirdMatchCard(props) {
    return(
        <div key={props.sciName} className='birdMatchCard listViewCard' id={props.sciName1.replace(/\s/g, '-')}>
            <Audio src={props.audioLink}/>
            <img src={props.imageLink} alt={props.commonName}/>
            <div className="listDetailCard">
                <div className="nameContainer">
                    <p className="body2">{props.commonName2}</p>
                    <p>{props.sciName2}</p>
                </div>
            </div>
        </div>
    )
}