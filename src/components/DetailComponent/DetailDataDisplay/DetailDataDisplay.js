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
  const [description, setDescription] = useState();
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState();


  const picArray = [];

  // let overlay = <span className="greyBoxNone">+{picArray.length - 4}</span>;

  // if (picArray.length > 4) {
  //   overlay = <span className="greyBoxShow">+{picArray.length - 4}</span>;
  // }
    useEffect(() => {
      async function getDescription() {
          const birdDescription = await axios.get(
              `https://pic-beak-backend.herokuapp.com/api/v1/birds/${data.sciName}/description`
          );

          setDescription(birdDescription.data.description);
      }
      getDescription();}, []);

    useEffect(() => {
      async function getStatus() {
          const birdStatus = await axios.get(
              `https://pic-beak-backend.herokuapp.com/api/v1/birds/${data.sciName}`
          );
          console.log(birdStatus.data.conservationStatus)
            if(birdStatus.data.conservationStatus == ("G1" || "T1" || "G2" || "T2")){ 
              birdStatus.data.conservationStatus = "High conservation concern";
            }else if(birdStatus.data.conservationStatus == ("G3" || "T3")){
              birdStatus.data.conservationStatus = "Moderate conservation concern";
            }
            else {
              birdStatus.data.conservationStatus = "Low conservation concern";
            }
          setStatus(birdStatus.data.conservationStatus);
          console.log(birdStatus.data.conservationStatus)
      }
      getStatus();}, []);

    useEffect(() => {
      async function getGallery() {
          const birdGallery = await axios.get(
              `https://pic-beak-backend.herokuapp.com/api/v1/birds/${data.sciName}/gallery`
          );
            if(birdGallery.data.gallery > 4){
              for (let i = 0; i < 4; i++) {
                let pic = birdGallery[i].data.gallery[i].collectedBirdImage;
                // picArray.push(<img className="galleryPic" src={pic} key={i} />);
              }
            }
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
        <DescriptionText learnMore={isLearnMore}>{description}</DescriptionText>
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

          <span className="status">
            <div className={status.replace(/\s/g, "-")}>{status}</div>
          </span>

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