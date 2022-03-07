import React, {useState, useRef, useEffect} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './ListView.scss';
import BirdMatchCard from '../../shared/MatchCardComponent/BirdMatchCard';
import DetailDataDisplay from '../../DetailComponent/DetailDataDisplay/DetailDataDisplay';
import axios, {Axios} from 'axios';

function ListView() {
            
    const [birdsData, setBirdData] = useState([]);
    const [loading, setloading] = useState(true);
    const [didRanGetDetails, setdidRanGetDetails] = useState(false);
    const mounted = useRef();

    const getBirds = async () => {
        const source = axios.CancelToken.source();
        try {
            await axios
                .get(
                    "https://pic-beak-backend.herokuapp.com/api/v1/birds/?page= 0&recordsPerPage= 10&subnation=BC",
                    {
                        cancelToken: source.token,
                    }
                )
                .then((response) => {
                    if (response) {
                        setloading(false);
                        setBirdData(response.data);
                    }
                });
        } catch (error) {
            if (Axios.isCancel(error)) {
            } else {
                throw error;
            }
        }
        return function cleanup() {
            source.cancel();
        };
    };

    // componentDidMount
    useEffect(() => {
        if (mounted) {
            console.log("MOUNTED");
            getBirds();
        } else {
            console.log("NOT MOUNTED");
        }
    }, []);

    useEffect(() => {
        if (birdsData && birdsData.length > 0 && !didRanGetDetails) {
            setdidRanGetDetails(true);
            async function getImage(sciName, birdRef) {
                const imgData = await axios.get(
                    `https://pic-beak-backend.herokuapp.com/api/v1/birds/${sciName}/image`
                );
                if (imgData) {
                    birdRef.imageLink = imgData.data.imageLink;
                    setBirdData([...birdsData]);
                }
            }

            async function getAudio(sciName, birdRef) {
                const audioData = await axios.get(
                    `https://pic-beak-backend.herokuapp.com/api/v1/birds/${sciName}/audio`
                );
                if (audioData) {
                    birdRef.audioLink = audioData.data.audioLink;
                    setBirdData([...birdsData]);
                }
            }
            console.log("GET DETAILS >>> ", birdsData);
            if (birdsData && birdsData.length > 0) {
                birdsData.forEach((bird) => {
                    const sciName = bird.sciName;
                    getImage(sciName, bird);
                    getAudio(sciName, bird);
                });
            }
            // return () => {
            //     // source.cancel();
            //     setDataLoad(true)
            // };
        }
    }, [birdsData, didRanGetDetails]);
        
            return (
                <div id="listView">
                    <div>
                        <h2>Explore birds and spot the one you're spying!</h2>
                        <h6>Showing birds around @location</h6>
                    </div>
                    <div className="listViewContainer" id="listViewContainer">
                        {birdsData.map((data) => (
                        <BirdMatchCard 
                            key={data.sciName} 
                            id={data.sciName} 
                            audioLink={data.audioLink}
                            imageLink={data.imageLink}
                            alt={data.commonName}
                            commonName={data.commonName}
                            sciName={data.sciName}
                            data={data}
                            />
                    ))}
                    </div>
                    <div>
                    </div>
                    <a href="/match"><Button className="terciary changeViewBtn">Switch to match view</Button></a>
                </div>
                );
        }
            
        export default ListView; 