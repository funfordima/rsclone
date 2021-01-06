import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
  const slides = Array.from({ length: 4 }).map(
    (_, index) => `Slide ${index + 1}`,
  );

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {slides.map((element, index) => {
        return <SwiperSlide key={index}>{element}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Slider;
