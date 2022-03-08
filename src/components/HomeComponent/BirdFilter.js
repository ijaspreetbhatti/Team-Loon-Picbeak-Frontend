import React, { useState } from "react";
import Select from "react-select";
import "./BirdFilter.scss";
import cities from "./cities.json";
import { useNavigate } from "react-router-dom";

const options = cities
    .filter((city) => city.province_id === "BC")
    .map((city) => ({ value: city.id, label: city.city }));
console.log(options);

function BirdFilter() {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const onClick = (e) => {
        if (selectedOption) {
            console.log(
                cities.find((city) => city.id === selectedOption.value)
            );
            localStorage.setItem(
                "location",
                JSON.stringify(
                    cities.find((city) => city.id === selectedOption.value)
                )
            );
            navigate("match");
        }
    };
    return (
        <div className="bird-filter" id="BirdFilter">
            <h2>Where do you see the bird?</h2>
            <div className="searchInputWrapper">
                {/* <input
                    type="text"
                    id="searchInput"
                    placeholder="enter location"
                    onKeyPress={onKeyPress}
                /> */}
                <Select
                    id="searchInput"
                    isSearchable={true}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Enter location"
                />
                <button onClick={onClick}>
                    <img src="assets/icons/search.svg" alt="search" />
                </button>
            </div>
        </div>
    );
}

export default BirdFilter;
