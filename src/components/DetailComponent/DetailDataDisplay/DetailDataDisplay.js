import React from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./DetailDataDisplay.scss";

function DetailDataDisplay(props) {
  return (
    <div className="birdProfileWrapper">
      <img className="postImage" src={props.birdPic} />

      <div className="profileContainer">
        <div className="infoWrapper">
          <div className="titleBlock">
            <div className="nameBlock">
              <span className="commonName">common name</span>
              <span className="scientifcName">Scientifc name</span>
            </div>
            <button className="sound">🎵</button>
          </div>

          <span className="status">conservation status</span>

          <span className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum
            quam vel lobortis molestie. Praesent metus ipsum, blandit ac
            scelerisque a, vehicula eget sapien. Phasellus quis sem bibendum,
            pretium mauris quis, varius sapien. Mauris sit amet nisi sit amet
          </span>
        </div>

        <div className="galleryWrapper">gallery</div>
      </div>

      <div className="footerWrapper">
        <span>Are you spotting this bird?</span>
        <Button className="primary">Collect</Button>
      </div>
    </div>
  );
}

export default DetailDataDisplay;
