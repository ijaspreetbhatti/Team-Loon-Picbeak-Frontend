import React, {useState, useRef} from 'react';

function Audio(props) {
    const [isPlaying, setPlaying] = useState(false);
    const audioPlayer = useRef();

    const togglePlay = () => {
        if(!audioPlayer.current.paused) {
            audioPlayer.current.pause();
            setPlaying(false);
        } else {
            audioPlayer.current.play();
            setPlaying(true);
        }
    }

    return(
        <div className="audioContainer">
            <audio 
                className="audio"
                src={props.src}
                ref={audioPlayer}
            >
            </audio>
            <button className={isPlaying ? "musical-secondary-red" : "musical-light-red"} onClick={togglePlay}></button>
        </div>
        )
    }
    
export default Audio;