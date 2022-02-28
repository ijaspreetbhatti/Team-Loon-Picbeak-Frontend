import React from "react";
import "./SearchInput.scss";
import FilterIcon from "./DiscoverIcons/filter.svg";

function SearchInput() {
    return (
        <div className="bird-filter">
            <div className="searchParent">
                <input
                    className="searchBar"
                    type="text"
                    id="searchInput"
                    placeholder="enter bird name"
                />
            </div>
            <button>
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