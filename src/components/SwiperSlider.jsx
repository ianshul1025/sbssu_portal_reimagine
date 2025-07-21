import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SwiperSlider.css';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

// ✅ Import your images
import img1 from '../assets/sliderimage1.jpg';
import img2 from '../assets/sliderimage2.jpg';
import img3 from '../assets/sliderimage3.jpg';
import img4 from '../assets/sliderimage4.jpg';

export default function SwiperSlider() {
  return (
    <div className="swiper-container-wrapper">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Slide 1" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slide 4" className="slide-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
