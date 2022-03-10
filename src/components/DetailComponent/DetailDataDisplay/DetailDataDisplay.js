import React, { useState, useEffect, useRef } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./DetailDataDisplay.scss";
import { useLocation } from 'react-router-dom';
import axios, { Axios } from "axios";
import Audio from '../../shared/AudioComponent/Audio';

function DetailDataDisplay(props) {
  const location = useLocation()
  const { data } = location.state;


  const picArray = [];

  // let overlay = <span className="greyBoxNone">+{picArray.length - 4}</span>;

  // if (picArray.length > 4) {
  //   overlay = <span className="greyBoxShow">+{picArray.length - 4}</span>;
  // }

  // const [learnMore, setLearnMore] = useState(false);
  // const linkName = learnMore ? "Learn Less" : "Learn More";
  
  const [description, setDescription] = useState();

  useEffect(() => {
        async function getDescription() {
            const birdDescription = await axios.get(
                `https://pic-beak-backend.herokuapp.com/api/v1/birds/${data.sciName}/description`
            );

            setDescription(birdDescription.data.description);
        }
        getDescription();}, []);

const [gallery, setGallery] = useState([]);

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
      getGallery();
}, []);

  

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

          <span className="status">Low conservation Concern</span>

          <span className="content">
            {data.description}
            
            {/* {learnMore && extraContent}
            <a
              className="learn-more-link"
              onClick={() => {
                setLearnMore(!learnMore);
              }}
            >
              {linkName}
            </a> */}
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