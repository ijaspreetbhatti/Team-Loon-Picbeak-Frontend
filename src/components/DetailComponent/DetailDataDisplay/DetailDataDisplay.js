import React, { useState, useEffect } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./DetailDataDisplay.scss";
import { useLocation } from 'react-router-dom';
import axios, { Axios } from "axios";
import Audio from '../../shared/AudioComponent/Audio';
import styled, { css } from "styled-components";

function DetailDataDisplay(props) {
  const location = useLocation()
  const { data } = location.state;
  const [gallery, setGallery] = useState([]);
  // const [status, setStatus] = useState();


  const picArray = [];

  // let overlay = <span className="greyBoxNone">+{picArray.length - 4}</span>;

  // if (picArray.length > 4) {
  //   overlay = <span className="greyBoxShow">+{picArray.length - 4}</span>;
  // }

    const Status =()=>{
      let status = data.conservationStatus;
      console.log(status)
      if(status == ("G1" || "T1" || "G2" || "T2")){
        status = "High conservation concern";
        return(
            <div className="high">{status}</div>
        );
      }else if(status == ("G3" || "T3")){
        status = "Moderate conservation concern";
        return(
            <div className="moderate">{status}</div>
        );
      }
      else {
        status = "Low conservation concern";
        return(
            <div className="low">{status}</div>
        );
      }
    };


    useEffect(() => {
      async function getGallery() {
          const birdGallery = await axios.get(
              `https://pic-beak-backend.herokuapp.com/api/v1/birds/${data.sciName}/gallery`
          );

          setGallery(birdGallery.data.gallery);
      }
      getGallery();}, []);


  const DescriptionText = styled.div`
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: left;
    ${({ learnMore }) =>
      learnMore &&
      css`
        display: -webkit-box;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-wrap: normal;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      `}
  `;
  

  const Description = () => {
    const [isLearnMore, setIsLearnMore] = useState(true);
    const toggleReadMore = () => setIsLearnMore(show => !show);

    return (
        <div>
        <DescriptionText learnMore={isLearnMore}>{data.description}</DescriptionText>
        <div className="learn-more-link" onClick={toggleReadMore}>
          {isLearnMore ? "Learn more" : "Learn less"}
        </div>
        </div>
    );
  };





  

  return (
    <div className="birdProfileWrapper">
      <img className="postImage" src={data.imageLink} />

      <div className="profileContainer" >
        <div className="infoWrapper">
          <div className="titleBlock">
            <div className="nameBlock">
            <span className="commonName">{data.commonName}</span>
              <span className="scifcName">{data.sciName}</span>
            </div>
            <Audio className="musical-light-red" src={data.audioLink}></Audio>
          </div>

          <span className="status"><Status/></span>

          <span className="description">
            <Description />
          </span>
        </div>

        <div className="galleryWrapper">
          <span className="galleryTitle">Gallery</span>
          <div className="galleryContainer">
            {gallery}
            {/* {overlay} */}
          </div>
        </div>
      </div>

      <div className="footerWrapper">
        <span>Are you spotting this bird?</span>
        <Button className="primary" >Collect</Button>
      </div>
    </div>
  );
}

export default DetailDataDisplay;