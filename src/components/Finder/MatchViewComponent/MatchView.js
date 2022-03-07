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
import { Link } from "react-router-dom";

function MatchView() {
    const [birdsData, setBirdData] = useState([]);
    const [loading, setloading] = useState(true);
    const mounted = useRef();
    const [didRanGetDetails, setdidRanGetDetails] = useState(false);

    // const birdDataUpdate = useCallback(() => {
    //     setBirdData(birdsData);
    // }, [birdsData, birdsRef]);

    const getBirds = async () => {
        // let mounted = true
        const source = axios.CancelToken.source();
        try {
            // const mainResponse = await axios
            await axios
                .get(
                    "https://pic-beak-backend.herokuapp.com/api/v1/birds/?page= 0&recordsPerPage= 5&subnation=BC",
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
                    // setDataLoad(1)
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
                <h6>Showing birds around @location</h6>
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
                                    src={data.imageLink}
                                    alt={data.commonName}
                                />
                                <div className="matchDetailCard">
                                    <div className="nameContainer">
                                        <h2>{data.commonName}</h2>
                                        <p>{data.sciName}</p>
                                    </div>
                                    <div className="buttonContainer">
                                        <Audio src={data.audioLink} />
                                        <Link
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
