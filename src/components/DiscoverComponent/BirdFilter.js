import React from "react";
import "./BirdFilter.scss";

function BirdFilter() {
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            alert(e.target.value);
        }
    };
    return (
        <div className="bird-filter">
            <h2>Where do you see the bird?</h2>
            <div className="searchInputWrapper">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="enter location"
                    onKeyPress={onKeyPress}
                />
            </div>
        </div>
    );
}

export default BirdFilter;
