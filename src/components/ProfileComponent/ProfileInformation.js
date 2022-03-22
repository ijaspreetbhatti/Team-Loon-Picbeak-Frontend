import React, { useState, useEffect } from "react";
import Button from "../shared/ButtonComponent/Button";
import "./ProfileInformation.scss";
import Modal from './modal';
import axios, { Axios } from "axios";
import { useLocation } from 'react-router-dom';
import EditProfile from './Edit/editProfile';
import EditPortrait from "../ProfileComponent/Edit/editPortrait";

function ProfileInformation(props) {

  const [show, setShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showicon, setShowIcon] = useState(false)
  let [portrait, setPortrait] = useState(["green"])
  let [changePortrait, setChangePortrait] = useState(["green"])
  const [newNickName, setNewNickName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPortrait, setNewPortrait] = useState("")
  const [userProfile, setUserProfile] = useState()
  const [loading, setLoading] = useState(true);
  let [birdCard, setBirdCard] = useState([]);

  const currentUser = localStorage.userInfo.replaceAll('"', '');

  useEffect(() => {
    async function getProfile() {
      const profileData = await axios.get(
        `https://pic-beak-backend.herokuapp.com/api/v1/profiles/${currentUser}`
    ).then((res) => {
      console.log(res.data)
        setUserProfile(res.data)
        getCollectedBird();
        setLoading(false);
      }).catch(error => console.error(error))
    } 
    getProfile();
  }, [loading]);


  async function updateProfile() {
    let profileData = {
        _id: currentUser,
        email: newEmail,
        nickName: newNickName,
      // portraitId: newPortrait
    }

      await axios.put(
        `https://pic-beak-backend.herokuapp.com/api/v1/profiles/${currentUser}`, profileData)
          .then((res) => {
          
            console.log(res);
            setLoading(true)
    
        }).catch(error => console.log(error));
  }



//   async function getPortrait() {
//     const portraits = await axios.put(`https://pic-beak-backend.herokuapp.com/api/v1/portrait/621feb430082282921ade8ac`)
//     .then((res) => {
    
//       console.log(res);

//   }).catch(error => console.log(error));
// }getPortrait();

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
          <EditPortrait onClose={() => {setShowIcon(false); setShowEdit(true);}} showicon={showicon} onChange={(e) => setNewPortrait(e)}/>
          <EditProfile  onClose={() => setShowEdit(false)} showedit={showEdit} onClick={() => setShowIcon(true)} portraitIcon={changePortrait[0]} newNickName={newNickName} newEmail={newEmail} setNewNickName={setNewNickName} setNewEmail={setNewEmail} updateProfile={()=> updateProfile()}/>
          
          <span className="beakpediaTitle">Beakpedia</span>
          <div className="collectBar">
            <div className="progressBar" style={divStyle}></div>
          </div>
          <span className="collectInfo">{birdArray.length} / 512 birds collected</span>
          <div className="birdCollection">
            {birdArray.length > 0 ? (
              birdArray.map(bird => (
                <div className="birdBox" key={bird._id}>
                  <Button className="camera-secondary-red" onClick={() => setShow(true) }></Button>
                  <Modal onClose={() => setShow(false)} show={show} />
                  <img className="collectionPic"  src={bird.imageLink}  />
                  <div className="birdInfo">
                  <span className="birdName">{bird.commonName}</span>
                  <span className="birdSciName">{bird.sciName}</span>
                </div>
              </div>
              ))
            ) : (null)}

          </div>
          
        </div>
      </div>
    );
  }
}

export default ProfileInformation;
