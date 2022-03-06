import React from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './MatchView.scss';
import Audio from '../../shared/AudioComponent/Audio';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DetailDataDisplay from '../../DetailComponent/DetailDataDisplay/DetailDataDisplay.js';

export default function MatchCard(props) {
    return(
            <div className='matchViewCard' id={`${props.id.replace(/\s/g, '-')}-card`} key={props.key}>
                <img src={props.imageLink} alt={props.alt}/>
                <div className="matchDetailCard">
                    <div className="nameContainer">
                        <h2>{props.commonName}</h2>
                        <p>{props.sciName}</p>
                    </div>
                    <div className="buttonContainer">
                        <Audio src={props.audioLink}/>
                        <Link to="/details" state = {{ from: '/match' }} element={<DetailDataDisplay />}><Button className='primary matchCardBtn'>This is the one!</Button></Link>
                    </div>
                </div>
            </div>
    )
}
/* <MatchCard 
imageLink={data.imageLink}
alt={data.commonName}
id={data.sciName}
sciName={data.sciName}
audioLink={data.audioLink}
function={displayBirdDetails}
commonName={data.commonName}
/> */