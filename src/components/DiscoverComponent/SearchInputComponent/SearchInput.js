import React from "react";
import "./SearchInput.scss";
import FilterIcon from "../DiscoverIcons/filterGreen.svg";
import Button from "../../shared/ButtonComponent/Button";
import seachIcon from "../DiscoverIcons/search.svg";

function SearchInput({ openModal }, props) {
    // const [close, setClose] = useState(false);
    // const [birdName, setBirdName] = useState("");

    // const handleBirdName = (e) => {
    //     setBirdName(e.target.value);
    //     e.target.value.length > 0 ? setClose(true) : setClose(false);
    // };

    // const resetBirdName = () => {
    //     setBirdName("");
    //     setClose(false);
    // };

    return (
        <div className="search-block">
            <div className="searchParent">
                <img src={seachIcon} alt="search icon" />
                <input
                    onChange={props.handleBirdName}
                    value={props.birdName}
                    className="searchBar"
                    type="text"
                    id="searchInput"
                    placeholder="enter bird name"
                />
                {!props.close ? null : (
                    <Button
                        className="exit"
                        close={props.close}
                        onClick={props.resetBirdName}
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
