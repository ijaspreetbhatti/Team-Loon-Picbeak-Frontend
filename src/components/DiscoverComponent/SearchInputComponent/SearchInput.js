import React from "react";
import "./SearchInput.scss";
import FilterIcon from "../DiscoverIcons/filterGreen.svg";
import Button from "../../shared/ButtonComponent/Button";
import seachIcon from "../DiscoverIcons/search.svg";

function SearchInput(
    {
        openModal,
        handleBirdName,
        birdName,
        handleKeyDown,
        close,
        resetBirdName,
    },
    props
) {
    return (
        // <div className="search-block">
        //     <div className="searchParent">
        //         <img src={seachIcon} alt="search icon" />
        //         <input
        //             onChange={props.handleBirdName}
        //             value={props.birdName}
        //             className="searchBar"
        //             type="text"
        //             id="searchInput"
        //             placeholder="enter bird name"
        //         />
        //         {!props.close ? null : (
        //             <Button
        //                 className="exit"
        //                 close={props.close}
        //                 onClick={props.resetBirdName}
        //             ></Button>
        //         )}
        //     </div>
        //     <button onClick={openModal}>
        //         <img
        //             src={FilterIcon}
        //             type="image/svg+xml"
        //             width="24"
        //             height="24"
        //             alt="filer icon"
        //         />
        //     </button>
        // </div>

        <div className="search-block">
            <div className="searchParent">
                <img src={seachIcon} alt="search icon" />
                <input
                    onChange={handleBirdName}
                    value={birdName}
                    className="searchBar"
                    type="text"
                    id="searchInput"
                    placeholder="enter bird name"
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                {!close ? null : (
                    <Button
                        className="exit"
                        close={close}
                        onClick={resetBirdName}
                    ></Button>
                )}
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
