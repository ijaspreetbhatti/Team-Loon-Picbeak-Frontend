import React from "react";
import "./BirdMatchCard.scss";
import Audio from "../AudioComponent/Audio";
import DetailDataDisplay from "../../DetailComponent/DetailDataDisplay/DetailDataDisplay";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function BirdMatchCard(props) {
    return (
        <div
            key={props.key}
            className="birdMatchCard listViewCard"
            id={props.id.replace(/\s/g, "-")}
        >
            <Audio src={props.audioLink} />
            <img src={props.imageLink} alt={props.alt} className={props.class}/>
            <Link to={{
                pathname: "/details"}} state={{from: 'listview', data: props.data}} element={<DetailDataDisplay/>}>
            <div className="listDetailCard">
                <div className="nameContainer">
                    <p className="body2">{props.commonName}</p>
                    <p>{props.sciName}</p>
                </div>
            </div>
            </Link>
        </div>
    );
}
