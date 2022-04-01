import React, { useState, useEffect } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./DetailDataDisplay.scss";
import { useLocation } from 'react-router-dom';
import axios, { Axios } from "axios";
import Audio from '../../shared/AudioComponent/Audio';
import styled, { css } from "styled-components";
import LoginModal from "../modal/login-modal";
import CollectModal from '../modal/collected-modal';
import Login from "../../LoginComponent/Login/Login";
import AddPhoto from "../modal/addPhoto-modal";
import MessagePop from "../../shared/MessagePopComponent/MessagePop"
import Gallery from "../Gallery";

function DetailDataDisplay(props) {
  const location = useLocation()
  const { data } = location.state;
  const [gallery, setGallery] = useState([]);
  const [showCollect, setShowCollect] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [loginModal, setLoginModal] = useState()
  const [showPopUp, setShowPopUp] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [collectPopUp, setCollectPopUp] = useState(false);
  const [alreadyPopUp, setAlreadyPopUp] = useState(false);
  const [showGallery, setshowGallery] = useState(false);
  let [selectedFile, setSelectedFile] = useState({});
  const [checkCollect, setcheckCollect] = useState(true);
  let [image, setImage] = useState({});

  


    const signinPopUpHandler = () => {
        setShowPopUp(true)
    }
    const loginPopUpHandler = () => {
        setLoginPopUp(true)
    }
    const collectPopUpHandler = () => {
      setCollectPopUp(true)
    }



  


  const picArray = [];

  // let overlay = <span className="greyBoxNone">+{picArray.length - 4}</span>;

  // if (picArray.length > 4) {
  //   overlay = <span className="greyBoxShow">+{picArray.length - 4}</span>;
  // }
  function check() {
    console.log("s")
    const currentUser = localStorage.userInfo.replaceAll('"', '');
    if(currentUser){
      const result = gallery.find(gallery => gallery.author === currentUser);
        if(result){
          setcheckCollect(false);
        }
      }
    }

    const CheckLogin =() => {
      const currentUser = localStorage.userInfo.replaceAll('"', '');
      if(checkCollect == false ){
        setAlreadyPopUp(true)
      }else if(currentUser){        
        setShowCollect(true);
        putBird();
        collectPopUpHandler();
        }else{
          setShowLoginModal(true)
        }
      }
      
      
      async function putBird() {
          const currentUser = localStorage.userInfo.replaceAll('"', '');
          const sciName = data.sciName;
          const userData = await axios.put(
              `https://pic-beak-backend.herokuapp.com/api/v1/profiles/${currentUser}/${sciName}`)
              .then((res) => {
              
                // console.log(res.data);
            }).catch(error => console.log(error));;
      }
      
      


    const Status =()=>{
      let status = data.conservationStatus;
      if(status == ("G5")){
        status = "Low conservation concern";
        return(
            <div className="low">{status}</div>
            
        );
      }else if(status == ("G4")){
        status = "Moderate conservation concern";
        return(
            <div className="moderate">{status}</div>
        );
      }
      else {
        status = "High conservation concern";
        return(
          <div className="high">{status}</div>
        );
      }
    };


    useEffect(() => {
      async function getGallery() {
          const birdGallery = await axios.get(
              `https://pic-beak-backend.herokuapp.com/api/v1/birds/${data.sciName}/gallery`
          );

          setGallery(birdGallery.data);

      }
      getGallery()
      ;}, []);

      useEffect(() => {
        check()
        
        ;}, [gallery]);
  


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

  
  
  
  function fileUploadHandler() {
  const currentUser = localStorage.userInfo.replaceAll('"', '');
  
  
    const blobToBase64 = blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(resolve => {
          reader.onloadend = () => {
              resolve(reader.result);
          };
      });
    };
    console.log(selectedFile);
    blobToBase64(selectedFile).then((res) => {
      console.log(res);
      const body = {
          file: res,
          timestamp: (new Date()).getTime()
      }
      axios.post(`https://pic-beak-backend.herokuapp.com/api/v1/collectedBirds/${currentUser}/${data.sciName}`, body).
      then(res =>{
          console.log(res)
      })
    });
    
  }


  return (
    <div className="birdProfileWrapper">
        
        <Login onClose={() => setLoginModal(false)} show={loginModal} setShowPopUp={signinPopUpHandler} setLoginPopUp={loginPopUpHandler} />
            {showPopUp ? (<MessagePop showPopUp={showPopUp}>Account created! You are logged in now.</MessagePop>) : (null)}
            {loginPopUp ? (<MessagePop showPopUp={loginPopUp}>You are logged in now.</MessagePop>) : (null)}
            {collectPopUp ? (<MessagePop showPopUp={collectPopUp}>Bird is collected!</MessagePop>) : (null)}
            {alreadyPopUp ? (<MessagePop showPopUp={alreadyPopUp}>This bird is already collected!</MessagePop>) : (null)}
      <div>
        <Gallery showGallery={showGallery} gallery={gallery} onClose={()=> setshowGallery(false)}/>
        <img className="postImage" src={data.imageLink} />

        <div className="footerWrapper">
          <span className="footerContainer">
            <span>Are you spotting this bird?</span>
            
          <Button className={checkCollect ? "primary" : "primary-grey"}   onClick={() => CheckLogin() }>Collect</Button>
          </span>
          <CollectModal commonName={data.commonName} sciName={data.sciName} showCollect={showCollect} onClose={() => setShowCollect(false)} setShowPhoto={() => setShowPhoto(true)} setSelectedFile={setSelectedFile} setImage={setImage}/>
          <LoginModal showLoginModal={showLoginModal} onClose={() => setShowLoginModal(false)} setLoginModal={() => setLoginModal(true)}/>
          <AddPhoto onClose={()=> setShowPhoto(false)} showPhoto={showPhoto} image={image} setSelectedFile={setSelectedFile} setImage={setImage} upload={() => fileUploadHandler()} setShow={()=>setShowCollect(false)}/>
        </div>

      </div>

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
          <div className="galleryContainer" onClick={()=> setshowGallery(true)}>
            {gallery.length > 0 ? "" : (<div className="noPhoto">No photo yet</div>)}
            {gallery.map(src =>  (
              <img key={src._id} className="galleryPic" src={src.imageLink}/>

))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default DetailDataDisplay;