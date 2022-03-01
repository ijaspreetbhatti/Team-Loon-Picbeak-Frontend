import React from 'react';
import Button from '../../shared/ButtonComponent/Button.js';
import './MatchView.scss';
import MatchSwiper from './MatchSwiper';

function MatchView() {
    return (
        <div id="matchView">
            <div>
                <h2>Explore birds and spot the one you're spying!</h2>
                <h6>Showing birds around @location</h6>
            </div>
            <div className="matchViewContainer" id="matchViewContainer">
                <MatchSwiper/>
            </div>
            <div>
            </div>
            <a href="/listview"><Button className="terciary changeViewBtn">Switch to list view</Button></a>
        </div>
        );
    }
    

export default MatchView;
