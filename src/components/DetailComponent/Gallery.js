import React from 'react'
import "./Gallery.scss";
import Button from "../shared/ButtonComponent/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


function Gallery(props) {
    if(!props.showGallery){
        return null
    }
    

    


    return (
        <div>
            <div className="blackBackground"></div>
            <div className="wrapper">
                <div className="galleryHeader">
                    <Button className="left-btn"></Button>
                    <div className="imgCount">1/{props.gallery.length}</div>
                    <Button className="right-btn"></Button>
                    <Button className="White-exit" onClick={props.onClose}></Button>
                </div>
                    <div className="BigImage">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    />
                    {props.gallery.map(src =>  (
                        <SwiperSlide key={src._id}>
                            <img className="galleryPhoto" src={src.imageLink}/>
                        </SwiperSlide>
                    ))}
                    
                    </div>

            </div>

        </div>

    )
}

export default Gallery
