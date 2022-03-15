import React, { useCallback, useRef, useEffect } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./Filter.scss";
import axios from "axios";

function Filter({ showModal, openModal, setShowModal }) {
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
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };
    /********************************************************* */

    const radioDeselection = () => {
        for (const element of document.getElementsByName("status")) {
            element.checked = false;
        }
    };

    const fliterBirds = () => {
        axios
            .get(
                `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&gRank=G1&searchKeyword=Hawks`
            )
            .then((results) => console.log(results))
            .catch((err) => console.log(err));
    };

    useEffect(() => fliterBirds());

    // const getBirds = async () => {
    //     const source = axios.CancelToken.source();
    //     try {
    //         await axios
    //             .get(
    //                 `https://pic-beak-backend.herokuapp.com/api/v1/birds/location?lat=${location.lat}&lng=${location.lng}&maxResults=15`,
    //                 {
    //                     cancelToken: source.token,
    //                 }
    //             )
    //             .then((response) => {
    //                 if (response) {
    //                     setBirdData(response.data);
    //                     setLoading(false)
    //                     console.log(birdsData);
    //                 }
    //             });
    //     } catch (error) {
    //         if (axios.isCancel(error)) {
    //         } else {
    //             throw error;
    //         }
    //     }
    //     return function cleanup() {
    //         source.cancel();
    //     };
    // };

    return (
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
                                            value="G3"
                                            name="status"
                                        />
                                        <label htmlFor="high">
                                            High conservation concern
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    {/** PROVINCE */}
                                    <legend>By Province/Territory</legend>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="ab"
                                            type="radio"
                                            value="AB"
                                            name="province"
                                        ></input>
                                        <label htmlFor="ab">Alberta</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="bc"
                                            type="radio"
                                            value="BC"
                                            name="province"
                                        ></input>
                                        <label htmlFor="bc">
                                            British Columbia
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="mb"
                                            type="radio"
                                            value="MB"
                                            name="province"
                                        ></input>
                                        <label htmlFor="mb">Manitoba</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="nb"
                                            type="radio"
                                            value="NB"
                                            name="province"
                                        ></input>
                                        <label htmlFor="nb">
                                            New Brunswick
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="nl"
                                            type="radio"
                                            value="NL"
                                            name="province"
                                        ></input>
                                        <label htmlFor="nl">
                                            Newfoundland and Labrador
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="nt"
                                            type="radio"
                                            value="NT"
                                            name="province"
                                        ></input>
                                        <label htmlFor="nt">
                                            Northwest Territories
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="ns"
                                            type="radio"
                                            value="NS"
                                            name="province"
                                        ></input>
                                        <label htmlFor="ns">Nova Scotia</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="nu"
                                            type="radio"
                                            value="NU"
                                            name="province"
                                        ></input>
                                        <label htmlFor="nu">Nunavut</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="on"
                                            type="radio"
                                            value="ON"
                                            name="province"
                                        ></input>
                                        <label htmlFor="on">Ontario</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="pe"
                                            type="radio"
                                            value="PE"
                                            name="province"
                                        ></input>
                                        <label htmlFor="pe">
                                            Prince Edward Island
                                        </label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="qc"
                                            type="radio"
                                            value="QC"
                                            name="province"
                                        ></input>
                                        <label htmlFor="qc">Quebec</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="sk"
                                            type="radio"
                                            value="SK"
                                            name="province"
                                        ></input>
                                        <label htmlFor="sk">Saskatchewan</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            className="visually-hidden"
                                            id="yt"
                                            type="radio"
                                            value="YT"
                                            name="province"
                                        ></input>
                                        <label htmlFor="yt">Yukon</label>
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
                                <Button className="primary">Apply</Button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Filter;
