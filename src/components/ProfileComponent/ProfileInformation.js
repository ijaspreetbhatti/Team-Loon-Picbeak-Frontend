import { render } from "@testing-library/react";
import React, { useState } from "react";
import Button from "../shared/ButtonComponent/Button";
import "./ProfileInformation.scss";
import Card from '../shared/DialogComponent/Card';
import Modal from './modal';

function ProfileInformation(props) {
  const pic = {
    url:
      "https://3rvxro1qhiaouxf3h3et9bah-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/33709comox09Stellar.jpg",
    name: "Steller's Jay",
    sciName: "Mergus serrator",
  };

  const pic2 = {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Downy_Woodpecker01.jpg/1200px-Downy_Woodpecker01.jpg",
    name: "Downy woodpecker",
    sciName: "Picoides pubescens",
  };
  
  const [show, setShow] = useState(false)

  const data = [pic, pic2];
  const birdArray = [];
  for (let i = 0; i < data.length; i++) {
    birdArray.push(
      <div className="birdBox" key={i}>
        <Button className="camera-secondary-red" onClick={() => setShow(true) }></Button>
        <Modal onClose={() => setShow(false)} show={show} />
        <img className="collectionPic" src={data[i].url} key={i} />
        <div className="birdInfo">
          <span className="birdName">{data[i].name}</span>
          <span className="birdSciName">{data[i].sciName}</span>
        </div>
      </div>
    );
  }

  const divStyle = {
    width: (data.length*0.6) * 10,
  };

  
  

// function addPhoto(){
//   const [show, setShow] = useState(false)

//     return(
//     <Modal />
//     )   
//   }
  
  return (
    <div className="userProfileWrapper">
      <div className="userProfileContainer">
        <div className="userInfo">
          <div className="portrait"></div>
          <span className="userName">Chickadeanny</span>
        </div>
        <div className="button">
          <Button className="primary">Edit</Button>
          <Button className="primary">Share</Button>
        </div>
      </div>

      <div className="beakpediaWrapper">
        <span className="beakpediaTitle">Beakpedia</span>
        <div className="collectBar">
          <div className="progressBar" style={divStyle}></div>
        </div>
        <span className="collectInfo">{data.length} / 512 birds collected</span>
        <div className="birdCollection">{birdArray}</div>
      </div>
    </div>
  );
}

export default ProfileInformation;
