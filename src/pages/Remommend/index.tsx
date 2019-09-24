import React, { memo } from 'react';

import Swiper from '@components/swiper';
import { SwiperContainer } from './style';

const Recommend = memo(() => {
  // mock数据
  const bannerList = [1, 2].map(item => {
    return { imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg' };
  });
  return (
    <div>
      <SwiperContainer>
        <Swiper bannerList={bannerList} />
      </SwiperContainer>
    </div>
  );
});

export default Recommend;
