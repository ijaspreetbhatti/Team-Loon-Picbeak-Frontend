import React, { useState, useEffect } from "react";
import Button from "../shared/ButtonComponent/Button";
import "./ProfileInformation.scss";
import Modal from './modal';
import axios, { Axios } from "axios";
import { useLocation } from 'react-router-dom';
import EditProfile from './Edit/editProfile';
import EditPortrait from "../ProfileComponent/Edit/editPortrait";

function ProfileInformation(props) {
  const location = useLocation()
  const { data } = location.state;
  const [show, setShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showicon, setShowIcon] = useState(false)
  let [portrait, setPortrait] = useState(["green"])
  let [changePortrait, setChangePortrait] = useState(["green"])
  const [newNickName, setNewNickName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [userProfile, setUserProfile] =useState({})
  

  useEffect(() => {
    async function getProfile() {
      const profileData = await axios.get(
        `https://pic-beak-backend.herokuapp.com/api/v1/profiles/62379ac53316ad69558c3cef`
    ).then((res) => {
      console.log(res.data)
        setUserProfile(res.data)
      }).catch(error => console.error(error))
    } 
    getProfile();
  }, []);
  
  console.log(userProfile)
  let profileData = JSON.stringify({ newNickName, newEmail })


  useEffect(() => {
    const updateProfile = axios.put(
        `https://pic-beak-backend.herokuapp.com/api/v1/profiles/62379ac53316ad69558c3cef`, profileData
    ).then((res) => {
        console.log(res)
    }).catch(error => console.error(error))
}, []);


  let birdArray =[];
  console.log(userProfile.collectedBirds)
  birdArray.push(userProfile.collectedBirds)  
  console.log(birdArray)


  const divStyle = {
    width: (data.collectedBirds.length*0.6) * 10,
  };



  
  return (
    <div className="userProfileWrapper">
      <div className="userProfileContainer">
        <div className="userInfo">
          <div className="portrait">
            <div className={portrait[0]}></div>
          </div>
          <span className="userName">{userProfile.nickName}</span>
        </div>
        <div className="button">
          <Button className="primary" onClick={() => setShowEdit(true) }>Edit</Button>
          <Button className="primary">Share</Button>
        </div>
      </div>

      <div className="beakpediaWrapper">
        <EditPortrait onClose={() => {setShowIcon(false); setShowEdit(true);}} showicon={showicon} changeIcon={(e) => setChangePortrait(changePortrait[0]=[e])}/>
        <EditProfile  onClose={() => setShowEdit(false)} showedit={showEdit} onClick={() => setShowIcon(true)} portraitIcon={changePortrait[0]} newNickName={newNickName} newEmail={newEmail} setNewNickName={setNewNickName} setNewEmail={setNewEmail}/>
        
        <span className="beakpediaTitle">Beakpedia</span>
        <div className="collectBar">
          <div className="progressBar" style={divStyle}></div>
        </div>
        <span className="collectInfo">{data.collectedBirds.length} / 512 birds collected</span>
        <div className="birdCollection">
          {birdArray.length > 1 ? (
            birdArray.map(bird => (
              <div className="birdBox" >
              <Button className="camera-secondary-red" onClick={() => setShow(true) }></Button>
              <Modal onClose={() => setShow(false)} show={show} />
              <img className="collectionPic"  src={bird.imageLink}  />
              <div className="birdInfo">
                <span className="birdName"></span>
                <span className="birdSciName"></span>
              </div>
            </div>
            ))
          ) : (null)}

        </div>
        
      </div>
    </div>
  );
}

export default ProfileInformation;
