import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import arrow from "assets/images/icons/arrow.svg";
import "assets/styles/swiper.scss";

import { sliderItems } from "data/sliderItems";

import styles from "./index.module.scss";

export const ImagesSwiper = () => {
   const slider = useRef(null);

   const settings = {
      infinite: true,
      slidesToShow: 3,
      arrows: false,
      speed: 350,
      centerMode: true,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   };

   return (
      <>
         <Slider ref={slider} {...settings}>
            {sliderItems.map(({ id, photo }) => (
               <div className={styles.swiperSlide} key={id}>
                  <img
                     className={styles.swiperImg}
                     src={photo}
                     alt="swiper image"
                  />
               </div>
            ))}
         </Slider>
         <div
            className={"custom-swiper-button-prev"}
            onClick={() => slider?.current?.slickPrev()}
         >
            <img src={arrow} alt="arrow" />
         </div>
         <div
            className={"custom-swiper-button-next"}
            onClick={() => slider?.current?.slickNext()}
         >
            <img src={arrow} alt="arrow" />
         </div>
      </>
   );
};
