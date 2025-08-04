import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

import img1 from '../assets/sliderimage1.jpg';
import img2 from '../assets/sliderimage2.jpg';
import img3 from '../assets/sliderimage3.jpg';
import img4 from '../assets/sliderimage4.jpg';

export default function SwiperSlider() {
  return (
    <div className="pt-24 mx-4 my-6 md:mx-10 md:my-8 lg:mx-10 lg:my-7 rounded-3xl overflow-hidden ">
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
        className="rounded-3xl"
      >
        {[img1, img2, img3, img4].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[81vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
