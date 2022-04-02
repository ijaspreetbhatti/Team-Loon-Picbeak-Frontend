import React, { useCallback, useEffect, useState } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./Filter.scss";

function Filter({ showModal, filterBirds, setShowModal, handleChange }, props) {
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

    const closeModal = (e) => {
        setShowModal(false);
    };

    /** Toggle check Mark ************************************ */
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
                                            onChange={(e) => handleChange(e)}
                                            checked={
                                                check.notifyFrequency === "G5"
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
                                            onChange={(e) => handleChange(e)}
                                            checked={
                                                check.notifyFrequency === "G4"
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
                                            onChange={(e) => handleChange(e)}
                                            checked={
                                                check.notifyFrequency === "G3"
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
                                {/* <Button className="secondary">Clear</Button> */}
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
    );
}

export default Filter;
