import React, { useCallback, useRef, useEffect } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./Filter.scss";
import provinces from "./provinces.json";

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

    const path =
        "https://pic-beak-backend.herokuapp.com/api/v1/birds/?page=0&recordsPerPage=25&subnation=BC&gRank=G1&searchKeyword=Hawk";

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
                                    <legend>By Province/Territory</legend>
                                    {provinces.map((province) => {
                                        return (
                                            <div
                                                className="option"
                                                key={province.value}
                                            >
                                                <input
                                                    className="visually-hidden"
                                                    type="radio"
                                                    value={province.value}
                                                    name="province"
                                                    id={province.value}
                                                />
                                                <label htmlFor="{province.value}">
                                                    {province.value}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </fieldset>
                            </div>
                            <div className="btn-container">
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
