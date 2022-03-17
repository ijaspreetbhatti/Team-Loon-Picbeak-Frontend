import React, { useState, useEffect, useRef } from "react";
import Button from "../../shared/ButtonComponent/Button.js";
import "./MatchView.scss";
import MatchCard from './MatchCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MatchView() {
    const [birdsData, setBirdData] = useState([]);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
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
                        setBirdData(response.data);
                        setLoading(false)
                        console.log(birdsData);
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
        <div id="matchView">
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>
                    Showing birds around {location ? location.city : "location"}
                </h6>
            </div>
            <div className="matchViewContainer" id="matchViewContainer">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
            {loading ? (
                <SwiperSlide>
                <div className='matchViewCard'>
                    <img src="./assets/images/picbeakPlaceholder.svg" alt="Spotting birds..." className="loadImg"/>
                    <div className="matchDetailCard">
                        <div className="nameContainer">
                            <h2>Spotting birds...</h2>
                        </div>
                        <div className="buttonContainer">
                            <div className="musical-grey"></div>
                            <Button className='primary-grey matchCardBtn'>This is the one!</Button>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            ) :
                    birdsData?.map((data, index) => (
                        <SwiperSlide key={index}>
                            <MatchCard
                                imageLink={!data.imageLink ? "./assets/images/picbeakPlaceholder.svg" : data.imageLink}
                                alt={data.commonName}
                                id={data.sciName}
                                sciName={data.sciName}
                                audioLink={data.audioLink}
                                commonName={data.commonName}
                                data={data}
                                class = {!data.imageLink ? 'loadImg' : 'matchLoadedImg'}
                            />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            <div></div>
            <a href="/listview">
                <Button className="terciary changeViewBtn">
                    Switch to list view
                </Button>
            </a>
        </div>
    );
}

export default MatchView;

