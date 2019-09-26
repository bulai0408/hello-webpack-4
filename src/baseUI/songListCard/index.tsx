import React, { FC } from 'react';

import { formatCount } from '@utils';
import { CardItem } from './style';
import { IRecommendItem } from '@types';

const SongListCard: FC<IRecommendItem> = ({ name, picUrl, playCount }) => {
  return (
    <CardItem>
      <div className='recommend_listener'>
        <i className='iconfont play'>&#xe885;</i>
        {formatCount(playCount)}
      </div>
      <img src={picUrl} className='recommend_img' alt='歌单' />
      <div className='recommend_text'>{name}</div>
    </CardItem>
  );
};

export default SongListCard;
