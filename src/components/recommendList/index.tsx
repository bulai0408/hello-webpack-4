import React, { FC } from 'react';

import { IRecommendItem } from '@types';
import { RecommendTitle, RecommendContent, ScrollBackgroundModal } from './style';

import SongListCard from '@baseUI/songListCard';

interface IProps {
  recommendList: IRecommendItem[];
}

const RecommendList: FC<IProps> = ({ recommendList }) => {
  return (
    <div>
      <ScrollBackgroundModal />
      <RecommendTitle>推荐歌单</RecommendTitle>
      <RecommendContent>
        {recommendList.map(i => (
          <SongListCard key={i.picUrl} {...i} />
        ))}
      </RecommendContent>
    </div>
  );
};

export default RecommendList;
