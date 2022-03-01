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
    
    
    
    
    // class Audio extends React.Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = {isActive: false}
    
    //         this.audioPlayer = React.createRef();
    //         this.togglePlay = this.togglePlay.bind(this);
    //     }
        
    //     togglePlay() {
    //         const currentState = this.state.isActive;
    //         this.setState({isActive: !currentState});
            
    //         if(!this.audioPlayer.current.paused) {
    //             this.audioPlayer.current.pause();
    //         } else {
    //             console.log('playing');
    //             this.audioPlayer.current.play();
    //         }
    //     }
    
    //     render(){
    //             return(
    //             <div className="audioContainer">
    //                 <audio 
    //                     className="audio"
    //                     src={this.props.src}
    //                     ref={this.audioPlayer}
    //                 >
    //                 </audio>
    //                 <button className={this.state.isActive ? "musical-secondary-red" : "musical-light-red"} onClick={this.togglePlay}></button>
    //             </div>
    //             )
    //         }
    //     }