import React, { useRef} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
var Carousel = require('react-responsive-carousel').Carousel;


function ImageCarousel() {
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
    
    const togglePlay = () => {
        if(audioPlayer.current.paused) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }
    
    function displayBirdDetails() {
        alert('Clicked the details!');
    };
    
    const audioPlayer = useRef();
    
    return (
        birdData.map(data => (
        <Carousel showArrows={true} onChange={console.log('changed')} onClickItem={console.log('clicked')} onClickThumb={console.log('thumbclick')}>
            <div key={data.sciName} className='matchViewCard' id={data.sciName.replace(/\s/g, '-')}>
                <img src={data.img} alt={data.comName}/>
                <div className="matchDetailCard">
                    <div className="nameContainer">
                        <h2>{data.comName}</h2>
                        <p>{data.sciName}</p>
                    </div>
                    <div className="buttonContainer">
                        <audio 
                            className="audio" src={data.sound}
                            ref={audioPlayer}
                        >
                        </audio>
                        <button className="musical-light-red" onClick={togglePlay}></button>
                        <Button className='primary matchCardBtn' onClick={displayBirdDetails} id={data.sciName}>This is the one!</Button>
                    </div>
                </div>
            </div>
        )
            </Carousel>
        ))
        );
}

                // <div>
                //     <img src="" />
                //     <p className="legend">Legend 1</p>
                // </div>
                // <div>
                //     <img src="" />
                //     <p className="legend">Legend 2</p>
                // </div>
                // <div>
                //     <img src="" />
                //     <p className="legend">Legend 3</p>
                // </div>
                // <div>
                //     <img src="" />
                //     <p className="legend">Legend 4</p>
                // </div>
                // <div>
                //     <img src="" />
                //     <p className="legend">Legend 5</p>
                // </div>
                // <div>
                //     <img src="" />
                //     <p className="legend">Legend 6</p>
                // </div>

// {birdData.map(data => (
//     <div key={data.sciName} className='matchViewCard' id={data.sciName.replace(/\s/g, '-')}>
//         <img src={data.img} alt={data.comName}/>
//         <div className="matchDetailCard">
//             <div className="nameContainer">
//                 <h2>{data.comName}</h2>
//                 <p>{data.sciName}</p>
//             </div>
//             <div className="buttonContainer">
//                 <audio 
//                     className="audio" src={data.sound}
//                     ref={audioPlayer}
//                 >
//                 </audio>
//                 <button className="musical-light-red" onClick={togglePlay}></button>
//                 <Button className='primary matchCardBtn' onClick={displayBirdDetails} id={data.sciName}>This is the one!</Button>
//             </div>
//         </div>
//     </div>
// ))}
export default ImageCarousel;