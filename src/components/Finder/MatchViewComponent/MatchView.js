import React, { useState, useEffect, useRef } from "react";
import Button from "../../shared/ButtonComponent/Button.js";
import "./MatchView.scss";
import DetailDataDisplay from "../../DetailComponent/DetailDataDisplay/DetailDataDisplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import MatchCard from "./MatchCard";
import axios, { Axios } from "axios";
import Audio from "../../shared/AudioComponent/Audio";
import { Link, useNavigate } from "react-router-dom";

function MatchView() {
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
                    {birdsData?.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="matchViewCard"
                                id={`${data.sciName.replace(/\s/g, "-")}-card`}
                            >
                                <img
                                    src={!data.imageLink ? "./assets/images/picbeakLoading.png" : data.imageLink}
                                    className={!data.imageLink ? 'loadImg' : 'matchLoadedImg'}
                                    alt={data.commonName}
                                />
                                <div className="matchDetailCard">
                                    <div className="nameContainer">
                                        <h2>{data.commonName}</h2>
                                        <p>{data.sciName}</p>
                                    </div>
                                    <div className="buttonContainer">
                                        <Audio src={data.audioLink} />
                                        <Link to={{
                                            pathname: "/details"}} state={{from: 'match', data: data}} element={<DetailDataDisplay/>}>
                                                <Button className="primary matchCardBtn">
                                                    This is the one!
                                                </Button>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
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


/* <Link
to={{
    pathname: "/details",
    state: {
        birdPic: `${data.imageLink}`,
        sciName: `This Sciname`,
        commonName: `${data.commonName}`,
        from: "match",
    },
}}
element={<DetailDataDisplay />}
>
<Button className="primary matchCardBtn">
    This is the one!
</Button>
</Link> */

// <MatchCard
//     // onChange={setBirdData(birdsData)}
//     thisKey={index}
//     imageLink={data.imageLink}
//     alt={data.commonName}
//     id={data.sciName}
//     sciName={data.sciName}
//     audioLink={data.audioLink}
//     // function={displayBirdDetails}
//     commonName={data.commonName}
// />

export default MatchView;
