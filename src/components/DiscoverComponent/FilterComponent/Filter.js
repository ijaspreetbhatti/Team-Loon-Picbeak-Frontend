import React, { useCallback, useRef, useEffect, useState } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./Filter.scss";
import axios from "axios";

function Filter({ showModal, openModal, setShowModal }, props) {
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

    const [status, setStatus] = useState("");
    console.log(status);

    const [prov, setProv] = useState("");
    console.log(prov);

    const fliterBirds = () => {
        let url = `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=${prov}&conservationStatus=${status}`;

        axios
            .get(
                url
                // if (props.birdName === undefined) {

                // `https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=${prov}&conservationStatus=${status}&searchKeyword=${props.birdName}`
                // } else if (status === "") {
                // }
            )
            .then((results) => console.log(results))
            .catch((err) => console.log(err));
        console.log(url);
    };

    useEffect(() => fliterBirds());

    // const [status, setStatus] = useState("");
    // console.log(status);

    // const [prov, setProv] = useState("");
    // console.log(prov);
    console.log(props.birdName);

    const [check, setCheck] = useState(false);

    const clearCheck = () => {
        setCheck(check);
    };

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
                                            onChange={(e) =>
                                                setStatus(e.target.value)
                                            }
                                            // checked={checked}
                                            onClick={() =>
                                                setCheck((check) => !check)
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
                                                setStatus(e.target.value)
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
                                            value="G3"
                                            name="status"
                                            onChange={(e) =>
                                                setStatus(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
                                        ></input>
                                        <label htmlFor="yt">Yukon</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="btn-container">
                                <Button
                                    className="secondary"
                                    // onClick={() => setChecked(() => (false))}
                                    onClick={clearCheck}
                                >
                                    Clear
                                </Button>
                                <Button
                                    className="primary"
                                    onClick={fliterBirds}
                                >
                                    Apply
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Filter;
