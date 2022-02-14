import React, {useState, useEffect} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './MatchView.scss';
// import { render } from '@testing-library/react';

function MatchView() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("X-eBirdApiToken", "ltmn95icte7g");
        
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.ebird.org/v2/data/obs/CA-BC-GV/recent?cat=species", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                setIsLoaded(true);
                setItems(result);
                },

                (error) => {
                setIsLoaded(true);
                setError(error);
                }
            )
        }, [])

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const displayBirdDetails = () => {
                alert('Working button!');
            }

            return (
            <div id="matchView">
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around @location</h6>

                {items.map(item => (
                    <div key={item.sciName} className='matchViewCard' id={item.sciName.replace(/\s/g, '-')}>
                            <BirdImage url={`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=8391ac68237f2756f302320f6e04fc66&tags=%27+${item.sciName}+%27&jsoncallback=?`}/>
                        <div className="matchDetailCard">
                            <div className="nameContainer">
                                <h2>{item.comName}</h2>
                                <p>{item.sciName}</p>
                            </div>
                            <div className="buttonContainer">
                                <AudioPlayer className="audio" url={`https://xeno-canto.org/api/2/recordings?query=${item.sciName}`}/>
                                <Button className='primary-small matchCardBtn' onClick={displayBirdDetails}>This is the one!</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            );
        }
}


// https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg

function BirdImage(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);

    const url = String(props.url.replace(/\s/g, '+'));

    // const requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };

    useEffect(() => {
        fetch(url) 
            .then(result => result.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setImages(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [])

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

        // const src = `https://live.staticflickr.com/${items.photos.photo[0].server}/${items.photos.photo[0].id}_${items.photos.photo[0].secret}.jpg`
    
        return (
            <p>image here {String(images)}</p>
            )
        }
    }
    // <img src="" url={props.url} />



function AudioPlayer(props) {
    function playSound() {
        // const birdSound = new Audio(items.recordings[0].file);
        console.log("this");
        // birdSound.play();
    }
    // function playSound() {
    //     const birdSound = new Audio(props.url);
    //     birdSound.play();
    //     console.log('playing');
    // }
    return (
        <button url={props.url} className={props.className} onClick={playSound} >Play</button>
    )
    //     }
    // }
}

export default MatchView; 