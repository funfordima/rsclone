import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.css';
import './clinicSlider.css';

SwiperCore.use([Navigation, Mousewheel]);

interface clinicItemProps {
  thisPictures: Array<string> | null;
}

export default function ClinicSlider({ thisPictures }: clinicItemProps) {
  if (!Array.isArray(thisPictures)) {
    return null;
  }
  return (
    <div className="slider">
      <Swiper spaceBetween={0} slidesPerView={3} navigation loop={false}>
        {thisPictures.filter((item, index) => index > 0).map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slide">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
