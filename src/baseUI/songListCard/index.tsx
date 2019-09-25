import React, { FC } from 'react';

import { formatCount } from '@utils';
import { CardItem } from './style';

interface IProps {
  name: string;
  picUrl: string;
  playCount: number;
}

const SongListCard: FC<IProps> = ({ name, picUrl, playCount }) => {
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
