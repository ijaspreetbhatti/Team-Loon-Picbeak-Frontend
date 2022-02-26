import React from 'react';

class Audio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isActive: false}

        this.audioPlayer = React.createRef();
        this.togglePlay = this.togglePlay.bind(this);
    }
    
    togglePlay() {
        const currentState = this.state.isActive;
        this.setState({isActive: !currentState});

        if(this.audioPlayer.current.paused) {
            this.audioPlayer.current.play();
        } else {
            this.audioPlayer.current.pause();
        }
    }

    render(){
            return(
            <div className="audioContainer">
                <audio 
                    className="audio"
                    src={this.props.src}
                    ref={this.audioPlayer}
                >
                </audio>
                <button className={this.state.isActive ? "musical-secondary-red" : "musical-light-red"} onClick={this.togglePlay}></button>
            </div>
            )
        }
    }

export default Audio;