import React from "react";
import "./BirdMatchCard.scss";
import Audio from "../AudioComponent/Audio";
import DetailDataDisplay from "../../DetailComponent/DetailDataDisplay/DetailDataDisplay";
import { Link } from "react-router-dom";

export default function BirdMatchCard(props) {
    return (
        <div
            className="birdMatchCard listViewCard"
            id={props.id.replace(/\s/g, "-")}
        >
            {props.audioLink ? (
                <Audio src={props.audioLink} />
            ) : (
                <div className="audioContainer">
                    <button className="musical-grey"></button>
                </div>
            )}
            <img src={props.imageLink ? props.imageLink : "./assets/images/picbeakPlaceholder.svg"} alt={props.alt} className={props.class}/>
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
