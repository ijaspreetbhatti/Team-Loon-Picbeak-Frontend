import React, { useState, useEffect } from "react";
import Login from "../../LoginComponent/Login/Login";
import MessagePop from "../MessagePopComponent/MessagePop";
import "./Header.scss";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import ProfileInformation from '../../ProfileComponent/ProfileInformation';
// import ProfileInformation from "../../ProfileComponent/ProfileInformation";

export default function ProfileMenu(props) {
    const [loginModal, setLoginModal] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [userId, setUserId] = useState({});
    const [loading, setLoading] = useState(true);

    const showLoginModal = () => {
        setLoginModal(true);
        props.setProfileMenu(false)
    }

    const showLogin = () => {
        localStorage.removeItem('userInfo')
        props.setProfileMenu(false)
    }

    useEffect(() => {
        async function getUserId() {
            const userData = await axios.get(
                `https://pic-beak-backend.herokuapp.com/api/v1/profiles/62379ac53316ad69558c3cef`
            ).then((res) => {
                setUserId(res.data);
                console.log(userId)
                setLoading(false);

            })
  
        }
        getUserId(); console.log(userId)
        }, [loading]);
// useEffect(() =>{
//     const getUserProfile = () => {
//         axios.get(`https://pic-beak-backend.herokuapp.com/api/v1/profiles/6237a29e3316ad69558c3d05`)
//         .then(response => {
//             setUserId(response.data);
//             console.log(userId)
//         })
//         .catch(error => console.log(error));
//     }
//     getUserProfile();


// },[])

    return (
        <div className="profileMenuContainer">
            <div
                onClick={event => props.handleProfileMenu(event)}
                className={
                    props.profileMenuDisplay ? "active" : "profileLink"
                }
            ></div>
            {props.profileMenuDisplay ? (
                <div className="profileMenu">
                    <Link to={{
                            pathname: "/profile"}}
                            state={{from: '/home', data: userId}}
                            element={<ProfileInformation/>}>
                    <button>Profile</button>
                    </Link>
                    {localStorage.getItem('userInfo') ? (<button onClick={() => showLogin()}>Log out</button>) : (<button onClick={showLoginModal}>Log in</button>)}
                </div>
            ) : null}
            <Login onClose={() => setLoginModal(false)} show={loginModal} setShowPopUp={() => setShowPopUp(true)} />
            <MessagePop showPopUp={showPopUp}>Account created! You are logged in now.</MessagePop>
        </div>
    );
}