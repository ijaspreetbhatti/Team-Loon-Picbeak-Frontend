import React from "react";
import Button from "../shared/ButtonComponent/Button";

function Filter() {
    return (
        <div>
            <p>Filters</p>
            <form>
                <fieldset>
                    <legend>By conservation status</legend>
                    <label>
                        Low conservation concern
                        <input type="radio" value="low" name="status" />
                    </label>
                    <label>
                        Moderate conservation concern
                        <input type="radio" value="moderate" name="status" />
                    </label>
                    <label>
                        High conservation concern
                        <input type="radio" value="high" name="status" />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>By size</legend>
                    <label>
                        Small
                        <input type="radio" value="small" name="size" />
                    </label>
                    <label>
                        Medium
                        <input type="radio" value="medium" name="size" />
                    </label>
                    <label>
                        Large
                        <input type="radio" value="large" name="size" />
                    </label>
                </fieldset>
                <Button className="secondary">Clear</Button>
                <Button className="primary">Apply</Button>
            </form>
        </div>
    );
}

export default Filter;
