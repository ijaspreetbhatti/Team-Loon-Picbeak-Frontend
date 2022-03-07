import React, {useState, useCallback, useEffect} from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './ListView.scss';
import BirdMatchCard from '../../shared/MatchCardComponent/BirdMatchCard';
import DetailDataDisplay from '../../DetailComponent/DetailDataDisplay/DetailDataDisplay';
import axios from 'axios';

function ListView() {
            
        const [birdsData, setBirdData] = useState([]);
        const [initialData, setInitial] = useState([]);
        const birdsRef = React.createRef();
        // birdsRef.current = birdsData;
        
        const birdDataUpdate = useCallback(() => {
            setBirdData(birdsData);
        }, [birdsData, birdsRef]);
        
        async function getImage(sciName, birdRef) {
            const imgData = await axios.get(`https://pic-beak-backend.herokuapp.com/api/v1/birds/${sciName}/image`);
            if(imgData) {
                birdRef.imageLink = imgData.data.imageLink;
            }
        }
    
        async function getAudio(sciName, birdRef) {
            const audioData = await axios.get(`https://pic-beak-backend.herokuapp.com/api/v1/birds/${sciName}/audio`);
            if(audioData) {
                birdRef.audioLink = audioData.data.audioLink;
            }
        }
        
        useEffect(() => {
            const getBirds = async () => {
                const mainResponse = await axios.get(
                    'https://pic-beak-backend.herokuapp.com/api/v1/birds/?page= 0&recordsPerPage= 10&subnation=BC'
                    );
                    
                    // if (birdsRef.current != birdsData) {
                        setInitial(mainResponse.data);
                        // setRerender(!rerender);
                        console.log(initialData)
                // };
            }
                getBirds();
        });
            
        useEffect(() => {
            const getDetails = async () => {
                setBirdData(initialData);
    
                if(birdsData && birdsData.length > 0) {
                    birdsData.forEach(bird => {
                        const sciName = bird.sciName;
                        getImage(sciName, bird);
                        // getAudio(sciName, bird);
                        console.log(birdsData)
                    });
                    setBirdData(birdsData);
                    
                };
            }
                getDetails();
            }, [initialData.length, birdsData]);
        
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
                            sciName={data.sciName}/>
                    ))}
                    </div>
                    <div>
                    </div>
                    <a href="/match"><Button className="terciary changeViewBtn">Switch to match view</Button></a>
                </div>
                );
        }
            
        export default ListView; 