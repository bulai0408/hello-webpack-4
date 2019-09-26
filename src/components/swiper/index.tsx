import React, { FC, useState, useEffect } from 'react';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper/dist/js/swiper.js';

import { SliderContainer } from './style';
import { IBannerItem } from '@types';

interface IProps {
  bannerList: IBannerItem[];
}

const Slider: FC<IProps> = ({ bannerList }) => {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  console.log(bannerList);
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        speed: 500,
        pagination: {
          el: '.swiper-pagination'
        }
      });
      setSliderSwiper(mySwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {bannerList.map(i => (
            <div className='swiper-slide' key={`${i.pic}`}>
              <img src={i.pic} width='100%' height='100%' alt='推荐' />
            </div>
          ))}
        </div>
        <div className='swiper-pagination' />
      </div>
    </SliderContainer>
  );
};

export default Slider;
