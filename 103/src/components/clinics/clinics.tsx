import React from 'react';
import './clinic.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Mousewheel } from 'swiper';

// import styled from 'styled-components';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Mousewheel]);

interface clinicsProps {
  whatIsIt: string;
  thisName: string;
  thisAddress: string;
  thisPhone: string;
  thisDescription: string;
}

export default function Clinic({
  whatIsIt,
  thisName,
  thisAddress,
  thisPhone,
  thisDescription,
}: clinicsProps) {
  return (
    <div className="clinic-container">
      <div className="place-list">
        <div className="clinic-wrapper">
          <p className="clinic-what-is-it">{whatIsIt}</p>
          <div className="clinic-info-wrapper">
            <div className="clinic-info">
              <div className="clinic-name-div">
                <p className="clinic-name">{thisName}</p>
              </div>
              <div className="other-info-div">
                <span className="this-address">{thisAddress}</span>
                <span className="this-time">
                  <span className="work-marker"></span>
                  Выходной
                </span>
              </div>
            </div>
          </div>
          <div className="slider">
            <Swiper spaceBetween={0} slidesPerView={3} navigation loop={false}>
              <SwiperSlide>
                <a href={'https://sante.103.by/'} className="slide">
                  <img
                    src={
                      'https://ms1.103.by/images/77452d325e6df5d19b75e634cde0f9f6/thumb/point=middle-center,w=182,h=182,q=80/place_gallery_photo/69/5d/3c/695d3c045be026589639fa64f24350fc.jpg'
                    }
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href={'https://sante.103.by/'} className="slide">
                  <img
                    src={
                      'https://ms1.103.by/images/77452d325e6df5d19b75e634cde0f9f6/thumb/point=middle-center,w=182,h=182,q=80/place_gallery_photo/7c/cf/60/7ccf60af0f8bbca8ff48539dad075cce.jpg'
                    }
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href={'https://sante.103.by/'} className="slide">
                  <img
                    src={
                      'https://ms1.103.by/images/77452d325e6df5d19b75e634cde0f9f6/thumb/point=middle-center,w=182,h=182,q=80/place_gallery_photo/a7/98/20/a79820c66dee5030f8a13f8a852d0b49.jpg'
                    }
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href={'https://sante.103.by/'} className="slide">
                  <img
                    src={
                      'https://ms1.103.by/images/77452d325e6df5d19b75e634cde0f9f6/thumb/point=middle-center,w=182,h=182,q=80/place_gallery_photo/d9/8c/e8/d98ce835d7ced3a3b19a016ca25c43a2.jpg'
                    }
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href={'https://sante.103.by/'} className="slide">
                  <img
                    src={
                      'https://ms1.103.by/images/77452d325e6df5d19b75e634cde0f9f6/thumb/point=middle-center,w=182,h=182,q=80/place_gallery_photo/84/2f/b2/842fb2cc444fbca9b94bae14a07480ac.jpg'
                    }
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href={'https://sante.103.by/'} className="slide">
                  <img
                    src={
                      'https://ms1.103.by/images/77452d325e6df5d19b75e634cde0f9f6/thumb/point=middle-center,w=182,h=182,q=80/place_gallery_photo/41/13/a9/4113a9c7b595725bcb1779af6b6a4a83.jpg'
                    }
                    alt=""
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="description-p">{thisDescription}</p>
          <div className="connection-div">{thisPhone}</div>
        </div>
      </div>
    </div>
  );
}
