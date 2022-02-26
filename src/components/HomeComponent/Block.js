import React from "react";
import "./Block.scss";

function Block(props) {
    return (
        <div className="blockParent">
            <div className="block">
                <img src="https://via.placeholder.com/200" alt="magpie" />
                <h3>Nature's pest control</h3>
                <p>
                    Grosbeaks becomes superheros during agricultural pest
                    outbreaks, providing biological control worth $1,820 per
                    square kilometre.
                </p>
            </div>

            <div className="block">
                <img src="https://via.placeholder.com/200" alt="magpie" />
                <h3>Winged clean-up crew</h3>
                <p>
                    Vultures may look foreboding, but their speed to pick at the
                    remains of other animals avoid deadly diseases to developed
                    and spread.
                </p>
            </div>

            <div className="block">
                <img src="https://via.placeholder.com/200" alt="magpie" />
                <h3>Coral reefs saviour</h3>
                <p>
                    Seabirds feed out in the ocean and later, cycle nutrients
                    and fertilise marine ecosystems by just spreading droppings
                    at their colonies.
                </p>
            </div>
        </div>
    );
}

export default Block;
