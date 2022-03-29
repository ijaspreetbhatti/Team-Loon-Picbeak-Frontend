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
            navigate("matchview");
        }
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#03a142" : "none",
        }),
        control: (provided, state) => ({
            ...provided,
            borderRadius: "64px",
            height: "100%",
            backgroundColor: "#F5F5F5",
            padding: "6px",
            border:
                state.isSelected || state.isFocused
                    ? "#03a142 1px solid"
                    : "transparent 1px solid",
            boxShadow:
                state.isSelected || state.isFocused
                    ? "0 0 0 1px #03a142"
                    : "none",
            "&:hover": {
                border:
                    state.isSelected || state.isFocused
                        ? "#03a142 1px solid"
                        : "transparent 1px solid",
            },
        }),
        singleValue: (provided, state) => ({ ...provided }),
        container: (provided, state) => ({
            ...provided,
        }),
    };
    return (
        <>
            <span id="BirdFilter"></span>
            <div className="bird-filter" id="Bird-Filter">
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
                        styles={customStyles}
                        isSearchable={true}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Enter location"
                    />
                    <button onClick={onClick} className="primary">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}

export default BirdFilter;
