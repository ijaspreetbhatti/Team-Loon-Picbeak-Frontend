// import React from "react";
import React, { useState } from "react";
import Button from "../../shared/ButtonComponent/Button";
import "./DetailDataDisplay.scss";

function DetailDataDisplay(props) {
 

  // const dataPic = [];
  // for(let i = 0; i < birdData.length; i++){
  //   if(birdData){
  //     let pic = birdData[i].gallery;
  //     for(let z = 0; z < pic.length; z++){
  //       let gallery = pic[z].collectedBirdImage;
  //       dataPic.push(<img className="galleryPic" src={pic} key={i} />);

  //     }
  //   }

  // }


  // const picArray = [];
  // for (let i = 0; i < 4; i++) {
  //   if (i < dataPic.length) {
  //     let pic = dataPic[i];
  //     picArray.push(<img className="galleryPic" src={pic} key={i} />);
  //   }
  // }
  // let overlay = <span className="greyBoxNone">+{dataPic.length - 4}</span>;

  // if (dataPic.length > 4) {
  //   overlay = <span className="greyBoxShow">+{dataPic.length - 4}</span>;
  // }

  const [learnMore, setLearnMore] = useState(false);
  const extraContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum";
  const linkName = learnMore ? "Learn Less" : "Learn More";
  

  function collectBird(){
    if(true){

    }
  }

  return (
    <div className="birdProfileWrapper">
      <img className="postImage" src={props.birdPic} />

      <div className="profileContainer" >
        <div className="infoWrapper">
          <div className="titleBlock">
            <div className="nameBlock">
              <span className="commonName">{props.commonName}Steller's Jay</span>
              <span className="scifcName">{props.sciName}Cyanocitta stelleri</span>
            </div>
            <Button className="musical-light-red"></Button>
          </div>

          <span className="status">{props.conservation}Low conservation concern</span>

          <span className="content">
            {props.content}
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
            {props.gallery}
            {/* {overlay} */}
          </div>
        </div>
      </div>

      <div className="footerWrapper">
        <span>Are you spotting this bird?</span>
        <Button className="primary" onClick={collectBird}>Collect</Button>
      </div>
    </div>
  );
}

export default DetailDataDisplay;
