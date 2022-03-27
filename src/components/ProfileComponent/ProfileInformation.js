import React, { useState, useEffect } from "react";
import Button from "../shared/ButtonComponent/Button";
import "./ProfileInformation.scss";
import Modal from './modal';
import axios, { Axios } from "axios";
import { useLocation } from 'react-router-dom';
import EditProfile from './Edit/editProfile';
import EditPortrait from "../ProfileComponent/Edit/editPortrait";
import MessagePop from '../shared/MessagePopComponent/MessagePop'
import { Link } from "react-router-dom";
import DetailDataDisplay from "../DetailComponent/DetailDataDisplay/DetailDataDisplay"


function ProfileInformation(props) {

  const [show, setShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showicon, setShowIcon] = useState(false)
  let [portrait, setPortrait] = useState("")
  const [newNickName, setNewNickName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPortrait, setNewPortrait] = useState("")
  const [userProfile, setUserProfile] = useState()
  const [loading, setLoading] = useState(true);
  let [birdCard, setBirdCard] = useState([]);
  const [copyPopUp, setCopyPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [error, setError] = useState(false);

  const currentUser = localStorage.userInfo.replaceAll('"', '');

  const copyPopUpHandler = () => {
    setCopyPopUp(true)
  }
  const editPopUpHandler = () => {
    setEditPopUp(true)
  }

  useEffect(() => {
    async function getProfile() {
    await axios.get(
        `https://pic-beak-backend.herokuapp.com/api/v1/profiles/${currentUser}`
    ).then((res) => {
        setUserProfile(res.data)
        getCollectedBird();
        let profileId = "621ff10b0082282921ade8af";
        if (userProfile != null) {
          if(userProfile.portraitId != null){
            profileId = userProfile.portraitId;
          }
          setNewEmail(userProfile.email)
          setNewNickName(userProfile.nickName)
        }
        getPortrait(profileId);
        setLoading(false);
      }).catch(error => console.error(error))
    } 
    getProfile();
  }, [loading]);

  useEffect(() => {
    getPortrait(newPortrait);
  }, [newPortrait])

  async function updateProfile() {
    let profileData = {
        _id: currentUser,
        email: newEmail,
        nickName: newNickName,
        portraitId: newPortrait
    }
      await axios.put(
        `https://pic-beak-backend.herokuapp.com/api/v1/profiles/${currentUser}`, profileData)
          .then((res) => {
        
            setLoading(true)
    
        }).catch(error => console.log(error));
  }

  async function getPortrait(id) {
    
    if (id != null && id != "") {
      await axios.get(`https://pic-beak-backend.herokuapp.com/api/v1/portrait/${id}`)
      .then((res) => {
      
        setPortrait(res.data)
        
      }).catch(error => console.log(error));
    }
  }

  let cardArray =[];
  let birdArray =[];
  birdArray = birdCard;



    async function getCollectedBird() {
      if(userProfile != null && userProfile.collectedBirds.length >= 1){
        for(let i = 0; i < userProfile.collectedBirds.length; i++){
        
          const birdCard = await axios.get(
              `https://pic-beak-backend.herokuapp.com/api/v1/birds/${userProfile.collectedBirds[i]}`
          );
          cardArray.push(birdCard.data[0]) 
        }
        setBirdCard(cardArray);
      } 
    }

    function copy() {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      copyPopUpHandler()
    }
  
    
  const divStyle = {
    width: (birdArray.length*0.6) * 10,
  };

  if (loading) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <div className="userProfileWrapper">
        <div className="userProfileContainer">
          <div className="userInfo">
            <div className="portrait">
              <div>
                <img src={portrait.imageLink} />
              </div>
            </div>
            <span className="userName">{userProfile.nickName}</span>
          </div>
          <div className="button">
            <Button className="primary" onClick={() => setShowEdit(true)}>Edit</Button>
            <Button className="primary" onClick={copy}>Share</Button>
          </div>
        </div>

        <div className="beakpediaWrapper">
          <EditPortrait onClose={() => {setShowIcon(false); setShowEdit(true);}} showicon={showicon} setNewPortrait={setNewPortrait}/>
          <EditProfile  onClose={() => {setShowEdit(false); }} showedit={showEdit} setError={setError} error={error} onClick={() => setShowIcon(true)} imageLink={portrait.imageLink} defaultNickName={userProfile.nickName} defaultEmail={userProfile.email} setNewNickName={setNewNickName} setNewEmail={setNewEmail} updateProfile={()=> updateProfile()} setEditPopUp={editPopUpHandler} />
          
          <span className="beakpediaTitle">Beakpedia</span>
          <div className="collectBar">
            <div className="progressBar" style={divStyle}></div>
          </div>
          <span className="collectInfo">{birdArray.length} / 512 birds collected</span>
          <div className="birdCollection">
            {birdArray.length > 0 ? (
              birdArray.map(bird => (
                <div className="birdBox" key={bird._id}>
                  <Button className="camera-secondary-red" onClick={() => setShow(true) } commonName={bird.commonName}></Button>
                  <Modal onClose={() => setShow(false)} show={show} />
                  <img className="collectionPic"  src={bird.imageLink}  />
                  <Link to={{
                    pathname: "/details"}} state={{from: 'profileView', data: bird}} element={<DetailDataDisplay/>}>
                  <div className="birdInfo">
                  <span className="birdName">{bird.commonName}</span>
                  <span className="birdSciName">{bird.sciName}</span>
                  </div>
                </Link>
              </div>
              ))
            ) : (null)}

          </div>
        </div>
          {copyPopUp ? (<MessagePop showPopUp={copyPopUp}>Profile link copied!</MessagePop>) : (null)}
          {editPopUp ? (<MessagePop showPopUp={editPopUp}>Profile details changed!</MessagePop>) : (null)}
          {error ? (<MessagePop showPopUp={error}>Nickname and Email can't be empty</MessagePop>) : (null)}
      </div>
    );
  }
}

export default ProfileInformation;
