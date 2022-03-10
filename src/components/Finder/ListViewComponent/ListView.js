import React, {useState, useRef, useEffect} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './ListView.scss';
import BirdMatchCard from '../../shared/MatchCardComponent/BirdMatchCard';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function ListView() {
    const [birdsData, setBirdData] = useState([]);
    // const [loading, setloading] = useState(true);
    const [location, setLocation] = useState(null);
    const mounted = useRef();
    // const [didRanGetDetails, setdidRanGetDetails] = useState(false);

    const navigate = useNavigate();

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
                        // setloading(false);
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
        
    return (
        <div id="listView">
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around {location ? location.city : "location"}</h6>
            </div>
            <div className="listViewContainer" id="listViewContainer">
                {birdsData.map((data, index) => (
                <BirdMatchCard 
                    key={index} 
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