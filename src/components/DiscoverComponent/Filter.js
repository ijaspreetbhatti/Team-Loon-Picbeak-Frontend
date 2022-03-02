import React, { useCallback, useRef, useEffect } from "react";
import Button from "../shared/ButtonComponent/Button";
import "./Filter.scss";

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
                            <fieldset>
                                <legend>By conservation status</legend>
                                <label>
                                    Low conservation concern
                                    <input
                                        type="radio"
                                        value="low"
                                        name="status"
                                    />
                                </label>
                                <label>
                                    Moderate conservation concern
                                    <input
                                        type="radio"
                                        value="moderate"
                                        name="status"
                                    />
                                </label>
                                <label>
                                    High conservation concern
                                    <input
                                        type="radio"
                                        value="high"
                                        name="status"
                                    />
                                </label>
                            </fieldset>

                            <fieldset>
                                <legend>By size</legend>
                                <label>
                                    Small
                                    <input
                                        type="radio"
                                        value="small"
                                        name="size"
                                    />
                                </label>
                                <label>
                                    Medium
                                    <input
                                        type="radio"
                                        value="medium"
                                        name="size"
                                    />
                                </label>
                                <label>
                                    Large
                                    <input
                                        type="radio"
                                        value="large"
                                        name="size"
                                    />
                                </label>
                            </fieldset>
                            <Button className="secondary">Clear</Button>
                            <Button className="primary">Apply</Button>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Filter;
