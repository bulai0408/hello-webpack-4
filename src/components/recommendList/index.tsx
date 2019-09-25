import React, { FC } from 'react';

import { IRecommendRecord } from '@types';
import { RecommendTitle, RecommentContent } from './style';
import { formatCount } from '@utils';

interface IProps {
  recommendList: IRecommendRecord[];
}

const RecommendList: FC<IProps> = ({ recommendList }) => {
  return (
    <div>
      <RecommendTitle>推荐歌单</RecommendTitle>
      <RecommentContent>
        {recommendList.map((i, index) => (
          <div className='recommend_item' key={i.name + index}>
            <div className='recommend_listener'>
              <i className='iconfont play'>&#xe885;</i>
              {formatCount(i.playCount)}
            </div>
            <img src={i.picUrl} className='recommend_img' alt='歌单' />
            <div className='recommend_text'>{i.name}</div>
          </div>
        ))}
      </RecommentContent>
    </div>
  );
};

export default RecommendList;
