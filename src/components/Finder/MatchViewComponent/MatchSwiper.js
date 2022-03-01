import React from 'react';
import './MatchView.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MatchCard from "./MatchCard";

export default function MatchSwiper() {
    const birdData = [
        {
            commonName: "Varied Thrush",
            sciName: "Ixoreus naevius",
            imageLink: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`,
            audioLink: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC604686-180327_02%20Varied%20Thrush.mp3",
            description: "lorem ipsum dolor set",
            conservationStatus: "Low Concern",
            gallery: [
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                }
            ]
        },
        {
            commonName: "Golden-crowned Kinglet",
            sciName: "Regulus satrapa",
            imageLink: `https://live.staticflickr.com/65535/51858746931_a65d3e7c77.jpg`,
            audioLink: "https://xeno-canto.org/sounds/uploaded/YQNGFTBRRT/XC500965-GCKI_Baldy_2Sep2014_Harter_01.mp3",
            description: "lorem ipsum dolor set",
            conservationStatus: "Low Concern",
            gallery: [
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                }
            ]
        },
        {
            commonName: "Glaucous-winged Gull",
            sciName: "Larus glaucescens",
            imageLink: `https://live.staticflickr.com/65535/51870485691_0549c81369.jpg`,
            audioLink: "https://xeno-canto.org/sounds/uploaded/SFRRHMLGSK/XC612331-Glaucous%20winged%20Gull.mp3",
            description: "lorem ipsum dolor set",
            conservationStatus: "Low Concern",
            gallery: [
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                }
            ]
        },
        {
            commonName: "Varied Thrush",
            sciName: "Ixoreus naevius 2",
            imageLink: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`,
            audioLink: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC604686-180327_02%20Varied%20Thrush.mp3",
            description: "lorem ipsum dolor set",
            conservationStatus: "Low Concern",
            gallery: [
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                }
            ]
        },
        {
            commonName: "Golden-crowned Kinglet",
            sciName: "Regulus satrapa 2",
            imageLink: `https://live.staticflickr.com/65535/51858746931_a65d3e7c77.jpg`,
            audioLink: "https://xeno-canto.org/sounds/uploaded/YQNGFTBRRT/XC500965-GCKI_Baldy_2Sep2014_Harter_01.mp3",
            description: "lorem ipsum dolor set",
            conservationStatus: "Low Concern",
            gallery: [
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                },
                {
                    collectedBirdImage: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`
                }
            ]
        }
    ];

    function displayBirdDetails() {
        alert('Clicked the details!');
    };

    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {birdData.map(data => (
            <SwiperSlide> 
                <MatchCard sciName={data.sciName}  
                    imageLink={data.imageLink} alt={data.commonName} sciName={data.sciName}
                    audioLink={data.audioLink} function={displayBirdDetails} commonName2={data.commonName}
                />
            </SwiperSlide>
            ))}
        </Swiper>
    )
}