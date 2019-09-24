import React, { FC, useState, useEffect } from 'react';
import Swiper from 'swiper';

import { SliderContainer } from './style';

interface IProps {
  bannerList: Array<{ imageUrl: string }>;
}

const Slider: FC<IProps> = ({ bannerList }) => {
  return null;
  // const [sliderSwiper, setSliderSwiper] = useState(null);

  // useEffect(() => {
  //   if (bannerList.length && !sliderSwiper) {
  //     const sliderSwiper = new Swiper('.swiper-container', {
  //       loop: true,
  //       autoplay: true,
  //       pagination: { el: '.swiper-pagination' }
  //     });
  //     setSliderSwiper(sliderSwiper);
  //   }
  // }, [bannerList.length, sliderSwiper]);

  // return (
  //   <SliderContainer>
  //     <div className='slider_container'>
  //       <div className='swiper-wrapper'>
  //         {bannerList.map((i, index) => (
  //           <div className='swiper-slid' key={i.imageUrl + index}>
  //             <div className='slider-nav'>
  //               <img src={i.imageUrl} width='100%' height='100%' alt='推荐' />
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className='swiper-pagination' />
  //     </div>
  //   </SliderContainer>
  // );
};

export default Slider;
