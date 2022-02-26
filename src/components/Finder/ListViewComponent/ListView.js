import React from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './ListView.scss';
import Audio from '../../shared/AudioComponent/Audio';

function ListView() {
    const birdData = [
        {
            comName: "Varied Thrush",
            sciName: "Ixoreus naevius",
            img: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`,
            sound: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC604686-180327_02%20Varied%20Thrush.mp3"
        },
        {
            comName: "Golden-crowned Kinglet",
            sciName: "Regulus satrapa",
            img: `https://live.staticflickr.com/65535/51858746931_a65d3e7c77.jpg`,
            sound: "https://xeno-canto.org/sounds/uploaded/YQNGFTBRRT/XC500965-GCKI_Baldy_2Sep2014_Harter_01.mp3"
        },
        {
            comName: "Glaucous-winged Gull",
            sciName: "Larus glaucescens",
            img: `https://live.staticflickr.com/65535/51870485691_0549c81369.jpg`,
            sound: "https://xeno-canto.org/sounds/uploaded/SFRRHMLGSK/XC612331-Glaucous%20winged%20Gull.mp3"
        },
        {
            comName: "Varied Thrush",
            sciName: "Ixoreus naevius 2",
            img: `https://live.staticflickr.com/65535/51847099343_15c437f1fa.jpg`,
            sound: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC604686-180327_02%20Varied%20Thrush.mp3"
        },
        {
            comName: "Golden-crowned Kinglet",
            sciName: "Regulus satrapa 2",
            img: `https://live.staticflickr.com/65535/51858746931_a65d3e7c77.jpg`,
            sound: "https://xeno-canto.org/sounds/uploaded/YQNGFTBRRT/XC500965-GCKI_Baldy_2Sep2014_Harter_01.mp3"
        }
    ];

    function displayBirdDetails() {
        alert('Clicked the details!');
    };

    return (
        <div id="listView">
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around @location</h6>
            </div>
            <div className="listViewContainer" id="listViewContainer">
                {birdData.map(data => (
                <div key={data.sciName} className='listViewCard' id={data.sciName.replace(/\s/g, '-')}>
                    <Audio src={data.sound}/>
                    <img src={data.img} alt={data.comName}/>
                    <div className="listDetailCard">
                        <div className="nameContainer">
                            <p className="body2">{data.comName}</p>
                            <p>{data.sciName}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div>
            </div>
            <Button className="terciary" onClick={displayBirdDetails}>Switch to match view</Button>
        </div>
        );
    }
    
export default ListView; 