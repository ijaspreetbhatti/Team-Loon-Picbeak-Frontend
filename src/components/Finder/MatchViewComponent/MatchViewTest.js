import React, {useState, useRef, useEffect, useCallback} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './MatchView.scss';
import DetailDataDisplay from '../../DetailComponent/DetailDataDisplay/DetailDataDisplay'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import MatchCard from "./MatchCard";
import axios from 'axios';
import Audio from '../../shared/AudioComponent/Audio';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function MatchView() {
    const [birdsData, setBirdData] = useState([]);
    const [initialData, setInitial] = useState([]);
    const birdsRef = React.createRef();
    // birdsRef.current = birdsData;
    
    // const birdDataUpdate = useCallback(() => {
    //     setBirdData(birdsData);
    // }, [birdsData, birdsRef]);
    
    async function getImage(sciName, birdRef) {
        const imgData = await axios.get(`https://pic-beak-backend.herokuapp.com/api/v1/birds/${sciName}/image`);
        if(imgData) {
            birdRef.imageLink = imgData.data.imageLink;
        }
    }

    async function getAudio(sciName, birdRef) {
        const audioData = await axios.get(`https://pic-beak-backend.herokuapp.com/api/v1/birds/${sciName}/audio`);
        if(audioData) {
            birdRef.audioLink = audioData.data.audioLink;
        }
    }
    useEffect(() => {
        const getBirds = async () => {
            const mainResponse = await axios.get(
                'https://pic-beak-backend.herokuapp.com/api/v1/birds/?page= 0&recordsPerPage= 5&subnation=BC'
                );
                
                // if (birdsRef.current != birdsData) {
                    setInitial(mainResponse.data);
                    // setRerender(!rerender);
                    console.log(initialData)
            // };
        }
            getBirds();
    });
        
    useEffect(() => {
        const getDetails = async () => {
            setBirdData(initialData);

            if(birdsData && birdsData.length > 0) {
                birdsData.forEach(bird => {
                    const sciName = bird.sciName;
                    getImage(sciName, bird);
                    // getAudio(sciName, bird);
                    setBirdData(birdsData);
                    console.log(birdsData)
                });
            
            };
        }
            getDetails();
        });

    return (
        <div id="matchView">
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around @location</h6>
            </div>
            <div className="matchViewContainer" id="matchViewContainer">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" key={birdsData}>
                {birdsData?.map((data, index) => (
                <SwiperSlide key={index}> 
                <div className='matchViewCard' id={`${data.sciName.replace(/\s/g, '-')}-card`}>
                    <img src={data.imageLink} alt={data.commonName}/>
                    <div className="matchDetailCard">
                        <div className="nameContainer">
                            <h2>{data.commonName}</h2>
                            <p>{data.sciName}</p>
                        </div>
                        <div className="buttonContainer">
                            <Audio src={data.audioLink}/>
                            <Link to="/details" state = {{ from: '/match' }} element={<DetailDataDisplay />}><Button className='primary matchCardBtn'>This is the one!</Button></Link>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <div>
            </div>
            <a href="/listview"><Button className="terciary changeViewBtn">Switch to list view</Button></a>
        </div>
        );
    }
    
    
    // <MatchCard 
    //     // onChange={setBirdData(birdsData)}
    //     thisKey={index}
    //     imageLink={data.imageLink}
    //     alt={data.commonName}
    //     id={data.sciName}
    //     sciName={data.sciName}
    //     audioLink={data.audioLink}
    //     // function={displayBirdDetails}
    //     commonName={data.commonName}
    // />
    

export default MatchView;