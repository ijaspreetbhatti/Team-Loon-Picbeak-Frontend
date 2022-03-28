import React, { useState } from "react";
import "./Discover.scss";
import BirdMatchCard from "../shared/MatchCardComponent/BirdMatchCard";
import "./FilterComponent/Filter.scss";
import axios from "axios";
import "./SearchInputComponent/SearchInput.scss";
import SearchInput from "./SearchInputComponent/SearchInput";
import Filter from "./FilterComponent/Filter";

const Discover = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [close, setClose] = useState(false);
    const [birdName, setBirdName] = useState("");
    const [status, setStatus] = useState("");
    const [birds, setBirds] = useState([]);
    const [noResult, setNoResult] = useState(false);

    /** Get Value of Input ************************************ */
    const handleBirdName = (e) => {
        setBirdName(e.target.value);
        console.log(birdName);

        e.target.value.length > 0 ? setClose(true) : setClose(false);
    };
    /********************************************************* */

    const resetBirdName = () => {
        setBirdName("");
        setClose(false);
    };

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    const filterBirds = (e) => {
        e.preventDefault();
        let url;

        if (birdName.length >= 1 && status !== "") {
            if (status === "G3") {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=G1&conservationStatus=G2&conservationStatus=${status}&searchKeyword=${birdName}&maxResults=20`;
            } else {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=${status}&searchKeyword=${birdName}&maxResults=20`;
                console.log(1);
            }
        } else if (birdName.length >= 1) {
            console.log("birdname");
            url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&searchKeyword=${birdName}`;
        } else if (status !== "") {
            if (status === "G3") {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=G1&conservationStatus=G2&conservationStatus=${status}&maxResults=20`;
            } else {
                url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&conservationStatus=${status}&maxResults=20`;
            }
        }
        console.log(url);

        axios
            .get(`${url}`)
            .then((response) => {
                if (response) {
                    setBirds(response.data);
                    console.log(birds);
                }
            })
            .catch((err) => console.log(err));
        setShowModal(false);
        setNoResult(true);
    };

    console.log(birds);

    /** Get Array of Common Names **************************** */
    const commonNameArr = [...birds.map((item) => item.commonName)];
    console.log(commonNameArr);
    /********************************************************* */

    const handleChange = (e) => {
        setStatus(e.target.value);
    };

    /** Fire filterBirds by Enter Key ************************ */
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            setNoResult(true);
            return filterBirds(e);
        }
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
                                    onClick={closeModal}
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
            <h2>Discover bird species</h2>
            <h6>
                Explore birds species and start your own birdwatching session,
                no matter where you are.
            </h6>

            <SearchInput
                openModal={openModal}
                handleBirdName={handleBirdName}
                birdName={birdName}
                handleKeyDown={handleKeyDown}
                close={close}
                resetBirdName={resetBirdName}
            />

            {noResult && birds.length === 0 ? (
                <div className="no-result">
                    <p>No birds species found for this search.</p>
                </div>
            ) : null}
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
