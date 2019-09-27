import React, { FC } from 'react';
import LazyLoad from 'react-lazyload';

import { formatCount } from '@utils';
import { CardItem } from './style';
import { IRecommendItem } from '@types';

const SongListCard: FC<IRecommendItem> = ({ name, picUrl, playCount }) => {
  return (
    <CardItem>
      <div className='recommend_wrapper'>
        <div className='decorate' />
        <LazyLoad
          placeholder={
            <img
              width='100%'
              height='100%'
              src={require('@assets/image/music_cover.jpg')}
              alt='music'
            />
          }
        >
          <img
            src={`${picUrl}?param=300x300`}
            width='100%'
            height='100%'
            className='recommend_img'
            alt='歌单'
          />
        </LazyLoad>
        <div className='recommend_listener'>
          <i className='iconfont play'>&#xe885;</i>
          {formatCount(playCount)}
        </div>
      </div>
      <div className='recommend_text'>{name}</div>
    </CardItem>
  );
};

export default SongListCard;
