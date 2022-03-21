import React, { useCallback, useEffect, useState } from "react";
import "./Discover.scss";
import BirdMatchCard from "../shared/MatchCardComponent/BirdMatchCard";
import Button from "../shared/ButtonComponent/Button";
import "./FilterComponent/Filter.scss";
import axios from "axios";
import "./SearchInputComponent/SearchInput.scss";
import FilterIcon from "./DiscoverIcons/filterGreen.svg";
import seachIcon from "./DiscoverIcons/search.svg";

const Discover = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [close, setClose] = useState(false);
    const [birdName, setBirdName] = useState("");
    const [status, setStatus] = useState("");
    const [birds, setBirds] = useState([]);

    const handleBirdName = (e) => {
        setBirdName(e.target.value);
        console.log(birdName);

        e.target.value.length > 0 ? setClose(true) : setClose(false);
    };

    const resetBirdName = () => {
        setBirdName("");
        setClose(false);
    };

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    /** Close Modal When ESC Key Peressed ******************* */
    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);
    /********************************************************* */

    /** Close Modal When Background Clicked ******************* */
    const closeModal = (e) => {
        setShowModal(false);
    };
    /********************************************************* */

    const filterBirds = (e) => {
        e.preventDefault();
        let url;

        if (birdName.length > 1 && status !== "") {
            if (status === "G3") {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=G1&conservationStatus=G2&conservationStatus=${status}&searchKeyword=${birdName}&maxResults=15`;
            } else {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=${status}&searchKeyword=${birdName}&maxResults=15`;
                console.log(1);
            }
        } else if (birdName.length > 1) {
            console.log("birdname");
            url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&searchKeyword=${birdName}`;
        } else if (status !== "") {
            if (status === "G3") {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=G1&conservationStatus=G2&conservationStatus=${status}&maxResults=15`;
            } else {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=${status}&maxResults=15`;
            }

            console.log(url);
        }

        axios
            .get(`${url}`)
            .then((response) => {
                if (response) {
                    setBirds(response.data);
                    console.log(birds);
                    setShowModal(false);
                }
            })
            .catch((err) => console.log(err));
    };

    console.log(birds);

    const handleChange = (e) => {
        setStatus(e.target.value);
    };

    /** Fire filterBirds by Enter Key ************************ */
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            return filterBirds(e);
        }
    };
    /********************************************************* */

    /** Toggle check ****************************************** */
    const initializedData = {
        notifyFrequency: "",
    };

    const [check, setCheck] = useState(initializedData);

    const handleFrequencyChange = (e) => {
        const newValue =
            e.target.value === check.notifyFrequency ? "" : e.target.value;
        const newCheck = { ...check, notifyFrequency: newValue };
        setCheck(newCheck);
    };
    /********************************************************* */

    return (
        <div className="discover">
            <div className="Filter">
                {showModal ? (
                    <div>
                        <div
                            className="filterBackground"
                            onClick={(e) => closeModal(e)}
                        ></div>
                        <div className="modalWrapper">
                            <div className="titleWrapper">
                                <p>Filters</p>
                                <div
                                    className="closeIcon"
                                    onClick={openModal}
                                ></div>
                            </div>
                            <form>
                                <div className="fieldSets">
                                    <fieldset>
                                        {/** STATUS */}
                                        <legend>By conservation status</legend>
                                        <div className="option">
                                            <input
                                                className="visually-hidden"
                                                id="low"
                                                type="checkbox"
                                                value="G5"
                                                name="status"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                                checked={
                                                    check.notifyFrequency ===
                                                    "G5"
                                                }
                                                onClick={handleFrequencyChange}
                                            />
                                            <label htmlFor="low">
                                                Low conservation concern
                                            </label>
                                        </div>
                                        <div className="option">
                                            <input
                                                className="visually-hidden"
                                                id="moderate"
                                                type="checkbox"
                                                value="G4"
                                                name="status"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                                checked={
                                                    check.notifyFrequency ===
                                                    "G4"
                                                }
                                                onClick={handleFrequencyChange}
                                            />
                                            <label htmlFor="moderate">
                                                Moderate conservation concern
                                            </label>
                                        </div>
                                        <div className="option">
                                            <input
                                                className="visually-hidden"
                                                id="high"
                                                type="checkbox"
                                                value="G3"
                                                name="status"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                                checked={
                                                    check.notifyFrequency ===
                                                    "G3"
                                                }
                                                onClick={handleFrequencyChange}
                                            />
                                            <label htmlFor="high">
                                                High conservation concern
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="btn-container">
                                    <Button className="secondary">Clear</Button>
                                    <button
                                        className="primary"
                                        onClick={(e) => filterBirds(e)}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : null}
            </div>
            <h3>Discover bird species</h3>
            <p>
                Explore birds species and start your own birdwatching session,
                no matter where you are.
            </p>
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
            <div className="cardParent">
                {birds.map((data) => (
                    <BirdMatchCard
                        key={data.sciName}
                        id={data.sciName}
                        audioLink={data.audioLink}
                        imageLink={data.imageLink}
                        alt={data.commonName}
                        commonName={data.commonName}
                        sciName={data.sciName}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;

/* <SearchInput
openModal={openModal}
resetBirdName={resetBirdName}
handleBirdName={handleBirdName}
birdName={birdName}
close={close}
/> */
