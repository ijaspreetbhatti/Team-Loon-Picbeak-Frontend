import React from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './MatchView.scss';
import Audio from '../../shared/AudioComponent/Audio';

export default function MatchCard(props) {
    return(
            <div key={props.sciName} className='matchViewCard' id={`${props.sciName.replace(/\s/g, '-')}-card`}>
                <img src={props.imageLink} alt={props.commonName}/>
                <div className="matchDetailCard">
                    <div className="nameContainer">
                        <h2>{props.commonName2}</h2>
                        <p>{props.sciName}</p>
                    </div>
                    <div className="buttonContainer">
                        <Audio src={props.audioLink}/>
                        <Button className='primary matchCardBtn' onClick={props.function}>This is the one!</Button>
                    </div>
                </div>
            </div>
    )
}