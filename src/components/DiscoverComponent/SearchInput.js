import React, { useState } from "react";
import "./SearchInput.scss";
import FilterIcon from "./DiscoverIcons/filterGreen.svg";
import Button from "../shared/ButtonComponent/Button";

function SearchInput({ openModal }) {
    const [close, setClose] = useState(false);

    const showClose = () => {
        if (input.length > 0) {
            setClose((prev) => !prev);
        }
    };

    return (
        <div className="search-block">
            <div className="searchParent">
                <input
                    className="searchBar"
                    type="text"
                    id="searchInput"
                    placeholder="enter bird name"
                />
                <Button className="exit"></Button>
            </div>
            <button onClick={openModal}>
                <img
                    src={FilterIcon}
                    type="image/svg+xml"
                    width="24"
                    height="24"
                    alt="filer icon"
                />
            </button>
        </div>
    );
}

export default SearchInput;
