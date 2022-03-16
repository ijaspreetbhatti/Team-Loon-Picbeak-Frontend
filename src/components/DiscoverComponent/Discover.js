import React, { useCallback, useRef, useEffect, useState } from "react";
import SearchInput from "./SearchInputComponent/SearchInput";
import "./Discover.scss";
import BirdMatchCard from "../shared/MatchCardComponent/BirdMatchCard";
import Button from "../shared/ButtonComponent/Button";
import "./FilterComponent/Filter.scss";
import axios from "axios";
// import Filter from "./FilterComponent/Filter";

const Discover = () => {
    const [showModal, setShowModal] = useState(false);
    const [close, setClose] = useState(false);
    const [birdName, setBirdName] = useState("");
    const [status, setStatus] = useState(null);
    const [prov, setProv] = useState("");
    const [birds, setBirds] = useState([]);

    const handleBirdName = (e) => {
        setBirdName(e.target.value);
        e.target.value.length > 0 ? setClose(true) : setClose(false);
    };

    const resetBirdName = () => {
        setBirdName("");
        setClose(false);
    };

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

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
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
            // setShowModal((prev) => !prev);
        }
    };
    /********************************************************* */

    const radioDeselection = () => {
        for (const element of document.getElementsByName("status")) {
            element.checked = false;
        }
    };

    const fliterBirds = () => {
        let url;
        
        if(birdName && prov !== "" && status !== "") {
            url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=${prov}&conservationStatus=${status}&searchKeyword=${birdName}`;
            console.log(birdName);
        } else if(birdName) {
            url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&searchKeyword=${birdName}`;
        } else {
            url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=${prov}&conservationStatus=${status}`;
        }

        axios
            .get(
                `${url}`
            )
            .then((response) => {
                if (response) {
                    setBirds(response.data);
                    console.log(birds);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fliterBirds()
    }, [status]); 

    console.log(birds);

    const handleChange = (e) => {
        setStatus(e.target.value)
    };

    return (
        <div className="discover">
        <div className="Filter">
            {showModal ? (
                <div>
                    <div
                        className="filterBackground"
                        ref={modalRef}
                        onClick={closeModal}
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
                                            type="radio"
                                            value="G5"
                                            name="status"
                                        onChange={(e) =>
                                                handleChange(e)
                                            }
                                        />
                                        <label htmlFor="low">
                                            Low conservation concern
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="moderate"
                                            type="radio"
                                            value="G4"
                                            name="status"
                                            onChange={(e) =>
                                                handleChange(e)
                                            }
                                        />
                                        <label htmlFor="moderate">
                                            Moderate conservation concern
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="high"
                                            type="radio"
                                            value="G2"
                                            name="status"
                                            onChange={(e) =>
                                                handleChange(e)
                                            }
                                        />
                                        <label htmlFor="high">
                                            High conservation concern
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="btn-container">
                                <Button
                                    className="secondary"
                                    onClick={radioDeselection}
                                >
                                    Clear
                                </Button>
                                <button
                                    className="primary"
                                    ref={modalRef}
                                    onClick={closeModal}
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
            <SearchInput
                openModal={openModal}
                resetBirdName={resetBirdName}
                handleBirdName={handleBirdName}
                birdName={birdName}
                close={close}
            />
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