import { render } from "@testing-library/react";
import React, { useState } from "react";
import Button from "../shared/ButtonComponent/Button";
import "./ProfileInformation.scss";

function ProfileInformation(props) {
  const pic = {
    url:
      "https://3rvxro1qhiaouxf3h3et9bah-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/33709comox09Stellar.jpg",
    name: "Steller's Jay",
    sicName: "Mergus serrator",
  };

  const pic2 = {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Downy_Woodpecker01.jpg/1200px-Downy_Woodpecker01.jpg",
    name: "Downy woodpecker",
    sicName: "Picoides pubescens",
  };

  const data = [pic, pic2];
  const birdArray = [];
  for (let i = 0; i < data.length; i++) {
    birdArray.push(
      <div className="birdBox" key={i}>
        <Button className="camera-secondary-red"></Button>
        <img className="collectionPic" src={data[i].url} key={i} />
        <div className="birdInfo">
          <span className="birdName">{data[i].name}</span>
          <span className="birdSicName">{data[i].sicName}</span>
        </div>
      </div>
    );
  }

  const divStyle = {
    width: data.length * 10,
  };

  return (
    <div className="userProfileWrapper">
      <div className="userProfileContainer">
        <div className="userInfo">
          <div className="protrait"></div>
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
