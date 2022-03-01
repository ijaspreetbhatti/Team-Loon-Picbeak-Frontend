import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import "./Discover.scss";

const Discover = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <div className="discover">
            <h3>Discover bird species</h3>
            <p>
                Explore birds species and start your own birdwatching session,
                no matter where you are.
            </p>
            <SearchInput openModal={openModal} />
            <Filter showModal={showModal} openModal={openModal} />
        </div>
    );
};

export default Discover;

// function App() {
//     const [showModal, setShowModal] = useState(false);

//     const openModal = () => {
//       setShowModal((prev) => !prev);
//     };

//     return (
//       <>
//         <Container>
//           <Button onClick={openModal}>I'm a modal</Button>
//           <Modal showModal={showModal} setShowModal={setShowModal} />
//           <GlobalStyle />
//         </Container>
//       </>
//     );
//   }
