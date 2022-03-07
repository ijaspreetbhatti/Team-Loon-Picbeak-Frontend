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
                                <div className="option">
                                    <input
                                        className="visually-hidden"
                                        id="low"
                                        type="radio"
                                        value="low"
                                        name="status"
                                    />
                                    <label for="low">
                                        Low conservation concern
                                    </label>
                                </div>
                                <div className="option">
                                    <input
                                        className="visually-hidden"
                                        id="moderate"
                                        type="radio"
                                        value="moderate"
                                        name="status"
                                    />
                                    <label for="moderate">
                                        Moderate conservation concern
                                    </label>
                                </div>
                                <div className="option">
                                    <input
                                        className="visually-hidden"
                                        id="high"
                                        type="radio"
                                        value="high"
                                        name="status"
                                    />
                                    <label for="high">
                                        High conservation concern
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>By size</legend>
                                <div className="option">
                                    <input
                                        className="visually-hidden"
                                        id="small"
                                        type="radio"
                                        value="small"
                                        name="size"
                                    />
                                    <label for="small">Small</label>
                                </div>
                                <div className="option">
                                    <input
                                        className="visually-hidden"
                                        id="medium"
                                        type="radio"
                                        value="medium"
                                        name="size"
                                    />
                                    <label for="medium">Medium</label>
                                </div>
                                <div className="option">
                                    <input
                                        className="visually-hidden"
                                        id="large"
                                        type="radio"
                                        value="large"
                                        name="size"
                                    />
                                    <label for="large">Large</label>
                                </div>
                            </fieldset>
                            <div class="btn-container">
                                <Button className="secondary">Clear</Button>
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
