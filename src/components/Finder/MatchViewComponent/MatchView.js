import React from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
// import ImageCarousel from './Carousel.js';
import './MatchView.scss';
import Audio from '../../shared/AudioComponent/Audio';

function MatchView() {
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
        <div id="matchView">
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around @location</h6>
            </div>
            <div className="matchViewContainer" id="matchViewContainer">
                {birdData.map(data => (
                <div key={data.sciName} className='matchViewCard' id={data.sciName.replace(/\s/g, '-')}>
                    <img src={data.imageLink} alt={data.commonName}/>
                    <div className="matchDetailCard">
                        <div className="nameContainer">
                            <h2>{data.commonName}</h2>
                            <p>{data.sciName}</p>
                        </div>
                        <div className="buttonContainer">
                            <Audio src={data.audioLink}/>
                            <Button className='primary matchCardBtn' onClick={displayBirdDetails} id={data.sciName}>This is the one!</Button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div>
            </div>
            <a href="/listview"><Button className="terciary changeViewBtn">Switch to list view</Button></a>
        </div>
        );
    }
    
    // {birdData.map(data => (
    //     <div key={data.sciName} className='matchViewCard' id={data.sciName.replace(/\s/g, '-')}>
    //         <imageLink src={data.imageLink} alt={data.commonName}/>
    //         <div className="matchDetailCard">
    //             <div className="nameContainer">
    //                 <h2>{data.commonName}</h2>
    //                 <p>{data.sciName}</p>
    //             </div>
    //             <div className="buttonContainer">
    //                 <audio 
    //                     className="audio" src={data.soundLink}
    //                     ref={audioPlayer}
    //                 >
    //                 </audio>
    //                 <button className="musical-light-red" onClick={togglePlay}></button>
    //                 <Button className='primary matchCardBtn' onClick={displayBirdDetails} id={data.sciName}>This is the one!</Button>
    //             </div>
    //         </div>
    //     </div>
    // ))}
export default MatchView; 