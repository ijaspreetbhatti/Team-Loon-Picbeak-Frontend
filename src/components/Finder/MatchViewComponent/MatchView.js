import React, {useState, useRef, useEffect, useCallback} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './MatchView.scss';
import DetailDataDisplay from '../../DetailComponent/DetailDataDisplay/DetailDataDisplay'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MatchCard from "./MatchCard";
import axios from 'axios';

function MatchView() {
    const [birdsData, setBirdData] = useState([]);
    const [index, setIndex] = useState(0);
    
    const birdDataUpdate = useCallback(() => {
        setBirdData(birdsData);
    }, [birdsData]);
    
    useEffect(() => {
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

        const getBirds = async () => {
            const mainResponse = await axios.get(
                'https://pic-beak-backend.herokuapp.com/api/v1/birds/?page= 0&recordsPerPage= 5&subnation=BC'
                );
    
                // setBirdData(mainResponse.data);
    
                if(mainResponse.data && mainResponse.data.length > 0) {
                    birdsData.forEach(bird => {
                        const sciName = bird.sciName;
                        getImage(sciName, bird);
                        getAudio(sciName, bird);
                    });
                    // setBirdData(mainResponse.data);
                }
                setBirdData(mainResponse.data);
         
                // const allData = mainResponse.data;
                // setBirdData(allData);
            };
            getBirds();
        }, [birdDataUpdate]);
        
    console.log(birdsData);
    const [showDetails, setDetails ] = useState(false);

    function displayBirdDetails() {
        if (!showDetails) {
            setDetails(true);
            console.log('details shown');
        } else {
            setDetails(false);
        }
    };

    if (!showDetails) {
    return (
        <div id="matchView">
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around @location</h6>
            </div>
            <div className="matchViewContainer" id="matchViewContainer">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {birdsData?.map((data, index) => (
                <SwiperSlide key={index}> 
                    <MatchCard 
                        imageLink={data.imageLink}
                        alt={data.commonName}
                        id={data.sciName}
                        sciName={data.sciName}
                        audioLink={data.audioLink}
                        function={displayBirdDetails}
                        commonName={data.commonName}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <div>
            </div>
            <a href="/listview"><Button className="terciary changeViewBtn">Switch to list view</Button></a>
        </div>
        );
    } else {
    return (
        <DetailDataDisplay />
    )
    }
}
    

export default MatchView; 