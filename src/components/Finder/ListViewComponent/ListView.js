import React, {useState, useRef, useEffect} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './ListView.scss';
import BirdMatchCard from '../../shared/MatchCardComponent/BirdMatchCard';
import DetailDataDisplay from '../../DetailComponent/DetailDataDisplay/DetailDataDisplay';
import axios, {Axios} from 'axios';
import { Link, useNavigate } from "react-router-dom";


function ListView() {

    const [birdsData, setBirdData] = useState([]);
    const [loading, setloading] = useState(true);
    const [location, setLocation] = useState(null);
    const mounted = useRef();
    const [didRanGetDetails, setdidRanGetDetails] = useState(false);

    const navigate = useNavigate();

    // const birdDataUpdate = useCallback(() => {
    //     setBirdData(birdsData);
    // }, [birdsData, birdsRef]);

    const getBirds = async () => {
        const source = axios.CancelToken.source();
        try {
            await axios
                .get(
                    `https://pic-beak-backend.herokuapp.com/api/v1/birds/location?lat=${location.lat}&lng=${location.lng}&maxResults=15`,
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
            if (axios.isCancel(error)) {
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
            console.log("Component mounted");
            if (JSON.parse(localStorage.getItem("location"))) {
                setLocation(JSON.parse(localStorage.getItem("location")));
            } else {
                navigate("/*");
            }
        } else {
            console.log("NOT MOUNTED");
        }
    }, []);

    useEffect(() => {
        console.log("Location Effect");
        if (location) {
            getBirds();
        }
    }, [location]);

    useEffect(() => {
        console.log("Birds Data Effect");
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
                        <h6>Showing birds around {location ? location.city : "location"}</h6>
                    </div>
                    <div className="listViewContainer" id="listViewContainer">
                        {birdsData.map((data) => (
                        <BirdMatchCard 
                            key={data.sciName} 
                            id={data.sciName} 
                            audioLink={data.audioLink}
                            imageLink={!data.imageLink ? "./assets/images/picbeakLoading.png" : data.imageLink}
                            alt={data.commonName}
                            commonName={data.commonName}
                            sciName={data.sciName}
                            data={data}
                            class={!data.imageLink ? 'loadImg' : 'matchLoadedImg'}
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