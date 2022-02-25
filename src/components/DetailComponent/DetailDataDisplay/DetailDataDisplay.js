// import React from "react";
import React, { useState } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./DetailDataDisplay.scss";

function DetailDataDisplay(props) {
  const [learnMore, setLearnMore] = useState(false);
  const extraContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum";
  const linkName = learnMore ? "Learn Less" : "Learn More";
  const pic =
    "https://3rvxro1qhiaouxf3h3et9bah-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/33709comox09Stellar.jpg";

  const test = [pic, pic, pic, pic, pic];
  const picArray = [];
  for (let i = 0; i < 4; i++) {
    if (i < test.length) {
      let pic = test[i];
      picArray.push(<img className="galleryPic" src={pic} key={i} />);
    }
  }
  let overlay = <span className="greyBoxNone">+{test.length - 4}</span>;

  if (test.length > 4) {
    overlay = <span className="greyBoxShow">+{test.length - 4}</span>;
  }

  return (
    <div className="birdProfileWrapper">
      <img className="postImage" src={props.birdPic} />

      <div className="profileContainer">
        <div className="infoWrapper">
          <div className="titleBlock">
            <div className="nameBlock">
              <span className="commonName">Steller's Jay</span>
              <span className="scifcName">Cyanocitta stelleri</span>
            </div>
            <Button className="musical-light-red"></Button>
          </div>

          <span className="status">Low conservation concern</span>

          <span className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum
            quam vel lobortis molestie. Praesent metus ipsum, blandit
            acscelerisque a, vehicula eget sapien. Phasellus quis sem
            bibendumpretium mauris quis, varius sapien. Mauris sit amet nisi.
            {learnMore && extraContent}
            <a
              className="learn-more-link"
              onClick={() => {
                setLearnMore(!learnMore);
              }}
            >
              {linkName}
            </a>
          </span>
        </div>

        <div className="galleryWrapper">
          <span className="galleryTitle">Gallery</span>
          <div className="galleryContainer">
            {picArray}
            {overlay}
          </div>
        </div>
      </div>

      <div className="footerWrapper">
        <span>Are you spotting this bird?</span>
        <Button className="primary">Collect</Button>
      </div>
    </div>
  );
}

export default DetailDataDisplay;
