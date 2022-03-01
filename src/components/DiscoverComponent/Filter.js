import React from "react";
import Button from "../shared/ButtonComponent/Button";
import "./Filter.scss";

function Filter({ showModal, openModal }) {
    return (
        <div className="Filter">
            {showModal ? (
                <div className="background">
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

//     return <div className="Filter">{showModal ? shown : null}</div>;
// }

// const shown = (
//     <div className="background">
//         <div className="modalWrapper">
//             <div className="titleWrapper">
//                 <p>Filters</p>
//                 <div className="closeIcon"></div>
//             </div>
//             <form>
//                 <fieldset>
//                     <legend>By conservation status</legend>
//                     <label>
//                         Low conservation concern
//                         <input type="radio" value="low" name="status" />
//                     </label>
//                     <label>
//                         Moderate conservation concern
//                         <input type="radio" value="moderate" name="status" />
//                     </label>
//                     <label>
//                         High conservation concern
//                         <input type="radio" value="high" name="status" />
//                     </label>
//                 </fieldset>

//                 <fieldset>
//                     <legend>By size</legend>
//                     <label>
//                         Small
//                         <input type="radio" value="small" name="size" />
//                     </label>
//                     <label>
//                         Medium
//                         <input type="radio" value="medium" name="size" />
//                     </label>
//                     <label>
//                         Large
//                         <input type="radio" value="large" name="size" />
//                     </label>
//                 </fieldset>
//                 <Button className="secondary">Clear</Button>
//                 <Button className="primary">Apply</Button>
//             </form>
//         </div>
//     </div>
// );

export default Filter;
