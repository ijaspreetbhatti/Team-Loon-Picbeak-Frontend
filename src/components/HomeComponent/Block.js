import "./HomeScss/Block.scss";
import Img1 from "./HomeImg/block1.png";
import Img2 from "./HomeImg/block2.png";
import Img3 from "./HomeImg/block3.png";

function Block(props) {
    return (
        <div className="blockParent">
            <div className="block">
                <img src={Img1} alt="bird holding a mop in its beak" />
                <h3>Nature's pest control</h3>
                <p>
                    Grosbeaks becomes superheros during agricultural pest
                    outbreaks, providing biological control worth $1,820 per
                    square kilometre.
                </p>
            </div>

            <div className="block">
                <img src={Img2} alt="bird eating a warm" />
                <h3>Winged clean-up crew</h3>
                <p>
                    Vultures may look foreboding, but their speed to pick at the
                    remains of other animals avoid deadly diseases to developed
                    and spread.
                </p>
            </div>

            <div className="block">
                <img src={Img3} alt="bird wearing cape" />
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
