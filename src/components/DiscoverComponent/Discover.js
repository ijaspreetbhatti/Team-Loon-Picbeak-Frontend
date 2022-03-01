import React from "react";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import "./Discover.scss";

const Discover = () => {
    return (
        <div className="discover">
            <h3>Discover bird species</h3>
            <p>
                Explore birds species and start your own birdwatching session,
                no matter where you are.
            </p>
            <SearchInput />
            <Filter />
        </div>
    );
};

export default Discover;
