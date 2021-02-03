import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { LinkSlider } from '../../types';

import styled from 'styled-components';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const SwiperWrapper = styled.div`
  margin: 15px auto;
  max-width: 1218px;
  font-family: Verdana, sans-serif;

  .swiper-container {
    border-radius: 4px;
  }

  .swiper-slide {
    height: 420px;
    background: skyblue;
  }

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    color: #fff;
    text-decoration: none;
  }

  .TopJournalGallery__label,
  .TopJournalGallery__title {
    margin: 0 0 0 180px;
    width: 560px;
    text-align: start;
  }

  .TopJournalGallery__label {
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
  }

  .TopJournalGallery__title {
    font-size: 36px;
    font-weight: 500;
    line-height: 44px;
  }

  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 8px;
  }

  .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    border: 1px solid #fff;
    background: none;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s ease-in;

    &::after {
      font-size: 15px;
      color: #000;
    }

    &:hover {
      background-color: #f2f2f2;
    }
  }

  .swiper-button-prev {
    left: 48px;
  }

  .swiper-button-next {
    right: 48px;
  }

  @media (max-width: 959px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    .TopJournalGallery__label,
    .TopJournalGallery__title {
      width: 60%;
      max-width: 60%;
      margin: 0 5%;
    }
  }

  @media (max-width: 767px) {
    .swiper-slide {
      height: 300px;
    }

    .TopJournalGallery__title {
      font-size: 17px;
      line-height: 24px;
      max-height: 96px;
    }
  }

  @media (max-width: 479px) {
    .swiper-slide {
      height: 200px;
    }
  }
`;

interface IArticleType {
  data: LinkSlider[];
}

const Slider: React.FC<IArticleType> = ({ data }) => (
    <SwiperWrapper>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {data.map(({ srcImg, title }, index) => {
          const backgroundImage = {
            backgroundImage: `url(${srcImg})`,
          };

          return (
            <SwiperSlide key={index}>
              <a href="/" className="slide" style={backgroundImage}>
                <h3 className="TopJournalGallery__title">{title}</h3>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
);

export default Slider;
