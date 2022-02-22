import React from "react";

function SearchInput() {
    return (
        <div className="bird-filter">
            <div className="searchParent">
                <img
                    src="./icon/search.svg"
                    type="image/svg+xml"
                    width="24"
                    height="24"
                    alt="Search icon"
                />
                <input
                    type="text"
                    id="searchInput"
                    placeholder="enter bird name"
                />
            </div>
            <button>
                <img
                    src="./icon/filter.svg"
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
