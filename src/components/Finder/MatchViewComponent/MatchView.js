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
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around @location</h6>

                {items.map(item => (
                    <div key={item.sciName} className='matchViewCard'>
                        <img src="https://images.unsplash.com/photo-1616878457386-e09e41105743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80" alt="bird"></img>
                        <h2>{item.comName}</h2>
                        <p>{item.sciName}</p>
                        <Button className='primary' onClick={displayBirdDetails}>This is the one!</Button>

                        <AudioPlayer className="audio" url={`https://xeno-canto.org/api/2/recordings?query=${item.sciName}`}/>
                    </div>
                ))}
            </div>
            );
        }
}

function AudioPlayer(props) {

    function playSound() {
        const birdSound = new Audio(props.url);
        birdSound.play();
        console.log('playing');
    }
            return (
                <button url={props.url} className={props.className} onClick={playSound} >Play</button>
            )
        }
    // }
// }

export default MatchView; 


// const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');

    // const url = props.url.replace(/\s/g, '+');

    // useEffect(() => {
    //     fetch(`${url}`, headers) 
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result);
    //             },

    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    //     }, [])

    //     if (error) {
    //         return <div>Error: {error.message}</div>;
    //     } else if (!isLoaded) {
    //         return <div>Loading...</div>;
    //     } else {

    //         function playSound() {
    //             // const birdSound = new Audio(items.recordings[0].file);
    //             console.log("this" + items);
    //             // birdSound.play();
    //         }
