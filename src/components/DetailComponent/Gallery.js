import React from 'react'
import "./Gallery.scss";
import Button from "../shared/ButtonComponent/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


function Gallery(props) {
    if(!props.showGallery){
        return null
    }
    
    
    return (
        <div>
            <div className="wrapper blackBackground">
                    <Button className="White-exit" onClick={props.onClose}></Button>
                    <div className="BigImage">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        navigation={true}
                        pagination={{ type:'fraction' }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                    {props.gallery.map(src => (
                        <SwiperSlide key={src._id}>
                            <img className="galleryPhoto" src={src.imageLink} alt={src._id}/>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    
                    </div>

            </div>

        </div>

    )
}

export default Gallery