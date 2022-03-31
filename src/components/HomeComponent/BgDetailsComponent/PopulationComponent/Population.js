import React from "react";
import "./Population.scss";
import SpeciesChart from "../../SpeciesChart";

function Population() {
    return (
        <div className="birdPopulation">
            <div className="description">
                <h2>
                    Monitoring the decline of birds population for conservation
                    action
                </h2>
                <p>
                    Tracking Canada's birds helps to identify the impacts of
                    environmental changes and provide guidance to set priorities
                    for the recovery of at-risk species.
                </p>
            </div>
            <SpeciesChart />
        </div>
    );
}

export default Population;
